import axios from 'axios';
import React, { Component, useState, ChangeEvent, FormEvent, useEffect} from 'react';
import styles from "../App.module.css";
import { CadastroClienteInterface } from '../interfaces/CadastroClienteInterface';

const Listagem = () => {

    const [cliente, setCliente] = useState<CadastroClienteInterface[]>([]);
    const [pesquisa, setpesquisa] = useState<string>('');
    const [error, setError] = useState("");

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "pesquisa"){setpesquisa(e.target.value);
        }
    }

    const buscar = (e: FormEvent) => {e.preventDefault();
    async function fetchData() {
        try{
            const Response = await axios.post('http://10.137.9.134:8000/api/findNome',
            {nome: pesquisa}, { 
                headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(function (Response) {
            setCliente(Response.data.data);
        }).catch(function (error) {
            console.log(error);
        });
    } catch(error){
        console.log(error);
    }   
    }
    fetchData();
}

    useEffect(() => {
        async function fetchData(){
            try{
                const Response = await axios.get('http://10.137.9.134:8000/api/find');
                setCliente(Response.data.data);
            } catch(error)
            {setError("Ocorreu um erro");
        console.log(error);
            }
        }

        fetchData();

    },[]);

    return (
        <div>
            <main className={styles.main}>
                <div className='container'>
                    <div className='col-mb mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                            <h5 className='card-title'>pesquisar</h5>
                            <form onSubmit={buscar} className='row'>
                                <div className='col-10'>
                                    <input type="text" name='pesquisa' 
                                    className='form-control' onChange={handleState}/>
                                </div>
                                <div className='col-1'>
                                    <button type="submit" className='btn btn-success'>pesquisar</button>
                                    </div>
                            </form>
                            </div>
                            </div>
                            </div>                    
                <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'> Listagem de Clientes</h5>
                    <table className='table table-houver'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>celular</th>
                                <th>E-mail</th>
                                <th>cpf</th>
                                <th>cidade</th>
                                <th>estado</th>
                                <th>pais</th>
                                <th>rua</th>
                                <th>numero</th>
                                <th>bairro</th>
                                <th>cep</th>
                                <th>complemento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cliente.map(cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.id}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.celular}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.cidade}</td>
                                <td>{cliente.estado}</td>
                                <td>{cliente.pais}</td>
                                <td>{cliente.rua}</td>
                                <td>{cliente.numero}</td>
                                <td>{cliente.bairro}</td>
                                <td>{cliente.cep}</td>
                                <td>{cliente.complemento}</td>
                                <td>
                                    <a href="#" className='btn btn-primary btn-sm'>Editar</a>
                                    <a href="#" className='btn btn-danger btn-sm'>Excluir</a>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
                </div>
            </main>
        </div>
    );
}

export default Listagem;