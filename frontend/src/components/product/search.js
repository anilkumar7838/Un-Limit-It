import React ,{useState} from 'react'
import "./search.css";
import MetaData from '../views/metaData';
import history from './history';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate();
    const [keyword,setKeyword] = useState("");
    const searchSubmitHandler=(e)=>{
        e.preventDefault();
        if(keyword.trim()){
            history.push(`/products/${keyword}`);
            navigate("/products/"+keyword);
            
        }else{
            history.push(`/products`);
            navigate("/products");
        }
    };

  return (
    <div className="search">
        <MetaData title="Search A Product -- Un-Limit-It" />
        <form onSubmit={searchSubmitHandler} className="searchBox">
        <input type="text" placeholder='Search a Product ....'
        onChange={(e)=>setKeyword(e.target.value)}/>
        <input type="submit" value="Search"/>
        </form>
    </div>
  )
}

export default Search