import React from 'react';
import {BrowserRouter, Route, Switch, NavLink, Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ( { id, description, amount, createdAt }) => (
    <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>
        Amount: {numeral(amount / 100).format('$0,0.00')}, 
        Created At: {moment(createdAt).format('MMMM Do, YYYY')}
        </p>       
    </div>
);

export default ExpenseListItem;

