import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';
import images from './SliderData';
import arrowRight from '../../assets/right.png';
import arrowLeft from '../../assets/left.png';
import cart from '../../assets/cart.png';
import './style.css';

export default class Carousel extends Component {

  constructor() {
    super()
    this.state = {}

  }

  showCart(i) {
    if (i.stock.stockLevel > 0) {
      return <img src={cart} alt="Add product to cart" />
    } 
    return <div></div>
  }
  

  createChildren = list => list.map(i => (
  <div className="boxImage" > <Link to={`/product/${i.code}`}> <img className="imagesSlider" src={images[0]} alt="" /> </Link>  
  <div className="addToCart1"> 
  <div> <p className="name" > {i.name} </p> <p className="value"> ${i.price.value} </p> </div>{this.showCart(i)} 
  </div>
  </div>));

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  async componentWillMount() {
    const response = await fetch('http://challenge-front-end.us-east-2.elasticbeanstalk.com/retrieve-product/products');
    const data = await response.json();

    this.setState({
      products: data.products,
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        children: this.createChildren(this.state.products),
      })
    }, 1);
  }



  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1}
        placeholderItem={<div className="placeholder"></div>}

        // Carousel configurations
        numberOfCards={3}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}

        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}

        chevronWidth={24}
        rightChevron={<img className="arrowRight" src={arrowRight} />}
        leftChevron={<img className="arrowLeft" src={arrowLeft} />}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );
  }
}