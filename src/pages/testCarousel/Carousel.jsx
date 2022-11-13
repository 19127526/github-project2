import "./Carousel.css"
import image from "../../assets/62dfdb668b98a.jpg"
const Carousel=()=>{
  return (<div className="container" style={{minHeight:"1000px",minWidth:"1000px"}}>
    <input type="radio" name="slider" id="item-1" checked/>
      <input type="radio" name="slider" id="item-2"/>
        <input type="radio" name="slider" id="item-3"/>
          <div className="cards">
            <label className="card" htmlFor="item-1" id="song-1">
              <img
                src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
                alt="song"/>
            </label>
            <label className="card" htmlFor="item-2" id="song-2">
              <img
                src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                alt="song"/>
            </label>
            <label className="card" htmlFor="item-3" id="song-3">
              <img
                src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="song"/>
            </label>
          </div>
  </div>)
}

export default Carousel