import addReducer from './openAdd';
import readingListReducer from './readingList';
import updateReducer from './openUpdate'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    addOpen:addReducer,
    readingList:readingListReducer,
    updateOpen:updateReducer
})

export default allReducers;