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
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import classnames from "classnames";
import "../App.css";
import ContactSection from "./ContactSection"; // Import the ContactSection component
const carouselItems = [
  {
    id: 1,
    src: "https://via.placeholder.com/900x300?text=Slide+1",
    altText: "Slide 1",
    caption: "Welcome to our store!",
  },
  {
    id: 2,
    src: "https://via.placeholder.com/900x300?text=Slide+2",
    altText: "Slide 2",
    caption: "Check out the latest arrivals!",
  },
  {
    id: 3,
    src: "https://via.placeholder.com/900x300?text=Slide+3",
    altText: "Slide 3",
    caption: "Best selling products just for you!",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = React.useState("1");
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);
  const [carouselAnimating, setCarouselAnimating] = useState(false);
  const dispatch = useDispatch();

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

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
    // Product data as defined earlier...
    {
      id: 1,
      name: "Product 1",
      description: "New Arrival",
      image:
        "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Product 2",
      description: "New Arrival",
      image:
        "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Product 3",
      description: "New Arrival",
      image:
        "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Product 4",
      description: "New Arrival",
      image:
        "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Product 5",
      description: "New Arrival",
      image:
        "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Product 6",
      description: "New Arrival",
      image:
        "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      name: "Product 7",
      description: "Best Selling",
      image:
        "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      name: "Product 8",
      description: "Best Selling",
      image:
        "https://images.pexels.com/photos/2393813/pexels-photo-2393813.jpeg?auto=compress&cs=tinysrgb&hw=600",
    },
    {
      id: 9,
      name: "Product 9",
      description: "Best Selling",
      image:
        "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      name: "Product 10",
      description: "Best Selling",
      image:
        "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 11,
      name: "Product 11",
      description: "Best Selling",
      image:
        "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 12,
      name: "Product 12",
      description: "Best Selling",
      image:
        "https://images.pexels.com/photos/8365688/pexels-photo-8365688.jpeg?auto=compress&cs=tinysrgb&w=600",
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
                    <Col sm="4" key={product.id}>
                      <Card>
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
                    <Col sm="4" key={product.id}>
                      <Card>
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
      {/* Contact Section */}
      <ContactSection />
    </Container>
  );
};

export default Home;

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
