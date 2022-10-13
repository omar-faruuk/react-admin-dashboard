import './New.scss';
import Sidebar from './../../Components/Sidebar/Sidebar';
import Navbar from './../../Components/Navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { useState } from 'react';

const New = () => {
    const [img, setImg] = useState(null)
    console.log(img)
    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1 className="title">Add new user</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={img ? URL.createObjectURL(img) : `https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg`} alt="icon"
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlined className="icon" />
                                </label>
                                <input
                                    onChange={(e)=> setImg(e.target.files[0])}
                                    type="file"
                                    id="file"

                                    style={{ display: "none" }}
                                />
                            </div>
                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="omar faruq" />
                            </div>

                            <div className="formInput">
                                <label>Name and surname</label>
                                <input type="text" placeholder="omar faruq" />
                            </div>

                            <div className="formInput">
                                <label>Email:</label>
                                <input type="email" placeholder="omar@gmail.com" />
                            </div>

                            <div className="formInput">
                                <label>Password</label>
                                <input type="password" placeholder="password" />
                            </div>

                            <div className="formInput">
                                <label>Phone:</label>
                                <input type="number" placeholder="+8801254455" />
                            </div>

                            <div className="formInput">
                                <label>Address</label>
                                <input type="text" placeholder="ctg, patiya" />
                            </div>

                            <div className="formInput">
                                <label>Country</label>
                                <input type="text" placeholder="Bangladesh" />
                            </div>

                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;