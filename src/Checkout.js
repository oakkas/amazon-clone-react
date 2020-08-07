import React from "react";
import { useStateValue } from "./StateProvider";
import AmazonCheckoutAd from "./images/amazon_checkout2.png";

import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img className="checkout_image" src={AmazonCheckoutAd} alt="" />

      {basket?.length == 0 ? (
        <div>
          <h2>Your Amazon Cart is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" below the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Amazon Cart</h2>
          {/* List out all the products */}
          {basket.map((item) => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
