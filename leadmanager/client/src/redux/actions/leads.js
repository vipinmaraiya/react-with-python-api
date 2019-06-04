import axios from 'axios';
import {
    GET_LEADS,
    DELETE_LEAD,
    ADD_LEAD,
    GET_ERRORS
} from './types';

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

const api = 'http://localhost:8000'

// GET LEADS
export const getLeads = () => dispatch => {
    axios.get(`${api}/api/leads/?format=json`)
    .then(res => {
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    }).catch(err =>{
        console.log(err);
    });
};

// Delete lead
export const deleteLead = (id) => dispatch =>{

    axios({
        method: 'delete',
        withCredentials: 'include',
        url: `${api}/api/leads/${id}/`,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        }
    }).then(res =>{
        dispatch({
            type: DELETE_LEAD,
            payload: id
        })
    })
};

// Add lead
export const addLead = (lead) => (dispatch) =>{
    axios({
        method: 'post',
        withCredentials: 'include',
        url: `${api}/api/leads/`,
        data: lead,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        }
    }).then(res =>{
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        });
    }).catch(err =>{
        dispatch({
            type: GET_ERRORS,
            payload:{
                msg: err.response.data,
                status: err.response.status
            }
        });
    });
}