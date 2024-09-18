import { IconAddressBook, IconHome, IconInfoCircle, IconRouteAltLeft } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export function Menu() {

    
    const getEstilo = (props) => {
   
        let estilo =
          "flex gap-3 text-slate-700 px-3 py-4 hover:bg-slate-800 hover:text-slate-200 ";
        let ativo = "border-r-4 border-solid border-slate-800 "
    
    
        let final = props.isActive ? estilo + ativo : estilo
    
        return final;
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

                <NavLink to="/estado1" className={getEstilo}>
                    <IconInfoCircle/>
                    Estado 1
                    </NavLink>
            </nav>

            <footer className="absolute bottom-0 p-3 text-sm">
                <span>Desenvolvimento web 2</span>
            </footer>
        </div>
    )

}
