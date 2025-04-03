import prism from "prismjs";
// import "prismjs/components/prism-jsx";
import axios from "axios";
import "highlight.js/styles/github-dark.css";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import Editor from "react-simple-code-editor";
import rehypeHighlight from "rehype-highlight";
import "./App.css";
function App() {
  const [code, setCode] = useState(`const sum=()=>{
  return 1+1
}`);
  const [review, setReview] = useState(``);
  useEffect(() => {
    prism.highlightAll();
  }, []);

  const reviewCode = async () => {
    const response = await axios.post(`http://localhost:3000/ai/get-review`, {
      code,
    });
    setReview(response.data);
  };
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
