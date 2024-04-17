import React, { useEffect, useState } from 'react';

interface Photo {
 id: number; // Identificando cada foto como única
 title: string; // Título da foto
 url: string; // URL da imagem da foto
}

// Componente Fotos que será renderizado
const Fotos: React.FC = () => {
 // Estado para armazenar as fotos
 const [photos, setPhotos] = useState<Photo[]>([]);


 useEffect(() => {
    // Fazendo a requisição da API
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json()) // Convertendo a resposta para JSON
      .then(data => setPhotos(data.slice(0, 21))); // Limitando a 21 fotos 
 }, []); // Array vazio, executado-o apenas uma vez

 // Return dos componentes
  // Usando tailwind CSS para estilização
 return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Fotos</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Mapeando cada foto para renderizar */}
        {photos.map((photo) => (
          <div key={photo.id} className="rounded overflow-hidden shadow-lg bg-red-200">
            <img className="w-full h-64 object-cover" src={photo.url} alt={photo.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{photo.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
 );
};

export default Fotos;