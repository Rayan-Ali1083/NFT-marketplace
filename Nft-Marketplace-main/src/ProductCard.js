// ProductCard.js

import React, {useState } from 'react';
import { useWeb3Context } from './Web3Context';

const ProductCard = ({ product }) => {
  const { title, price, image, contract_addr, contract_abi } = product;

  const { mintNFT, NFTInfo } = useWeb3Context()

  const [info, setInfo] = useState({})

  const handleBuyNow = () => {
    mintNFT(price, contract_addr, contract_abi);
  };

  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={title} />
      <div className="product-details">
        <h3>{title}</h3>
        <p>Price: {price} ETH</p>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
