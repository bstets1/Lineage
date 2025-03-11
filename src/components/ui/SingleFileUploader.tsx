import React, { ChangeEvent, useState } from "react";

interface JsonData {
  [key: string]: unknown;
}

const SingleFileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jsonData, setJsonData] = useState<JsonData | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setJsonData(null);
    }
  };

  const handleFileRead = () => {
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        if (!e.target) {
          throw new Error("FileReader target is null");
        }
        const result = e.target.result;
        if (typeof result != "string") {
          throw new Error("FileReader result is not a string");
        }

        const data = JSON.parse(result);
        console.log("JSON data uploaded: ", data);

        setFile(data);
      } catch (error) {
        console.error("Error parsing JSON", error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <>
      <div className="flex flex-col items-start mb-4">
        <input
          id="file"
          type="file"
          onChange={handleFileChange}
          className="sr-only"
        />

        <label
          htmlFor="file"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 transition-all duration-200 ease-in-out cursor-pointer"
        >
          Choose File
        </label>
      </div>

      {file && (
        <section className="mb-4 mr-96 p-4 bg-gray-50 rounded-lg border-r-zinc-600">
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            File details:
          </h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li className="flex">
              <span className="font-medium w-16">Name:</span> {file.name}
            </li>
            <li className="flex">
              <span className="font-medium w-16">Type:</span> {file.type}
            </li>
            <li className="flex">
              <span className="font-medium w-16">Size:</span> {file.size} bytes
            </li>
          </ul>
        </section>
      )}

      {file && !jsonData && (
        <button
          onClick={handleFileRead}
          className="px-4 py-2 text-sm font-medium text-white bg-teal-500 rounded-lg shadow-sm hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-300 active:bg-teal-700 transition-all duration-200 ease-in-out cursor-pointer"
        >
          Upload a file
        </button>
      )}
    </>
  );
};

export default SingleFileUploader;
