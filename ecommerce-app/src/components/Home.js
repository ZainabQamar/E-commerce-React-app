// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   TabContent,
//   TabPane,
//   Nav,
//   NavItem,
//   NavLink,
//   Card,
//   Button,
//   CardImg,
//   CardBody,
//   CardTitle,
//   CardText,
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/actions/cartActions";
// import classnames from "classnames";
// import "../App.css";
// import ContactSection from "./ContactSection"; // Import the ContactSection component

// const carouselItems = [
//   {
//     id: 1,
//     src: "https://media.istockphoto.com/id/531048139/photo/bearded-man-laughing.jpg?s=1024x1024&w=is&k=20&c=dS-tMWIcvrkfeDqbzzeymwU2claTWYl4HnYJN-PthOY=",
//     altText: "Slide 1",
//     caption: "Welcome to our store!",
//   },
//   {
//     id: 2,
//     src: "https://media.istockphoto.com/id/531048139/photo/bearded-man-laughing.jpg?s=1024x1024&w=is&k=20&c=dS-tMWIcvrkfeDqbzzeymwU2claTWYl4HnYJN-PthOY=",
//     altText: "Slide 2",
//     caption: "Check out the latest arrivals!",
//   },
//   {
//     id: 3,
//     src: "https://media.istockphoto.com/id/1733670713/photo/woman-hands-holding-stack-warm-winter-sweaters-on-grey-background-a-stack-of-sweaters-jumpers.jpg?s=612x612&w=0&k=20&c=H7Km4yE-pXXD4Prset9NSKMj9Q42GB1NY6WIPlIgAT4=",
//     altText: "Slide 3",
//     caption: "Best selling products just for you!",
//   },
// ];

// const Home = () => {
//   const [activeTab, setActiveTab] = useState("1");
//   const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);
//   const [carouselAnimating, setCarouselAnimating] = useState(false);
//   const [hoveredProductId, setHoveredProductId] = useState(null); // New state to track the hovered product
//   const dispatch = useDispatch();

//   const toggle = (tab) => {
//     if (activeTab !== tab) setActiveTab(tab);
//   };

//   const next = () => {
//     if (carouselAnimating) return;
//     const nextIndex =
//       carouselActiveIndex === carouselItems.length - 1
//         ? 0
//         : carouselActiveIndex + 1;
//     setCarouselActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (carouselAnimating) return;
//     const nextIndex =
//       carouselActiveIndex === 0
//         ? carouselItems.length - 1
//         : carouselActiveIndex - 1;
//     setCarouselActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (carouselAnimating) return;
//     setCarouselActiveIndex(newIndex);
//   };

//   const slides = carouselItems.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setCarouselAnimating(true)}
//         onExited={() => setCarouselAnimating(false)}
//         key={item.id}
//       >
//         <img src={item.src} alt={item.altText} className="d-block w-100" />
//         <CarouselCaption
//           captionText={item.caption}
//           captionHeader={item.caption}
//         />
//       </CarouselItem>
//     );
//   });

//   const products = [
//     // Product data as defined earlier...
//     {
//       id: 1,
//       name: "Product 1",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 5,
//       name: "Product 5",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 6,
//       name: "Product 6",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 7,
//       name: "Product 7",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 8,
//       name: "Product 8",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/2393813/pexels-photo-2393813.jpeg?auto=compress&cs=tinysrgb&hw=600",
//     },
//     {
//       id: 9,
//       name: "Product 9",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 10,
//       name: "Product 10",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 11,
//       name: "Product 11",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 12,
//       name: "Product 12",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//   ];

