import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClientePage from "../features/cliente/page/ClientePage";
import ProdutoPage from "../features/produto/page/ProdutoPage";
import EmpresaPage from "../features/empresa/page/EmpresaPage";
import VotoPage from "../features/voto/page/VotoPage";

import ClienteForm from "../features/cliente/page/ClienteForm";
import ProdutoForm from "../features/produto/page/ProdutoForm";
import EmpresaForm from "../features/empresa/page/EmpresaForm";
import VotoForm from "../features/voto/page/VotoForm";

import Home from "../features/home/page/Home";

export default function Router() {

  return (

       <BrowserRouter>

           <Routes>
               <Route path="/" element={<Home />} />

               <Route path="/cliente" element={<ClientePage />} />
               <Route path="/cliente-form/:idCliente?" element={<ClienteForm />} />

               <Route path="/produto" element={<ProdutoPage />} />
                <Route path="/produto-form/:idProduto?" element={<ProdutoForm />} />

               <Route path="/empresa" element={<EmpresaPage />} />
               <Route path="/empresa-form/:idEmpresa?" element={<EmpresaForm />} />

               <Route path="/voto" element={<VotoPage />} />
               <Route path="/voto-form" element={<VotoForm />} />
           </Routes>

      </BrowserRouter>

  );
}
