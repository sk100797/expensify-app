import moment from 'moment'
import filtersReducers from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = filtersReducers(undefined,{type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducers(undefined,{type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to amount', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducers(currentState,action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter values', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'rent'}
    const state = filtersReducers(undefined,action)
    expect(state.text).toBe('rent')
})

test('should set startDate values' , () => {
    const action = {type: 'SET_START_DATE', startDate: 2}
    const state  = filtersReducers(undefined,action)
    expect(state.startDate).toBe(2)
})

test('should set startEnd values' , () => {
    const action = {type: 'SET_END_DATE', endDate: 3}
    const state  = filtersReducers(undefined,action)
    expect(state.endDate).toBe(3)
})