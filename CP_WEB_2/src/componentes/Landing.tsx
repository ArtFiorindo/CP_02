import React from "react";
import WelcomImg from "../assets/bunny.png";

const Landing: React.FC = () => {
 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={WelcomImg} alt="Imagem de boas-vindas" className="mb-8 w-64 h-64 object-cover rounded-full" />
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Bem-vindo ao Nice Posts</h2>
        <p className="text-lg text-gray-700">
          Onde você pode se divertir vendo posts e fotos, e caso fique entediado, você pode ver informações de usuários que usam a nossa plataforma!
        </p>
      </div>
    </div>
 );
};

export default Landing;
