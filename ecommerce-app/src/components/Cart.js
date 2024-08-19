// // import React from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   Container,
// //   Row,
// //   Col,
// //   ListGroup,
// //   ListGroupItem,
// //   Button,
// // } from "reactstrap";
// // import { removeFromCart } from "../redux/actions/cartActions";
// // import { Link } from "react-router-dom";
// // import "../App.css"; // Make sure to import your CSS file

// // const Cart = () => {
// //   const cartItems = useSelector((state) => state.cart.cartItems);
// //   const dispatch = useDispatch();

// //   return (
// //     <Container className="cart-page">
// //       <div className="cart-container">
// //         <Row>
// //           <Col>
// //             <h2>Your Cart</h2>
// //             <ListGroup>
// //               {cartItems.length === 0 ? (
// //                 <ListGroupItem>Your cart is empty</ListGroupItem>
// //               ) : (
// //                 cartItems.map((item) => (
// //                   <ListGroupItem key={item.id} className="cart-item">
// //                     <Row>
// //                       <Col md="8" className="cart-item-content">
// //                         {item.name}
// //                       </Col>
// //                       <Col md="4">
// //                         <Button
// //                           color="danger"
// //                           onClick={() => dispatch(removeFromCart(item.id))}
// //                         >
// //                           Remove
// //                         </Button>
// //                       </Col>
// //                     </Row>
// //                   </ListGroupItem>
// //                 ))
// //               )}
// //             </ListGroup>
// //             {cartItems.length > 0 && (
// //               <Link to="/checkout">
// //                 <Button color="primary" className="mt-3">
// //                   Proceed to Checkout
// //                 </Button>
// //               </Link>
// //             )}
// //           </Col>
// //         </Row>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default Cart;

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
//                       <Col md="4">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           style={{ width: "100px", height: "100px" }}
//                         />
//                       </Col>
//                       <Col md="4" className="cart-item-content">
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

// import React, { useEffect } from "react";  ooooooooo
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
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   // Load cart items from local storage when the component mounts
//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     // If you have an action to set initial cart items, dispatch it here
//     // dispatch(setCartItems(savedCartItems));
//   }, [dispatch]);

//   // Save cart items to local storage whenever cartItems changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

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
//                       <Col md="4">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           style={{ width: "100px", height: "100px" }}
//                         />
//                       </Col>
//                       <Col md="4" className="cart-item-content">
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

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Row, Col, Table, Button } from "reactstrap";
// import { removeFromCart } from "../redux/actions/cartActions";
// import { Link } from "react-router-dom";
// import "../App.css"; // Make sure to import your CSS file

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   // Load cart items from local storage when the component mounts
//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     // If you have an action to set initial cart items, dispatch it here
//     // dispatch(setCartItems(savedCartItems));
//   }, [dispatch]);

//   // Save cart items to local storage whenever cartItems changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   return (
//     <Container className="cart-page">
//       <div className="cart-container">
//         <Row>
//           <Col>
//             <h2>Your Cart</h2>
//             <Table striped>
//               <thead>
//                 <tr>
//                   <th>Product</th>
//                   <th>Size</th>
//                   <th>Unit Price</th>
//                   <th>Quantity</th>
//                   <th>Subtotal</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center">
//                       Your cart is empty
//                     </td>
//                   </tr>
//                 ) : (
//                   cartItems.map((item) => (
//                     <tr key={item.id}>
//                       <td>
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           style={{ width: "100px", height: "100px" }}
//                         />
//                         {item.name}
//                       </td>
//                       <td>{item.size || "N/A"}</td>
//                       <td>${(item.unitPrice || 0).toFixed(2)}</td>
//                       <td>{item.quantity || 0}</td>
//                       <td>
//                         $
//                         {((item.unitPrice || 0) * (item.quantity || 0)).toFixed(
//                           2
//                         )}
//                       </td>
//                       <td>
//                         <Button
//                           onClick={() => dispatch(removeFromCart(item.id))}
//                         >
//                           X
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </Table>
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
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Row, Col, Table, Button } from "reactstrap";
// import { removeFromCart, clearCart } from "../redux/actions/cartActions";
// import { Link } from "react-router-dom";
// import "../App.css"; // Make sure to import your CSS file

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   // Load cart items from local storage when the component mounts
//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     // If you have an action to set initial cart items, dispatch it here
//     // dispatch(setCartItems(savedCartItems));
//   }, [dispatch]);

