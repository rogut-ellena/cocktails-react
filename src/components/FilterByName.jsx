import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const  FilterByName =  () => {

    const [cocktails, setCocktails] = useState([]);
    const {name} = useParams();
    

    const getCocktailsByName = async () => {
        try {
                const response = await axios.post(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
                setCocktails(response.data.drinks);
        } catch (error) {
                console.error(error)
        } 
    };
       
    useEffect(() => {   
        getCocktailsByName(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    function check(meas, ingr) {
        if(meas != null && ingr != null) {
            return(
                <li>
                    {meas} of { ingr}
                </li>
            )
        }
    }

    return (         
        <div>
            { (cocktails?.map((cocktail) => (
                <div className="container card-coctail row border border-white p-2" key={cocktail.idDrink}>
                    <div>
                        <h1 className="p-2 text-center">
                            {cocktail.strDrink}
                        </h1>
                    </div>
                    <div className="col-lg-6 col-xl-4 p-4">
                        <h4 className="p-2">Ingredients:</h4>
                        <ul>
                            {check(cocktail.strMeasure1, cocktail.strIngredient1)}
                            {check(cocktail.strMeasure2, cocktail.strIngredient2)}
                            {check(cocktail.strMeasure3, cocktail.strIngredient3)}
                            {check(cocktail.strMeasure4, cocktail.strIngredient4)}
                            {check(cocktail.strMeasure5, cocktail.strIngredient5)}
                            {check(cocktail.strMeasure6, cocktail.strIngredient6)}
                            {check(cocktail.strMeasure7, cocktail.strIngredient7)}
                            {check(cocktail.strMeasure8, cocktail.strIngredient8)}
                            {check(cocktail.strMeasure9, cocktail.strIngredient9)}
                            {check(cocktail.strMeasure10, cocktail.strIngredient10)}
                            {check(cocktail.strMeasure11, cocktail.strIngredient11)}
                            {check(cocktail.strMeasure12, cocktail.strIngredient12)}
                            {check(cocktail.strMeasure13, cocktail.strIngredient13)}
                            {check(cocktail.strMeasure14, cocktail.strIngredient14)}
                            {check(cocktail.strMeasure15, cocktail.strIngredient15)}
                        </ul>        
                    </div>

                    <div className="p-2 col-lg-6 col-xl-4 d-flex justify-content-center align-items-center">
                        <img className="rounded-circle" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    </div>

                    <div className="col-lg-12 col-xl-4 py-2 ps-4 ">
                        <h4 className="py-2 ps-4">Instructions:</h4>
                        <p className="ps-4">
                            {cocktail.strInstructions}
                        </p>
                    </div>
                </div>
            ))) }
        </div>
    )
}

export default FilterByName;