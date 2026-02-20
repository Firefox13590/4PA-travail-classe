import './Appli.css';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import Principal from './Principal';

export default function Appli() {

  return (
    <div className="Appli">
      <Entete/>
      <Principal/>
      <Pied2Page/>
    </div>
  )
}