interface IProduit {
    [id: string]: {
        prix: number;
        qte: number;
    };
}

interface ITeeshirtProduit {
    id: string;
    categorie: string;
    nom: string;
    prix: number;
    dac: string;
    ventes: number;
}
