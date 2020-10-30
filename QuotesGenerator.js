import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const url ="https://quote-garden.herokuapp.com/api/v2/quotes/random";

export default function QuotesGenerator() {
    const [quoteTitle,setQuoteTitle] = useState('');
    const [quoteAuth, setQuoteAuth] = useState('');
    const [quoteGenre, setQuoteGenre] = useState('');

    const fetchQuotes = async() => {
        const res = await fetch(url);
        const data = await res.json();
        setQuoteTitle(data.quote.quoteText)
        setQuoteAuth(data.quote.quoteAuthor)
        setQuoteGenre(data.quote.genre);
    }

    useEffect(() => {
        fetchQuotes();
    },[])

    function handleClick() {
        fetchQuotes();
    }

    return (
        <div>
            <button type="button" onClick={handleClick}>Next quote</button>
            <p>{quoteTitle}</p>
            <Link to={`/authors/${quoteAuth}`}>
            <button 
                type="button" 
                value={quoteAuth}
               >{quoteAuth}
            </button>
            </Link>
            <p>{quoteGenre}</p>
        </div>
    )
}