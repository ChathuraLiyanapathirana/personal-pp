import React from "react";
import { HtmlRendererType } from "@/types/appTypes";

const HtmlRenderer: React.FC<HtmlRendererType> = ({ htmlString, className }) => {
  return (
    <div
      className={`html-renderer ${className ?? ""}`.trim()}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

export default HtmlRenderer;
