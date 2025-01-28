import React from "react";
import FilterByAlc from "../components/FilterByAlc";

function Filter({ handleFilter }) {
    return (
        <div>
            <FilterByAlc handleFilter={ handleFilter } />
        </div>
    );
}

export default Filter;