//   // Function to handle product click
//   const handleProductClick = (productId) => {
//     setHoveredProductId(productId);
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Carousel
//             activeIndex={carouselActiveIndex}
//             next={next}
//             previous={previous}
//           >
//             <CarouselIndicators
//               items={carouselItems}
//               activeIndex={carouselActiveIndex}
//               onClickHandler={goToIndex}
//             />
//             {slides}
//             <CarouselControl
//               direction="prev"
//               directionText="Previous"
//               onClickHandler={previous}
//             />
//             <CarouselControl
//               direction="next"
//               directionText="Next"
//               onClickHandler={next}
//             />
//           </Carousel>

//           <Nav tabs className="mt-4">
//             <NavItem>
//               <NavLink
//                 className={classnames({ active: activeTab === "1" })}
//                 onClick={() => {
//                   toggle("1");
//                 }}
//               >
//                 New Arrival
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 className={classnames({ active: activeTab === "2" })}
//                 onClick={() => {
//                   toggle("2");
//                 }}
//               >
//                 Best Selling
//               </NavLink>
//             </NavItem>
//           </Nav>
//           <TabContent activeTab={activeTab}>
//             <TabPane tabId="1">
//               <Row>
//                 {products
//                   .filter((product) => product.description === "New Arrival")
//                   .map((product) => (
//                     <Col sm="4" key={product.id}>
//                       <Card
//                         className={
//                           hoveredProductId === product.id ? "hovered" : ""
//                         }
//                         onClick={() => handleProductClick(product.id)}
//                       >
//                         <CardImg
//                           top
//                           width="100%"
//                           src={product.image}
//                           alt={product.name}
//                         />
//                         <CardBody>
//                           <CardTitle>{product.name}</CardTitle>
//                           <CardText>{product.description}</CardText>
//                           <Button onClick={() => dispatch(addToCart(product))}>
//                             Add to Cart
//                           </Button>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   ))}
//               </Row>
//             </TabPane>
//             <TabPane tabId="2">
//               <Row>
//                 {products
//                   .filter((product) => product.description === "Best Selling")
//                   .map((product) => (
//                     <Col sm="4" key={product.id}>
//                       <Card
//                         className={
//                           hoveredProductId === product.id ? "hovered" : ""
//                         }
//                         onClick={() => handleProductClick(product.id)}
//                       >
//                         <CardImg
//                           top
//                           width="100%"
//                           src={product.image}
//                           alt={product.name}
//                         />
//                         <CardBody>
//                           <CardTitle>{product.name}</CardTitle>
//                           <CardText>{product.description}</CardText>
//                           <Button onClick={() => dispatch(addToCart(product))}>
//                             Add to Cart
//                           </Button>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   ))}
//               </Row>
//             </TabPane>
//           </TabContent>
//         </Col>
//       </Row>

//       {/* Contact Section */}
//       <ContactSection />
//     </Container>
//   );
// };

// export default Home;

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import classnames from "classnames";
import "../App.css";
import ContactSection from "./ContactSection";

