import React, {useState} from "react";
import { useEffect } from "react";
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import { Link } from "react-router"


function FilterByAlc() {

    const [searchParams] = useSearchParams();
    const alcFilter = searchParams.get("byAlc");
    const [cocktails, setCocktails] = useState([]);

    async function getCocktailsByAlc() {
        try {
                const result = await axios.post(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcFilter}`);
                setCocktails(result.data.drinks);
            } catch (error) {
                console.error(error);
            }
        }

    useEffect(() => {
        getCocktailsByAlc(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alcFilter]);

    return (
        <div>
            <h1 className="my-4 text-center" > {alcFilter.replace("_", " ")} Coctails</h1>
            <div className="row .container-fluid">
                {cocktails.map((cocktail) => (
                    <div className="col-lg-4 col-md-6 col-xxl-3 text-center my-5" key={cocktail.idDrink}>
                        <img src={cocktail.strDrinkThumb} className="rounded-circle" alt={cocktail.strDrink} />
                        <div className="card-body ">
                            <h4 className="card-title my-2 coct-title">
                                {cocktail.strDrink}
                            </h4>
                            <form>
                                <Link to={"/cocktails-react/cocktail/" + cocktail.idDrink}>
                                    <button 
                                        type="submit" 
                                        value={cocktail.idDrink}                                             
                                        className="btn btn-sm btn-outline-secondary "
                                        >
                                        Go to the recipe
                                    </button>
                                </Link>                                        
                            </form>
                        </div>

                    </div>
                )) }
                               
            </div>
        </div>
    );
}

export default FilterByAlc;