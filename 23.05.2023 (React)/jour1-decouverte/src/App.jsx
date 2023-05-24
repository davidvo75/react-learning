// sélectionner tout le contenu du fichier App.jsx
// supprimer tout
// à la place du code précédent
// je viens de créer un composant
// dans un composant vous avez 2 parties principales :

// 1ère partie fonction javascript classique
// nom de la fonction, la première lettre en Majuscule
// ()
// {}
// dans les accolades, le minimum return
// juste après le return <div>Bonjour</div>
// et pas de ;
// ce n'est pas une string javascript
// c'est du jsx (qui communique avec le VIRTUAL DOM)

// 2ème et dernière partie le composant si je veux pouvoir l'utiliser dans un autre fichier .jsx
// je dois l'exporter avec export default App;

import "bootstrap/dist/css/bootstrap.min.css"; // ajouter la librairie dans votre projet react
import Premier from "./composant/Premier";
import Deuxieme from "./composant/Deuxieme";
import Troisieme from "./composant/Troisieme";
import Quatrieme from "./composant/Quatrieme";
import Cinquieme from "./composant/Cinquieme";
import Sixieme from "./composant/Sixieme";
import Septieme from "./composant/Septieme";
import Event from "./composant/Event";

function App() {
  return <div className="row">
      <section className="col-4">
        Bonjour
      </section>
      <section className="col-4">
        <p className="alert bg-success text-white border-blue text-center">test</p>
        <Premier /> {/** Premier() */}
      </section>
      <section className="col-4">
        <Deuxieme />
      </section>
      <section className="col-4">
        <Troisieme />
      </section>
      <section className="col-4">
        <Quatrieme />
      </section>
      <section className="col-4">
        <Cinquieme />
      </section>
      <section className="col-4">
        <Sixieme />
      </section>
      <section className="col-4">
        <Septieme />
      </section>
      <section className="col-4">
        <Event />
      </section>
    </div>
}

export default App;
// {/** */} commentaire en jsx