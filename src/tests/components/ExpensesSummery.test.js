import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly reder expenses summery with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly reder expenses summery with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={12} expensesTotal={123424233}/>);
    expect(wrapper).toMatchSnapshot();
})