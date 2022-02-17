import React,{ useEffect,useState} from 'react'
import del from '../../Assets/delete.svg';

export const Product = ({product,removeProduct}) => {
  const [deleteProductStyle, setDeleteProductStyle] = useState(false);
  return (
    <div className={deleteProductStyle ?"deleteAnimation":"product_wrapper"}>
        <div className="delete_product" onClick={()=>{
          removeProduct(product.id)
          setDeleteProductStyle(true)
          }}><img src={del} /></div>
        <div className="image_product"><img src={product.src}/></div>
        <div className="information_container">
        <span className="name_product">{product.name}</span>
        <span className="description_product">{product.description}</span>
        <span className="price_product">{product.price}{"руб"}</span>
        </div>
    </div>
  )
}
