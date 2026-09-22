import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClientePage from "../features/cliente/page/ClientePage";
import ProdutoPage from "../features/cliente/page/ProdutoPage";
import EmpresaPage from "../features/cliente/page/EmpresaPage";
import Home from "../features/home/page/Home";

export default function Router() {

  return (

       <BrowserRouter>

           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/cliente" element={<ClientePage />} />
               <Route path="/produto" element={<ProdutoPage />} />
               <Route path="/empresa" element={<EmpresaPage />} />
           </Routes>

      </BrowserRouter>

  );
}
