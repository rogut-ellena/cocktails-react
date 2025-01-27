import React from "react";
import {useParams} from "react-router-dom";
import Cocktail from "../components/Cocktail";

function ViewCocktail() {
    
    const {id} = useParams();

    return (
        <div>
            <Cocktail id= {id} />
        </div>
    );
}

export default ViewCocktail;