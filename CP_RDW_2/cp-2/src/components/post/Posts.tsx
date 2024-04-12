import React, { useEffect, useState } from 'react';

const Posts: React.FC = () => {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
 }, []);

 return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Posts</h2>
      <ul className="divide-y divide-gray-200">
        {posts.map(post => (
          <li key={post.id} className="py-4">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-500">{post.body}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">{post.id}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default Posts;

