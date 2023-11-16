import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import styles from '../template.module.css'
import Footerservicos from './FooterServicos';

const CadastroServicos = () => {
    const [nome, setNome] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [duracao, setDuracao] = useState<string>("");
    const [erro, setErro] = useState<string>("");

    const cadastrarServico = (e: FormEvent) => {
        e.preventDefault();
        const dados = {
            nome: nome,
            preco: preco,
            descricao: descricao,
            duracao: duracao,
        };

        console.log(dados);
        axios.post("http://127.0.0.1:8000/api/servicos", dados, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                window.location.href = "/ListagemDeServico";
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "preco") {
            setPreco(e.target.value);
        }
        if (e.target.name === "descricao") {
            setDescricao(e.target.value);
        }
        if (e.target.name === "duracao") {
            setDuracao(e.target.value);
        }
    };

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastrar Serviços✩</h5>
                            <form onSubmit={cadastrarServico} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className="form-label">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        name="nome"
                                        className="form-control"
                                        required
                                        onChange={handleState}
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="preco" className="form-label">
                                        Preço
                                    </label>
                                    <input
                                        type="decimal"
                                        name="preco"
                                        className="form-control"
                                        required
                                        onChange={handleState}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="descricao" className="form-label">
                                        Descrição
                                    </label>
                                    <input
                                        type="text"
                                        name="descricao"
                                        className="form-control"
                                        required
                                        onChange={handleState}
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="duracao" className="form-label">
                                        Duração
                                    </label>
                                    <input
                                        type="text"
                                        name="duracao"
                                        className="form-control"
                                        required
                                        onChange={handleState}
                                    />
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-success btn-sm">
                                        Cadastrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footerservicos />
        </div>
    );
};

export default CadastroServicos;