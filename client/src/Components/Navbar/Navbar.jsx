import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    
    const [country, setCountry] = useState("IND")

    const handleChange = (event) => {
        setCountry(event.target.value);
  };

  return (
    <div className='z-20 flex justify-between items-center px-5 list-none w-full sticky top-0 bg-slate-100 drop-shadow-md'>
        <div className='flex justify-center items-center gap-5'>
            
        <FormControl sx={{ m: 1, minWidth: 100, minHeight: 30 }}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="country"
                onChange={handleChange}
            >
                <MenuItem value={"IND"}>IND</MenuItem>
                <MenuItem value={"USA"}>USA</MenuItem>
                <MenuItem value={"UAE"}>UAE</MenuItem>
                <MenuItem value={"CHINA"}>CHINA</MenuItem>
            </Select>
        </FormControl>
            
            <Link to="products/:1">Men</Link>
            <Link to="products/:2">Women</Link>
            <Link to="products/:3">Children</Link>
            <Link to="products/:4">Accessories</Link>
        </div>
        <div>
            <Link to="/">LAMASTORE</Link>
        </div>
        <div className='flex justify-center gap-5'>
            <li>About</li>
            <li>Contact</li>
            <li>Stores</li>     

                <Badge badgeContent={0} color="primary">
                    <SearchOutlinedIcon />
                </Badge>

                <Badge badgeContent={0} color="primary">
                    <Person2OutlinedIcon />
                </Badge>

                <Badge badgeContent={0} color="primary">
                    <FavoriteBorderOutlinedIcon />
                </Badge>

                <Badge badgeContent={0} color="primary">
                    <ShoppingCartOutlinedIcon color='primary'/>
                </Badge>                            

        </div>
    </div>
  )
}

export default Navbar