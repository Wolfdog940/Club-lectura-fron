import { CompLogin } from "../componentes/compLogin";
import estilos from "./vistaLogin.module.css";


export const VistaLogin = () => {

  return (
    <div className={estilos.container}>
        <CompLogin estilos={estilos}/>
    </div>
  );
}