export function Pagina(props) {
    return(
        <div className="w-full h-full bg-red-200">
            <header className="bg-red-200 p-3">
                <h1 className="text-xl font-black">{props.titulo}</h1>
                <h2 className="text-sm ">{props.subtitulo}</h2>
            </header>
            <main className="flex flex-col p-5">
                {props.children}

            </main>
        </div>
    )
}