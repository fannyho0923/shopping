import React, { useContext, useState } from "react";
import { Media, Container, Form, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import CartContext from "../../helpers/cart";
import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";

const CheckoutDetails = () => {
  const cartContext = useContext(CartContext);
  // const cartItems = cartContext.state;
  // const cartTotal = cartContext.cartTotal;
  // const curContext = useContext(CurrencyContext);
  // const symbol = curContext.state.symbol;
  const [obj, setObj] = useState({});
  const [payment, setPayment] = useState("stripe");
  const {
    formState: { errors },
  } = useForm(); // initialise the hook

  const checkhandle = (value) => {
    setPayment(value);
  };

  const setStateFromInput = (event) => {
    obj[event.target.name] = event.target.value;
    setObj(obj);
  };
  const arr = [
    { title: "a", qty: "1", total: 100 },
    { title: "b", qty: "2", total: 200 },
    { title: "b", qty: "3", total: 300 },
  ];
  return (
    <section className="test">
      <Container>
        <div>
          {/* <div className="checkout-page"> */}
          {/* <div className="checkout-form"> */}
          {/* <Row> */}
          <Col lg="6" sm="12" xs="12" style={{ margin: 4, width: "100%" }}>
            {/* {arr && arr.arr > 0 > 0 ? ( */}
            <div className="checkout-details">
              <div className="order-box">
                <div className="title-box">
                  <div>
                    Product <span>Total</span>
                  </div>
                </div>
                <ul className="qty">
                  {arr.map((item, index) => (
                    <li key={index}>
                      {item.title} × {item.qty}{" "}
                      <span>
                        {/* {symbol} */}
                        {item.total}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="sub-total">
                  <li>
                    訂單編號 <span className="count">123</span>
                  </li>
                  <li>
                    日期 <span className="count">2022/11/11</span>
                  </li>
                  <li>
                    Subtotal{" "}
                    <span className="count">
                      {"symbol"}
                      {"cartTotal"}
                    </span>
                  </li>
                  <li>
                    Shipping
                    <div className="shipping">
                      <div className="shopping-option">Free Shipping</div>
                    </div>
                  </li>
                </ul>
                <ul className="total">
                  <li>
                    Total{" "}
                    <span className="count">
                      {/* {symbol} */}
                      {"cartTotal"}
                    </span>
                  </li>
                </ul>
              </div>
              {/* <div className="payment-box">
                <div className="upper-box">
                  <div className="payment-options">
                    <ul> */}
              {/* <li>
                        <div className="radio-option stripe">
                          <input
                            type="radio"
                            name="payment-group"
                            id="payment-2"
                            defaultChecked={true}
                            onClick={() => checkhandle("stripe")}
                          />
                          <label htmlFor="payment-2">Stripe</label>
                        </div>
                      </li> */}
              {/* <li>
                                <div className="radio-option paypal">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-1"
                                    onClick={() => checkhandle("paypal")}
                                  />
                                  <label htmlFor="payment-1">
                                    PayPal
                                    <span className="image">
                                      <Media src={paypal.src} alt="" />
                                    </span>
                                  </label>
                                </div>
                              </li> */}
              {/* </ul>
                  </div>
                </div> */}
              {/* {cartTotal !== 0 ? (
                          <div className="text-end">
                            {payment === "stripe" ? (
                              <button type="submit" className="btn-solid btn">
                                Place Order
                              </button>
                            ) : (
                              <PayPalButton
                                amount="0.01"
                                onSuccess={(details, data) => {
                                  alert(
                                    "Transaction completed by " +
                                      details.payer.name.given_name
                                  );

                                  return fetch("/paypal-transaction-complete", {
                                    method: "post",
                                    body: JSON.stringify({
                                      orderID: data.orderID,
                                    }),
                                  });
                                }}
                              />
                            )}
                          </div>
                        ) : (
                          ""
                        )} */}
              {/* </div> */}
            </div>
            {/* ) : (
                  ""
                )} */}
          </Col>
          {/* </Row> */}
          {/* </div> */}
        </div>
      </Container>
    </section>
  );
};

export default CheckoutDetails;
