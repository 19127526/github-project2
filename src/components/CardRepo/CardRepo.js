import Styles from './CardRepo.module.css'
import {Button, Card, ListGroup} from "react-bootstrap";
import Readme from "../Modal/Readme";
import * as actions from "./CardRepo.actions"
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const mapStateToProps = state => ({})

const mapDispatchToProps = {}
const connector = connect(mapStateToProps, mapDispatchToProps)
const CardRepo = (props) => {
  const {nameProject, issues, fork, watchers, language, username} = props;
  const [openReadme, setOpenReadme] = useState(false)
  const dispatch = useDispatch();
  const data=useSelector((state)=>state.mainLayout);
  const showModal=(flag)=>{
     setOpenReadme(flag);
  }
  const getInformationAndOpenReadme = () => {
    dispatch(actions.getInformationFromRepo({nameProject, issues, fork, watchers, language, username}))
    showModal(!openReadme)
  }
  console.log(data.color);
  return (
    <>
      <Card className={Styles.card}>
        <Card.Header as="h5" style={{color:`black`}}>{nameProject}</Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Open issues: {issues}</ListGroup.Item>
          <ListGroup.Item>Fork: {fork}</ListGroup.Item>
          <ListGroup.Item>Watchers: {watchers}</ListGroup.Item>
          <ListGroup.Item>Language: {language === null ? "None" : language}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <div className="text-center">
            <Button variant="outline-dark" onClick={() => getInformationAndOpenReadme()}>Xem chi tiết </Button>
            {openReadme === true ? <Readme open={openReadme} repo={nameProject} username={username} setOpen={showModal}/> : ""}
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default connector(CardRepo)
