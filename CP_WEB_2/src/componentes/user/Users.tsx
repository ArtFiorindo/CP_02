// src/components/Usuarios.tsx
import React, { useEffect, useState } from 'react';

interface Usuario {
 id: number;
 name: string;
 email: string;
 address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
 };
}

const Usuarios: React.FC = () => {
 const [usuarios, setUsuarios] = useState<Usuario[]>([]);

 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data));
 }, []);

 return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Usuários</h1>
      <table className="table-auto w-full bg-red-200">
        <thead>
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Endereço</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td className="border px-4 py-2">{usuario.name}</td>
              <td className="border px-4 py-2">{usuario.email}</td>
              <td className="border px-4 py-2">
                {usuario.address.street}, {usuario.address.suite}, {usuario.address.city}, {usuario.address.zipcode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default Usuarios;
