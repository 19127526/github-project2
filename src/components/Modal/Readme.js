import {Divider, Modal, Skeleton} from "antd";
import {useEffect, useState} from "react";
import request from "../../apis/request";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import InfiniteScroll from 'react-infinite-scroll-component';

const Readme = (props) => {
  const {repo, username, open, setOpen} = props;
  const [readMe, setReadMe] = useState('');

  const [loading, setLoading] = useState(false);
  const loadMoreData = () => {
    if (!username) return;
    if (loading) {
      return;
    }
    setLoading(true);
    const fetchReadMeByUserNameAndRepo = async () => {
      const response = await request.get(`/repos/${username}/${repo}/contents/README.md`)
        .then(async response => {
          const data = await response.data;
          setReadMe(atob(data.content))
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          setReadMe("We can't find README file from this repo,please choose another project!!!")
        })
    }
    fetchReadMeByUserNameAndRepo();
  }
  console.log(readMe.length)
  useEffect(() => {
    loadMoreData();
  }, [repo]);

  return (
    <Modal
      title="Read Me"
      open={open}
      width='75%'
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      okText="ok"
      cancelText="cancel"
    >
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          width:"100%",
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={readMe.length}
          next={loadMoreData}
          hasMore={readMe.length < 50}
          loader={
            <Skeleton
              paragraph={{
                rows: 4,
              }}
              active
            />
          }
          endMessage={<Divider plain>End</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <ReactMarkdown
            children={readMe}
            rehypePlugins={[rehypeRaw]}
          />
        </InfiniteScroll>
      </div>
    </Modal>
  )
}
export default Readme