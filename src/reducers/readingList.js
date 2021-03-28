const initialState = [
    {
        id:0,
        title:'testname',
        category:'testcat',
        description:'testdescr', 
        price:20.50
    }
]

const readingListReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD':
            return [...state, action.payload];
        case 'DELETE':
            const newList = state.filter(book => book.id !== action.payload)
            state = newList
            console.log(state)
            return state;
        case 'UPDATE':
            const updateIndex = state.findIndex(book => book.id === action.payload)
            const updatedList = [...state]
            updatedList.splice(updateIndex,1,action.details)
            state=updatedList
            return state;
        default:
            return state;
    }
}

export default readingListReducer;