import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeActions';

/* Most of the time there are going to be used a selector,
located at a separated file to get all
the necessary fields from the state */
const mapStateToProps = state => {
    return { numberOfCakes: state.cake.numberOfCakes };
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (function CakeContainer(props) {
    return (
        <React.Fragment>
            <p>Number of cakes: { props.numberOfCakes }</p>
            <button onClick = { props.buyCake }>Buy a cake</button>
        </React.Fragment>
    );
});
