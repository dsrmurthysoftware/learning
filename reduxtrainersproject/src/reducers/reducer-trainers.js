/*
Reducers are peace of code to persist data in store with logic
we can have multiple reducers

 * The users reducer will always return an array of users no matter what
 * You need to return something, 
 so if there are no users then just return an empty array
 * */
//as if this data /state is coming from store
import data  from './store'
export default (state=null, action)=> {
    // returning initial state
        return state=data;
}
