import React from 'react'

function Banner() {
    return (
        <div className='bg-slate-100 flex flex-row mx-4 justify-between m-auto p-5'>
            <div className='w-1/2'>
                <div className='text-4xl font-semibold my-3'>
                    <div>SHOP COMPUTERS </div>
                    <div>& ACCESSORIES</div>
                </div>
                <div className='text-xl my-3'>
                    <div>Shop laptops,desktops,monitors,tablets,PC</div>
                    <div>gaming,hard drives and storage,accessories and</div>
                    <div> more</div>
                </div>
                <div className='my-3'>
                    <button className='border rounded-md px-2 py-1 border-slate-800 w-35'>View More</button>
                </div>

            </div>
            <div className='w-1/2'></div>
        </div>
    )
}

export default Banner