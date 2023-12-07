import React from "react";
import styles from "./Header.module.css"

const Header = () => {
    return (

        <header className={styles.header}>

            <nav className="navbar navbar-expand-lg navbar-dark navbar-center">
                <div className="container-fluid">
                    <img src="joestarsLogo.png" width="200" height="60" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#conteudoNavbar"
                        aria-controls="conteudoNavbar" aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="container">
                        <div className="collapse navbar-collapse" id="conteudoNavbar">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a href="" className="nav-link active">Início</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/CadastroDeClientes" className="nav-link active">Cadastrar Clientes✩</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/CadastroDeProfissionais" className="nav-link active">Cadastrar profissionais✩</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/CadastroDeServicos" className="nav-link active">Cadastrar serviços✩</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/CadastroDeAgenda" className="nav-link active">Cadastrar Horario disponiveis✩</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/ListagemDeClientes" className="nav-link active">Listagem de clientes cadastrados✩</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/ListagemDeProfissional" className="nav-link active">Listagem de Profissionais cadastrados✩</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/ListagemDeServico" className="nav-link active">Listagem serviços✩</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/ListagemDeAgenda" className="nav-link active">Listagem de horario disponiveis✩</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container col-md-12 ml-sm-auto mt-3 col-lg-12 px-4">
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" >
            </script>
        </header>
    );
}

export default Header;