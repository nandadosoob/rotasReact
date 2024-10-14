import { useState } from "react"
import {FilhoDireta} from "./FilhoDireta"

export function PaiDireta(){

    const [nome, setNome] = useState("")

    function alterarNome(novoNome){
        setNome(novoNome)
    } 

    return(
        <div className={`
        w-full flex flex-col items-center p-7 rounded-md
            bg-red-300 text-white gap-4`}>  

        <div className="flex gap-3">
            <button className="botao" onClick={() => props.alterar("João")}>João</button>
            <button className="botao" onClick={() => props.alterar("Maria")}>Maria</button>
            <button className="botao" onClick={() => props.alterar("José")}>José</button>
        </div >


        {/* <span className="text-4xl p-5">{nome}</span> */}

        <FilhoDireta alterar={alterarNome}/>
            
        </div>
    )
}