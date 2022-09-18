import {Menu} from 'antd';
import {GithubOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HistoryOutlined,
  FileSearchOutlined,
  ProjectOutlined} from '@ant-design/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };

}
const AsidePage = (props) => {
  const {onClose}=props;
  const navigate = useNavigate();
  const data=useSelector((state)=>state.mainLayout);
  const setNavigate=(link)=>{
    onClose();
    navigate(link);
  }
  return (
    <Container xs={12} md={12} lg={12} xxl={12} >
      <Row>
        <Col xs={12} md={12} lg={12} xxl={12}>
          <div className="logo m-2 mt-2" style={{display:"flex",justifyContent:"center",}}>
            <GithubOutlined
              style={{
              fontSize: '56px',
              color:`${data.color}`,
            }} onClick={()=>navigate("/search")}/>
           </div>
          <Menu
            /*style={{background:`${data.background}`, color:`${data.color}`}}*/
            mode="inline"
            theme={data.mode}
            defaultSelectedKeys={['1']}
            items={[
              getItem(<div onClick={() => setNavigate('/search')}>Tìm kiếm</div>, '2', <FileSearchOutlined
                onClick={() => setNavigate("/search")}/>),
              getItem('Lịch sử', '3', <HistoryOutlined/>, [
                getItem(<div onClick={() => setNavigate('/historyuser')} >Người dùng</div>, '4', <UserOutlined
                  onClick={() => navigate("/historyuser")}/>),
                getItem(<div onClick={() => setNavigate('/historyproject')}>Đồ án</div>, '5', <ProjectOutlined
                  onClick={() => setNavigate("/historyproject")}/>),
              ]),
            ]}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AsidePage