import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import banner from '../../assets/banner.png';
import './style.css';

export default function Banner() {
    const [product, setProduct] = useState({});

    useEffect(async () => {
        const response = await fetch('http://challenge-front-end.us-east-2.elasticbeanstalk.com/retrieve-product/products');
        const data = await response.json();
        const min = data.products.reduce((productA, productB) => {
            if (productB.price.value < productA.price.value) productA = productB;
            return productA;
        });
        min.price = min.price.value

        setProduct(min)
    }, [])
    return (
        <div className="boxBanner">
            <Link to={`/product/${product.code}`}>
                <img className="banner" src={banner} />
            </Link>
            <div className="textBanner">
                <span id="nameBanner"> {product.name} </span>
                <span id="priceBanner"> ${product.price} </span>
            </div>
        </div >
    )
}