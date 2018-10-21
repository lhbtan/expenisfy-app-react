import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import * as actionFilters from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', note: 'It was an expensive month', amount: 95, createdAt: 100}));
store.dispatch(addExpense({description: 'Emma bill', note: 'It was a very expensive month', amount: 200, createdAt: 200}));
store.dispatch(addExpense({description: 'Rent', note: 'It was a very expensive month', amount: 50, createdAt: 600}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)


ReactDOM.render(jsx , document.getElementById('app'));
