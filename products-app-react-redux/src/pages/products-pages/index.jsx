import React, { useEffect } from "react";
import { Avatar, Card, Skeleton } from "antd";
const { Meta } = Card;
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slice/getData";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const myData = useSelector((state) => state.getData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {myData.loading ? (
          <>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton avatar active>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton avatar active>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton avatar active>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton avatar active>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton avatar active>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Skeleton avatar active>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
          </>
        ) : (
          myData?.data?.map((el) => {
            return (
              <Link to={`/${el.id}`} key={el.id} className="card">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={`${el.imgUrl}`} />}
                >
                  <Meta
                    title={`Name: ${el.name}`}
                    description={`Description: ${el.description}`}
                  />
                  <p>Price: {el.price}</p>
                </Card>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
