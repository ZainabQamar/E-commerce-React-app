import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = {
    id,
    name: `Product ${id}`,
    description: `Description of Product ${id}`,
    images: ["/images/product1.jpg", "/images/product2.jpg"],
  };

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === product.images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? product.images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = product.images.map((item, idx) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={idx}
    >
      <img src={item} alt={product.name} />
      <CarouselCaption
        captionText={product.description}
        captionHeader={product.name}
      />
    </CarouselItem>
  ));

  return (
    <Container>
      <Row>
        <Col md="6">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={product.images}
              activeIndex={activeIndex}
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
        </Col>
        <Col md="6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <Button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
