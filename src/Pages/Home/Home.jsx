import React from 'react';
import Chart from '../../Components/Chart/Chart';
import Featured from '../../Components/Featured/Featured';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableList from '../../Components/Table/Table';
import Widget from '../../Components/Widget/Widget';
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* widgets */}
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        {/* charts */}
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} />
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest transaction</div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Home;