import React, {useState} from "react";
import { Link } from "react-router";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {

    const [name, setName] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setName(newValue);
    }

    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a href="/cocktails-react" className="navbar-brand text-warning text-brand ms-4 h-100">Home <LocalBarIcon /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <SearchIcon />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto  my-lg-0 navbar-nav-scroll text-center" style={{scrollHeight: '100px'}}>                          
                            <li className="nav-item dropdown mx-5">                        
                                <button type="button" className="btn nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter by Alcoholic
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark drop-menu">
                                    <li><Link to="/filter/Alcoholic" className="dropdown-item text-warning" >Alcoholic Cocktails</Link></li>
                                    <li><Link to="/filter/Non_Alcoholic" className="dropdown-item text-warning">Non Alcoholic Cocktails</Link></li>                                
                                </ul>
                            </li>                        
                        </ul>
                        <form className="d-flex mx-3" role="search">
                            <input 
                                className="form-control" 
                                type="search" 
                                value={name}
                                placeholder="Find cocktails by name" 
                                aria-label="Search" 
                                onChange={handleChange}
                            />
                            
                            <Link to={name ? "/search/" + name : "/cocktails-react"}>
                                <button                
                                    className="btn btn-warning" 
                                    type="submit"
                                    onClick={() => {
                                        setName("");
                                    }}
                                    >
                                    <link rel="icon" type="image/svg+xml"/><SearchIcon />
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
                </nav>
            

            
        </div>
    )
}

export default Navbar;