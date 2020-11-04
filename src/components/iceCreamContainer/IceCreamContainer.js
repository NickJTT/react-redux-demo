import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../../redux/iceCream/iceCreamActions';

/* Most of the time there are going to be used a selector,
located at a separated file to get all
the necessary fields from the state */
const mapStateToProps = state => {
    return { numberOfIceCreams: state.iceCream.numberOfIceCreams };
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (function IceCreamContainer(props) {
    return (
        <React.Fragment>
            <p>Number of ice creams: { props.numberOfIceCreams }</p>
            <button onClick = { props.buyIceCream }>Buy an ice cream</button>
        </React.Fragment>
    );
});
