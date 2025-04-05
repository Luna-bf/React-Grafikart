const greeting = 'Hello World !';
const congrats = 'Congratulations, that\'s awesome !';
const awesome = 'awesome';
const myStyle = {color: 'red', backgroundColor: 'pink', textAlign: 'center'}; {/*On peut aussi intégrer du style avec une variable*/}
const showTitle = true;
const showAnotherTitle = false;

function App() {

  {/*Je créé ma fonction handleClick et je la passe à la balise désirée avec l'attribut onClick*/}
  const handleClick = () => {

    alert('J\'ai cliqué sur le h1')

  }

  return <> {/* On peux aussi déclarer une balise vide comme élément racine */}
    
    <h1 id="title" className="good" onClick={handleClick}>Bonjour les gens</h1> {/* className = class */}
    
    <h2>{greeting}</h2> {/*Pour interpoler des variables entre des balises, il faut déclarer son nom dans des accolades {}*/}

    <h3 className={awesome}>{congrats}</h3> {/*On aussi interpoler des variables dans les attributs, exemple : className*/}

    {/*On peut aussi déclarer la fonction handleClick directement dans la balise mais c'est déconseillé car le code devient difficile à lire*/}
    <h4 onClick={() => alert('Bonjour')}>Un titre h4</h4>

    {/*On peut utiliser les ternaires afin d'afficher ou non un élément en fonction de la valeur d'un booléen (true ou false)*/}
    {showTitle && <h5 style={{color: 'forestgreen'}}>Mon booléen est à true</h5>} {/*Si la variable showTitle est égale à true, alors tu me montre le titre h5*/}


    {/*Autre exemple avec l'équivalent ternaire de if else*/}
    {showAnotherTitle ? <h6 style={{color: 'midnightblue'}}>Mon booléen est égal à true</h6> : <p>showAnotherTitle est égal à false</p>} {/*Si (?) showAnotherTitle est égal à true alors tu me montre le titre h6, sinon (:) tu me montre le paragraphe*/}


    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eveniet iste, blanditiis itaque dolor unde esse? Recusandae cum officia sapiente tempore mollitia, distinctio amet, porro numquam nisi cupiditate magni maiores repudiandae minima ut earum odit eos fuga sed omnis saepe iure necessitatibus. Nihil, incidunt rem soluta quis voluptate eum nobis.  
    </p>

    <p style={{color: 'blue', backgroundColor: 'gold'}}>Blue paragraph</p>
    
    {/*
      - Si on veut changer le style, on doit passer les valeurs sous forme d'objet
      - Attention, le background-color devra toujours être écrit en camelCase, c'est à dire : backgroundColor
    */}

    <div style={myStyle}>Le style intégré par une variable myStyle</div>

    <input type="radio" /> {/*Les balises doivent toujours être fermées */}

  </>
}

export default App
