import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import request from '../../apis/request'
import {Col, Container, Row} from "react-bootstrap";
import CardRepo from "../../components/CardRepo/CardRepo";
import {Button, Empty, Pagination, Tooltip} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";

const pageIndex = 6;

const RepoPage = () => {
  const navigate = useNavigate();
  const {username} = useParams()
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const currentIndexPage = pageIndex * page;
  const prevIndexPage = pageIndex * (page - 1);
  const data=useSelector((state)=>state.mainLayout);
  useEffect(() => {
    if (!username) return;
    const fetchReposByUserName = async () => {
      const response = await request.get(`/users/${username}/repos`)
      console.log(response)
      const data = await response.data
      setRepos(data)
    }
    fetchReposByUserName()
  }, [])
  return (
    <Container>
      <Row className="mt-3">
        <Col sm={12} lg={12} md={12} style={{display: "flex", justifyContent: "start"}}>
          <Tooltip title="Trở về">
            <Button type="primary" shape="round" icon={<ArrowLeftOutlined/>} size="large" style={{color:`${data.color}`,background:`${data.background}`}}
                    onClick={() => navigate(-1)}/>
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={12} md={12} style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
          <h1 style={{color:`${data.background}`}}>Repo page of {username}</h1>
          <h2 style={{color:`${data.background}`}}>Total {repos.length}</h2>
        </Col>
      </Row>
      <Row style={{display: "flex", alignContent: "space-between"}}>
        {repos.length <= 0 ? <Col sm={12} lg={12} md={12} xs={12}><Empty/></Col> :
          repos && repos?.map((repo, index) => (
            prevIndexPage <= index && index < currentIndexPage ?
              <Col sm={12} lg={4} md={12} xs={12}>
                <div key={repo.id}>
                  <CardRepo username={username} nameProject={repo.name} issues={repo.open_issues} fork={repo.fork}
                            watchers={repo.watchers} language={repo.language}/>
                </div>
              </Col>
              : ""
          ))
        }
      </Row>
      <Row className="m-2">
        <Col xs={12} sm={12} lg={12} md={12} xl={12} style={{display: "flex", justifyContent: "center"}}>
          <Pagination
            total={repos.length}
            defaultCurrent={1}
            pageSize={pageIndex}
            onChange={(pageIndex, pageSize) => {
              setPage(pageIndex)
            }}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default RepoPage