import { IconAddressBook, IconHome, IconInfoCircle, IconRouteAltLeft } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export function Menu() {

    
    const getEstilo = () => {
        let estiloInicial = "flex items-center gap-3 px-3 py-5 hover:bg-red-400 hover:text-white"
        let estiloAtivo = "text-red-500"

        
        return estiloFinal;
    };
    return (
        <div className={`bg-red-300 w-60 h-screen
            flex flex-col`}>

            <header className="flex gap-1 justify-center p-3 border-b border-white-500">
                <IconRouteAltLeft/>
                <span className="font-bold">
                    React rotas</span>
            </header>

            <nav className="flex flex-col">
                <NavLink to="/home" className={getEstilo}>
                    <IconHome />
                    Home
                </NavLink>
                <NavLink to="/contato" className={getEstilo}>
                    <IconAddressBook/>
                    Contato
                    </NavLink>
                <NavLink to="/sobre" className={getEstilo}>
                    <IconInfoCircle/>
                    Sobre
                    </NavLink>
            </nav>

            <footer className="absolute bottom-0 p-3 text-sm">
                <span>Desenvolvimento web 2</span>
            </footer>
        </div>
    )

}
