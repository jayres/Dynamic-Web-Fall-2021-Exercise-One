import React from "react";

function Article({ children }) {
  const articleTitle = `Single Article`;
  return (
    <div>
      <h1>{articleTitle}</h1>
    </div>
  );
}

export default Article;
