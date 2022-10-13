import { AccountCircleOutlined, CreditCardOutlined, Dashboard, ExitToApp, InsertChart, LocalShippingOutlined, Menu, MenuBookSharp, NotificationsNone, PersonOutline, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined, Store } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss'
import { DarkModeContext } from './../../Contex/DarkModeContex';
const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
    const [show, setShow] = useState(true);
    return (
        <div style={!show ?{ width:"20%", textAlign:"center"}:{}} className={show ? "sidebar":"sidebar1"}>
            <div className="top">
                <Link to="/">
                    <span className="logo">Omar-Admin</span>
                    
                </Link>
                <Menu className='hamburger' onClick={()=>setShow(!show)} />
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/">

                        <li>
                            <Dashboard className="icon" />
                            {show ? <span>Dashboard</span>: ""}
                        </li>                    </Link>
                    <p className="title">LISTS</p>
                    {/* <Link to="/users" style={{ textDecoration: "none" }}> */}
                    <Link to="/users">
                        <li>
                            <PersonOutline className="icon" />
                            {show ? <span>Users</span> : ""}
                        </li>
                    </Link>
                    {/* </Link> */}
                    {/* <Link to="/products" style={{ textDecoration: "none" }}> */}
                    <Link to="/products">
                        <li>
                            <Store className="icon" />
                            {show ? <span>Products</span>:""}
                        </li>
                    </Link>
                    {/* </Link> */}
                    <li>
                        <CreditCardOutlined className="icon" />
                        {show ? <span>Orders</span>:""}
                    </li>
                    <li>
                        <LocalShippingOutlined className="icon" />
                        {show ? <span>Delivery</span> :""}
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChart className="icon" />
                        {show ? <span>Stats</span>:""}
                    </li>
                    <li>
                        <NotificationsNone className="icon" />
                        {show ? <span>Notifications</span>: ""}
                        
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlined className="icon" />
                       {show ? <span>System Health</span>:""}
                    </li>
                    <li>
                        <PsychologyOutlined className="icon" />
                        {show ? <span>Logs</span>:""}
                    </li>
                    <li>
                        <SettingsApplications className="icon" />
                        {show ?<span>Settings</span>:""}
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlined className="icon" />
                        {show ?<span>Profile</span>:""}
                    </li>
                    <li>
                        <ExitToApp className="icon" />
                        {show ? <span>Logout</span>:""}
                    </li>
                </ul>
            </div>
            <div style={show ? {flexDirection:"row"}:{}} className="bottom">
                <div onClick={()=> dispatch({type: "LIGHT"})} className="colorOption"></div>
                <div onClick={()=>dispatch({type:"DARK"})} className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;