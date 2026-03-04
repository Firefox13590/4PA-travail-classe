import './ListeProduits.css';
import Produit from './Produit';
import produits from '../data/teeshirts.json';
import { fonctionsComparaisonFiltre } from '../code/utils';


export default function ListeProduits(props: IPropPrincipal & {filtre: Filtre} & {tri: Tri}) {


    return (
        <section className='ListeProduits'>
            {
                // array method: filter()
                produits
                .filter(prd => prd.theme === props.filtre || props.filtre === 'tous')
                .sort(fonctionsComparaisonFiltre[props.tri])
                .map((prd: ITeeshirtProduit) => <Produit key={prd.id} {...prd} {...props}/>)
            }
        </section>
    )
}