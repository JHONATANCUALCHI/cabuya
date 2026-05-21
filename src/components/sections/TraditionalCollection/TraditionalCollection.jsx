import React from 'react';
import { traditionalVideos } from '../../../data/traditional-collection';
import styles from './TraditionalCollection.module.css';

const TraditionalCollection = () => {
  const renderVideo = (videoData, title) => {
    let { type, src } = videoData;

    if (type === 'local') {
      return (
        <video 
          src={src} 
          className={styles.video} 
          autoPlay 
          muted 
          loop 
          playsInline 
        />
      );
    }

    // Force muted=1 for YouTube and Vimeo iframes
    const separator = src.includes('?') ? '&' : '?';
    let mutedSrc = src;
    
    // Si es YouTube necesita mute=1 y muted=1
    if (src.includes('youtube.com') || src.includes('youtu.be')) {
      if (!src.includes('mute=1')) mutedSrc += `${separator}mute=1&muted=1`;
    } 
    // Si es Vimeo necesita background=1 o muted=1
    else if (src.includes('vimeo.com')) {
      if (!src.includes('muted=1')) mutedSrc += `${separator}muted=1&background=1`;
    }
    else {
      if (!src.includes('muted=1')) mutedSrc += `${separator}muted=1`;
    }

    return (
      <iframe
        src={mutedSrc}
        className={styles.video}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        title={title}
      ></iframe>
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.videoSplit}>
        <div className={styles.videoWrapper}>
          {renderVideo(traditionalVideos.left, "Video Tradicional 1")}
        </div>
        <div className={styles.videoWrapper}>
          {renderVideo(traditionalVideos.right, "Video Tradicional 2")}
        </div>
      </div>
    </section>
  );
};

export default TraditionalCollection;
