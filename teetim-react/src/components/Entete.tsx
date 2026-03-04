import './Entete.css';
import logo from '../assets/images/logo.png';
import { formatterMontant } from '../code/utils'
import { Link, NavLink } from 'react-router-dom';



export default function Entete(props: IPropEntete) {
    const arrayValPanier = Object.values(props.panier);
    const sommaire = arrayValPanier.reduce(
        (acc, cur) => [
            acc[0] + cur.qte,
            acc[1] + (cur.prix * cur.qte)
        ],
        [0, 0]
    ).map((val, i) => {
        if (i % 2) {
            formatterMontant(val);
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
                {/* <a className="logo" href="#"><img src={logo} alt="Accueil" /></a> */}
                <Link className='logo' to="/"><img src={logo} alt="Accueil" /></Link>
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
                {/* <a href="#" className="actif">Teeshirts</a> */}
                <NavLink to="/teeshirts" className={({isActive}) => isActive ? "actif" : ""}>Teeshirts</NavLink>
                <a href="#" className="">Casquettes</a>
                <a href="#" className="">Hoodies</a>
                <span className="separateur"></span>
                <a href="#" className="">Aide</a>
                <a href="#" className="">À propos de nous</a>
            </nav>
        </header>
    )
}