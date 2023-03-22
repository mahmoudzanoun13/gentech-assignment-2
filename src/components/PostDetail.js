import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((error) => {
        console.log(error);
      });

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
