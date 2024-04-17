import React from "react";
import './App.css';
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Link
} from 'react-router-dom';
import NotFound from "./componentes/NotFound";
import Posts from "./componentes/post/Posts";
import Users from "./componentes/user/Users";
import Fotos from "./componentes/foto/Fotos";
import Landing from "./componentes/Landing";
import Git from "./assets/icons8-github.png";
import Voltar from "./componentes/voltar/voltar";

function App() {
 return (
    <Router>
      <div className="flex flex-col min-h-20">
      <header className="bg-gradient-to-r from-red-200 to-red-500 text-white p-4 shadow-md rounded-2xl flex items-center justify-center">
    <Voltar/>
    <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center">Nice Posts</h1>
    </div>
</header>


        <nav className="shadow-md">
          <ul className="flex justify-center space-x-6 p-3">
            <li><Link to='/' className=" bg-red-500 hover:bg-red-200 hover:text-white px-4 py-2 rounded transition-colors duration-300">Home</Link></li>
            <li><Link to='/users' className=" bg-red-500 hover:bg-red-200 hover:text-white px-4 py-2 rounded transition-colors duration-300">Users</Link></li>
            <li><Link to='/posts' className=" bg-red-500 hover:bg-red-200 hover:text-white px-4 py-2 rounded transition-colors duration-300">Posts</Link></li>
            <li><Link to='/fotos' className=" bg-red-500 hover:bg-red-200 hover:text-white px-4 py-2 rounded transition-colors duration-300">Fotos</Link></li>
          </ul>
        </nav>

        <main className="flex-grow bg-white p-4 shadow-md">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="bg-gradient-to-r from-red-200 to-red-500 text-white p-4 shadow-md rounded-2xl">
          <div className="container mx-auto">
            <p className="text-center">© 2024 Artur Lopes Fiorindo rm553481. Todos os direitos reservados</p> 
            <a className="hover:bg-red-200 hover:text-white px-2 py-1 rounded transition-colors duration-300" href='https://github.com/ArtFiorindo/CP_02' target="_blank">
              <img src={Git} alt="Descrição do GIF" className="inline-block ml-2" />
              GitHub
            </a>

          </div>
        </footer>
      </div>
    </Router>
 );
}

export default App;

