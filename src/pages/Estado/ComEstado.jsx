import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function ComEstado() {
    const [numero, setNumero] = useState(0)

    function incrementar() {
        setNumero(numero + 1)
       
    }


    // function incrementar(){
    //     setNum(num + 1)
    // }

    // function retirar(){
    //     setNum(num - 1)
    // }

    // function resetar(){
    //     setNum(0)
    // }

    return (
        <Pagina titulo="Com Estado" subtitulo="conceito de estado no react">
            <div className="flex flex-col">
                <div>{numero}</div>
                <button onClick={incrementar} className="p-2 bg-red-500 rounded-md w-40">Incrementar</button>


                
            </div>

            {/* <div>
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
            </div> */}

        </Pagina>
    )
}