
/* 
            Structures de données
*/
/**
 * Structure de données d'un produit dans le panier
 */
interface IProduit {
    [id: string]: {
        prix: number,
        qte: number,
    };
}
/**
 * Structure de données d'un produit Teeshirt
 */
interface ITeeshirtProduit {
    id: string,
    theme: string,
    nom: string,
    prix: number,
    dac: string,
    ventes: number,
}



/* 
            Propriétés des composants
*/
/**
 * Propriétés du composant Entete
 */
interface IPropEntete {
    panier: IProduit,
}
/**
 * Propriétés du composant Principal
 */
interface IPropPrincipal {
    panier: IProduit,
    setPanier: React.Dispatch<React.SetStateAction<IProduit>>,
}
