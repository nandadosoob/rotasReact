import { useState } from "react"
import { Pagina } from "../../components/Pagina"


export function Tradutor() {

    const [inputValue, setInputValue] = useState("")
    const [valueTraduz, setValueTraduz] = useState("")
    function traduz() {
        fetch(
            `https://api.mymemory.translated.net/get?q=${inputValue}&langpair=pt-br|en`
        )
            .then((resposta) => resposta.json())
            .then((dados) => setValueTraduz(dados.responseData.translatedText))
            .catch((error) => {
                alert("Erro:", error);
            });
        console.log(valueTraduz);

    }


    return (
        <Pagina titulo="Tradutor" subtitulo="tradutor de portugues para ingles">
            <div className="flex flex-row gap-5">
                <div>
                    <h3>Português</h3>
                    <div className="w-60 h-60 border-2 border-red-800 rounded-md bg-red-100 flex flex-col">
                        <input type="text" className="bg-red-100 h-52 shadow-none outline-none p-2" maxLength={250} onChange={(evento) => setInputValue(evento.target.value)} value={inputValue} 
                        
                        />
                        <div className="flex flex-row justify-between p-2">
                            <span className="text-gray-400">{inputValue.length}/250</span>
                            <button className="w-28 h-10 border-2 rounded-md border-red-900 bg-red-400" onClick={traduz}>Traduzir</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Inglês</h3>
                    <div className="w-60 h-60 border-2 border-red-800 rounded-md bg-red-100 ">
                        <span className="p-2 h-48 flex flex-col justify-center">{valueTraduz}</span>
                    </div>

                </div>
            </div>
        </Pagina>
    )
}