//   // Save cart items to local storage whenever cartItems changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <Container className="cart-page">
//       <div className="cart-container">
//         <Row>
//           <Col>
//             <h2>Your Cart</h2>

//             <Table striped>
//               <thead>
//                 <tr>
//                   <th>Product</th>
//                   <th>Size</th>
//                   <th>Unit Price</th>
//                   <th>Quantity</th>
//                   <th>Subtotal</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center">
//                       Your cart is empty
//                     </td>
//                   </tr>
//                 ) : (
//                   cartItems.map((item) => (
//                     <tr key={item.id}>
//                       <td>
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           style={{ width: "100px", height: "100px" }}
//                         />
//                         {item.name}
//                       </td>
//                       <td>{item.size || "N/A"}</td>
//                       <td>${(item.unitPrice || 0).toFixed(2)}</td>
//                       <td>{item.quantity || 0}</td>
//                       <td>
//                         $
//                         {((item.unitPrice || 0) * (item.quantity || 0)).toFixed(
//                           2
//                         )}
//                       </td>
//                       <td>
//                         <Button
//                           onClick={() => dispatch(removeFromCart(item.id))}
//                         >
//                           X
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </Table>
//             <div>
//               <Button
//                 color="danger"
//                 className="text-md-end mb-3"
//                 onClick={handleClearCart}
//               >
//                 {" "}
//                 Clear All
//               </Button>
//             </div>
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

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Row, Col, Table, Button } from "reactstrap";
// import { removeFromCart, clearCart } from "../redux/actions/cartActions";
// import { Link } from "react-router-dom";
// import "../App.css"; // Make sure to import your CSS file

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   // Load cart items from local storage when the component mounts
//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     // If you have an action to set initial cart items, dispatch it here
//     // dispatch(setCartItems(savedCartItems));
//   }, [dispatch]);

//   // Save cart items to local storage whenever cartItems changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <Container className="cart-page" fluid>
//       <div>
//         <div>
//           <img src="./imges/banner.png" className="img-fluid mb-3" />
//         </div>
//         <Row>
//           <Col>
//             <h1 className="text-center">Your Cart</h1>

//             <Table striped>
//               <thead>
//                 <tr>
//                   <th>Product</th>
//                   <th>Size</th>
//                   <th>Unit Price</th>
//                   <th>Quantity</th>
//                   <th>Subtotal</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center">
//                       Your cart is empty
//                     </td>
//                   </tr>
//                 ) : (
//                   cartItems.map((item) => (
//                     <tr key={item.id}>
//                       <td>
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           style={{ width: "100px", height: "100px" }}
//                         />
//                         {item.name}
//                       </td>
//                       <td>{item.size || "N/A"}</td>
//                       <td>${(item.unitPrice || 0).toFixed(2)}</td>
//                       <td>{item.quantity || 0}</td>
//                       <td>
//                         $
//                         {((item.unitPrice || 0) * (item.quantity || 0)).toFixed(
//                           2
//                         )}
//                       </td>
//                       <td>
//                         <Button
//                           onClick={() => dispatch(removeFromCart(item.id))}
//                         >
//                           X
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </Table>
//             <Row>
//               <Col md="12" className="text-end">
//                 <Button
//                   color="danger"
//                   className="mb-3"
//                   onClick={handleClearCart}
//                 >
//                   Clear All
//                 </Button>
//               </Col>
//               <col md="12" className="text-start">
//                 {cartItems.length > 0 && (
//                   <Link to="/checkout">
//                     <Button color="primary" className=" text-start mt-3">
//                       Proceed to Checkout
//                     </Button>
//                   </Link>
//                 )}
//               </col>
//             </Row>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// };

