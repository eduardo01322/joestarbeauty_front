import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroDeClientes from "../components/CadastroClientes";
import CadastroProfissionais from "../components/CadastrodeProfissionais";
import CadastroServicos from "../components/CadastroServicos";
import ListagemClientes from "../components/ListagemClientes";
import ListagemProfissional from "../components/ListagemProfissionais";
import ListagemDeServico from "../components/ListagemServicos";
import EditarCliente from "../components/EditarClientes";
import EditarProfissional from "../components/EditarProfissionais";
import EditarServicos from "../components/EditarServicos";
import RedefinirSenhaProfissionais from "../components/RedefinirSenhaProfissionais";
import RedefinirSenhaClientes from "../components/RedefinirSenhaClientes";
import ListagemAgenda from "../components/ListagemAgenda";
import CadastroAgenda from "../components/CadastroAgenda";
import EditarAgenda from "../components/EditarAgenda";


const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="CadastroDeClientes" element={<CadastroDeClientes />} />
                <Route path="CadastroDeProfissionais" element={<CadastroProfissionais/>} />
                <Route path="CadastroDeServicos" element={<CadastroServicos/>} />
                <Route path="CadastroDeAgenda" element={<CadastroAgenda/>} />
                <Route path="ListagemDeClientes" element={<ListagemClientes/>} />
                <Route path="ListagemDeProfissional" element={<ListagemProfissional/>} />
                <Route path="ListagemDeServico" element={<ListagemDeServico/>} />
                <Route path="ListagemDeAgenda" element={<ListagemAgenda/>} />
                <Route path="/EditarCliente/:id" element={<EditarCliente/>} />
                <Route path="/EditarProfissional/:id" element={<EditarProfissional/>} />
                <Route path="/EditarServicos/:id" element={<EditarServicos/>} />
                <Route path="/EditarAgenda/:id" element={<EditarAgenda/>} />
                <Route path="/redefinirSenhaClientes" element={<RedefinirSenhaClientes/>} />
                <Route path="/redefinirSenhaProfissionais" element={<RedefinirSenhaProfissionais/>} />
            </Routes>
        </BrowserRouter>
    );

}
export default AppRoute;