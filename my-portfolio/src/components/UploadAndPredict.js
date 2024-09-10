// /src/components/UploadAndPredict.js
"use client";

import { useRef, useState } from "react";
import styles from "../app/styles/ProjectDetail.module.css";

export default function UploadAndPredict() {
  const fileInputRef = useRef(null);
  const [resultData, setResultData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async () => {
    const file = fileInputRef.current.files[0];

    if (!file) return;

    setIsLoading(true);

    try {
      // Dynamically import the Gradio client
      const { Client } = await import("@gradio/client");
      
      // Create a new Gradio client
      const client = await Client.connect("TomMc9010/Cloud_AI_model");

      // Read the file as an ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      // Convert ArrayBuffer to Blob
      const blob = new Blob([arrayBuffer], { type: file.type });

      // Make the prediction using the Gradio client
      const result = await client.predict("/predict", [blob]);

      // Store the result data
      setResultData(result.data);
    } catch (error) {
      console.error("Error while uploading image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className={styles.fileInput}
      />
      <button onClick={handleFileUpload} className={styles.uploadButton}>
        Upload Image
      </button>
      {isLoading && <p>Loading...</p>}
      {resultData && (
        <div className={styles.resultContainer}>
          <h2>Prediction Result:</h2>
          <pre>{JSON.stringify(resultData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}