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
    <div className='container-xxl'>
      <Navbar />
      <Routes>
        <Route path="cocktails-react/home" element={<Home />}></Route>
        <Route path="cocktails-react/search" element={<Search />}></Route>
        <Route path="cocktails-react/filter" element={<Filter />}></Route>
        <Route path="cocktails-react/cocktail/:id" element={<ViewCocktail />}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
