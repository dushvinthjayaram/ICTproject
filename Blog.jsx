import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blog;
