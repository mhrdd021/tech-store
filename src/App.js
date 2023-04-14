import "./App.css";
//Data
import { HeroData, ProductsData } from "./data/data";
//components
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <HomePage HeroData={HeroData} ProductsData={ProductsData} />
    </div>
  );
}

export default App;
