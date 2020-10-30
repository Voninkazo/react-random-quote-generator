import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const url ="https://quote-garden.herokuapp.com/api/v2/quotes/random";

export default function QuotesGenerator() {
    const [quoteTitle,setQuoteTitle] = useState('');
    const [quoteAuth, setQuoteAuth] = useState('');
    const [genre, setQuoteGenre] = useState('');

    const fetchQuotes = async() => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setQuoteTitle(data.quote.quoteText)
        setQuoteAuth(data.quote.quoteAuthor)
        setQuoteGenre(data.quote.quoteGenre);
        console.log(data.quote.quoteGenre)
    }

    useEffect(() => {
        fetchQuotes();
    },[])

    function handleClick() {
        fetchQuotes();
    }

    return (
        <div>
            <ul className="list-item">
                <li>
                    <button type="button" className="btn-random" onClick={handleClick}>
                        Random
                    </button>
                </li>
                    <li>
                        icon
                    </li>
            </ul>
            <div className="randome-quote">
                <p>{quoteTitle}</p>
                <Link to={`/authors/${quoteAuth}`}>
                <button type="button" className="btn-author" value={quoteAuth}>
                    {`${quoteAuth} 
                    ${genre}
                    `}
                </button>
                </Link>
            </div>
        </div>
    )
}