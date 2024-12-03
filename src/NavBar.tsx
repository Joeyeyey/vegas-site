import './NavBar.css'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const menu = {
    "HOTELS": "/hotels/",
    "AIR+HOTEL": "/lasvegastraveldeals/",
    "SHOWS": "/shows/",
    "TOURS": "/tours/",
    "ATTRACTIONS": "/attractions/",
    "CLUBS": "/nightlife/",
    "SPORTS": "/shows/sports/",
    "MORE": "/lounge/",
}

const clubs_submenu = {
    "POOL CLUBS": "/nightlife/poolclubs/",
    "NIGHTCLUBS": "/nightclubs/",
    "BARS": "/nightlife/bars",
    "GAY CLUBS": "/nightlife/gayclubs/",
}

const more_submenu = {
    "VEGAS GUIDE": "/traveltips/",
    "RESTAURANTS": "/restaurant/",
    "FREMONT STREET / DOWNTOWN": "/downtown/",
    "GAMING": "/gaming/",
    "GIFT CARD": "/giftcard/",
    "GOLF": "/golf/",
    "GROUP BOOKINGS": "/groups/grouptravel/",
    "LAS VEGAS EVENTS": "/las-vegas-events/",
    "HOLIDAYS IN LAS VEGAS": "/holidays-in-las-vegas/",
    "SHOPPING": "/shopping/",
    "SPAS": "/spas/",
    "WEDDINGS": "/weddings/",
    "TRANSPORTATION": "/transportation/",
    "ACCESSIBILITY": "/accessibility/",
}

function NavBar() {
    return (
        <div className='navbar'>
            {Object.entries(menu).map(([key, value]) => <a href={value} className='navoption'>{key}</a>)}
            <div className='navbar-deals'>
                <LocalOfferIcon className='navbar-deals-icon'></LocalOfferIcon>
                <a href="https://www.vegas.com/deals/" className='navbar-deals-text'>DEALS</a>
            </div>
            <div className='navbar-search'>
                <TextField className='navbar-search-field' variant="standard" size='small' color="warning" sx={{input: {color: 'white'}}}></TextField>
                <SearchIcon className='navbar-search-icon'></SearchIcon>
            </div>
        </div>
    )
}

export default NavBar
