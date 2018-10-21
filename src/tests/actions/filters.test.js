import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment'

test('Should generate set start date action object' , () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('Should generate set end date action object' , () => {
    const action = setEndDate(moment(1));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1)
    })
});

test('Should generate set sort to date', () =>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
});

test('Should generate set sort to amount', () =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
});

test('Should generate set sort to text provided', () =>{
    const textFilter = 'hello';
    const action = setTextFilter(textFilter);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        textFilter
    })
})

test('Should generate set sort to text default', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        textFilter: ''
    })
})