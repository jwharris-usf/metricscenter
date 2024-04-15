'use client'

import { useState } from 'react'
import Modal from './Modal'
import useVideoModal from '@/hooks/useVideoModal'

const VideoModal = ({vidTitle}:any, {vidSource}:any) => {
  const videoModal = useVideoModal();
  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = (
    <div>
      <iframe src="" allow="autoplay; fullscreen; picture-in-picture" width="1200px" height="200px" title="Mental Health Evaluation, Training, Research, and Innovation Center for Schools (METRICS) - Meet &amp; Greet - January 10, 2024" data-ready="true"></iframe>
    </div>
  )

  return ( 
    <Modal 
      disabled={isLoading}
      isOpen={videoModal.isOpen}
      title='Watch'
      actionLabel='Close'
      onClose={videoModal.onClose}
      onSubmit={videoModal.onClose}
      body={bodyContent}
    />
  );
}

export default VideoModal;