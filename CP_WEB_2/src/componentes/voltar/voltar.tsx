import React from 'react';
import { useNavigate } from 'react-router-dom';
import voltar from '../../assets/voltar.png'; 

// Componente Voltar 
function Voltar() {
 // Utilizando o hook useNavigate para obter a função de navegação
 const navigate = useNavigate();

 // Função para navegar para a página anterior
 const handleGoBack = () => {
    navigate(-1); 
 };

 // Return dos componentes
 // Usando tailwind CSS para estilização
 return (
    <div>
      {/* Botão que ativa a const handleBack */}
      <button onClick={handleGoBack} className="flex items-center justify-center px-4 py-2 mt-1 bg-red-300 hover:bg-red-500 text-white rounded-md transition-colors duration-200">
        <img src={voltar} alt="Voltar" className="w-4 h-4 mr-2"/>
        Voltar
      </button>
    </div>
 );
}

// Exportando o componente para ser usado em outros lugares
export default Voltar;
