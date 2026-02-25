import { useEffect } from 'react';
import './Produit.css';



// export default function Produit({ id, nom, prix, ventes, panier, setPanier }: {id: string, nom: string, prix: number, ventes: number, panier: IProduit, setPanier: React.Dispatch<React.SetStateAction<IProduit>>}) {
export default function Produit({ id, nom, prix, ventes, panier, setPanier }: ITeeshirtProduit & IPropPrincipal) {


    /* 
    2e arg: deps[]
    
    pas de 2e arg: run a chaque (any) useState
    deps vide []: run a chaque refresh page
    deps avec valeur(s) [balls]: run quand valeur(s) change
    */
    useEffect(() => {
        localStorage.setItem('panier-teetim', JSON.stringify(panier));
    }, [panier]);


    function ajouterArticle() {
        if (panier[id]) {
            // panier[id].qte++;
            setPanier((prev) => ({
                ...prev,
                [id]: {
                    prix: panier[id].prix,
                    qte: panier[id].qte++,
                },
            }));
        }
        else {
            // panier[id] = { prix: prix, qte: 1 };
            setPanier((prev) => ({
                ...prev,
                [id]: {
                    prix: prix,
                    qte: 1,
                },
            }))
        }
        // console.log(panier);
        // setPanier({...panier});
    }


    return (
        <article className='Produit'>
            <span className="ventes">{ventes}</span>
            <span className="image">
                <img src={`/images/produits/teeshirts/${id}.webp`} alt={nom} />
            </span>
            <div className="prd-info">
                <span className="nom">{nom}</span>
                <span className="prix">
                    <span className="montant">
                        {prix}
                    </span>
                    $
                </span>
            </div>
            <button className="btn-ajouter"
                onClick={ajouterArticle}>Ajouter au panier
            </button>
        </article>
    )
}