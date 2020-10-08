import React,{useState,useEffect} from 'react'

const Item = ({ match }) => {

    const[item_details,setItem] = useState({images:{background:""}});

    const imagestyle = {
        backgroundColor: 'gainsboro',
        display: 'block',
        margin : '1rem auto'
    }

    useEffect(() =>{
        console.log('use effect in use');
        fetchItem();
        console.log('match is',match);
    },[]);

    const fetchItem = async ()=>{
       const item = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
       const results = await item.json();
        setItem(results.data.item);
        console.log('result obtained from fetch are',results.data.item);
    };

    return (
        <div>
            <h1>{item_details.name}</h1>
            <h2>Type: {item_details.type}</h2>
            <h2>Cost: {item_details.cost}</h2>
            <img style={imagestyle} src={item_details.images.background} alt="alternate text"/>
            <p><b>Description:</b> {item_details.description}</p>
        </div>
    )
}

export default Item
