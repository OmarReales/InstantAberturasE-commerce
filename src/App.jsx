import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let saludo = "Hola mundo";
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={saludo} />
    </div>
  );
}

export default App;
