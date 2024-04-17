import React, { useEffect, useState } from 'react';

const Posts: React.FC = () => {
 // Armazenar os posts
 const [posts, setPosts] = useState([]);

 // Usando useEffect
 useEffect(() => {
    // Fazendo a requisição da API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) // Convertendo a resposta para JSON
      .then(data => setPosts(data)); // Atualizando o estado com os posts obtidos
 }, []); // Array vazio, executado-o apenas uma vez

 // Return dos componentes
 // Usando tailwind CSS para estilização
 return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Mapeando cada post para renderizar */}
        {posts.map(post => (
          <div key={post.id} className="rounded overflow-hidden shadow-lg w-64 bg-red-200">
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
