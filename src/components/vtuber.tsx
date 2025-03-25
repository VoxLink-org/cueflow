import { cn } from '@/lib/utils';
import { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';

export enum Emotion {
  NEUTRAL,
  ANGRY,
  CRY,
}

interface VtuberProps {
  neutralVideoSrc: string;
  angryVideoSrc: string;
  cryVideoSrc: string;
  className?: string;
}

export interface VtuberRef {
  play: (emotion: Emotion) => void;
}

const Vtuber = forwardRef<VtuberRef, VtuberProps>(({ neutralVideoSrc, angryVideoSrc, cryVideoSrc, className }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const neutralVideoRef = useRef<HTMLVideoElement>(null);
  const angryVideoRef = useRef<HTMLVideoElement>(null);
  const cryVideoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, () => ({
    play: (emotion: Emotion) => {
      if (!neutralVideoRef.current || !angryVideoRef.current || !cryVideoRef.current) return;

      let selectedVideo: HTMLVideoElement;

      switch (emotion) {
        case Emotion.ANGRY:
          selectedVideo = angryVideoRef.current;
          break;
        case Emotion.CRY:
          selectedVideo = cryVideoRef.current;
          break;
        case Emotion.NEUTRAL:
          selectedVideo = neutralVideoRef.current;
          break;
        default:
          selectedVideo = neutralVideoRef.current;
          break;
      }

      // Play the selected video directly
      selectedVideo.currentTime = 0;
      selectedVideo.play();
    },
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const neutralVideo = neutralVideoRef.current;
    const angryVideo = angryVideoRef.current;
    const cryVideo = cryVideoRef.current;

    if (!canvas || !neutralVideo || !angryVideo || !cryVideo) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initial canvas setup
    const setupCanvas = (video: HTMLVideoElement) => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    };

    const processFrame = (video: HTMLVideoElement) => {
      if (video.paused || video.ended) return;

      // Draw video frame to canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Create a circular mask
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 240;

      // Iterate through each pixel and set alpha to 0 if outside the circle or is black
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const x = (i / 4) % canvas.width;
        const y = Math.floor(i / 4 / canvas.width);

        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);

        const isChromaKey = (r: number, g: number, b: number) => {
          const chromaKeyR = 158;
          const chromaKeyG = 226;
          const chromaKeyB = 115;
          const threshold = 50; // Adjust as needed

          const distance = Math.sqrt(
            (r - chromaKeyR) ** 2 + (g - chromaKeyG) ** 2 + (b - chromaKeyB) ** 2
          );

          return distance < threshold;
        };

        if ((r < 10 && g < 10 && b < 10) || distance > radius || isChromaKey(r, g, b)) {
          data[i + 3] = 0; // Set alpha to 0 (transparent)
        }
      }

      // Put modified image data back to canvas
      ctx.putImageData(imageData, 0, 0);

      requestAnimationFrame(() => processFrame(video));
    };

    const setupVideo = (video: HTMLVideoElement) => {
      video.addEventListener('loadedmetadata', () => setupCanvas(video));
      video.addEventListener('play', () => {
        requestAnimationFrame(() => processFrame(video));
      });
    };

    neutralVideo.src = neutralVideoSrc;
    angryVideo.src = angryVideoSrc;
    cryVideo.src = cryVideoSrc;

    setupVideo(neutralVideo);
    setupVideo(angryVideo);
    setupVideo(cryVideo);

    Promise.all([
      new Promise((resolve) => neutralVideo.addEventListener('loadeddata', resolve)),
      new Promise((resolve) => angryVideo.addEventListener('loadeddata', resolve)),
      new Promise((resolve) => cryVideo.addEventListener('loadeddata', resolve)),
    ]).then(() => {
      console.log('Videos preloaded');
    });

    return () => {
      neutralVideo.removeEventListener('play', () => processFrame(neutralVideo));
      angryVideo.removeEventListener('play', () => processFrame(angryVideo));
      cryVideo.removeEventListener('play', () => processFrame(cryVideo));
    };
  }, [angryVideoSrc, neutralVideoSrc, cryVideoSrc]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <video
        ref={cryVideoRef}
        src={cryVideoSrc}
        muted
        className="opacity-0 absolute"
      />
      <video
        ref={neutralVideoRef}
        src={neutralVideoSrc}
        muted
        className="opacity-0 absolute"
      />
      <video
        ref={angryVideoRef}
        src={angryVideoSrc}
        muted
        className="opacity-0 absolute"
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full relative"
      />
    </div>
  );
});

export default Vtuber;