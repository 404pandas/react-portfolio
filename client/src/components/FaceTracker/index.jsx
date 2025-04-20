import React, { useEffect, useRef } from "react";
import "@tensorflow/tfjs-node";
import * as faceapi from "face-api.js";
import "./facetracker.css";

// docs - https://justadudewhohacks.github.io/face-api.js/docs/index.html#models

const FaceTracker = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.loadTinyFaceDetectorModel("/models");

      await faceapi.loadFaceLandmarkTinyModel("/models");

      startVideo();
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        videoRef.current.srcObject = stream;
      });
    };

    const handleVideoPlay = () => {
      const intervalId = setInterval(async () => {
        const detectionsWithLandmarks = await faceapi
          .detectAllFaces(videoRef.current)
          .withFaceLandmarks();

        const resizedDetections = faceapi.resizeResults(
          detectionsWithLandmarks,
          {
            width: videoRef.current.videoWidth,
            height: videoRef.current.videoHeight,
          }
        );

        const canvas = canvasRef.current;
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;

        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      }, 100);

      return () => clearInterval(intervalId);
    };

    loadModels();

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay muted onPlay={handleVideoPlay} />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default FaceTracker;
