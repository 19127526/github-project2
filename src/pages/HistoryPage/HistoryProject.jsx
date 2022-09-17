import {useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {Empty, Pagination} from "antd";
import CardRepo from "../../components/CardRepo/CardRepo";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";


const pageIndex = 6;

const HistoryProject = () => {
  const mode = useSelector((state) => state.cardRepo);
  const [page, setPage] = useState(1);
  const currentIndexPage = pageIndex * page;
  const prevIndexPage = pageIndex * (page - 1);
  const data=useSelector((state)=>state.mainLayout);
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="m-2">
        <Col sm={12} lg={12} md={12} style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
          <h1 style={{color:`${data.background}`}}>Lịch sử đồ án</h1>
          <h2 style={{color:`${data.background}`}}>Số lượng: {mode.length}</h2>
        </Col>
      </Row>
      <Row style={{display: "flex", alignContent: "space-between"}}>
        {mode.length <= 0 ? <Col sm={12} lg={12} md={12} xs={12}><Empty/></Col> :
          mode && mode?.map((value, index) => (
            prevIndexPage <= index && index < currentIndexPage ?
              <Col sm={12} lg={4} md={12} xs={12}>
                <div key={value.id}>
                  <CardRepo username={value.username} nameProject={value.nameProject} issues={value.issues}
                            fork={value.fork}
                            watchers={value.watchers} language={value.language}/>
                </div>
              </Col>
              : ""
          ))
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
    </Container>
  )
}

export default HistoryProject