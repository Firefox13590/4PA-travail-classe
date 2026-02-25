


/* 
            Structures des données
*/
interface IProduit {
    [id: string]: {
        prix: number,
        qte: number,
    };
}

interface ITeeshirtProduit {
    id: string,
    categorie: string,
    nom: string,
    prix: number,
    dac: string,
    ventes: number,
}



/* 
            Propriétés des composants
*/
interface IPropEntete {
    panier: IProduit,
}

interface IPropPrincipal {
    panier: IProduit,
    setPanier: React.Dispatch<React.SetStateAction<IProduit>>,
}
