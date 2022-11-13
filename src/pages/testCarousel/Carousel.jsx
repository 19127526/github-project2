import image from "../../assets/62dfdb668b98a.jpg"
import {Carousel} from "react-responsive-carousel";

const Carousel2 = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel showArrows={true} infiniteLoop useKeyboardArrows autoPlay >
        <div>
          <img src={image}/>
        </div>
        <div>
          <img src={image}/>
        </div>
        <div>
          <img src={image}/>
        </div>
        <div>
          <img src={image}/>
        </div>
        <div>
          <img src={image}/>
        </div>
        <div>
          <img src={image}/>
        </div>
      </Carousel>
    </div>)
}

export default Carousel2