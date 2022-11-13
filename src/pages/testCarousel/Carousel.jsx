import image from "../../assets/62dfdb668b98a.jpg"
import {Carousel} from "react-responsive-carousel";
import "./Carousel.css"
const Carousel2 = () => {
  return (
    <div className="main-slide">
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