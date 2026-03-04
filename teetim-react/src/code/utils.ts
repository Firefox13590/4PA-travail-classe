export function formatterMontant(montant: number, locale: (string | string[]) = 'fr-CA'){
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'CAD',
    }).format(montant)
}

export function formatterDate(){

}



/* 
            Fonctions de comparaison pour le tir des produits
*/
export const fonctionsComparaisonFiltre = {
    aleatoire: () => Math.random() - .5,
    prix_ASC: (el1: ITeeshirtProduit, el2: ITeeshirtProduit) => el1.prix - el2.prix,
    prix_DESC: (el1: ITeeshirtProduit, el2: ITeeshirtProduit) => el2.prix - el1.prix,
    nom_ASC: (el1: ITeeshirtProduit, el2: ITeeshirtProduit) => el1.nom.localeCompare(el2.nom, 'fr-CA'),
    nom_DESC: (el1: ITeeshirtProduit, el2: ITeeshirtProduit) => el2.nom.localeCompare(el1.nom, 'fr-CA'),
    dac_DESC: (el1: ITeeshirtProduit, el2: ITeeshirtProduit) => el2.dac.localeCompare(el1.dac, 'fr-CA'),
    ventes_DESC: (el1: ITeeshirtProduit, el2: ITeeshirtProduit) => el2.ventes - el1.ventes,
}

