import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const MyCarousel = (props) => {
  return (
    <Carousel>
      {props.images.map((image, index) => (
        <div key={index} style={{maxWidth: "55%"}}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;