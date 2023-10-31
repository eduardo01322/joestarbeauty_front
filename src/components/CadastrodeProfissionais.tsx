import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import styles from '../App.module.css'


const CadastroProficional = () => {

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
    const [password, setPassword] = useState<string>("");
    const [salario, setSalario]= useState<string>("");
    const[erro, setErro]=useState<string>("")


    const findCep = (e: FormEvent) => {

        e.preventDefault();

        fetch('https://viacep.com.br/ws/' + cep + '/json/',
            {
                method: 'GET'
            }
        ).then(response => response.json())
            .then(
                data => {
                    console.log(data);

                    setCidade(data.localidade);

                    // setCep(data.cep);
                    setEstado(data.uf);


                }
            )


    }

    const cadastrarUsuarioProficional = (e: FormEvent) => {
        e.preventDefault();
        const dados = {
            nome: nome,
            email: email,
            celular:celular,
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
            password: password,
            salario:salario
        }

        console.log(dados)
        axios.post('http://127.0.0.1:8000/api/cadastroProfissional', dados, {
            headers:
                { "Accept": "application/json", "Content-Type": "application/json" }
        }).then(function (response) {
            window.location.href = "/ListagemProficional"
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
        if (e.target.name === "password") {
            setPassword(e.target.value);
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


                
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
<div className="container-fluid">
<a className="navbar-brand" href="#">Estilo e Lamina</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled">Disabled</a>
    </li>
  </ul>
  
</div>
</div>
</nav>
<main className={styles.main}>
            <div className='container'>
                
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Cadastrar Profisional</h5>
                        <form onSubmit={cadastrarUsuarioProficional} className='row g-3'>
                            <div className='col-6'>
                                <label htmlFor="nome" className='form-label'>Nome</label>
                                <input type="text" name='nome' className='form-control' required onChange={handleState} />
                            </div>
                            <div className='col-6'>
                                <label htmlFor="email" className='form-label' >E-mail</label>
                                <input type="email" name='email' className='form-control' required onChange={handleState} />

                            </div>
                            <div className='col-4'>
                                <label htmlFor="cpf" className='form-label'>CPF</label>
                                <input type="text" name='cpf' className='form-control' required onChange={handleState} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="cpf" className='form-label'>Data de Nascimento</label>
                                <input type="date" name='dataNascimento' className='form-control' required onChange={handleState} />
                            </div>


                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Cep</label>
                                <input type="text" name='cep' className='form-control' required onBlur={findCep} onChange={handleState} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="cpf" className='form-label'>Estado</label>
                                <input type="text" name='estado' value={estado} className='form-control' required onChange={handleState} />
                            </div>

                            <div className='col-4'>
                                <label htmlFor="cpf" className='form-label'>Cidade</label>
                                <input type="text" value={cidade} id='localidade' name='localidade' className='form-control' required onChange={handleState} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Celular</label>
                                <input type="text" name='celular' className='form-control' required onChange={handleState} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Pais</label>
                                <input type="text" name='pais' className='form-control' required onChange={handleState} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Rua</label>
                                <input type="text" name='rua' className='form-control' required onChange={handleState} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Numero</label>
                                <input type="text" name='numero' className='form-control' required onChange={handleState} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Bairro</label>
                                <input type="text" name='bairro' className='form-control' required onChange={handleState} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="celular" className='form-label'>Complemento</label>
                                <input type="text" name='complemento' className='form-control' required onChange={handleState} />
                            </div>
                            <div className='col-4'>
                                <label htmlFor="password" className='form-label'>Senha</label>
                                <input type="password" name='password' className='form-control' required onChange={handleState} />
                            </div>
                            <div className='col-12'>
                                <button type='submit' className='btn btn-success btn-sm'>Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    </div>
);
}

export default CadastroProficional;