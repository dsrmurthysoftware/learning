import {combineReducers} from 'redux';
import TrainerReducer from './reducer-trainers';
import  ActiveTrainerReducer from './reducer-active-trainer';
/*
 * We combine all reducers into a single object before updated data 
 * is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned
 *  from all your reducers
 * */
const allReducers = combineReducers({
    trainers: TrainerReducer, 
    activeTrainer: ActiveTrainerReducer  
});
export default allReducers