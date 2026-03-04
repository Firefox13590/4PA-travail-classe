import { useState } from "react";
import "./Appli.css";
import Entete from "./Entete";
import Pied2Page from "./Pied2Page";
import Principal from "./Principal";
import Accueil from "./Accueil";
import { Route, Routes } from "react-router-dom";



export default function Appli() {
    const [panier, setPanier] = useState<IProduit>(
        () => JSON.parse(localStorage.getItem('panier-teetim') as string) || {}
    );


    return (
        <div className="Appli">
            <Entete panier={panier} />
            <Routes>
                <Route path="/4PA-travail-classe/" element={<Accueil />} Component={Accueil} />
                <Route path="/4PA-travail-classe/teeshirts" element={<Principal setPanier={setPanier} panier={panier} />} />
            </Routes>

            {/* <Principal setPanier={setPanier} panier={panier} /> */}
            {/* <Accueil /> */}
            <Pied2Page />
        </div>
    );
}
