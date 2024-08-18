// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Container,
//   Row,
//   Col,
//   ListGroup,
//   ListGroupItem,
//   Button,
// } from "reactstrap";
// import { removeFromCart } from "../redux/actions/cartActions";
// import { Link } from "react-router-dom";
// import "../App.css"; // Make sure to import your CSS file

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();

//   return (
//     <Container className="cart-page">
//       <div className="cart-container">
//         <Row>
//           <Col>
//             <h2>Your Cart</h2>
//             <ListGroup>
//               {cartItems.length === 0 ? (
//                 <ListGroupItem>Your cart is empty</ListGroupItem>
//               ) : (
//                 cartItems.map((item) => (
//                   <ListGroupItem key={item.id} className="cart-item">
//                     <Row>
//                       <Col md="8" className="cart-item-content">
//                         {item.name}
//                       </Col>
//                       <Col md="4">
//                         <Button
//                           color="danger"
//                           onClick={() => dispatch(removeFromCart(item.id))}
//                         >
//                           Remove
//                         </Button>
//                       </Col>
//                     </Row>
//                   </ListGroupItem>
//                 ))
//               )}
//             </ListGroup>
//             {cartItems.length > 0 && (
//               <Link to="/checkout">
//                 <Button color="primary" className="mt-3">
//                   Proceed to Checkout
//                 </Button>
//               </Link>
//             )}
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// };

// export default Cart;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "reactstrap";
import { removeFromCart } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";
import "../App.css"; // Make sure to import your CSS file

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <Container className="cart-page">
      <div className="cart-container">
        <Row>
          <Col>
            <h2>Your Cart</h2>
            <ListGroup>
              {cartItems.length === 0 ? (
                <ListGroupItem>Your cart is empty</ListGroupItem>
              ) : (
                cartItems.map((item) => (
                  <ListGroupItem key={item.id} className="cart-item">
                    <Row>
                      <Col md="4">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "100px", height: "100px" }}
                        />
                      </Col>
                      <Col md="4" className="cart-item-content">
                        {item.name}
                      </Col>
                      <Col md="4">
                        <Button
                          color="danger"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))
              )}
            </ListGroup>
            {cartItems.length > 0 && (
              <Link to="/checkout">
                <Button color="primary" className="mt-3">
                  Proceed to Checkout
                </Button>
              </Link>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Cart;
