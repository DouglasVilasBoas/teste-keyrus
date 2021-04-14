import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import samsumgOne from '../../assets/01.jpg'
import './style.css'


export default function Product(props) {
    const [product, setProduct] = useState({});


    useEffect(async () => {
        const { params: { id } } = props.match;
        const response = await fetch(`http://challenge-front-end.us-east-2.elasticbeanstalk.com/retrieve-product/${id}`)
        const data = await response.json()
        data.price = data.price.value
        data.stock = data.stock.stockLevel
        setProduct(data)
    }, {})

    function showCart(product) {
        if (product.stock > 0) {
            return <div className="addToCart"> <p>Add to cart</p> </div>
        }
        return <div className="desability"> <p>Add to cart</p> </div>

    }



    return (
        <div>
            <Header />
            <section className="container" >
                <div className="boxProduct">
                    <img src={samsumgOne} />
                    <div id="linhaVertical"></div>
                    <div>
                        <h1>Description</h1>
                        <h4 className=" descriptionProduct" > {product.description} </h4>
                    </div>
                </div>

                <div className="boxInformations" >
                    <p className="valueProduct">$ {product.price} </p>
                    <div id="linhaHorizontal"></div>
                    <p className="nameProduct" > {product.name} </p>
                    <p className="summaryProduct"> {product.summary} </p>
                    {showCart(product)}
                </div>
            </section>
            <Footer />

        </div>

    )
}