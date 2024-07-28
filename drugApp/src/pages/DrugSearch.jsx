import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { getDrugs, getSpellingSuggestions } from '../api/rxnorm';


const DrugSearch = () => {
    const [results,setResults]=useState([]);
    const [error,setError]=useState('');
    const navigate=useNavigate();

    const handelSearch =async (term)=>{
        setError('');
        setResults([]);
        const drugs=await getDrugs(term);
        if(drugs.length === 0){
            const suggestions = await getSpellingSuggestions(term);
            if(suggestions.length === 0){
                setError('No results found');
            }else{
                setResults(suggestions);
            }
        }
        else{
            setResults(drugs);
        }
    }
  return (
    <div>
        <SearchBar onSearch={handelSearch}/>
        {error && <p>{error}</p>}
        <ul>
            {results.map((result,index)=>(
                <li key={index} onClick={()=>navigate(`/drugs/${result.name}`)}>{result.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default DrugSearch;