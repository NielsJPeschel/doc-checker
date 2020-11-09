import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = (props) => {
    return (
        <div>
            <h1>Error</h1>
            <p>Make sure you haven't been skipping steps</p>
            <Link to = "/">Start Again</Link>
        </div>
    )
}

export default ErrorPage;