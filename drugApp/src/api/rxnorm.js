import axios from 'axios';
const BASE_URL='https://rxnav.nlm.nih.gov/REST';

export const getDrugs=async(name)=>{
    const response =await axios.get(`${BASE_URL}/drugs.json?name=${name}`);
    return response.data.drugGroup.conceptGroup || [];
}

export const getSpellingSuggestions=async(term)=>{
    const response=await axios.get(`${BASE_URL}/spellingsuggestions.json?name=${term}`);
    return response.data.suggestionGroup.suggestion || [];
}

export const getDrugDetails=async(name)=>{
    const response=await axios.get(`${BASE_URL}/rxcui.json?name=${name}`);
    return response.data.idGroup;
}
export const getNDCs=async(rxcui)=>{
    const response=await axios.get(`${BASE_URL}/rxcui/${rxcui}/ndcs.json`);
    return response.data.ndcGroup.ndcList || [];
}