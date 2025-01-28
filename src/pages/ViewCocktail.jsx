import React from "react";
import {useParams} from "react-router-dom";
import Cocktail from "../components/Cocktail";

function ViewCocktail({ filter }) {
   
    const {id} = useParams();


    return (
        <div>
            <Cocktail id= {id} filter={ filter } />
        </div>
    );
}

export default ViewCocktail;