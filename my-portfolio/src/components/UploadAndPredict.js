"use client";

import { useRef, useState } from "react";

export default function UploadAndPredict() {
    const fileInputRef = useRef(null);
    const [resultData, setResultData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleFileUpload = async () => {
        const file = fileInputRef.current.files[0];
        if (!file) return;
        setIsLoading(true);
        setFileName(file.name);

        try {
            const { Client } = await import("@gradio/client");
            const client = await Client.connect("TomMc9010/Cloud_AI_model");
            const arrayBuffer = await file.arrayBuffer();
            const blob = new Blob([arrayBuffer], { type: file.type });
            const result = await client.predict("/predict", [blob]);
            setResultData(result.data);
        } catch (error) {
            console.error("Error while uploading image:", error);
        } finally {
            setIsLoading(false);
        }
    };


    
        const cleanResultData = (data) => {
            // Recursively remove unwanted keys (like "char")
            const removeKeys = (obj, keyToRemove) => {
                if (Array.isArray(obj)) {
                    return obj.map(item => removeKeys(item, keyToRemove));
                } else if (typeof obj === 'object' && obj !== null) {
                    return Object.fromEntries(
                        Object.entries(obj)
                            .filter(([key, value]) => key !== keyToRemove)
                            .map(([key, value]) => [key, removeKeys(value, keyToRemove)])
                    );
                }
                return obj;
            };

            // Remove the "char" key from resultData
            const cleanedData = removeKeys(data, "char").map(item => item.replace(/\n/g, ' '));

            console.log(cleanedData);

            // Convert cleaned data back to JSON and remove unwanted characters like brackets and slashes
            return cleanedData.map(item => JSON.stringify(item, null, 2)
                .replace(/\[|\]/g, "")
                .replace(/\//g, "")
                .replace(/"/g, "")
                .replace(/\n\//g, "")
                .trim()
            );
        };
    
    const filteredResultData = resultData && cleanResultData(resultData);
    
        
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Image Prediction</h2>
            <div className="mb-6">
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-2">
                    Choose an image
                </label>
                <div className="flex items-center">
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        className="hidden"
                    />
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-l hover:bg-blue-600 transition duration-300"
                    >
                        Browse
                    </label>
                    <span className="border border-gray-300 rounded-r py-2 px-4 bg-gray-50 text-gray-500 flex-grow">
                        {fileName || "No file chosen"}
                    </span>
                </div>
            </div>
            {isLoading && (
                <div className="flex items-center justify-center py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <span className="ml-2 text-gray-600">Processing...</span>
                </div>
            )}
            {filteredResultData && (
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Prediction Result:</h3>
                    <pre className="bg-white p-3 rounded border border-gray-200 text-sm overflow-x-auto">
                        {filteredResultData}
                    </pre>
                </div>
            )}
        </div>
    );
}
