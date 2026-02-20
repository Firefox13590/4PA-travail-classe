import { useState } from 'react';
import './Appli.css';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import Principal from './Principal';

export default function Appli() {

  const [panier, setPanier] = useState({});

  return (
    <div className="Appli">
      <Entete/>
      <Principal/>
      <Pied2Page/>
    </div>
  )
}