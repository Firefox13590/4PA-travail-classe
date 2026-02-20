import { useState } from 'react';
import './Appli.css';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import Principal from './Principal';
import produits from './data/teeshirts.json';


export default function Appli() {
  const test = {
    "ts0001": {
      prix: 25.95,
      qte: 69
    },
    "ts0004": {
      prix: 25.95,
      qte: 420
    }
  }
  const [panier, setPanier] = useState({});


  return (
    <div className="Appli">
      <Entete panier={panier}/>
      <Principal setPanier={setPanier} panier={panier}/>
      <Pied2Page/>
    </div>
  )
}