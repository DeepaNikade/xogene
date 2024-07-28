import React, { useState } from 'react';


const SearchBar = ({onSearch}) => {

    const [searchTerm,setSearchTerm]=useState('');

    const handelSearch=()=>{
        if(searchTerm.trim()){
            onSearch(searchTerm.trim())
        }
    }

    const handelKeyPress=(e)=>{
        if(e.key === 'Enter'){
            handelSearch();
        }
    }
  return (
    <div>
        <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
        onKeyPress={handelKeyPress} placeholder="Search for a drug" />
        <button onClick={handelSearch}>Search</button>
        
    </div>
  )
}

export default SearchBar