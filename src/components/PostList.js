import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = ({ searchQuery }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <Link to={`/posts/${post.id}`}>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
