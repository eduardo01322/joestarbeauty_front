import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroDeClientes from "../components/CadastroClientes";
import CadastroProfissionais from "../components/CadastrodeProfissionais";
import CadastroServicos from "../components/CadastroServicos";
import ListagemClientes from "../components/ListagemClientes";
import ListagemProfissional from "../components/ListagemProfissionais";
import ListagemDeServico from "../components/ListagemServicos";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="CadastroDeClientes" element={<CadastroDeClientes />} />
                <Route path="CadastroDeProfissionais" element={<CadastroProfissionais/>} />
                <Route path="CadastroDeServicos" element={<CadastroServicos/>} />
                <Route path="ListagemDeClientes" element={<ListagemClientes/>} />
                <Route path="ListagemDeProfissional" element={<ListagemProfissional/>} />
                <Route path="ListagemDeServico" element={<ListagemDeServico/>} />
            </Routes>
        </BrowserRouter>
    );

}
export default AppRoute;