// export default Cart;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Row, Col, Table, Button } from "reactstrap";
// import { removeFromCart, clearCart } from "../redux/actions/cartActions";
// import { Link } from "react-router-dom";
// import "../App.css"; // Make sure to import your CSS file

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   // Load cart items from local storage when the component mounts
//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     // If you have an action to set initial cart items, dispatch it here
//     // dispatch(setCartItems(savedCartItems));
//   }, [dispatch]);

//   // Save cart items to local storage whenever cartItems changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <Container className="cart-page" fluid>
//       <div>
//         <div className="imgesize">
//           <img
//             src="./imges/banner.png"
//             className="img-fluid mb-3"
//             alt="Banner"
//           />
//         </div>
//         <Row>
//           <Col>
//             <h1 className="text-center">Your Cart</h1>

//             <Table striped>
//               <thead>
//                 <tr>
//                   <th>Product</th>
//                   <th>Size</th>
//                   <th>Unit Price</th>
//                   <th>Quantity</th>
//                   <th>Subtotal</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center">
//                       Your cart is empty
//                     </td>
//                   </tr>
//                 ) : (
//                   cartItems.map((item) => (
//                     <tr key={item.id}>
//                       <td>
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           style={{ width: "100px", height: "100px" }}
//                         />
//                         {item.name}
//                       </td>
//                       <td>{item.size || "N/A"}</td>
//                       <td>${(item.unitPrice || 0).toFixed(2)}</td>
//                       <td>{item.quantity || 0}</td>
//                       <td>
//                         $
//                         {((item.unitPrice || 0) * (item.quantity || 0)).toFixed(
//                           2
//                         )}
//                       </td>
//                       <td>
//                         <Button
//                           onClick={() => dispatch(removeFromCart(item.id))}
//                         >
//                           X
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </Table>
//             <Row>
//               <Col md="6" className="text-start">
//                 {cartItems.length > 0 && (
//                   <Link to="/checkout">
//                     <Button color="primary" className="mt-3">
//                       Proceed to Checkout
//                     </Button>
//                   </Link>
//                 )}
//               </Col>
//               <Col md="6" className="text-end">
//                 <Button
//                   color="danger"
//                   className="mb-3"
//                   onClick={handleClearCart}
//                 >
//                   Clear All
//                 </Button>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//         <div>
//           <row>
//             <col md-2>
//               <img src="./imges/girl.png" />
//             </col>
//             <col md-2>
//               <img src="./imges/girl.png" />
//             </col>
//             <col md-2>
//               <img src="./imges/girl.png" />
//             </col>
//             <col md-2>
//               <img src="./imges/girl.png" />
//             </col>
//             <col md-2>
//               <img src="./imges/girl.png" />
//             </col>
//             <col md-2>
//               <img src="./imges/girl.png" />
//             </col>
//           </row>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Cart;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Row, Col, Table, Button } from "reactstrap";
// import { removeFromCart, clearCart } from "../redux/actions/cartActions";
// import { Link } from "react-router-dom";
// import "../App.css"; // Make sure to import your CSS file

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   // Load cart items from local storage when the component mounts
//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     // If you have an action to set initial cart items, dispatch it here
//     // dispatch(setCartItems(savedCartItems));
//   }, [dispatch]);

//   // Save cart items to local storage whenever cartItems changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <Container className="cart-page" fluid>
//       <div>
//         <div className="imgesize">
//           <img
//             src="./imges/banner.png"
//             className="img-fluid mb-3"
//             alt="Banner"
//           />
//         </div>
//         <Row>
//           <Col>
//             <h1 className="text-center">Your Cart</h1>

