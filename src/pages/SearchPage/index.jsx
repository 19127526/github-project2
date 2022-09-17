import React, {useEffect, useState} from "react"
import request from "../../apis/request"
import useDebounce from "../../hooks/useDebounce"
import UserList from "./UserList"
import {Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {Divider, Empty, Input, Skeleton, Spin} from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "../../components/CardSearch/Card";

const {Search} = Input;

const SearchPage = () => {
    const [value, setValue] = useState('')
    const [userList, setUserList] = useState([])
    const debounceValue = useDebounce(value, 500);
    const [isHadResult, setIsHadResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const [length,setLength]=useState(-1);


    const [pageNumber, setPageNumber] = useState(0);
    const[end,setEnd]=useState(false);



    useEffect(() => {
        if(loading) return;
        setPageNumber(1);
        loadMoreData(1);
    }, [debounceValue]);

    useEffect(()=>{
        if(loading) return;
        loadMoreData(pageNumber);
    },[pageNumber])

    const loadMoreData=(page)=>{
        if (value !== '') {
            setIsHadResult(true)
        }
        if (debounceValue) {
            fetchUserList(debounceValue, page).then((results) => {
                setUserList([...userList,...results]);
                console.log(userList)
            })
        } else {
            setUserList([])
        }
    }

    const fetchUserList = async (username, page) => {
        setLoading(true)
        try {
            const response = await request.get(`/search/users?q=${username}&page=${page}`);
            if (response === "end") {
                setEnd(true);
                setLoading(false);
                return []
            } else {
                const data = await response.data.items;
                if(response.data.total_count>1000){
                    setLength(1000)
                }
                else{
                    setLength(response.data.total_count)
                }
                setLoading(false);
                return data
            }
        } catch {

            return []
        }
    }
    return (
      <div>
          <Spin tip="Đang tải..." spinning={loading}                                                             >
              <Container>
                  <Row>
                      <Col sm={12} lg={12} md={12}>
                          <br/>
                          <InputGroup className="mb-3">
                              <Form.Control
                                placeholder="Điền tên người dùng"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={value}
                                size="large"
                                onChange={e => {
                                    setValue(e.target.value);
                                    setUserList([]);
                                }}
                              />
                          </InputGroup>
                      </Col>
                      {userList.length > 0 &&end===false?
                        <div
                          id="scrollableDiv"
                          style={{
                              height: 600,
                              overflow: 'auto',
                              padding: '0 16px',
                              border: '1px solid rgba(140, 140, 140, 0.35)',
                          }}
                        >
                            <InfiniteScroll
                              dataLength={userList.length}
                              next={()=>setPageNumber(prevState => prevState+1)}
                              hasMore={userList.length !== length}
                              loader={
                                  <Skeleton
                                    paragraph={{
                                        rows: 5,
                                    }}
                                  />
                              }
                              endMessage={<Divider plain>End</Divider>}
                              scrollableTarget="scrollableDiv"
                            >

                                <Row className="m-2">
                                    {userList &&
                                      userList?.map((user, index) =>
                                          <Col xs={12} sm={12} lg={4} md={6} xl={4}>
                                              <CardComponent fullName={user.login} url={user.html_url} image={user.avatar_url}/>
                                          </Col>
                                      )
                                    }
                                </Row>
                            </InfiniteScroll>
                        </div>
                        :
                        isHadResult === true ?
                          <Col sm={12} lg={12} md={12}>
                              <br/>
                              <Empty/>
                          </Col>
                          :
                          <Col sm={12} lg={12} md={12}>
                          </Col>
                      }
                  </Row>
              </Container>
          </Spin>
      </div>
    )
}

export default SearchPage;