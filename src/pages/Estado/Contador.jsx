import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function Contador() {
    const [numero, setNumero] = useState(0)
    const [step, setStep] = useState(0)

    function incrementar() {
        setNumero(numero + step)
    }

    function retirar(){
        setNumero(numero - step)
    }

    function incrementaStep(){
        setStep(step + 1)
    }

    function retiraStep(){
        setStep(step - 1)
    }
    // function resetar(){
    //     setNum(0)
    // }

    return (
        <Pagina titulo="Contador" subtitulo="conceito de contador de números">
            <div className="flex flex-col">
                <div className="rounded-md border-2 p-2 h-11 w-14 mb-5">{numero}</div>
                <div className="flex flex-row justify-between w-24">
                <button onClick={retirar} className="p-2 bg-red-500 rounded-md w-10">
                    -</button>
                <button onClick={incrementar} className="p-2 bg-red-500 rounded-md w-10">
                    +</button>
                </div>

                <br />
                <span>step</span>

                <div className="flex flex-row justify-between w-28j">
                <button onClick={retiraStep} className="p-2 bg-red-500 rounded-full w-10">-</button>
                <div className="p-2">{step}</div>
                <button onClick={incrementaStep} className="p-2 bg-red-500 rounded-full w-10">+</button>
                </div>

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