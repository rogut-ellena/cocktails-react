import React, {useState} from "react";
import { Link } from "react-router";
import LocalBarIcon from '@mui/icons-material/LocalBar';

function Navbar() {

    const [name, setName] = useState("");
    const [alcFilter, setAlcFilter] = useState();

    function handleChange(event) {
        const newValue = event.target.value;
        setName(newValue);
    }

    function handleAlcFilter(newFilter) {
        setAlcFilter(newFilter);
    }
   
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light  sticky-top">
                <a className="navbar-brand  text-white ms-4" href="/cocktails-react/home">Home <LocalBarIcon /> </a>
                <div className="row justify-content-between ms-5 w-100" >
                    <div className="col-md-6 col-sm-12">                    
                        <form className="d-inline-flex m-1 ">
                            <input 
                                className="form-control m-2" 
                                type="search" 
                                value={name}
                                placeholder="Find cocktails by name" 
                                aria-label="Search" 
                                onChange={handleChange}
                            />
                            
                            <Link to={"cocktails-react/search?byName=" + name}>
                                <button                
                                    className="btn btn-warning m-1" 
                                    type="submit"
                                    onClick={() => {
                                        setName("");
                                    }}
                                    >
                                    Search
                                </button>
                            </Link>
                        </form>
                    </div>
    
                    <div className="col-md-4 d-inline-flex">
                        <button 
                            className="btn btn-outline-warning m-3" 
                            type="button" 
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" 
                            aria-controls="offcanvasRight"
                            >
                            Filter by alcoholic
                        </button>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Filter by alcoholic:</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                value="Alcoholic" 
                                type="radio" 
                                name="check" 
                                id="flexRadioDefault1"
                                onChange={e => handleAlcFilter(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Alcoholic
                            </label>
                        </div>

                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                value="Non_Alcoholic" 
                                type="radio" 
                                name="check"
                                id="flexRadioDefault2" 
                                onChange={e => handleAlcFilter(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Non Alcoholic
                            </label>
                        </div>

                        <Link to={"cocktails-react/filter?byAlc=" + alcFilter}>
                            <button 
                                className="btn btn-primary m-2" 
                                type="submit"                   
                                >
                                Search
                            </button>
                        </Link>                            
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Navbar;