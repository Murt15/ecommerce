import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function MiniNavBar() {
    return (
        <div className='flex flex-row justify-between px-4 py-1 text-gray-400'>
            <div className='text-sm w-3/5'>Amazon's Response to COVID-19</div>
            <div className='flex flex-row justify-between w-2/5'>
                <div className='text-sm'>
                    <LocationOnOutlinedIcon fontSize='small' />
                    India
                    <KeyboardArrowDownIcon fontSize='small' />
                </div>
                <div className='text-sm'>
                    ENG
                    <KeyboardArrowDownIcon fontSize='small' />
                </div>
                <div className='text-sm'>
                    INR
                    <KeyboardArrowDownIcon fontSize='small' />
                </div>
                <div className='text-sm'>Customer Service</div>
                <div className='text-sm'>Sell on Amazon</div>
            </div>
        </div>
    )
}

export default MiniNavBar