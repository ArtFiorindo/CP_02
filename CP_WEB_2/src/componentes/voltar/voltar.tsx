import React from 'react';
import { useNavigate } from 'react-router-dom';
import voltar from '../../assets/voltar.png'; // Ensure this path is correct

function Voltar() {
 const navigate = useNavigate();

 const handleGoBack = () => {
    navigate(-1);
 };

 return (
    <div>
      <button onClick={handleGoBack} className="flex items-center justify-center px-4 py-2 mt-1 bg-red-300  hover:bg-red-500 text-white rounded-md transition-colors duration-200">
        <img src={voltar} alt="Voltar" className="w-4 h-4 mr-2"/>
        Voltar
      </button>
    </div>
 );
}

export default Voltar;