import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroClientes from "../components/CadastroClientes";
import CadastroProficional   from "../components/CadastrodeProfissionais";
import CadastroServico from "../components/CadastrodeServico";
import Listagem from "../components/Listagem";
import ListagemServico from "../components/ListagemServico";
import ListagemProficional from "../components/ListagemProfi";
import paginaInicial from "../Pagina Inicial/paginaInicial";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="CadastroDeClientes" element={<CadastroClientes />} />
                <Route path="CadastroDeProfissionais" element={<CadastroProficional/>} />
                <Route path="CadastroServico" element={<CadastroServico/>} />
                <Route path="Listagem" element={<Listagem/>} />
                <Route path="ListagemServico" element={<ListagemServico/>} />
                <Route path="ListagemProficional" element={<ListagemProficional/>} />
              
            </Routes>
        </BrowserRouter>
    );

}
export default AppRoute;