//             <Table striped>
//               <thead>
//                 <tr>
//                   <th>Product</th>
//                   <th>Size</th>
//                   <th>Unit Price</th>
//                   <th>Quantity</th>
//                   <th>Subtotal</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center">
//                       Your cart is empty
//                     </td>
//                   </tr>
//                 ) : (
//                   cartItems.map((item) => (
//                     <tr key={item.id}>
//                       <td>
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           style={{ width: "100px", height: "100px" }}
//                         />
//                         {item.name}
//                       </td>
//                       <td>{item.size || "N/A"}</td>
//                       <td>${(item.unitPrice || 0).toFixed(2)}</td>
//                       <td>{item.quantity || 0}</td>
//                       <td>
//                         $
//                         {((item.unitPrice || 0) * (item.quantity || 0)).toFixed(
//                           2
//                         )}
//                       </td>
//                       <td>
//                         <Button
//                           onClick={() => dispatch(removeFromCart(item.id))}
//                         >
//                           X
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </Table>
//             <Row>
//               <Col md="6" className="text-start">
//                 {cartItems.length > 0 && (
//                   <Link to="/checkout">
//                     <Button color="primary" className="mt-3">
//                       Proceed to Checkout
//                     </Button>
//                   </Link>
//                 )}
//               </Col>
//               <Col md="6" className="text-end">
//                 <Button
//                   color="danger"
//                   className="mb-3"
//                   onClick={handleClearCart}
//                 >
//                   Clear All
//                 </Button>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//         <div>
//           <Row>
//             <Col md="2">
//               <img src="./imges/girl.png" alt="Girl1" />
//             </Col>
//             <Col md="2">
//               <img src="./imges/girl.png" alt="Girl 2" />
//             </Col>
//             <Col md="2">
//               <img src="./imges/girl.png" alt="Girl 3" />
//             </Col>
//             <Col md="2">
//               <img src="./imges/girl.png" alt="Girl 4" />
//             </Col>
//             <Col md="2">
//               <img src="./imges/girl.png" alt="Girl 5" />
//             </Col>
//             <Col md="2">
//               <img src="./imges/girl.png" alt="Girl 6" />
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Cart;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Container,
//   Row,
//   Col,
//   Table,
//   Button,
//   Card,
//   CardImg,
//   CardBody,
// } from "reactstrap";
// import { removeFromCart, clearCart } from "../redux/actions/cartActions";
// import { Link } from "react-router-dom";
// import "../App.css"; // Import your CSS file for styling

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);

//   useEffect(() => {
//     const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//   }, [dispatch]);

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <Container className="cart-page" fluid>
//       <div>
//         <div className="imgesize">
//           <img
//             src="./imges/banner.png"
//             className="img-fluid mb-3"
//             alt="Banner"
//           />
//         </div>
//         <Row>
//           <Col>
//             <h1 className="text-center">Your Cart</h1>

