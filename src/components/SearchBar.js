import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function SearchBar({hidebutton=false}) {

    const [{},dispatch] = useStateValue();
    const [input,setInput] = useState('');
    const history = useHistory();
    
    const search = e => {
        
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SERCH_TERM,
            term: input
        })
        history.push("/search");
    }

    return (
            <form className="zomato_searchBar">
                <input type="text" className="zomato_input" value={input} onChange={e=> setInput(e.target.value)}/>
                <SearchIcon />
                {!hidebutton?(<button onClick={search} className="buttonShow"></button>):(<button onClick={search} className="buttonHide"></button>)}
            </form>

    )
}

export default SearchBar
