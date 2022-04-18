import React from "react";

const GIF = ({ title, url }: { title: string; url: string }) => (
  <div style={{ marginBottom: "20px" }}>
    <span>{title}</span>
    <img style={{ maxWidth: "300px", width: "100%" }} src={url} alt={title} />
  </div>
);

export default GIF;
