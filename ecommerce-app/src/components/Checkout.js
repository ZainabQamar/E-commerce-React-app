// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
// } from "reactstrap";
// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const user = useSelector((state) => state.user.user);
//   const [address, setAddress] = useState("");
//   const [modal, setModal] = useState(false);
//   const navigate = useNavigate();

//   const handleCheckout = (e) => {
//     e.preventDefault();
//     if (address) {
//       setModal(true);
//     } else {
//       alert("Please enter your address.");
//     }
//   };

//   const handleModalClose = () => {
//     setModal(false);
//     navigate("/");
//   };

//   return user ? (
//     <Container>
//       <Row>
//         <Col>
//           <h2>Checkout</h2>
//           <Form onSubmit={handleCheckout}>
//             <FormGroup>
//               <Label for="address">Address</Label>
//               <Input
//                 type="text"
//                 id="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </FormGroup>
//             <h4>Order Summary</h4>
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.id}>{item.name}</li>
//               ))}
//             </ul>
//             <Button type="submit" color="primary">
//               Place Order
//             </Button>
//           </Form>
//           <Modal isOpen={modal} toggle={handleModalClose}>
//             <ModalHeader toggle={handleModalClose}>
//               Order Confirmation
//             </ModalHeader>
//             <ModalBody>
//               Your order #BT-3454 is in process. Thanks for shopping with us!
//             </ModalBody>
//             <Button color="primary" onClick={handleModalClose}>
//               OK
//             </Button>
//           </Modal>
//         </Col>
//       </Row>
//     </Container>
//   ) : (
//     <Container>
//       <Row>
//         <Col>
//           <h2>You must log in before proceeding to checkout</h2>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Checkout;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
// } from "reactstrap";
// import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom

// const Checkout = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const user = useSelector((state) => state.user.user);
//   const [address, setAddress] = useState("");
//   const [modal, setModal] = useState(false);
//   const navigate = useNavigate();

//   const handleCheckout = (e) => {
//     e.preventDefault();
//     if (address) {
//       setModal(true);
//     } else {
//       alert("Please enter your address.");
//     }
//   };

//   const handleModalClose = () => {
//     setModal(false);
//     navigate("/");
//   };

//   return user ? (
//     <Container>
//       <Row>
//         <Col>
//           <h2>Checkout</h2>
//           <Form onSubmit={handleCheckout}>
//             <FormGroup>
//               <Label for="address">Address</Label>
//               <Input
//                 type="text"
//                 id="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </FormGroup>
//             <h4>Order Summary</h4>
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.id}>{item.name}</li>
//               ))}
//             </ul>
//             <Button type="submit" color="primary">
//               Place Order
//             </Button>
//           </Form>
//           <Modal isOpen={modal} toggle={handleModalClose}>
//             <ModalHeader toggle={handleModalClose}>
//               Order Confirmation
//             </ModalHeader>
//             <ModalBody>
//               Your order #BT-3454 is in process. Thanks for shopping with us!
//             </ModalBody>
//             <Button color="primary" onClick={handleModalClose}>
//               OK
//             </Button>
//           </Modal>
//         </Col>
//       </Row>
//     </Container>
//   ) : (
//     <Container>
//       <Row>
//         <Col>
//           <h2>You must log in before proceeding to checkout</h2>
//           <p>
//             Please <Link to="/login">log in</Link> to continue to checkout.
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Checkout;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
// } from "reactstrap";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

// const Checkout = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const user = useSelector((state) => state.user.user);
//   const [address, setAddress] = useState("");
//   const [modal, setModal] = useState(false);
//   const navigate = useNavigate();

//   const handleCheckout = (e) => {
//     e.preventDefault();

//     // Check if the user is logged in
//     if (user) {
//       // If the user is logged in, proceed to checkout
//       if (address) {
//         setModal(true);
//       } else {
//         alert("Please enter your address.");
//       }
//     } else {
//       // If the user is not logged in, navigate to the login page
//       navigate("/login");
//     }
//   };

