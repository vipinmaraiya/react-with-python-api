import React, {Fragment} from 'react';
import {connect} from 'react-redux';

function Alert(props){

    const data = [];
    if(typeof(props.error.msg) == "object"){
        for(let key in props.error.msg){
            data.push(<div key={key}>
                <h4>{key.toUpperCase()}</h4>
                {
                    props.error.msg[key].map(d => <li key={key}>{d}</li>)
                }
            </div>)
        }
    }
    return (
        <Fragment>{data}</Fragment>
    )
}

const mapStateToProps = state =>({
    error: state.errors
});

export default connect(mapStateToProps)(Alert);