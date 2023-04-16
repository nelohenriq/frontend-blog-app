import Homepage from "./pages/home/Homepage";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetail";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
