import { useState } from "react";
import { Pagina } from "./Pagina";

export function Estado1(){

    const [num, setNum] = useState(0)
  

    function incrementar(){
        setNum(num + 1)
    }

    function retirar(){
        setNum(num - 1)
    }

    function resetar(){
        setNum(0)
    }

    return(
        <Pagina titulo="Estado 1" subtitulo="conceito de estado no react">
            <div>
            <div>{num}</div>
            <button className="bg-red-400 p-4 rounded-md" 
            onClick={incrementar}>
                incremenetar
            </button>

            <button className="bg-red-400 p-4 rounded-md" 
            onClick={retirar}>
                retirar
            </button>

            <button className="bg-red-400 p-4 rounded-md" 
            onClick={resetar}>
                resetar
            </button>
            </div>

        </Pagina>
    )
}