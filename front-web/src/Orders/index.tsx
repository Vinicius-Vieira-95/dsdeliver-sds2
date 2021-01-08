
import './styles.css';
import StepsHeader from './StepsHeader';
import Productslist from './Productslist';
import { useEffect, useState } from 'react';
import {OrderLocationData, Product} from './types';
import {fetchProducts} from '../api';
import OrderLocation from './OrderLocation';

function Orders(){

    const [products, setProduct] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>(); 
    useEffect(() => { 
        fetchProducts().then(response => setProduct(response.data))
        .catch(error => console.log(error));
        
    }, []);

    return(
       <div className = "orders-container">
           <StepsHeader />
           <Productslist products ={products} />
           <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
       </div>
    )
}

export default Orders;