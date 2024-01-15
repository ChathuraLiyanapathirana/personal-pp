import React from "react";

interface Props {
  htmlString: string;
}

const HtmlRenderer: React.FC<Props> = ({ htmlString }) => {
  return (
    <div
      className="html-renderer"
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

export default HtmlRenderer;
