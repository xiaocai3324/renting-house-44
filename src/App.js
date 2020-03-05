import React from 'react';
import './App.css';

import { HashRouter as Router,Route,Switch,Redirect } from 'react-router-dom'

// 导入子组件
import Layout from './views/Layout';
import Login from './views/Login';
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      {/* 设置路由规则 */}
      <div>
        <Switch>
          <Route path="/layout" component={Layout}></Route>
          <Route path="/login" component={Login} />

          {/* 重定向要写在跳转路由的下面 
          
            exact 精确匹配
          */}
          <Redirect exact from='/' to="/layout" />
          {/* 404一定要写在最后 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
