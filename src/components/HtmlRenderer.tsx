import React from "react";
import { HtmlRendererType } from "@/types/appTypes";

const HtmlRenderer: React.FC<HtmlRendererType> = ({ htmlString }) => {
  return (
    <div
      className="html-renderer"
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

export default HtmlRenderer;
