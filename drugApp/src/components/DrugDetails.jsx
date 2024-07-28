import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getDrugDetails, getNDCs } from '../api/rxnorm';

const DrugDetails = () => {
    const {drug_name}=useParams();
    const [drugInfo,setDrugInfo]=useState({});
    const [ndcs,setNdcs]=useState([]);

    useEffect(()=>{
        const fetchDrugDetails=async()=>{
            const details=await getDrugDetails(drug_name);
            if(details.rxcui){
                setDrugInfo(details);
                const ndcList=await getNDCs(details.rxcui);
                setNdcs(ndcList);
            }else{
                setDrugInfo(null);
            }
        };
        fetchDrugDetails();
    },[drug_name]);

    if(drugInfo === null){
        return <div>No information found for {drug_name}</div>
    }
  return (
    <div>
        <h1>{drugInfo.name}</h1>
        <p>RXCUI:{drugInfo.rxcui}</p>
        <p>Synonyms: {drugInfo.synonym}</p>
        <h2>NDCs</h2>
        <ul>
            {ndcs.map((ndc,index)=>{
                <li key={index}>{ndc}</li>
            })}
        </ul>
    </div>
  )
}

export default DrugDetails;