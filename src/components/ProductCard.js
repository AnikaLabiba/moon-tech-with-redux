import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actionCreators/productCreators";
import { BsFillTrashFill } from 'react-icons/bs';
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  return (
    <div
      className='shadow-lg relative rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      {pathname.includes('cart') &&
        <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>

          <p> {product.quantity} </p>
        </div>}
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li key={feature} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {pathname.includes('cart') &&
          <button className='bg-indigo-500 flex flex-1 justify-between items-center py-1 px-3 rounded-full text-white'
            onClick={() => dispatch(removeFromCart(product))}
          >
            Remove <BsFillTrashFill />
          </button>}
        {!pathname.includes('cart') && <button className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold text-sm'
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>}
        {!pathname.includes('cart') && <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>}
      </div>
    </div>
  );
};

export default ProductCard;
