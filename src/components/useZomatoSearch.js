import React, { useState , useEffect } from 'react';
import API_KEY from './keys';
function useZomatoSearch(term) {
    const [data,setData] = useState(null);
    useEffect(() => {
        const fetchData = async()=>{
            fetch(
                `https://developers.zomato.com/api/v2.1/search?entity_type=city&q=${term}&count=10&sort=rating&order=desc&apikey=${API_KEY}`
            )
            .then(response => response.json())
            .then(result=>{
                setData(result);
            })
        }
        fetchData();
    }, [term])
    return {data}
}

export default useZomatoSearch
