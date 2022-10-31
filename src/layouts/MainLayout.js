import FooterPage from '../components/Footer/Footer';
import {BackTop, Drawer, Layout, Menu, Switch} from 'antd';
import AsidePage from "../components/Aside/Aside";
import React, {useEffect, useMemo, useRef, useState} from "react";
import './MainLayout.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import RoutesPage from "../routes/RoutesPage";
import {COLOR} from "../constants/styles";
import {Col, Form, Row} from "react-bootstrap";
import {connect, useDispatch, useSelector} from "react-redux";
import * as actions from "./MainLayout.actions"
import DarkModeToggle from "react-dark-mode-toggle";
import {useSpring,animated} from "react-spring";
const { Header, Footer, Sider, Content } = Layout;


const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}
const connector = connect(mapStateToProps, mapDispatchToProps)

const getWindowHeight=()=> {
  const {innerHeight} = window;
  return {innerHeight};
}

const MainLayout=()=> {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.mainLayout);
  const [changeMode,setChangeMode]=useState(!data.flag);
  useEffect(()=>{
    if(changeMode===true){
      dispatch(actions.getModeLight({mode:"light",background:"#fff",color:"#001529",flag:false}))
    }
    else{
      dispatch(actions.getModeDark({mode:"dark",background:"#001529",color:"#fff",flag:true}))
    }

  },[changeMode]);
  const onClose=()=>{
    setCollapsed(false);
  }

  return (
    <Row xl={12} sm={12} md={12} xs={12} lg={12} xxl={12}  >
      <Layout style={{display:"flex",flex:1,height:"auto"}}>
        <meta name="google-site-verification" content="m3OErAMdPxtr2LNsB4J0LmfOxkpsKmYMnEUWfruJrwM" />
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          open={collapsed}
          width="300px"
          bodyStyle={{
            background:`${data.background}`, color:`${data.color}`
          }}
        >
          <AsidePage onClose={onClose} />
        </Drawer>
        <Layout >
          <Row xl={12} sm={12} md={12} xs={12} lg={12} xxl={12}>
            <Col xl={12} sm={12} md={12} xs={12} lg={12} xxl={12} >
          <Header className="site-layout-background " style={{ padding: 0,background:`${data.background}`, color:`${data.color}`,display:"flex",justifyContent:"space-between"}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style:{fontSize: "20px", margin:"20px",background:`${data.background}`, color:`${data.color}`},
              onClick: () => setCollapsed(!collapsed),
            })}
            <DarkModeToggle
              speed={10}
              className="mt-3 me-2"
              onChange={evt=>{setChangeMode(evt)}}
              checked={changeMode}
              size={60}
            />
            <meta name="google-site-verification" content="m3OErAMdPxtr2LNsB4J0LmfOxkpsKmYMnEUWfruJrwM" />
          </Header>
              <meta name="google-site-verification" content="m3OErAMdPxtr2LNsB4J0LmfOxkpsKmYMnEUWfruJrwM" />
            </Col>
          </Row>
            <Content style={{ padding: 0,background:`${data.color}`, color:`${data.background}`,minHeight:getWindowHeight().innerHeight}}>
            <RoutesPage/>
            <BackTop visibilityHeight={1} style={{ color:`${data.color}`}} duration={5}/>
          </Content>
          <Footer style={{ textAlign: 'center',color:`${data.color}`,background:`${data.background}`}} className=" site-layout-background">
            <FooterPage/>
          </Footer>
        </Layout>
      </Layout>
    </Row>
  );
}
export default connector(MainLayout);
