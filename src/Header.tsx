import logo from './images/logo.svg';
import './Header.css';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SvgIconProps } from '@mui/material/SvgIcon';

function Header() {
  return (
    <div className="header">
        <img src={logo} className="site-logo" alt="logo"/>
        <HeaderSection icon={PhoneIcon} text="1-866-983-4279"/>
        <HeaderSection icon={ChatIcon} text="CHAT"/>
        <HeaderSection icon={HistoryIcon} text="RECENTLY SEEN"/>
        <HeaderSection icon={PersonIcon} text="MY ACCOUNT"/>
        <HeaderSection icon={ShoppingCartIcon} text="CART"/>
    </div>
  );
}

function HeaderSection({ icon, text }: { icon: React.ComponentType<SvgIconProps>; text: string }) {
  const HeaderIcon = icon;
    return (
    <div className="header-section">
        <HeaderIcon className="header-icon"/>
        <p className="header-text">{text}</p>
    </div>
  );
}

export default Header;
