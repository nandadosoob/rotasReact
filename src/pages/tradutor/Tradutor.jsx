import { Pagina } from "../../components/Pagina"
export function Tradutor() {

    return (
        <Pagina titulo="Tradutor" subtitulo="tradutor de portugues para ingles">
            <div className="flex flex-row gap-5">
                <div>
                    <h3>Português</h3>
                    <div className="w-60 h-60 border-2 border-red-800 rounded-md bg-red-100 flex flex-col">
                        <input type="text" className="bg-red-100 h-52" />
                        <div className="flex flex-row justify-between p-2">
                            <span className="text-gray-400">/250</span>
                            <button className="w-28 h-10 border-2 rounded-md border-red-900 bg-red-400">Traduzir</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Inglês</h3>
                    <div className="w-60 h-60 border-2 border-red-800 rounded-md bg-red-100">
                    </div>

                </div>
            </div>
        </Pagina>
    )
}