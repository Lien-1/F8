import { Link, Outlet } from 'umi';
import styles from './index.less';
import React from 'react';
import 'antd/dist/antd.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import Header from '../components/Header/header';
import HomePage from '../pages/Home/home';

export default function App() {
  return (
    <div className={styles.navs}>
      <Header />
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul> */}
      <HomePage />
    </div>
  );
}
