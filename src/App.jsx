import Home from './pages/Home';
import Filter from './pages/Filter';
import Search from './pages/Search'
import Navbar from "./components/Navbar";
import ViewCocktail from './pages/ViewCocktail';
import { 
  Routes,
  Route,
} from "react-router";

function App() {

  return (
    <div className='container-lg'>
      <Navbar />
      <Routes>
        <Route path="/cocktails-react/" element={<Home />}></Route>
        <Route path="/search/:name" element={<Search />}></Route>
        <Route path="/filter/:alc" element={<Filter />}></Route>
        <Route path="/cocktail/:id" element={<ViewCocktail />}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
