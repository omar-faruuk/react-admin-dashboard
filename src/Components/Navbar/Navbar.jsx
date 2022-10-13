import { ChatBubbleOutline, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined, Message, NotificationsOutlined, SearchOutlined } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import './Navbar.scss';
import { DarkModeContext } from './../../Contex/DarkModeContex';
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Popover, Typography } from '@mui/material';




const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='search...' />
                    <SearchOutlined className='icon' />
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageOutlined className='icon' />
                        English
                    </div>
                    <div onClick={() => dispatch({ type: "TOGGLE" })} className="item">
                        <DarkModeOutlined className='icon' />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className='icon' />
                    </div>
                    <div aria-describedby={id} variant="contained" onClick={handleClick} className="item">
                        <NotificationsOutlined className='icon' />
                        <div className="counter">3</div>
                    </div>
                    <div  className="item">
                        <ChatBubbleOutline aria-describedby={id} variant="contained" onClick={handleClick} className='icon' />
                        <div className="counter">3</div>
                    </div>

                    <div className="item">
                        <ListAltOutlined className='icon' />
                    </div>
                    <div className="item">
                        <img className='avatar' src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    </div>
                </div>
            </div>


            <Popover
                id={id}
                open={open}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 55, left: 900 }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <List component="nav" sx={{ width: '100%', maxWidth: 280, borderRadius:'50px', bgcolor: 'background.paper' }}>
                    <ListItem sx={{display:'flex', bgcolor: 'background.primary'}}  alignItems="flex-start">
                        <ListItemAvatar>
                            <Message/>
                        </ListItemAvatar>
                        <ListItemText
                        
                            primary="Ali hossain"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        variant='subtitle2'
                                        component="span"
                                        color="text.secondary"
                                    >
                                       has comment on your board
                                    </Typography>
                                  
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                      
                                        component="span"
                                        variant="subtitle2"
                                        color="text.secondary"
                                    >
                                        Alex, Jennifer
                                    </Typography>
                                    
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                       
                                        component="span"
                                        variant="subtitle2"
                                        color="text.secondary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                   
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Popover>


        </div>
    );
};

export default Navbar;