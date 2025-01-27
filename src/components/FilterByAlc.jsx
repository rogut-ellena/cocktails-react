import React, {useState} from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { Link } from "react-router"


function FilterByAlc() {

    const {alc} = useParams();
    const [cocktails, setCocktails] = useState([]);

    async function getCocktailsByAlc() {
        try {
                const result = await axios.post(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alc}`);
                setCocktails(result.data.drinks);
            } catch (error) {
                console.error(error);
            }
        }

    useEffect(() => {
        getCocktailsByAlc(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [alc]);

    return (
        <div>
            <h1 className="my-4 text-center" > {alc === "Alcoholic" ? "Alcoholic Cocktails" : "Non Alcoholic Cocktails"}</h1>
            <div className="row .container-fluid">
                {cocktails.map((cocktail) => ( 
                    
                    <div className="col-lg-4 col-md-6 col-xxl-3 text-center my-5" key={cocktail.idDrink}>
                        <Link to={"/cocktail/" + cocktail.idDrink}>
                        <img src={cocktail.strDrinkThumb} className="rounded-circle" alt={cocktail.strDrink} />
                        <div className="card-body ">
                            <h4 className="card-title my-2 coct-title">
                                {cocktail.strDrink}
                            </h4>
                          
                        </div>
                        </Link> 
                    </div>
                    
                )) }
                               
            </div>
        </div>
    );
}

export default FilterByAlc;