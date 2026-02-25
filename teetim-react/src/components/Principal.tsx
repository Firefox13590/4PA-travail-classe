import ListeProduits from './ListeProduits';
import './Principal.css';



export default function Principal(props: IPropPrincipal) {
    // const [filtre, setFiltre] = useState("tous");
    // const [tri, setTri] = useState("random");

    return (
        <main className='Principal page-produits page-teeshirts'>
            <article className="amorce">
                <h1>Nos teeshirts</h1>
                <section className="controle">
                    <form action="" method="get">
                        <div className="filtre">
                            <label htmlFor="filtre">Filtrer par : </label>
                            <select name="filtre" id="filtre">
                                <option value="tous">Tous les produits</option>

                                <option value="1">Animaux</option>
                                <option value="2">Inusité</option>
                                <option value="4">Nature</option>
                                <option value="3">Sport</option>
                            </select>
                        </div>
                        <div className="tri">
                            <label htmlFor="tri">Trier par : </label>
                            <select name="tri" id="tri">
                                <option value="RAND()">Aléatoire</option>
                                <option value="prix ASC">Prix / ascendant</option>
                                <option value="prix DESC">Prix / descendant</option>
                                <option value="nom ASC">Nom / ascendant</option>
                                <option value="nom DESC">Nom / descendant</option>
                                <option value="dac DESC">Nouveauté</option>
                                <option value="ventes DESC">Meilleur vendeur</option>
                            </select>
                        </div>
                    </form>
                </section>
            </article>

            <ListeProduits {...props}/>
        </main>
    )
}