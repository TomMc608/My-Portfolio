// components/PDFViewer.js
import React from 'react';

const PDFViewer = ({ pdfUrl, width = "100%", height = "1000px" }) => {
  return (
    <div className="flex flex-col items-center">
      <iframe
        src={`${pdfUrl}#view=FitH&scrollbar=0&toolbar=0&navpanes=0`}
        style={{ width, height }}
        className="border border-gray-300 rounded-lg shadow-lg"
        title="Research Paper PDF"
        scrolling="no"
      />
      <a 
        href={pdfUrl} 
        download 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Download PDF
      </a>
    </div>
  );
};

export default PDFViewer;