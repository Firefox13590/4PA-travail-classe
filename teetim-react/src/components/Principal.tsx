import { useState } from 'react';
import ListeProduits from './ListeProduits';
import './Principal.css';



export default function Principal(props: IPropPrincipal) {
    const [filtre, setFiltre] = useState<Filtre>("tous");
    // console.log('etat du filtre: ', filtre);
    const [tri, setTri] = useState<Tri>("aleatoire");
    // console.log('etat du tri: ', tri);


    return (
        <main className='Principal page-produits page-teeshirts'>
            <article className="amorce">
                <h1>Nos teeshirts</h1>
                <section className="controle">
                    <form>
                        <div className="filtre">
                            <label htmlFor="filtre">Filtrer par : </label>
                            <select
                                name="filtre"
                                id="filtre"
                                value={filtre}
                                onChange={(e) => setFiltre(e.target.value as Filtre)}
                            >
                                <option value="tous">Tous les produits</option>
                                <option value="animaux">Animaux</option>
                                <option value="inusite">Inusité</option>
                                <option value="nature">Nature</option>
                                <option value="sport">Sport</option>
                            </select>
                        </div>
                        <div className="tri">
                            <label htmlFor="tri">Trier par : </label>
                            <select
                                name="tri"
                                id="tri"
                                value={tri}
                                onChange={(e) => setTri(e.target.value as Tri)}
                            >
                                <option value="aleatoire">Aléatoire</option>
                                <option value="prix_ASC">Prix / ascendant</option>
                                <option value="prix_DESC">Prix / descendant</option>
                                <option value="nom_ASC">Nom / ascendant</option>
                                <option value="nom_DESC">Nom / descendant</option>
                                <option value="dac_DESC">Nouveauté</option>
                                <option value="ventes_DESC">Meilleur vendeur</option>
                            </select>
                        </div>
                    </form>
                </section>
            </article>

            <ListeProduits {...props} filtre={filtre} tri={tri} />
        </main>
    )
}