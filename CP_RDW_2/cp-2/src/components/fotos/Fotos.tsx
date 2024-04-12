import React, { useEffect, useState } from 'react';

interface Photo {
 id: number;
 title: string;
 url: string;
}

const Fotos: React.FC = () => {
 const [photos, setPhotos] = useState<Photo[]>([]);

 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data.slice(0, 10))); // Limitando a 10 fotos para simplificar
 }, []);

 return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fotos</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={photo.url} alt={photo.title} />
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
