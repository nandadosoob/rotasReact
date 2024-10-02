import { useState } from "react"

export function PaiDireta(){

    const [nome, setNome] = useState("João")

    return(
        <div className={`
        w-full flex flex-col item-center p-7 rounded-md bg-red-800 text-white`}>  

        <div className="flex gap-3">
            <button className="botao">João</button>
            <button className="botao">Maria</button>
            <button className="botao">José</button>
        </div >
        <span className="text-4xl p-5">{nome}</span>
            
        </div>
    )
}