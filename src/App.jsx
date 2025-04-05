const greeting = 'Hello World !'
const congrats = 'Congratulations, that\'s awesome !'
const awesome = 'awesome'

function App() {
  return <> {/* On peux aussi déclarer une balise vide comme élément racine */}
    <h1 id="title" className="good">Bonjour les gens</h1> {/* className = class */}
    <h2>{greeting}</h2> {/*Pour interpoler des variables entre des balises, il faut déclarer son nom dans des accolades {}*/}

    <h3 className={awesome}>{congrats}</h3> {/*On aussi interpoler des variables dans les attributs, exemple : className*/}

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eveniet iste, blanditiis itaque dolor unde esse? Recusandae cum officia sapiente tempore mollitia, distinctio amet, porro numquam nisi cupiditate magni maiores repudiandae minima ut earum odit eos fuga sed omnis saepe iure necessitatibus. Nihil, incidunt rem soluta quis voluptate eum nobis.  
    </p>

    <input type="radio" /> {/*Les balises doivent toujours être fermées */}
  </>
}

export default App
