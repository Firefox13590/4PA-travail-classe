import { useState } from "react";
import "./Appli.css";
import Entete from "./Entete";
import Pied2Page from "./Pied2Page";
import Principal from "./Principal";



export default function Appli() {
    const [panier, setPanier] = useState<IProduit>(
        () => JSON.parse(localStorage.getItem('panier-teetim') as string) || {}
    );


    return (
        <div className="Appli">
            <Entete panier={panier} />
            <Principal setPanier={setPanier} panier={panier} />
            <Pied2Page />
        </div>
    );
}