// Your existing carousel items
const carouselItems = [
  {
    id: 1,
    src: "/imges/banner2.png",
    altText: "Slide 1",
    caption: "Welcome to our store!",
  },
  {
    id: 2,
    src: "/imges/banner.png",
    caption: "Check out the latest arrivals!",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);
  const [carouselAnimating, setCarouselAnimating] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold selected product
  const dispatch = useDispatch();

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleModal = () => setModal(!modal);

  const next = () => {
    if (carouselAnimating) return;
    const nextIndex =
      carouselActiveIndex === carouselItems.length - 1
        ? 0
        : carouselActiveIndex + 1;
    setCarouselActiveIndex(nextIndex);
  };

  const previous = () => {
    if (carouselAnimating) return;
    const nextIndex =
      carouselActiveIndex === 0
        ? carouselItems.length - 1
        : carouselActiveIndex - 1;
    setCarouselActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (carouselAnimating) return;
    setCarouselActiveIndex(newIndex);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    toggleModal();
  };

  const slides = carouselItems.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setCarouselAnimating(true)}
        onExited={() => setCarouselAnimating(false)}
        key={item.id}
      >
        <img src={item.src} alt={item.altText} className="d-block w-100" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const products = [
    // Your existing products data
    {
      id: 1,
      name: "Product 1",
      description: "New Arrival",
      image: "/imges/product1.png",
    },
    {
      id: 2,
      name: "Product 2",
      description: "New Arrival",
      image: "/imges/product2.png",
    },
    {
      id: 3,
      name: "Product 3",
      description: "New Arrival",
      image: "/imges/product3.png",
    },
    {
      id: 4,
      name: "Product 4",
      description: "New Arrival",
      image: "/imges/product4.png",
    },
    {
      id: 5,
      name: "Product 5",
      description: "New Arrival",
      image: "/imges/product5.png",
    },
    {
      id: 6,
      name: "Product 6",
      description: "New Arrival",
      image: "/imges/product6.png",
    },
    {
      id: 7,
      name: "Product 7",
      description: "New Arrival",
      image: "/imges/product7.png",
    },
    {
      id: 8,
      name: "Product 8",
      description: "Best Selling",
      image: "/imges/product8.png",
    },
    {
      id: 9,
      name: "Product 9",
      description: "Best Selling",
      image: "/imges/product9.png",
    },
    {
      id: 10,
      name: "Product 10",
      description: "New Arrival",
      image: "/imges/product10.png",
    },
    {
      id: 11,
      name: "Product 11",
      description: "New Arrival",
      image: "/imges/product11.png",
    },
    {
      id: 12,
      name: "Product 12",
      description: "New Arrival",
      image: "/imges/product12.png",
    },
    {
      id: 13,
      name: "Product 13",
      description: "New Arrival",
      image: "/imges/product13.png",
    },
    {
      id: 14,
      name: "Product 14",
      description: "New Arrival",
      image: "/imges/product14.png",
    },
    {
      id: 15,
      name: "Product 15",
      description: "Best Selling",
      image: "/imges/product15.png",
    },
    {
      id: 16,
      name: "Product 16",
      description: "Best Selling",
      image: "/imges/product16.png",
    },
    {
      id: 17,
      name: "Product 17",
      description: "Best Selling",
      image: "/imges/product17.png",
    },
    {
      id: 18,
      name: "Product 18",
      description: "Best Selling",
      image: "/imges/product18.png",
    },
    {
      id: 19,
      name: "Product 19",
      description: "Best Selling",
      image: "/imges/product19.png",
    },
    {
      id: 20,
      name: "Product 20",
      description: "Best Selling",
      image: "/imges/product20.png",
    },
    {
      id: 21,
      name: "Product 21",
      description: "Best Selling",
      image: "/imges/product21.png",
    },
    {
      id: 22,
      name: "Product 22",
      description: "Best Selling",
      image: "/imges/product22.png",
    },
    {
      id: 23,
      name: "Product 23",
      description: "Best Selling",
      image: "/imges/product23.png",
    },
    {
      id: 24,
      name: "Product 24",
      description: "Best Selling",
      image: "/imges/product24.png",
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Carousel
            activeIndex={carouselActiveIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={carouselItems}
              activeIndex={carouselActiveIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>

          <Nav tabs className="mt-4">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                New Arrival
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Best Selling
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                {products
                  .filter((product) => product.description === "New Arrival")
                  .map((product) => (
                    <Col sm="3" key={product.id}>
                      <Card onClick={() => handleProductClick(product)}>
                        <CardImg
                          top
                          width="100%"
                          src={product.image}
                          alt={product.name}
                        />
                        <CardBody>
                          <CardTitle>{product.name}</CardTitle>
                          <CardText>{product.description}</CardText>
                          <Button onClick={() => dispatch(addToCart(product))}>
                            Add to Cart
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                {products
                  .filter((product) => product.description === "Best Selling")
                  .map((product) => (
                    <Col sm="3" key={product.id}>
                      <Card onClick={() => handleProductClick(product)}>
                        <CardImg
                          top
                          width="100%"
                          src={product.image}
                          alt={product.name}
                        />
                        <CardBody>
                          <CardTitle>{product.name}</CardTitle>
                          <CardText>{product.description}</CardText>
                          <Button onClick={() => dispatch(addToCart(product))}>
                            Add to Cart
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>

      {/* Modal for displaying product details */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>
          {selectedProduct && selectedProduct.name}
        </ModalHeader>
        <ModalBody>
          <Row>
            {/* Images Section */}
            <Col md="6">
              <div className="modal-images">
                <CardImg
                  top
                  width="100%"
                  src={selectedProduct && selectedProduct.image}
                  alt={selectedProduct && selectedProduct.name}
                />
                <div className="additional-images mt-2">
                  {/* Assuming selectedProduct has additionalImages array */}
                  {selectedProduct &&
                    selectedProduct.additionalImages &&
                    selectedProduct.additionalImages.map((img, index) => (
                      <CardImg
                        key={index}
                        src={img}
                        alt={`Additional Image ${index + 1}`}
                        className="additional-image"
                      />
                    ))}
                </div>
              </div>
            </Col>

            {/* Details Section */}
            <Col md="6">
              <div className="modal-details">
                <CardTitle tag="h5">Product Details</CardTitle>
                <CardText>
                  {selectedProduct && selectedProduct.description}
                  <p>
                    <h5>
                      "Autumn Winter Girls Kids Pants Plus Velvet Children's
                    </h5>
                    Leggings Cotton <h5>(14 Reviews - 25 Orders)</h5>{" "}
                    <h4>$15.00$25.00 </h4> New Fashion Autumn Winter Girls Kids
                    Pants Plus Velvet Children's Leggings Cotton Velvet Elastic
                    Waist Warm Legging 3-8 Years"
                  </p>
                </CardText>
                {/* Add more details as needed */}
              </div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => dispatch(addToCart(selectedProduct))}
          >
            Add to Cart
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      {/* Contact Section */}
      <ContactSection />
    </Container>
  );
};

export default Home;

// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   TabContent,
//   TabPane,
//   Nav,
//   NavItem,
//   NavLink,
//   Card,
//   Button,
//   CardImg,
//   CardBody,
//   CardTitle,
//   CardText,
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/actions/cartActions";
// import classnames from "classnames";
// import "../App.css";
// import ContactSection from "./ContactSection"; // Import the ContactSection component
// const carouselItems = [
//   {
//     id: 1,
//     src: "https://media.istockphoto.com/id/531048139/photo/bearded-man-laughing.jpg?s=1024x1024&w=is&k=20&c=dS-tMWIcvrkfeDqbzzeymwU2claTWYl4HnYJN-PthOY=",
//     altText: "Slide 1",
//     caption: "Welcome to our store!",
//   },
//   {
//     id: 2,
//     src: "https://media.istockphoto.com/id/531048139/photo/bearded-man-laughing.jpg?s=1024x1024&w=is&k=20&c=dS-tMWIcvrkfeDqbzzeymwU2claTWYl4HnYJN-PthOY=",
//     altText: "Slide 2",
//     caption: "Check out the latest arrivals!",
//   },
//   {
//     id: 3,
//     src: "https://media.istockphoto.com/id/1733670713/photo/woman-hands-holding-stack-warm-winter-sweaters-on-grey-background-a-stack-of-sweaters-jumpers.jpg?s=612x612&w=0&k=20&c=H7Km4yE-pXXD4Prset9NSKMj9Q42GB1NY6WIPlIgAT4=",
//     altText: "Slide 3",
//     caption: "Best selling products just for you!",
//   },
// ];

// const Home = () => {
//   const [activeTab, setActiveTab] = React.useState("1");
//   const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);
//   const [carouselAnimating, setCarouselAnimating] = useState(false);
//   const dispatch = useDispatch();

//   const toggle = (tab) => {
//     if (activeTab !== tab) setActiveTab(tab);
//   };

// const next = () => {
//   if (carouselAnimating) return;
//   const nextIndex =
//     carouselActiveIndex === carouselItems.length - 1
//       ? 0
//       : carouselActiveIndex + 1;
//   setCarouselActiveIndex(nextIndex);
// };

// const previous = () => {
//   if (carouselAnimating) return;
//   const nextIndex =
//     carouselActiveIndex === 0
//       ? carouselItems.length - 1
//       : carouselActiveIndex - 1;
//   setCarouselActiveIndex(nextIndex);
// };

// const goToIndex = (newIndex) => {
//   if (carouselAnimating) return;
//   setCarouselActiveIndex(newIndex);
// };

// const slides = carouselItems.map((item) => {
//   return (
//     <CarouselItem
//       onExiting={() => setCarouselAnimating(true)}
//       onExited={() => setCarouselAnimating(false)}
//       key={item.id}
//     >
//       <img src={item.src} alt={item.altText} className="d-block w-100" />
//       <CarouselCaption
//         captionText={item.caption}
//         captionHeader={item.caption}
//       />
//     </CarouselItem>
//   );
// });

// const products = [
// Product data as defined earlier...
//   {
//     id: 1,
//     name: "Product 1",
//     description: "New Arrival",
//     image:
//       "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     description: "New Arrival",
//     image:
//       "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     description: "New Arrival",
//     image:
//       "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     description: "New Arrival",
//     image:
//       "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     description: "New Arrival",
//     image:
//       "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     description: "New Arrival",
//     image:
//       "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 7,
//     name: "Product 7",
//     description: "Best Selling",
//     image:
//       "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 8,
//     name: "Product 8",
//     description: "Best Selling",
//     image:
//       "https://images.pexels.com/photos/2393813/pexels-photo-2393813.jpeg?auto=compress&cs=tinysrgb&hw=600",
//   },
//   {
//     id: 9,
//     name: "Product 9",
//     description: "Best Selling",
//     image:
//       "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 10,
//     name: "Product 10",
//     description: "Best Selling",
//     image:
//       "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 11,
//     name: "Product 11",
//     description: "Best Selling",
//     image:
//       "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 12,
//     name: "Product 12",
//     description: "Best Selling",
//     image:
//       "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];

// return (
//   <Container>
//     <Row>
//       <Col>
//         <Carousel
//           activeIndex={carouselActiveIndex}
//           next={next}
//           previous={previous}
//         >
//           <CarouselIndicators
//             items={carouselItems}
//             activeIndex={carouselActiveIndex}
//             onClickHandler={goToIndex}
//           />
//           {slides}
//           <CarouselControl
//             direction="prev"
//             directionText="Previous"
//             onClickHandler={previous}
//           />
//           <CarouselControl
//             direction="next"
//             directionText="Next"
//             onClickHandler={next}
//           />
//         </Carousel>

//         <Nav tabs className="mt-4">
//           <NavItem>
//             <NavLink
//               className={classnames({ active: activeTab === "1" })}
//               onClick={() => {
//                 toggle("1");
//               }}
//             >
//               New Arrival
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: activeTab === "2" })}
//               onClick={() => {
//                 toggle("2");
//               }}
//             >
//               Best Selling
//             </NavLink>
//           </NavItem>
//         </Nav>
//         <TabContent activeTab={activeTab}>
//           <TabPane tabId="1">
// <Row>
//   {products
//     .filter((product) => product.description === "New Arrival")
//     .map((product) => (
//       <Col sm="4" key={product.id}>
//         <Card>
//           <CardImg
//             top
//             width="100%"
//             src={product.image}
//             alt={product.name}
//           />
//           <CardBody>
//             <CardTitle>{product.name}</CardTitle>
//             <CardText>{product.description}</CardText>
//             <Button onClick={() => dispatch(addToCart(product))}>
//               Add to Cart
//             </Button>
//           </CardBody>
//         </Card>
//         </Col>
//       ))}
//   </Row>
// </TabPane>
// <TabPane tabId="2">
//   <Row>
//     {products
//       .filter((product) => product.description === "Best Selling")
//       .map((product) => (
//         <Col sm="4" key={product.id}>
//           <Card>
//             <CardImg
//               top
//               width="100%"
//               src={product.image}
//               alt={product.name}
//             />
//             <CardBody>
//               <CardTitle>{product.name}</CardTitle>
//               <CardText>{product.description}</CardText>
//               <Button onClick={() => dispatch(addToCart(product))}>
//                 Add to Cart
//               </Button>
//                   </CardBody>
//                 </Card>
//               </Col>
//             ))}
//         </Row>
//       </TabPane>
//     </TabContent>
//   </Col>
// </Row>
// {/* Contact Section */}
// <ContactSection />
//     </Container>
//   );
// };

// export default Home;

// const Home = () => {
//   const [activeTab, setActiveTab] = React.useState("1");
//   const dispatch = useDispatch();

//   const toggle = (tab) => {
//     if (activeTab !== tab) setActiveTab(tab);
//   };

//   const products = [
//     // Mock products data
//     {
//       id: 1,
//       name: "Product 1",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 5,
//       name: "Product 5",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 6,
//       name: "Product 6",
//       description: "New Arrival",
//       image:
//         "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 7,
//       name: "Product 7",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 8,
//       name: "Product 8",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/2393813/pexels-photo-2393813.jpeg?auto=compress&cs=tinysrgb&hw=600",
//     },
//     {
//       id: 9,
//       name: "Product 9",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 10,
//       name: "Product 10",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 11,
//       name: "Product 11",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 12,
//       name: "Product 12",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },

//     {
//       id: 13,
//       name: "Product 13",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//     {
//       id: 14,
//       name: "Product 14",
//       description: "Best Selling",
//       image:
//         "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
//     },
//   ];

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Nav tabs>
//             <NavItem>
//               <NavLink
//                 className={classnames({ active: activeTab === "1" })}
//                 onClick={() => {
//                   toggle("1");
//                 }}
//               >
//                 New Arrival
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink
//                 className={classnames({ active: activeTab === "2" })}
//                 onClick={() => {
//                   toggle("2");
//                 }}
//               >
//                 Best Selling
//               </NavLink>
//             </NavItem>
//           </Nav>
//           <TabContent activeTab={activeTab}>
//             <TabPane tabId="1">
//               <Row>
//                 {products
//                   .filter((product) => product.description === "New Arrival")
//                   .map((product) => (
//                     <Col sm="4" key={product.id}>
//                       <Card>
//                         <CardImg
//                           top
//                           width="100%"
//                           src={product.image}
//                           alt={product.name}
//                         />
//                         <CardBody>
//                           <CardTitle>{product.name}</CardTitle>
//                           <CardText>{product.description}</CardText>
//                           <Button onClick={() => dispatch(addToCart(product))}>
//                             Add to Cart
//                           </Button>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   ))}
//               </Row>
//             </TabPane>
//             <TabPane tabId="2">
//               <Row>
//                 {products
//                   .filter((product) => product.description === "Best Selling")
//                   .map((product) => (
//                     <Col sm="4" key={product.id}>
//                       <Card>
//                         <CardImg
//                           top
//                           width="100%"
//                           src={product.image}
//                           alt={product.name}
//                         />
//                         <CardBody>
//                           <CardTitle>{product.name}</CardTitle>
//                           <CardText>{product.description}</CardText>
//                           <Button onClick={() => dispatch(addToCart(product))}>
//                             Add to Cart
//                           </Button>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   ))}
//               </Row>
//             </TabPane>
//           </TabContent>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;
