import { KeyboardArrowDown, MoreVert } from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Featured.scss';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total revenue</h1>
                <MoreVert fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5} />
                </div>
                <p className="title">Total sell made today</p>
                <p className="amount">$420</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ratione?</p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult">
                            <KeyboardArrowDown/>
                            <div className="itemAmount">$1200</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult">
                            <KeyboardArrowDown/>
                            <div className="itemAmount">$1200</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult">
                            <KeyboardArrowDown/>
                            <div className="itemAmount">$1200</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;