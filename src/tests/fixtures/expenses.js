import moment from 'moment';


export default [
    {
        id: 1,
        description: 'gum',
        note: 'note 1',
        amount: 123,
        createdAt: 0
    },{
        id: 2,
        description: 'rent',
        note: '',
        amount: 2223,
        createdAt: moment(0).subtract(4, 'days').valueOf()  
    },{
        id: 3,
        description: 'credit card',
        note: '',
        amount: 12345,
        createdAt: moment(0).add(4,'days').valueOf() 
    }
]