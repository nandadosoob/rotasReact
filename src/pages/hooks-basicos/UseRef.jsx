import { useRef, useState } from "react"
import { Pagina } from "../../components/Pagina"

export function UseRef() {

    const [estado, setestado] = useState(0)
    const referencia = useRef(0)

    function incrementaEstado(){
        setestado(estado + 1)
    }

    function incrementaReferencia(){
        referencia.current += 1
    }

    return (
        <Pagina titulo="useRef" subtitulo="Hooks Básicos">
            <div className="flex flex-col">
                {`Ref: ${referencia.current}| State: ${estado}`}
                <button className="bg-red-400 p-3" onClick={incrementaReferencia}>Ref+</button>
                <button className="bg-red-400 p-3" onClick={incrementaEstado}>State+</button>
            </div>
            
        </Pagina>
    )
}