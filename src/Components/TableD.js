import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

class TableD extends Component {

    constructor(props) {
        super(props);

    }



    render() {

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
                    })}
                </span>
            ),
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a href="javascript:;">Invite {record.name}</a>
                    <Divider type="vertical" />
                    <a href="javascript:;">Delete</a>
                </span>
            ),
        }];

        const data = [{
            key: '1',
            name: 'Vladimir Mamatov',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }];


        return (

            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        );

    }

}


export default TableD;
