import './App.css';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.css';
import cardimg from './images/card-img.png'
function App() {
  return (
    <div className="App">
    <h1>Dynamic Cards</h1>
    <div className="cards">
    <Cards
    img={cardimg}
    name="First card"
    para="this is first card para "
    last="Last updated 3 mins ago"
    ></Cards>
   <Cards
    img={cardimg}
    name={"Sec card"}
    // number={2} we can pas numbers als0 in props
    // and we can pass array and number of objects also arry={[{id:0 ,name:"xc"},{id:1 ,name:"ac"}]}
    para="this is sec card para "
    last="Last updated 3 mins ago"
    ></Cards>
      <Cards
    img={cardimg}
    name="third card"
    para="this is third card para "
    last="Last updated 3 mins ago"
    ></Cards>
      <Cards
    img={cardimg}
    name="forth card"
    para="this is forth card para "
    last="Last updated 3 mins ago"
    ></Cards>
    </div>
   
    </div>
  );
}

export default App;
