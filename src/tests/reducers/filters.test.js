import filtersReducer from '../../reducers/filters';
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should setup sortby to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should setup sortby to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter ', () => {
    const textFilter = 'hello';
    const action = {
        type: 'SET_TEXT_FILTER',
        textFilter
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(textFilter);
});

test('should set startdate filter', () =>{
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set enddate filter', () =>{
    const endDate = moment()
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
})