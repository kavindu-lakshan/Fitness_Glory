export const preposts = (preposts = [], action) => {
    switch (action.type){
        case 'PRE_FETCH_ALL':
            return action.payload;
        case 'PRE_DELETE!':
            return preposts.filter((prepost) => prepost._id !== action.payload);
        case 'PRE_CREATE':
            return preposts;
        case 'PRE_UPDATE':
        case 'PRE_LIKE':
                return preposts.map((prepost) => (prepost._id === action.payload._id ? action.payload : prepost));
      
        default:
            return preposts;
    }
}


/*export default (preposts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':   
            return [...preposts, action.payload];
        default:
            return preposts;
    }
}
*/