import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function CampoTexto(){
    const [texto, setTexto] = useState("")


    return(
        <Pagina Titulo="Campo de texto" subtitulo="Conceito de estado">
            <div className="flex flex-col gap-4">
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
                <button onClick={ ()  => setTexto("teste")}>Limpar</button>
                <span className="text-2xl">{texto}</span>
            </div>
        </Pagina>
    )
}