export default function formatterMontant(montant: number, locale: (string | string[])){
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'CAD',
    }).format(montant)
}

export function formatterDate(){

}

