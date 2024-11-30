import React, { useState } from 'react';

const BlogForm = () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { blogName, description, author };
    console.log('New Blog Added:', newBlog);
    // You can send this data to an API or backend server here
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Blog Name:</label>
          <input 
            type="text" 
            value={blogName} 
            onChange={(e) => setBlogName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Author Name:</label>
          <input 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
