import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, message, Popconfirm } from "antd";
import {
  removeAllFavoritesAction,
  removeFromFavoritesAction,
} from "../../redux/action/favorites.actions";

const FavoriteCustomers = () => {
  const confirm = (obj) => {
    handleRemove(obj.id);
    message.success("Click on Yes");
  };
  const cancel = () => {
    message.error("Click on No");
  };

  const confirm2 = () => {
    dispatch(removeAllFavoritesAction());
    message.success("Click on Yes");
  };
  const cancel2 = () => {
    message.error("Click on No");
  };

  const favorites = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromFavoritesAction(id));
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "CompanyName",
      dataIndex: "companyName",
    },
    {
      title: "Contact Title",
      dataIndex: "contactTitle",
    },
    {
      title: "Adress",
      dataIndex: "address",
      render: (el) => `${el.city}, ${el.country}`,
    },
    {
      title: "Add To Favorites",
      render: (obj) => (
        <Popconfirm
          placement="bottom"
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() => confirm(obj)}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Remove</Button>
        </Popconfirm>
      ),
    },
  ];
  return (
    <>
      <Popconfirm
        placement="bottom"
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={confirm2}
        onCancel={cancel2}
        okText="Yes"
        cancelText="No"
      >
        <Button danger type="primary">
          Remove All
        </Button>
      </Popconfirm>

      <Table columns={columns} dataSource={favorites} rowKey={"id"} />
    </>
  );
};

export default FavoriteCustomers;
