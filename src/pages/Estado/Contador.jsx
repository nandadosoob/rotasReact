import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function Contador() {
    const [numero, setNumero] = useState(0)
    const [step, setStep] = useState(0)

    function incrementar(setStep,step) {
        setNumero(numero + step.setStep)
    }

    function retirar(){
        setNumero(numero - setStep.step)
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
        <Pagina titulo="Comtador" subtitulo="conceito de contador de números">
            <div className="flex flex-col">
                <div>{numero}</div>
                <button onClick={retirar} className="p-2 bg-red-500 rounded-md w-20">
                    -</button>
                <button onClick={incrementar} className="p-2 bg-red-500 rounded-md w-20">
                    +</button>
                <br />
                <span>step</span>
                <button onClick={retiraStep} className="p-2 bg-red-500 rounded-full w-10">-</button>
                <div>{step}</div>
                <button onClick={incrementaStep} className="p-2 bg-red-500 rounded-full w-10">+</button>

                


                
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