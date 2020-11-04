import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeActions';
import { buyIceCream } from '../../redux/iceCream/iceCreamActions';

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCreams;
    return { item: itemState };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
    return { buyItem: dispatchFunction };
}

export default connect(mapStateToProps, mapDispatchToProps)(function ItemContainer(props) {
    return (
        <React.Fragment>
            <p>Item count: { props.item }</p>
            <button type = 'button' onClick = { props.buyItem }>Buy Item</button>
        </React.Fragment>
    );
});
