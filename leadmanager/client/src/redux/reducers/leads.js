import * as _ from 'lodash';
import {
    GET_LEADS,
    DELETE_LEAD
} from '../actions/types';

const leadsReducers = (state={leads: []}, action) =>{
    switch(action.type){
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            }
        case DELETE_LEAD:{
            return {
                ...state,
                leads: state.leads.filter(lead => !_.isEqual(lead.id, action.payload))
            }
        }
        default:
            return state;
    }
}

export default leadsReducers;