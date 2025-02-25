"use client";

import { useState, useEffect } from "react";
import Hero from "../components/ui/Hero";
import { BiFontColor } from "react-icons/bi";

// Define types for form data and options
interface FormData {
  UserName: string;
  State: string;
  Email: string;
  Description: string;
  Grant: string;
  PRaward: string;
  file: File | null;
}

interface Option {
  value: string;
}

export default function Support() {
  const [formData, setFormData] = useState<FormData>({
    UserName: "",
    State: "",
    Email: "",
    Description: "",
    Grant: "",
    PRaward: "",
    file: null,
  });

  const [dropdownOptions, setDropdownOptions] = useState<string[]>([]);
  const [grantOptions, setGrantOptions] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch dropdown and grant options from Smartsheet when the component mounts
    fetch("/api/getDropdownOptions")
      .then((response) => response.json())
      .then((data) => {
        const dropdownValues = data.dropdownOptions.map(
          (option: Option) => option.value
        );
        const grantValues = data.grantOptions.map(
          (option: Option) => option.value
        );

        setDropdownOptions(dropdownValues);
        setGrantOptions(grantValues);
      })
      .catch((error) => console.error("Error fetching options:", error));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Clear the corresponding error when the user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: e.target.files ? e.target.files[0] : null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (const [key, value] of Object.entries(formData)) {
        if (key !== "file") {
          formDataToSend.append(key, value);
        }
      }
      if (formData.file) {
        formDataToSend.append("file", formData.file);
      }

      const response = await fetch("/api/submitFormData", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setIsLoading(true);

        console.log("Form data submitted successfully:", await response.json());
        alert("Form Submitted Successfully!");
      } else {
        console.error("Error submitting form data:", response.statusText);
        alert("Unsuccessful Form Submission");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <>
      <Hero type="Secondary" title="Support" />

      <div className="max-w-4xl mx-auto p-20">
        <div className="container max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Technical Assistance Request Form
          </h1>
          <div className="bg-white p-8 shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-900 mb-2 required ">
                  First and Last Name
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="UserName"
                  className="shadow-sm rounded-md w-full px-5 py-2 border border-gray-300 focus:outline-none focus:ring-[#153860] focus:border-[#153860]"
                  value={formData.UserName}
                  onChange={handleInputChange}
                  placeholder="Enter your first and last name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-900 mb-2 required">
                  Email Address <span className="text-red-500"> *</span>
                </label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  className="shadow-sm rounded-md w-full px-5 py-2 border border-gray-300 focus:outline-none focus:ring-[#153860] focus:border-[#153860]"
                  value={formData.Email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-900 mb-2 required">
                  PR Award # <span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="PRaward"
                  className="shadow-sm rounded-md w-full px-5 py-2 border border-gray-300 focus:outline-none focus:ring-[#153860] focus:border-[#153860]"
                  value={formData.PRaward}
                  onChange={handleInputChange}
                  placeholder="Enter your PR Award number"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-900 mb-2 required">
                  Type of Grant <span className="text-red-500"> *</span>
                </label>
                <select
                  name="Grant"
                  className="shadow-sm rounded-md w-full px-5 py-2 border border-gray-300 focus:outline-none focus:ring-[#153860] focus:border-[#153860]"
                  value={formData.Grant}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select grant type
                  </option>
                  {grantOptions.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-900 mb-2 required">
                  State <span className="text-red-500"> *</span>
                </label>
                <select
                  name="State"
                  className="shadow-sm rounded-md w-full px-5 py-2 border border-gray-300 focus:outline-none focus:ring-[#153860] focus:border-[#153860]"
                  value={formData.State}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select state
                  </option>
                  {dropdownOptions.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-900 mb-2 required">
                  Request Details <span className="text-red-500"> *</span>
                </label>
                <textarea
                  className="shadow-sm rounded-md w-full px-5 py-2 border border-gray-300 focus:outline-none focus:ring-[#153860] focus:border-[#153860]"
                  name="Description"
                  value={formData.Description}
                  onChange={handleInputChange}
                  rows={4} // adjust the number of rows as needed
                  placeholder="Enter the request description"
                  required
                ></textarea>
              </div>

              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-black">
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-black-300 rounded-md cursor-pointer bg-white-50 dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-gray-300 dark:placeholder-gray-400"
                type="file"
                name="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt"
              />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                Please upload any files (.pdf, .doc, .docx, .txt) that are
                related to your request for technical assistance
              </p>
              <br />

              {isLoading ? (
                <button
                  type="submit" disabled={isLoading}
                  className="opacity-50 bg-[#153860] mt-2.5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-[#1a456f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a456f]"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-[#153860] mt-2.5 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-[#1a456f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a456f]"
                >
                  Submit
                </button>
              )}

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
