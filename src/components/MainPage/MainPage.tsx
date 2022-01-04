import React from 'react';

import 'antd/dist/antd.css';
import { Button } from 'antd';

import CardComponent from './components/CardComponent';
import { Tabs } from 'antd';

import styles from './MainPage.module.css';
import '../../css/variablesAnt.css';

const MainPage: React.FC = () => {
  const { TabPane } = Tabs;
  return (
    <section>
      <div className={styles.mainPage}>
        <Tabs
          defaultActiveKey="1"
          tabBarStyle={{ margin: 'auto', marginBottom: '49px' }}
        >
          <TabPane tab="New Arrivals" key="1">
            {/* <h1>New Arrivals</h1> */}
            <CardComponent />
          </TabPane>
          <TabPane tab="Final Stock" key="2">
            <h1>Final Stock</h1>
            <CardComponent />
          </TabPane>
          <TabPane tab="Best Sellers" key="3">
            <h1>Best Sellers</h1>
            <CardComponent />
          </TabPane>
          <TabPane tab="Clothing" key="4">
            <h1>Clothing</h1>
            <CardComponent />
          </TabPane>
          <TabPane tab="Objects" key="5">
            <h1>Objects</h1>
            <CardComponent />
          </TabPane>
          <TabPane tab="Face Masks" key="6">
            <h1>Face Masks</h1>
            <CardComponent />
          </TabPane>
        </Tabs>
      </div>
      <div className={styles.mainPage__container}>
        <Button className={styles.mainPage__button} type="primary">
          Shop the Sale
        </Button>
      </div>
    </section>
  );
};

export default MainPage;
