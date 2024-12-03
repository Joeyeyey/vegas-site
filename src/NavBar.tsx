import './NavBar.css'
import { useState } from 'react';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const clubs_submenu = {
    "POOL CLUBS": "/nightlife/poolclubs/",
    "NIGHTCLUBS": "/nightclubs/",
    "BARS": "/nightlife/bars",
    "GAY CLUBS": "/nightlife/gayclubs/",
}


function NavBar() {

    const [isClubsOpen, setClubsOpen] = useState(false);
    const [isMoreOpen, setMoreOpen] = useState(false);

    return (
        <div className='navbar'>
            <a href="/hotels/" className='navoption'>HOTELS</a>
            <a href="/lasvegastraveldeals/" className='navoption'>AIR+HOTEL</a>
            <a href="/shows/" className='navoption'>SHOWS</a>
            <a href="/tours/" className='navoption'>TOURS</a>
            <a href="/attractions/" className='navoption'>ATTRACTIONS</a>
            <div className='navoption-more' onMouseEnter={() => setClubsOpen(true)} onMouseLeave={() => setClubsOpen(false)}>
            <a href="/nightlife/" className='navoption'>CLUBS</a>
                {isClubsOpen ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
                {
                    isClubsOpen && (
                        <div className='navoption-more-submenu'>
                            <a href="/nightlife/poolclubs/" className='navoption-suboption'>POOL CLUBS</a>
                            <a href="/nightclubs/" className='navoption-suboption'>NIGHTCLUBS</a>
                            <a href="/nightlife/bars" className='navoption-suboption'>BARS</a>
                            <a href="/nightlife/gayclubs/" className='navoption-suboption'>GAY CLUBS</a>
                        </div>
                    )
                }
            </div>
            <a href="/shows/sports/" className='navoption'>SPORTS</a>
            <div className='navoption-more' onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
                <a href="/lounge/" className='navoption'>MORE</a>
                {isMoreOpen ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
                {
                    isMoreOpen && (
                        
                        <div className='navoption-more-submenu'>
                            <a href="/traveltips/" className='navoption-suboption'>VEGAS GUIDE</a>
                            <a href="/restaurant/" className='navoption-suboption'>RESTAURANTS</a>
                            <a href="/downtown/" className='navoption-suboption'>FREMONT STREET / DOWNTOWN</a>
                            <a href="/gaming/" className='navoption-suboption'>GAMING</a>
                            <a href="/giftcard/" className='navoption-suboption'>GIFT CARD</a>
                            <a href="/golf/" className='navoption-suboption'>GOLF</a>
                            <a href="/groups/grouptravel/" className='navoption-suboption'>GROUP BOOKINGS</a>
                            <a href="/las-vegas-events/" className='navoption-suboption'>LAS VEGAS EVENTS</a>
                            <a href="/holidays-in-las-vegas/" className='navoption-suboption'>HOLIDAYS IN LAS VEGAS</a>
                            <a href="/shopping/" className='navoption-suboption'>SHOPPING</a>
                            <a href="/spas/" className='navoption-suboption'>SPAS</a>
                            <a href="/weddings/" className='navoption-suboption'>WEDDINGS</a>
                            <a href="/transportation/" className='navoption-suboption'>TRANSPORTATION</a>
                            <a href="/accessibility/" className='navoption-suboption'>ACCESSIBILITY</a>
                        </div>
                    )
                }
            </div>
            <div className='navbar-deals'>
                <LocalOfferIcon className='navbar-deals-icon'></LocalOfferIcon>
                <a href="/deals/" className='navbar-deals-text'>DEALS</a>
            </div>
            <div className='navbar-search'>
                <TextField className='navbar-search-field' variant="standard" size='small' color="warning" sx={{input: {color: 'white'}}}></TextField>
                <SearchIcon className='navbar-search-icon'></SearchIcon>
            </div>
        </div>
    )
}

export default NavBar
