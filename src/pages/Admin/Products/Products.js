import React, {useState, useEffect} from 'react'
import ListProducts from '../../../components/Admin/Produtcs/ListProducts';
import { getProductsApi } from '../../../api/products';


export default function Products() {
    const [products, setProducts]= useState([]);
    const [reloadProducts, setReloadProducts] = useState(false);
   useEffect(()=>{
    getProductsApi().then(response=>{
            setProducts(response.products);
     });
        setReloadProducts(false);
    }, [reloadProducts]);

    return(
        <div className="products">
                <ListProducts products={products} setReloadProducts={setReloadProducts}/>
        </div>
    );
}
