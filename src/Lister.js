import React from 'react';
import { connect } from 'react-redux';

function Lister(props) {
    return (
        <div>
        <h2>Lister</h2>
        <form onSubmit={props.handleSubmit}>
            <input value={props.inputText} onChange={props.inputChanged} />
        </form>
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
        </div>
    );
}

// onChange={props.inputChanged}
const mapStateToProps = (state)=>{
    return {
        inputText:state.inputText,
        items:state.items,
    };
}

const mapDispatchToProps = (dispatch)=>{
    return {
        inputChanged:(event)=>{
            const action = {type:'INPUT_CHANGE', text:event.target.value}
            dispatch(action);
        },
        handleSubmit:(event) => {
            event.preventDefault();
            const action = {type:'HANDLE_SUBMIT'}
            dispatch(action);
        },
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Lister);;
// connect(mapStateToProps,mapDispatchToProps)(InputMirror);