import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
const Shop = () => {

    const[items,setItems] = useState([]);

    useEffect(() =>{
        fetchItems();
    },[])

    const fetchItems = async ()=>{
       const items = await fetch(`https://fortnite-api.theapinetwork.com/upcoming/get`);
       const results = await items.json();
        setItems(results.data);
        console.log(results.data);
    };

    return (
        <div>
            <h1>The Upcoming Items in the store are going to be :</h1>
            
                {items.map(item => (
                    <Link to={`/shop/${item.itemId}`}><h1 key={item.itemId} >{item.item.name}</h1></Link>
                ))}
            
        </div>
    )
}

export default Shop
