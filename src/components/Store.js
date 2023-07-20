import React, { useContext } from 'react';

//COMPONENTS
import Product from './shared/Product';

//CONTEXT
import { ProductsContext } from '../context/ProductsContextProvider';

const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            {
                products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;