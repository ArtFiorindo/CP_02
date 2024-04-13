import React, { useEffect, useState } from 'react';

const Posts: React.FC = () => {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
 }, []);

 return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {posts.map(post => (
          <div key={post.id} className="rounded overflow-hidden shadow-lg w-64  bg-red-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-500">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
 );
};

export default Posts;
