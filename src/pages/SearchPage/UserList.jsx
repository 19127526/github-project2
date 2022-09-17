import React, {useState} from "react"
import {useNavigate} from 'react-router-dom'
import CardComponent from "../../components/CardSearch/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Pagination} from "antd";

const pageIndex = 6;
const UserList = ({userList}) => {
  const [page, setPage] = useState(1);
  const currentIndexPage = pageIndex * page;
  const prevIndexPage = pageIndex * (page - 1);
  return (
    <Container>
      <Row>
        {userList &&
          userList?.map((user, index) => {
              return prevIndexPage <= index &&index< currentIndexPage ?
                <Col xs={12} sm={12} lg={4} md={6} xl={4}>
                  <CardComponent fullName={user.login} url={user.html_url} image={user.avatar_url}/>
                </Col>
                : ""
            }
          )
        }
      </Row>
      <Row className="m-2">
       {/* <Col xs={12} sm={12} lg={12} md={12} xl={12} style={{display: "flex", justifyContent: "center"}}>
          <Pagination
            total={userList.length}
            defaultCurrent={1}
            pageSize={pageIndex}
            showTotal={(total) => `Total ${total} items`}
            onChange={(pageIndex, pageSize) => {
              setPage(pageIndex)
            }}
          />
        </Col>*/}
      </Row>
    </Container>
  )
}
/*<CardComponent fullName={user.login} url={user.html_url} image={user.avatar_url}/>*/
/*<li key={user.id} onClick={() => navigate(`/repo/${user.login}`)}>{user.login}</li>*/
export default UserList