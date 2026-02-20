import './ListeProduits.css';
import Produit from './Produit';
import produits from './data/teeshirts.json';


export default function ListeProduits(props) {

    return (
        <section className='ListeProduits'>
            {
                produits.map(prd => <Produit key={prd.id} {...prd}/>)
            }
        </section>
    )
}