
import React from 'react';
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Posts from './components/post/Posts';
import Users from './components/users/Users'
import Fotos from './components/fotos/Fotos';
import Landing from './components/home/Home';


function App(){
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4" >
          <h1 className="text-3xl">Medicina no trabalho</h1>
          </header>
      
      <nav>
        <ul className="flex justify-center space-x-4 p-3">
          <li><Link to='/' className="hover:text-blue-500">HOME</Link></li>
          <li><Link to='/posts'className="hover:text-blue-500">SERVIÇOS 01</Link></li>
          <li><Link to='/users'className="hover:text-blue-500">SERVIÇOS 02</Link></li>
          <li><Link to='/fotos'className="hover:text-blue-500">NOTICIAS</Link></li>
        
          
        </ul>
      </nav>
      <main className="flex-grow bg-gray-300">
        {/*Routes: Routes é um componente que encapsula múltiplas rotas. 
        Ele serve como um "switch" que renderiza apenas o primeiro componente Route que 
        corresponde ao caminho (path) atual.  */}
         <Routes>
          {/* Route: O componente Route é usado para definir uma rota individual. Ele associa um caminho (path) da URL a um componente React.
          */}
              <Route path="/" element={<Landing/>}/>
              <Route path="/posts" element={<Posts/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/fotos" element={<Fotos/>}/>
            
         </Routes>
      </main>
      <footer className="bg-gradient-to-r from-blue-800 to-blue-500 text-white p-4">
        <p>© 2024 Medicina no trabalho. Todos os direitos reservados</p>
      </footer>

      </div>

    </Router>


  );
};

export default App;
