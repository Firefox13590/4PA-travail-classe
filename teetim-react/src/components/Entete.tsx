import './Entete.css';
import logo from '../assets/images/logo.png';
import formatterMontant from '../code/utils'


export default function Entete(props: IPropEntete) {
    // Code imperatif ===> pipi caca fesse
    // let nbArticles = 0;
    // let sousTotal = 0;
    // for(let idArticle in props.panier){
    //     nbArticles += props.panier[idArticle].qte;
    //     sousTotal += props.panier[idArticle].qte * props.panier[idArticle].prix;
    // }

    // Utiliser Array.reduce() sur tableau de valeurs de panier
    // console.log(props.panier);
    const arrayValPanier = Object.values(props.panier);
    // console.log(arrayValPanier);
    // Beau code declaratif (expressif, fonctionnel)
    // const nbArticles: number = arrayValPanier.reduce(
    //     (accumulateur: number, elemCourant) => elemCourant.qte + accumulateur,
    //     0
    // );
    // const sousTotal = formatterMontant(arrayValPanier.reduce(
    //     (total: number, el) => total + (el.prix * el.qte),
    //     0
    // ), 'fr-CA');
    // console.log(formatterMontant(sousTotal, 'fr-CA'));
    const sommaire = arrayValPanier.reduce(
        (acc, cur) => [
            acc[0] + cur.qte,
            acc[1] + (cur.prix * cur.qte)
        ],
        [0, 0]
    ).map((val, i) => {
        if(i % 2){
            formatterMontant(val, 'fr-CA');
        }
        return val
    });
    // console.log(nbArticles, sousTotal);
    // console.log(sommaire);


    return (
        <header className='Entete'>
            <nav className="barre-haut">
                <a title="ENGLISH" href="#" className="">en</a>
                <a title="FRANÇAIS" href="#" className="actif">fr</a>

            </nav>
            <nav className="barre-logo">
                <label htmlFor="cc-btn-responsive" className="material-icons burger">menu</label>
                <a className="logo" href="#"><img src={logo} alt="Accueil" /></a>
                <div className="panier-icone">
                    <div className="panier-badge ">{sommaire[0]}</div>
                    <label htmlFor="panier-cc" className="material-icons">shopping_cart</label>
                    <input type="checkbox" id="panier-cc" />
                    <div className="sommaire-panier">
                        <div className="ligne1">
                            <span className="nb-articles">
                                <span className="etiquette">#Articles : </span>
                                <span className="nombre">{sommaire[0]}</span>
                            </span>
                            <label htmlFor="panier-cc" className="material-icons">close</label>
                        </div>
                        <div className="ligne2">
                            <span className="sous-titre">Sous-total du panier</span>
                            <span className="sous-total">{formatterMontant(sommaire[1], 'fr-CA')}</span>
                        </div>
                        <div className="ligne3 btn-afficher-panier">
                            <a href="#">Voir le panier d'achats</a>
                        </div>
                    </div>
                </div>
                <input className="recherche" type="search" name="motscles" placeholder="Mots-clés de votre recherche" />
            </nav>
            <input type="checkbox" id="cc-btn-responsive" />
            <nav className="principale">
                <label htmlFor="cc-btn-responsive" className="menu-controle material-icons">close</label>
                <a href="#" className="actif">Teeshirts</a>
                <a href="#" className="">Casquettes</a>
                <a href="#" className="">Hoodies</a>
                <span className="separateur"></span>
                <a href="#" className="">Aide</a>
                <a href="#" className="">À propos de nous</a>
            </nav>
        </header>
    )
}