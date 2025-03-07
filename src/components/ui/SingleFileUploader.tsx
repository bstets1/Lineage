import React, { useState } from "react";

const SingleFileUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    // TODO: to use to handle the upload
  };

  return (
    <>
      <div className="flex flex-col items-start mb-4">
        {/* Hidden file input */}
        <input
          id="file"
          type="file"
          onChange={handleFileChange}
          className="sr-only"
        />

        {/* Custom file input button */}
        <label
          htmlFor="file"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-sm hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 transition-all duration-200 ease-in-out cursor-pointer"
        >
          Choose File
        </label>
      </div>

      {/* File details section */}
      {file && (
        <section className="mb-4 p-4 bg-gray-50 rounded-lg">
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

      {file && (
        <button
          onClick={handleUpload}
          className="px-4 py-2 text-sm font-medium text-white bg-teal-500 rounded-lg shadow-sm hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-300 active:bg-teal-700 transition-all duration-200 ease-in-out cursor-pointer"
        >
          Upload a file
        </button>
      )}
    </>
  );
};

export default SingleFileUploader;
