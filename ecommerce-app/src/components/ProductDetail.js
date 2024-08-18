// import React from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/actions/cartActions";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const product = {
//     id,
//     name: `Product ${id}`,
//     description: `Description of Product ${id}`,
//     images: ["/images/product1.jpg", "/images/product2.jpg"],
//   };

//   const [activeIndex, setActiveIndex] = React.useState(0);
//   const [animating, setAnimating] = React.useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex =
//       activeIndex === product.images.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex =
//       activeIndex === 0 ? product.images.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = product.images.map((item, idx) => (
//     <CarouselItem
//       onExiting={() => setAnimating(true)}
//       onExited={() => setAnimating(false)}
//       key={idx}
//     >
//       <img src={item} alt={product.name} />
//       <CarouselCaption
//         captionText={product.description}
//         captionHeader={product.name}
//       />
//     </CarouselItem>
//   ));

//   return (
//     <Container>
//       <Row>
//         <Col md="6">
//           <Carousel activeIndex={activeIndex} next={next} previous={previous}>
//             <CarouselIndicators
//               items={product.images}
//               activeIndex={activeIndex}
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
//         </Col>
//         <Col md="6">
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <Button onClick={() => dispatch(addToCart(product))}>
//             Add to Cart
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProductDetail;

import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const products = [
  // Product data as defined earlier...
  {
    id: 1,
    name: "Product 1",
    description: "New Arrival",
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
    details: "This is a detailed description of Product 1.",
  },
  {
    id: 2,
    name: "Product 2",
    description: "New Arrival",
    image:
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    details: "This is a detailed description of Product 2.",
  },
  // Add more products as needed...
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <Row>
        <Col sm="6">
          <Card>
            <CardImg top width="100%" src={product.image} alt={product.name} />
          </Card>
        </Col>
        <Col sm="6">
          <CardBody>
            <CardTitle>{product.name}</CardTitle>
            <CardText>{product.description}</CardText>
            <CardText>{product.details}</CardText>
            <Button onClick={() => window.history.back()}>Back</Button>
          </CardBody>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
