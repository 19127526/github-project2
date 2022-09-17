import {notification} from 'antd';


const Notification=(title,description)=>{
  return notification.info({
    message: title,
    description:description,
  });
}

export default Notification

