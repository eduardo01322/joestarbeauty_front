import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import style from '../template.module.css'
import Footer from './Footer';

const CadastroProfissionais = () => {

    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [dataDeNascimento, setDataDeNascimento] = useState<string>("")
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [salario, setSalario]= useState<string>("");
    const[erro, setErro]=useState<string>("")


    const Cep = (e: FormEvent) => {
        e.preventDefault();
        fetch('https://viacep.com.br/ws/'+cep+'/json/',
        {
            method:'GET'
        }).then(Response=> Response.json())
        .then(
            data=>{
                setCidade(data.cidade);
                setCep(data.cep);
                setEstado(data.estado);
                setPais(data.pais);
                setRua(data.rua);
                setNumero(data.numero);
                setBairro(data.bairro);
                setErro("")
            }
        ).catch(error => {
            setErro("Pesquisa Inválida");
        });

    }

    const cadastrarProfissionais = (e: FormEvent) => {
        e.preventDefault();
        const dados = {
            nome: nome,
            celular:celular,
            email: email,
            cpf: cpf,
            dataDeNascimento: dataDeNascimento,
            cidade: cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep: cep,
            complemento: complemento,
            senha: senha,
            salario:salario
        }

        console.log(dados)
        axios.post('http://127.0.0.1:8000/api/profissional', dados, {
            headers:
                { "Accept": "application/json", "Content-Type": "application/json" }
        }).then(function (response) {
            window.location.href = "/listagem"
        }).catch(function (error) {
            console.log(error);
        });
    }

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "cpf") {
            setCpf(e.target.value);
        }
        if (e.target.name === "senha") {
            setSenha(e.target.value);
        }
        if (e.target.name==="celular"){
            setCelular(e.target.value);
        }
        if (e.target.name==="dataDeNascimento"){
            setDataDeNascimento(e.target.value);
        }
        if (e.target.name=="cidade"){
            setCidade(e.target.value);
        }
        if(e.target.name =="estado"){
            setEstado(e.target.value);
        }
        if(e.target.name=="pais"){
            setPais(e.target.value);
        }
        if(e.target.name=="rua"){
            setRua(e.target.value);
        }
        if(e.target.name=="numero"){
            setNumero(e.target.value);
        }
        if(e.target.name=="bairro"){
            setBairro(e.target.value);
        }
        if(e.target.name=="cep"){
            setCep(e.target.value);
        }
        if(e.target.name=="complemento"){
            setComplemento(e.target.value);
        }
        if(e.target.name=="salario"){
            setSalario(e.target.value);
        }
    }

    return (
        <div>
            <Header />
            <main className={style.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Cadastro de Profissionais</h5>
                            <form onSubmit={cadastrarProfissionais} className='row g-3'>
                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} />{nome}
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label'>E-mail</label>
                                    <input type="text" name='email' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="celular" className='form-label'>Celular</label>
                                    <input type="text" name='celular' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="dataDeNascimento" className='form-label'>Data de nascimento</label>
                                    <input type="date" name='dataDeNascimento' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cidade" className='form-label'>Cidade</label>
                                    <input type="text" name='cidade' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="estado" className='form-label'>Estado</label>
                                    <input type="text" name='estado' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="pais" className='form-label'>País</label>
                                    <input type="text" name='pais' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="rua" className='form-label'>Rua</label>
                                    <input type="text" name='rua' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="numero" className='form-label'>Numero</label>
                                    <input type="text" name='numero' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="bairro" className='form-label'>Bairro</label>
                                    <input type="text" name='bairro' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="cep" className='form-label'>CEP</label>
                                    <input type="text" name='cep' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="complemento" className='form-label'>Complemento</label>
                                    <input type="text" name='complemento' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="salario" className='form-label'>salario</label>
                                    <input type="decimal" name='salario' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-6'>
                                    <label htmlFor="senha" className='form-label'>Senha</label>
                                    <input type="text" name='senha' className='form-control' required onChange={handleState} />
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-dark btn-sm'>Cadastrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default CadastroProfissionais;