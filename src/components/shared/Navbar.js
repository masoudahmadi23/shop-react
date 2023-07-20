import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


//context
import { CartContext } from '../../context/CartContextProvider';

//icon
import shopIcon from '../../assets/icon/shop.svg';

const Navbar = () => {
    const {state} = useContext(CartContext);
    return (
        <div>
            <div>
                <Link to='/products'>Shop</Link>
                <div>
                    <Link to="/Cart"><img src={shopIcon} alt='shop'/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;