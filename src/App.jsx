import {useState} from 'react';
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
  const [filter, setFilter] = useState(null );
  function handleFilter(e) {
    setFilter(e.target.getAttribute("value"));
  }

  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/cocktails-react/" element={<Home />}></Route>
        <Route path="/search/:name" element={<Search />}></Route>
        <Route path="/filter/:alc" element={<Filter handleFilter={handleFilter} />}></Route>
        <Route path="/cocktail/:id" element={<ViewCocktail filter={filter}/>}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
