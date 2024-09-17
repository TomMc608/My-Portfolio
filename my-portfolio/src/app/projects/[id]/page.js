// /src/app/projects/[id]/page.js
import styles from "../../styles/ProjectDetail.module.css";
import UploadAndPredict from "../../../components/UploadAndPredict";
import Slideshow from "../../../components/Slideshow"; // Import the updated Slideshow component

export async function generateStaticParams() {
  return [{ id: "cloud-ai-model" }];
}

export default function Project() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Model Coming Soon</h1>
      <p className={styles.description}>
        The AI model for this project is currently under development. Please check back later!
      </p>

      {/* Render the Slideshow Component */}
      <Slideshow />

      {/* Render the Upload and Predict Component */}
      <UploadAndPredict />
    </div>
  );
}
