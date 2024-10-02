/*import axios from "axios";
import multer from "multer";
import FormData from "form-data";
import { NextResponse } from "next/server";

// Setup multer for file handling
const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false, // Disable body parser to handle file uploads
  },
};

// Create an Axios instance for Smartsheet API
const API_BASE_URL = "https://api.smartsheet.com/2.0";
const smartsheet = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.SMARTSHEET_API_TOKEN}`,
  },
});

// Define the POST method
export async function POST(req) {
  return new Promise((resolve, reject) => {
    upload.single("file")(req, {}, async (err) => {
      if (err) {
        console.error("Error parsing file:", err);
        return resolve(
          NextResponse.json({ error: "Error parsing file" }, { status: 400 })
        );
      }

      const formData = req.body;
      const file = req.file;
      const sheetId = process.env.SMARTSHEET_SHEET_ID;

      // Debug the form data
      console.log("Parsed Form Data:", formData);

      const columnMapping = {
        UserName: "First and Last Name",
        State: "State",
        Email: "Email Address",
        Description: "Description",
        Grant: "Type of Grant",
        PRaward: "PR Award #",
      };

      try {
        // Extract column IDs dynamically
        const columnIdsPromises = Object.entries(columnMapping).map(
          async ([fieldName, columnTitle]) => {
            const response = await smartsheet.get(
              `/sheets/${sheetId}/columns?title=${encodeURIComponent(
                columnTitle
              )}`
            );
            const columns = response.data.data;
            const column = columns.find(
              (column) => column.title === columnTitle
            );
            console.log(`Column ID for ${columnTitle}: ${column.id}`);
            return { columnId: column.id, value: formData[fieldName] || "" };
          }
        );
        const columnIds = await Promise.all(columnIdsPromises);

        // Debug the payload
        console.log("Payload:", columnIds);

        const response = await smartsheet.post(`/sheets/${sheetId}/rows`, {
          toTop: true,
          cells: columnIds,
        });

        const newRowId = response.data.result.id;

        if (file) {
          // Prepare file upload
          const formDataWithFile = new FormData();
          formDataWithFile.append("file", file.buffer, file.originalname);

          // Upload file to Smartsheet
          const fileResponse = await axios.post(
            `${API_BASE_URL}/sheets/${sheetId}/rows/${newRowId}/attachments`,
            formDataWithFile,
            {
              headers: {
                ...formDataWithFile.getHeaders(),
                Authorization: `Bearer ${process.env.SMARTSHEET_API_TOKEN}`,
              },
            }
          );

          return resolve(NextResponse.json(fileResponse.data));
        } else {
          return resolve(NextResponse.json(response.data));
        }
      } catch (error) {
        console.error("Error submitting form data to Smartsheet:", error);
        return resolve(
          NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
        );
      }
    });
  });
}
*/

// src/app/api/submitFormData/route.js
import axios from "axios";
import { NextResponse } from "next/server";
import FormData from "form-data";
import { Readable } from "stream";

const API_BASE_URL = "https://api.smartsheet.com/2.0";
const smartsheet = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.SMARTSHEET_API_TOKEN}`,
  },
});

export async function POST(request) {
  try {
    // Parse form data
    const formData = await request.formData();
    const file = formData.get("file");
    const otherFields = {
      UserName: formData.get("UserName"),
      State: formData.get("State"),
      Email: formData.get("Email"),
      Description: formData.get("Description"),
      Grant: formData.get("Grant"),
      PRaward: formData.get("PRaward"),
    };

    const sheetId = process.env.SMARTSHEET_SHEET_ID;

    // Mapping between form fields and Smartsheet column titles
    const columnMapping = {
      UserName: "First and Last Name",
      State: "State",
      Email: "Email Address",
      Description: "Description",
      Grant: "Type of Grant",
      PRaward: "PR Award #",
    };

    // Extract column IDs dynamically based on column titles
    const columnIdsPromises = Object.entries(columnMapping).map(
      async ([fieldName, columnTitle]) => {
        const response = await smartsheet.get(
          `/sheets/${sheetId}/columns?title=${encodeURIComponent(columnTitle)}`
        );
        const columns = response.data.data;
        const column = columns.find((column) => column.title === columnTitle);
        return { columnId: column.id, value: otherFields[fieldName] };
      }
    );
    const columnIds = await Promise.all(columnIdsPromises);

    const response = await smartsheet.post(`/sheets/${sheetId}/rows`, {
      toTop: true,
      cells: columnIds,
    });

    const newRowId = response.data.result.id;

    if (file) {
      // Create a FormData object to send the file
      const formDataWithFile = new FormData();
      formDataWithFile.append("file", Readable.from(file.stream()), file.name);

      // Set the headers manually
      const headers = {
        "Content-Type": "application/octet-stream",
        Authorization: `Bearer ${process.env.SMARTSHEET_API_TOKEN}`,
      };

      // Upload the file and get the attachment ID
      const fileResponse = await axios.post(
        `${API_BASE_URL}/sheets/${sheetId}/rows/${newRowId}/attachments`,
        formDataWithFile,
        { headers: { ...headers, ...formDataWithFile.getHeaders() } }
      );

      return NextResponse.json(fileResponse.data, { status: 200 });
    } else {
      return NextResponse.json(response.data, { status: 200 });
    }
  } catch (error) {
    console.error("Error submitting form data to Smartsheet:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
