import React, { useEffect, useState } from 'react';

// Definindo uma interface para o tipo de objeto Usuario
interface Usuario {
 id: number; // Identificando cada usuario como única
 name: string; 
 email: string; 
 address: { // Endereço do usuário
    street: string; 
    suite: string; 
    city: string; 
    zipcode: string; 
    };
 };



const Usuarios: React.FC = () => {
 // Armazenar os usuários
 const [usuarios, setUsuarios] = useState<Usuario[]>([]);

 // Usando useEffect
 useEffect(() => {
    // Fazendo uma requisição para buscar os usuários
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Convertendo a resposta para JSON
      .then(data => setUsuarios(data)); // Atualizando o estado com os usuários obtidos
 }, []); // Array vazio, executado-o apenas uma vez

 // Return dos componentes
 // Usando tailwind CSS para estilização
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
          {/* Mapeando cada usuário para renderizar */}
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td className="border px-4 py-2">{usuario.name}</td>
              <td className="border px-4 py-2">{usuario.email}</td>
              <td className="border px-4 py-2">
                {usuario.address.street}, {usuario.address.suite}, {usuario.address.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};


export default Usuarios;

