import {useState, useEffect} from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { Link } from "react-router";

function Cocktail({id, filter }) {
    //console.log(filter);
    
    let recipe = [];
    const [cocktail, setCocktail] = useState({
        cocktailName: null, 
        cocktailImg: null,
        cocktailInstructions: null,
        cocktailIngredients: []
    }); // eslint-disable-next-line react-hooks/exhaustive-deps

    async function  getRandomCocktail () {
        try {
            const cocktailLink = id ? `lookup.php?i=${id}` : "random.php";
            const result = await axios.post("https://www.thecocktaildb.com/api/json/v1/1/" + cocktailLink);
            const re = result.data.drinks[0];
        
            checkCocktails(re);

            setCocktail({
                cocktailName: re.strDrink,
                cocktailImg: re.strDrinkThumb,
                cocktailInstructions: re.strInstructions,
                cocktailIngredients: recipe
            });
        } catch (error) {
            console.log(error.message);
        }   
    }

    useEffect(() => {
        getRandomCocktail(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function check(ingr, cant) {
        if (cant != null && ingr != null) {
            recipe.push(cant + " of " + ingr)
        } else {
            return null;
        }
    }

    function checkCocktails(cockt) {
        check(cockt.strIngredient1, cockt.strMeasure1);
        check(cockt.strIngredient2, cockt.strMeasure2);
        check(cockt.strIngredient3, cockt.strMeasure3);
        check(cockt.strIngredient4, cockt.strMeasure4);
        check(cockt.strIngredient5, cockt.strMeasure5);
        check(cockt.strIngredient6, cockt.strMeasure6);
        check(cockt.strIngredient7, cockt.strMeasure7);
        check(cockt.strIngredient8, cockt.strMeasure8);
        check(cockt.strIngredient9, cockt.strMeasure9);
        check(cockt.strIngredient10, cockt.strMeasure10);
        check(cockt.strIngredient11, cockt.strMeasure11);
        check(cockt.strIngredient12, cockt.strMeasure12);
        check(cockt.strIngredient13, cockt.strMeasure13);
        check(cockt.strIngredient14, cockt.strMeasure14);
        check(cockt.strIngredient15, cockt.strMeasure15);
    }

    return (
        <div className="container row border border-white card-cocktail p-4"> 
        <Link to={"/filter/" + filter}>
         <h3>{filter ? "Back to: " + filter.replace("_", " ") + " Cocktails" : ""}</h3>  
        </Link>
       

            <div className="col-lg-6 d-flex justify-content-center align-items-center p-2">
                <img 
                    className="m-1"
                    src={cocktail.cocktailImg} 
                    alt={cocktail.cocktailName} 
                    style={{borderRadius: "50%"}} 
                />
            </div>

            <div className="col-lg-6">
                <h1 >
                    {cocktail.cocktailName}
                </h1>
                <h4 className="p-2">Ingredients:</h4>
                <ul>
                    {cocktail.cocktailIngredients.map((recipe, index) => (
                        <Recipe 
                            key={index}
                            id={index}
                            text={recipe}
                        />
                    ))}                
                </ul>
                <h4 className="p-2">Instructions:</h4>
                <p className="p-2">
                    {cocktail.cocktailInstructions}
                </p>
            </div>
        </div>
    );
}

export default Cocktail;