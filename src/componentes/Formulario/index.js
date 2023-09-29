import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const salvar = (evento) => {

        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }

    return (
        <section className="formulario">
            <form onSubmit={salvar}>

                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" valor={nome} aoAlterado={valor => setNome(valor)} />

                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)} />

                <CampoTexto label="Imagem" placeholder="Digite o Endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)} />

                <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={valor => setTime(valor)} />

                <Botao>
                    Criar Card
                </Botao>
            </form>

        </section>

    )

}

export default Formulario