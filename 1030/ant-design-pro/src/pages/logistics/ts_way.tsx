import React from 'react';
import { Table, Divider, Tag,Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const columns = [
   
    {
      title: '编号',
      dataIndex: 'age',
      key: 'age',
    },
    {
        title: '中文名',
        dataIndex: 'name',
        key: 'name',
        render: (text: React.ReactNode) => <a>{text}</a>,
    },
    {
      title: '英文名',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '备注',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: { map: (arg0: (tag: any) => JSX.Element) => React.ReactNode; }) => (
        <span>
          {tags.map((tag: string | number | undefined) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: { name: React.ReactNode; }) => (
        <span>
          <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];
  
const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
export default (): React.ReactNode => (
  <PageHeaderWrapper>
      <div>
        <Button type="primary">新增</Button>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
  </PageHeaderWrapper>
);