//             <Table striped>
//               <thead>
//                 <tr>
//                   <th>Product</th>
//                   <th>Size</th>
//                   <th>Unit Price</th>
//                   <th>Quantity</th>
//                   <th>Subtotal</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.length === 0 ? (
//                   <tr>
//                     <td colSpan="6" className="text-center">
//                       Your cart is empty
//                     </td>
//                   </tr>
//                 ) : (
//                   cartItems.map((item) => (
//                     <tr key={item.id}>
//                       <td>
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           style={{ width: "100px", height: "100px" }}
//                         />
//                         {item.name}
//                       </td>
//                       <td>{item.size || "N/A"}</td>
//                       <td>${(item.unitPrice || 0).toFixed(2)}</td>
//                       <td>{item.quantity || 0}</td>
//                       <td>
//                         $
//                         {((item.unitPrice || 0) * (item.quantity || 0)).toFixed(
//                           2
//                         )}
//                       </td>
//                       <td>
//                         <Button
//                           onClick={() => dispatch(removeFromCart(item.id))}
//                         >
//                           X
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </Table>
//             <Row>
//               <Col md="6" className="text-start">
//                 {cartItems.length > 0 && (
//                   <Link to="/checkout">
//                     <Button color="primary" className="mt-3">
//                       Proceed to Checkout
//                     </Button>
//                   </Link>
//                 )}
//               </Col>
//               <Col md="6" className="text-end">
//                 <Button
//                   color="danger"
//                   className="mb-3"
//                   onClick={handleClearCart}
//                 >
//                   Clear All
//                 </Button>
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//         <div>
//           <Row>
//             <Col md="2">
//               <Card>
//                 <CardImg
//                   top
//                   width="100%"
//                   src="./imges/instagram3.png"
//                   alt="Girl 1"
//                 />
//                 <CardBody>
//                   {/* You can add any text or content here */}
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col md="2">
//               <Card>
//                 <CardImg
//                   top
//                   width="100%"
//                   src="./imges/instagram4.png"
//                   alt="Girl 2"
//                 />
//                 <CardBody>
//                   {/* You can add any text or content here */}
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col md="2">
//               <Card>
//                 <CardImg
//                   top
//                   width="100%"
//                   src="./imges/instagram5.png"
//                   alt="Girl 3"
//                 />
//                 <CardBody>
//                   {/* You can add any text or content here */}
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col md="2">
//               <Card>
//                 <CardImg
//                   top
//                   width="100%"
//                   src="./imges/instagram2.png"
//                   alt="Girl 4"
//                 />
//                 <CardBody>
//                   {/* You can add any text or content here */}
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col md="2">
//               <Card>
//                 <CardImg
//                   top
//                   width="100%"
//                   src="./imges/instagram6.png"
//                   alt="Girl 5"
//                 />
//                 <CardBody>
//                   {/* You can add any text or content here */}
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col md="2">
//               <Card>
//                 <CardImg
//                   top
//                   width="100%"
//                   src="./imges/instagram.png"
//                   alt="Girl 6"
//                 />
//                 <CardBody>
//                   {/* You can add any text or content here */}
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Cart;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Table, Button } from "reactstrap";
import { removeFromCart, clearCart } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";
import "../App.css"; // Import your CSS file for styling

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container className="cart-page" fluid>
      <div>
        <div className="imgesize">
          <img
            src="./imges/banner.png"
            className="img-fluid mb-3"
            alt="Banner"
          />
        </div>
        <Row>
          <Col>
            <h1 className="text-center">Your Cart</h1>

            <Table striped>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "100px", height: "100px" }}
                        />
                        {item.name}
                      </td>
                      <td>{item.size || "N/A"}</td>
                      <td>${(item.unitPrice || 0).toFixed(2)}</td>
                      <td>{item.quantity || 0}</td>
                      <td>
                        $
                        {((item.unitPrice || 0) * (item.quantity || 0)).toFixed(
                          2
                        )}
                      </td>
                      <td>
                        <Button
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          X
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
            <Row>
              <Col md="6" className="text-start">
                {cartItems.length > 0 && (
                  <Link to="/checkout">
                    <Button color="primary" className="mt-3">
                      Proceed to Checkout
                    </Button>
                  </Link>
                )}
              </Col>
              <Col md="6" className="text-end">
                <Button
                  color="danger"
                  className="mb-3"
                  onClick={handleClearCart}
                >
                  Clear All
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <div>
          <Row className="topmargin">
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram3.png"
                alt="Girl 1"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram4.png"
                alt="Girl 2"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram5.png"
                alt="Girl 3"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram2.png"
                alt="Girl 4"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram6.png"
                alt="Girl 5"
                style={{ width: "100%" }}
              />
            </Col>
            <Col md="2">
              <img
                className="hover-effect"
                src="./imges/instagram.png"
                alt="Girl 6"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
