import { AccountBalanceWalletOutlined, KeyboardArrowUpOutlined, MonetizationOnOutlined, PersonOutline, ShoppingCartOutlined } from '@mui/icons-material';
import './Widget.scss';

const Widget = ({ type }) => {
    let data;

    switch (type) {
        case "users":
            data = {
                title: 'users',
                isMoney: false,
                link: 'see all user',
                icon: <PersonOutline style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)", }} className='icon' />
            }
            break;
        case "orders":
            data = {
                title: 'orders',
                isMoney: false,
                link: 'see all orders',
                icon: (
                    <ShoppingCartOutlined
                        className="icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            }
            break;
        case "earning":
            data = {
                title: 'earning',
                isMoney: true,
                link: 'view net earnig',
                icon: (
                    <MonetizationOnOutlined
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            }
            break;
        case 'balance':
            data = {
                title: 'balance',
                isMoney: true,
                link: 'see details',
                icon: (
                    <AccountBalanceWalletOutlined
                        className="icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            }
            break;


        default:
            break;
    }
    const amount = 100;
    const diff = 20;
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && '$'} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="parcentage">
                    <KeyboardArrowUpOutlined />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;