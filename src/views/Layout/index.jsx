import React, { Component } from 'react';

import styles from './index.module.scss'

import { Route,Switch,Redirect,Link } from 'react-router-dom';

// 导入Layout的子组件
import Home from '../Home'
import News from '../News';
import HouseList from '../HouseList';
import My from '../My';
import NotFound from '../NotFound';




export default class Layout extends Component {
    render() {
        return (
            <div className={styles.test}>

                {/* 主体内容部分 */}
                <div style={{height:500}}>
                    <Switch>
                        <Route path="/layout/index" component={Home} />
                        <Route path="/layout/houselist" component={HouseList} />
                        <Route path="/layout/news" component={News} />
                        <Route path="/layout/my" component={My} />
                        {/* 路由重定向 exact精确匹配*/}
                        <Redirect exact from='/layout' to='/layout/index' />

                        {/* 404要写在已有路径最后面 */}
                        <Route component={NotFound} />
                    </Switch>

                </div>
                {/* tabBar */}
                  <div style={{position:"fixed",bottom:0,left:0,height:50}}>
                      <Link to="/layout/index">首页</Link>&nbsp;&nbsp;
                      <Link to='/layout/houselist'>找房</Link>&nbsp;&nbsp;
                      <Link to="/layout/news">咨询</Link>&nbsp;&nbsp;
                      <Link to="/layout/my">我的</Link>&nbsp;&nbsp;
                  </div>
            </div>
        );
    }
}

