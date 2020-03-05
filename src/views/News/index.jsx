import React, { Component } from 'react'

// 按需引入的方式引入antd-mobile组件
import { Button } from 'antd-mobile';

export default class News extends Component {
    render() {
        return (
            <div>
                <Button type="warning">warning</Button>
                News
            </div>
        )
    }
}
