import './ListeProduits.css';
import Produit from './Produit';
import produits from './data/teeshirts.json';


export default function ListeProduits(props: {panier: IProduit, setPanier: React.Dispatch<React.SetStateAction<IProduit>>}) {

    return (
        <section className='ListeProduits'>
            {
                produits.map((prd: ITeeshirtProduit) => <Produit key={prd.id} {...prd} {...props}/>)
            }
        </section>
    )
}