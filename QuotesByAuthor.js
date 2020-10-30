import React,{ useEffect,useState } from "react";
import {useParams} from 'react-router-dom';


export default function QuotesByAuthor() {
    const [allQuotes,setAllQuotes] = useState([]);
    const { authorName } = useParams();
    console.log(authorName);
    
        const fetchMultipleQuotes = async () => {
        const url =`https://quote-garden.herokuapp.com/api/v2/authors/${authorName}?page=1&limit=10/`;
        console.log(url);
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.quotes);
            setAllQuotes(data.quotes);
        }
    
        useEffect(() => {
            fetchMultipleQuotes();
        },[])

    return (
        <div>
            <ul>
                {
                allQuotes.map((quote) => 
                    (
                    <li key={quote.id}>{quote.quoteText}</li>
                    ))
            }
            </ul>
        </div>
    )
}