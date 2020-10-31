import React,{ useEffect,useState } from "react";
import {useParams, Link} from 'react-router-dom';
import IconCached from './icons/cached.svg';


export default function QuotesByAuthor(props) {
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
        <div className="otherQuotes">
            <ul className="btn-container">
            <Link to="/">
                <li>
                    <p className="homepage-btn"> Home page</p>
                </li>
            </Link>
                <li style={{display: "contents"}}>
                    <button type="button" className="btn-random">
                        Random
                    </button>
                    <img src={IconCached} alt="cached"/>
                </li>
            </ul>
            <h2 className="author">{authorName}</h2>
            <ul className="quotes-container">
                {
                allQuotes.map((quote) => 
                    (
                    <li key={quote.id}>{`"${quote.quoteText}"`}</li>
                    ))
            }
            </ul>
        </div>
    )
}