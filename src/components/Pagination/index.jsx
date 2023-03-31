import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
import "./pagination.scss";

const Pagination = ({ onChange, onChangeLimit }) => {
  const [selectedLimit, setSelectedLimit] = useState(10)
  const items = [
    {
      key: 10,
      label: "10",
    },
    {
      key: 20,
      label: "20",
    },
    {
      key: 50,
      label: "50",
    },
  ];

  const onClickItem = (e) => {
    onChangeLimit(+e.key);
    setSelectedLimit(+e.key)
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ReactPaginate
        breakLabel="..."
        previousLabel="<  "
        nextLabel=" >"
        onPageChange={(any) => onChange(any.selected)}
        pageRangeDisplayed={3}
        pageCount={7}
        forcePage={1}
        // renderOnZeroPageCount={null}
      />
      <Dropdown
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: ["3"],
          onClick: onClickItem,
        }}
      >
        <Typography.Link>
          <Space>
            {selectedLimit}
            <DownOutlined />
          </Space>
        </Typography.Link>
      </Dropdown>
    </div>
  );
};

export default Pagination;
