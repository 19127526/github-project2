import {useSelector} from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComponent from "../../components/CardSearch/Card";
import Container from "react-bootstrap/Container";
import React, {useState} from "react";
import {Pagination} from "antd";

const pageIndex = 6;

const HistoryUser=()=>{
  const mode=useSelector((state)=>state.cardSearch);
  const [page, setPage] = useState(1);
  const currentIndexPage = pageIndex * page;
  const prevIndexPage = pageIndex * (page - 1);
  const data=useSelector((state)=>state.mainLayout);
  return (
    <Container>
      <Row className="m-2">
        <Col sm={12} lg={12} md={12} style={{display:"flex",flexDirection:"column",textAlign: "center"}}>
          <h1 style={{color:`${data.background}`}}>Lịch sử người dùng</h1>
          <h2 style={{color:`${data.background}`}}>Số lượng: {mode.length}</h2>
        </Col>
      </Row>
    <Row >
      {mode &&
        mode?.map((user, index) => prevIndexPage <= index &&index< currentIndexPage? <Col xs={12} sm={12} lg={4} md={6} xl={4} >
          <CardComponent fullName={user.fullName} url={user.url} image={user.image}/>
        </Col>:"")
      }
    </Row>
      {mode.length !== 0 ?
        <Row className="m-2">

          <Col xs={12} sm={12} lg={12} md={12} xl={12} style={{display: "flex", justifyContent: "center"}}>
            <Pagination
              total={mode.length}
              defaultCurrent={1}
              pageSize={pageIndex}
              onChange={(pageIndex, pageSize) => {
                setPage(pageIndex)
              }}
            />
          </Col>
        </Row>
        :
        ""
      }
  </Container>)
}

export default HistoryUser