import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} = {} ) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( {decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ( { count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
})


//Reducer

// 1) reducers are pure functions. output only determened by the input. nothing is used outside of the function scope.

// 2) never change state or action directly. so not state.count = 3. but more like: count: state.count + 3.
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
         case 'INCREMENT':
          
             return {
                 count: state.count + action.incrementBy
             };
         case 'DECREMENT':
             return {
                 count: state.count - action.decrementBy
             };
         case 'SET':
             return {
                 count: action.count
             }
         case 'RESET':
             return{
                 count: 0
             }
         default:
             return state;
    }
 };

const store = createStore(countReducer);
 
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

 
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({count: 8}));
