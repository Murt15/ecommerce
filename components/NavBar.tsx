import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

function NavBar() {
    return (
        <div className='flex flex-row justify-between px-2'>
            <div className='flex flex-row'>
                <div>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
                        alt='amazon'
                        className='h-8 m-1' />
                </div>
                <div className='mx-5 text-lg font-medium'>
                    <AppsRoundedIcon fontSize="medium" sx={{ marginX: 1 }} />
                    All
                </div>
                <div className='mx-5 text-lg font-medium'>Today's Deals</div>
                <div className='mx-5 text-lg font-medium'>Gift Cards</div>
                <div className='mx-5 text-lg font-medium'>Registry & Gifting</div>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-row'>
                    <div>
                        <SearchIcon fontSize="medium" sx={{ marginX: 1 }} />
                    </div>
                    <div className='text-lg'>Search</div>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <PersonOutlineOutlinedIcon fontSize="medium" sx={{ marginX: 1, marginLeft: 4 }} />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <FavoriteBorderOutlinedIcon fontSize="medium" sx={{ marginX: 1 }} />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div>
                        <ShoppingCartOutlinedIcon fontSize="medium" sx={{ marginX: 1 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;