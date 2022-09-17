/*import {Button} from "antd";*/
import Styles from "./Card.module.css"
import {Button, ButtonGroup, Card, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {getInformationFromSearch} from "./Card.thunk";
import {connect, useDispatch, useSelector} from "react-redux";
import * as actions from "./Card.actions"
const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  getInformationFromSearch:getInformationFromSearch
}
const connector = connect(mapStateToProps, mapDispatchToProps)

const CardComponent = (props) => {
  const {image, url, fullName} = props;
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const data=useSelector((state)=>state.mainLayout);
  const setInformationAndNavigate=()=>{
    dispatch(actions.getInformationFromSearch({image,url,fullName}))
    return navigate(`/repo/${fullName}`)
  }
  return (
    <Card className={Styles.card}  >
      <Card.Img variant="top" src={image}/>
      <Card.Body style={{textAlign:'center',paddingBottom:"0%"}}>
        <Card.Title style={{color:"black"}}>{fullName}</Card.Title>
      </Card.Body>
      <Card.Body style={{display:"flex", textAlign:'center',paddingTop:"0%"}}>
        <Container fluid="xl">
          <Row>
            <Col xs={12} sm={6} md={12} lg={12} xl={12} xxl={12}>
              <Button variant="outline-dark" className="m-1" href={url}>Vào trang github</Button>
            </Col>
            <Col xs={12} sm={6} md={12} lg={12} xl={12} xxl={12}>
              <Button variant="outline-dark" className="m-1" onClick={() =>setInformationAndNavigate()}>Xem chi
                tiết</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default connector(CardComponent)