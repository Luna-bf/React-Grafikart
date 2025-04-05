const greeting = 'Hello World !';
const congrats = 'Congratulations, that\'s awesome !';
const awesome = 'awesome';
const myStyle = {color: 'red', backgroundColor: 'pink', textAlign: 'center'}; {/*On peut aussi intégrer du style avec une variable*/}
const showTitle = true;
const showAnotherTitle = false;
const tasks = [
  'Comprendre React',
  'Suivre un cours Node.js',
  'Savoir utiliser la base de donnée MongoDB',
  'Créer un petit projet qui combine les trois',
];

function App() {

  {/*Je créé ma fonction handleClick et je la passe à la balise désirée avec l'attribut onClick*/}
  const handleClick = () => {

    alert('J\'ai cliqué sur le h1')

  }

  return <> {/* On peux aussi déclarer une balise vide comme élément racine */}

    <h1 id='title' className='good' onClick={handleClick}>Bonjour les gens</h1> {/* className = class */}

    <Title>Mon composant</Title> {/*Mon composant peut se trouver n'importe tout tant qu'il est dans le return, sinon il ne sera pas détectée par le navigateur*/}
                                 {/*Ici, le texte 'Mon composant est l'enfant du composant Title, il affiche malgré tout ce que la function Title
                                 lui demande d'afficher, soit 'Bonjour les gens'*/}

    <Paragraph color='powderblue' /> {/*Les composants personnalisés comme celui-ci seront toujours écrit en PascalCase*/}

    <h3 className={awesome}>{congrats}</h3> {/*On aussi interpoler des variables dans les attributs, exemple : className*/}

    {/*On peut aussi déclarer la fonction handleClick directement dans la balise mais c'est déconseillé car le code devient difficile à lire*/}
    <h4 onClick={() => alert('Bonjour')}>Un titre h4</h4>

    {/*On peut utiliser les ternaires afin d'afficher ou non un élément en fonction de la valeur d'un booléen (true ou false)*/}
    {showTitle && <h5 style={{color: 'forestgreen'}}>Mon booléen est à true</h5>} {/*Si la variable showTitle est égale à true, alors tu me montre le titre h5*/}


    {/*Autre exemple avec l'équivalent ternaire de if else*/}
    {
    
      showAnotherTitle ? <h6 style={{color: 'midnightblue'}}>Mon booléen est égal à true</h6> :
      <p>showAnotherTitle est égal à false</p>
    
    } {/*Si (?) showAnotherTitle est égal à true alors tu me montre le titre h6, sinon (:) tu me montre le paragraphe*/}

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eveniet iste, blanditiis itaque dolor unde esse? Recusandae cum officia sapiente tempore mollitia, distinctio amet, porro numquam nisi cupiditate magni maiores repudiandae minima ut earum odit eos fuga sed omnis saepe iure necessitatibus. Nihil, incidunt rem soluta quis voluptate eum nobis.  
    </p>

    <p style={{color: 'blue', backgroundColor: 'gold'}}>Blue paragraph</p>
    
    {/*
      - Si on veut changer le style, on doit passer les valeurs sous forme d'objet
      - Attention, les propriétés devront toujours être écrites en camelCase, par exemple : background-color devient backgroundColor
    */}

    <div style={myStyle}>Le style intégré par une variable myStyle</div>

    <input type='radio' /> {/*Les balises doivent toujours être fermées */}

    <ul>
      {tasks.map(task => (<li key={task}>{task}</li>))} {/*map() permet de parcourir un tableau, ici je lui demande de parcourir le tableau tasks et de créer une balise li pour chaque éléments parcourus*/}
    </ul> {/*La console retourne une erreur car il est impératif d'avoir une clé pour identifier les différents éléments du tableau. Ici, ma clé sera tout simplement le nom de ma tâche*/}

  </>
}

function Title ({children}) { {/*Ici, je peux demander à Title d'afficher son enfant, soit le texte 'Mon composant' que je lui ai donné si-dessus*/}
  return <h2>{children}</h2>; {/*Au lieu de la variable greeting, je lui demande donc d'afficher son enfant : 'Mon composant'*/}
}

function Paragraph ({color}) { {/*On peut donner un paramètre 'props', qui contiendra un objet contenant la propriété color*/}
  return <p style={{color: color}}>Un composant paragraphe</p>; {/*Je pourrais mettre la propriété color dans l'attribut style afin de simplifier le code, 
                                                                 la propriété de l'attribut style retournera la couleur actuelle de mon paragraphe, 
                                                                 ce qui me permet de changer la couleur de mon paragraphe plus facilement*/}
}

export default App
