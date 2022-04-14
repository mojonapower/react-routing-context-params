import React ,{useEffect,useContext} from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

function Perfil() {
    const {store, actions} = useContext(Context)
    const {posicion} = useParams();
    useEffect(()=>{
        actions.loadSomeData()
        
    },[])
  return (
    <div className="container"> 
      
      <h1>Este es mi perfil, bienvenid@</h1>
        <h3>Hola! mi nombre es: { store.personas[posicion]?.nombre}</h3>
        <h3> Mi pasatiempo es {store.personas[posicion]?.hobby}</h3>
        <img src={store.personas[posicion]?.img} width="200"/>
    </div>
  );
}
export default Perfil;