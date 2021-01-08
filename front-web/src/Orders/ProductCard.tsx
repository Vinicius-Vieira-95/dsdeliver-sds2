

import { Product } from './types';

type props = {
    product : Product;
}

function formatePrice(price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style : 'currency',
        currency: 'BRL'
    });
    
    return formatter.format(price);
}

function ProductCard({product} : props){
    return(
       <div className = "order-card-container">
            <h3 className = "order-card-title">
                {product.name}
            </h3>
            <img src= {product.imageUri} className = "order-card-image" alt ={product.name}/>
            <h3 className = "order-card-price">
                   {formatePrice( product.price)}
            </h3>
            <div className = "order-card-description">
            <h3>Descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>
       </div>
    )
}

export default ProductCard;