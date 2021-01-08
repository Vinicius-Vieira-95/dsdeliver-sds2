import ProductCard from './ProductCard';
import { Product } from './types';

type props = {
    products : Product[];
}

function Productlist({products} : props){
    return(
       <div className = "orders-list-container">
           <div className = "orders-list-items">
              {products.map(product => ( 
                   <ProductCard key = {product.id} product = {product}/> 
              ))}
           </div>
       </div>
    )
}

export default Productlist;