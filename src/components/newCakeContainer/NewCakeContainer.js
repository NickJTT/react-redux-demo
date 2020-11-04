import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeActions';

const mapStateToProps = state => {
    return { numberOfCakes: state.cake.numberOfCakes };
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);

    const userInput = event => {
        if(event.target.value.match(/^$|^[1-9]\d*$/)) {
            setNumber(event.target.value);
        }
    }

    const userSubmit = event => {
        event.preventDefault();
        if(number.length > 0) {
            props.buyCake(number);
        }
    }

    return (
        <form onSubmit = { userSubmit }>
            <p>Number of cakes: { props.numberOfCakes }</p>
            <input type = 'text' value = { number } onChange = { userInput }/>
            <button type = 'submit'>Buy { number } cakes</button>
        </form>
    );
});
