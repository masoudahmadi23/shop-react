import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//component
import Cart from './shared/Cart';

//context
import { CartContext } from '../context/CartContextProvider';

const ShopCart = () => {

    const {state, dipatch} = useContext(CartContext);

    return (
        <div>
            <div>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemCounter > 0 && <div>
                    <p><span>Total Items:</span> {state.itemCounter}</p>
                    <p><span>Total Payments:</span> {state.total}</p>
                    <div>
                        <button onClick={() => dipatch({type: "CHECKOUT"})}>Check Out</button>
                        <button onClick={() => dipatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div>
                    <h3>Check Out Successfully</h3>
                    <Link to='/products'>Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemCounter === 0 && <div>
                    <h3>Want to Buy?</h3>
                    <Link to='/products'>Go To Shop?</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;