//   const handleModalClose = () => {
//     setModal(false);
//     navigate("/");
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h2>Checkout</h2>
//           <Form onSubmit={handleCheckout}>
//             <FormGroup>
//               <Label for="address">Address</Label>
//               <Input
//                 type="text"
//                 id="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </FormGroup>
//             <h4>Order Summary</h4>
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.id}>{item.name}</li>
//               ))}
//             </ul>
//             <Button type="submit" color="primary">
//               Place Order
//             </Button>
//           </Form>
//           <Modal isOpen={modal} toggle={handleModalClose}>
//             <ModalHeader toggle={handleModalClose}>
//               Order Confirmation
//             </ModalHeader>
//             <ModalBody>
//               Your order #BT-3454 is in process. Thanks for shopping with us!
//             </ModalBody>
//             <Button color="primary" onClick={handleModalClose}>
//               OK
//             </Button>
//           </Modal>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Checkout;

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
// } from "reactstrap";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

// const Checkout = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const user = useSelector((state) => state.user.user);
//   const [address, setAddress] = useState("");
//   const [modal, setModal] = useState(false);
//   const navigate = useNavigate();

//   // Redirect to login page if user is not logged in
//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//     }
//   }, [user, navigate]);

//   const handleCheckout = (e) => {
//     e.preventDefault();
//     if (address) {
//       setModal(true);
//     } else {
//       alert("Please enter your address.");
//     }
//   };

//   const handleModalClose = () => {
//     setModal(false);
//     navigate("/");
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h2>Checkout</h2>
//           <Form onSubmit={handleCheckout}>
//             <FormGroup>
//               <Label for="address">Address</Label>
//               <Input
//                 type="text"
//                 id="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </FormGroup>
//             <h4>Order Summary</h4>
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.id}>{item.name}</li>
//               ))}
//             </ul>
//             <Button type="submit" color="primary">
//               Place Order
//             </Button>
//           </Form>
//           <Modal isOpen={modal} toggle={handleModalClose}>
//             <ModalHeader toggle={handleModalClose}>
//               Order Confirmation
//             </ModalHeader>
//             <ModalBody>
//               Your order #BT-3454 is in process. Thanks for shopping with us!
//             </ModalBody>
//             <Button color="primary" onClick={handleModalClose}>
//               OK
//             </Button>
//           </Modal>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Checkout;

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
// } from "reactstrap";
// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const user = useSelector((state) => state.user.user);
//   const [address, setAddress] = useState("");
//   const [modal, setModal] = useState(false);
//   const navigate = useNavigate();

//   // Redirect to login page if user is not logged in
//   useEffect(() => {
//     if (!user) {
//       navigate("/login", { state: { from: { pathname: "/checkout" } } });
//     }
//   }, [user, navigate]);

//   const handleCheckout = (e) => {
//     e.preventDefault();
//     if (address) {
//       setModal(true);
//     } else {
//       alert("Please enter your address.");
//     }
//   };

//   const handleModalClose = () => {
//     setModal(false);
//     navigate("/");
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h2>Checkout</h2>
//           <Form onSubmit={handleCheckout}>
//             <FormGroup>
//               <Label for="address">Address</Label>
//               <Input
//                 type="text"
//                 id="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//               />
//             </FormGroup>
//             <h4>Order Summary</h4>
//             <ul>
//               {cartItems.map((item) => (
//                 <li key={item.id}>{item.name}</li>
//               ))}
//             </ul>
//             <Button type="submit" color="primary">
//               Place Order
//             </Button>
//           </Form>
//           <Modal isOpen={modal} toggle={handleModalClose}>
//             <ModalHeader toggle={handleModalClose}>
//               Order Confirmation
//             </ModalHeader>
//             <ModalBody>
//               Your order #BT-3454 is in process. Thanks for shopping with us!
//             </ModalBody>
//             <Button color="primary" onClick={handleModalClose}>
//               OK
//             </Button>
//           </Modal>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Checkout;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.user);
  const [address, setAddress] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  // Redirect to login page if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: { pathname: "/checkout" } } });
    }
  }, [user, navigate]);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (address) {
      setModal(true);
    } else {
      alert("Please enter your address.");
    }
  };

  const handleModalClose = () => {
    setModal(false);
    navigate("/");
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Checkout</h2>
          <Form onSubmit={handleCheckout}>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
            <h4>Order Summary</h4>
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />
                  {item.name}
                </li>
              ))}
            </ul>
            <Button type="submit" color="primary">
              Place Order
            </Button>
          </Form>
          <Modal isOpen={modal} toggle={handleModalClose}>
            <ModalHeader toggle={handleModalClose}>
              Order Confirmation
            </ModalHeader>
            <ModalBody>
              Your order #BT-3454 is in process. Thanks for shopping with us!
            </ModalBody>
            <Button color="primary" onClick={handleModalClose}>
              OK
            </Button>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
