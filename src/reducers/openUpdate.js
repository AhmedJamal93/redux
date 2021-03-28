const updateReducer = (state=false,action)=>{
    switch(action.type){
        case 'OPEN_UPDATE':
            return !state;
        case 'CLOSE_UPDATE':
            return !state;
        default:
            return state;
    }
}

export default updateReducer