import React from 'react';
import QuotesGenerator from './QuotesGenerator';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QuotesByAuthor from './QuotesByAuthor';

export default function App() {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/authors/:authorName">
                        <QuotesByAuthor />
                    </Route>
                    <Route path="/">
                        <QuotesGenerator />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}