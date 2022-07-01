import Members from "./components/Members";
import data from "./data.json";
import Assistants from "./components/Assistants"

//Geçen haftaki ödev üzerinden asistan ve asistan olmayanların ayrıştırılması 
let assistants = data.filter(person => person.assistant)
let members = data.filter(person => !person.assistant)

function App() {

  return (
    <header>
      <h1 className="title">Kodluyoruz React Bootcamp - Odev 2</h1>
      {assistants.map(x =>  
      <Assistants key={x.id} data={x} />
      )} {/* Data içerisinde asistanları bulan ve component içine yerleştiren map*/}
      {members.map(x => 
      <Members key={x.id} data={x}/>
      )} {/* Data içerisinde asistan olmayanları bulan ve component içine yerleştiren map*/}
    </header>
  );
}

export default App;
