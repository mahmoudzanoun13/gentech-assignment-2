import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <SearchBar onSearch={handleSearch} />
        </nav>

        <Routes>
          <Route
            path="/"
            element={<PostList searchQuery={searchQuery} />}
          ></Route>
          <Route path="/posts/:id" element={<PostDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
