// DownloadButton.js

import React from "react";
import { saveAs } from "file-saver";

const DownloadButton = () => {
  const downloadCV = async () => {
    try {
      const response = await fetch("/pdf/lpcb_cv.pdf");
      const blob = await response.blob();

      saveAs(blob, "lpcb_cv.pdf");
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  return (
    <h1
      className="px-0 py-4 md:mt-28 xxs:mt-8 bg-slate-900 text-white rounded-lg text-sm cursor-pointer active:scale-[.97]"
      onClick={downloadCV}
    >
      Download Resume
    </h1>
  );
};

export default DownloadButton;
