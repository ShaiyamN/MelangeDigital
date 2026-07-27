import React from 'react'
import { nextArrow } from '../../assets/images'

const PageNavi = () => {
    return (
        <div className='lg:flex hidden gap-x-3 items-center justify-center lg:mt-[60px] font-nunito'>
            <div className="w-10 h-10 relative cursor-pointer">
                <div className="w-10 h-10 left-0 top-0 absolute bg-gradient-to-l from-blue-600 via-purple-500 to-fuchsia-500 rounded-full" />
                <div className="left-[15px] top-[10px] absolute text-zinc-900 text-base font-bold leading-tight">1</div>
            </div>
            <div className="w-10 h-10 relative cursor-pointer">
                <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-200 rounded-full" />
                <div className="left-[15px] top-[10px] absolute text-zinc-900 text-base font-bold leading-tight">2</div>
            </div>
            <div className="w-10 h-10 relative cursor-pointer">
                <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-200 rounded-full" />
                <div className="left-[15px] top-[10px] absolute text-zinc-900 text-base font-bold leading-tight">3</div>
            </div>
            <div className="w-10 h-10 relative cursor-pointer">
                <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-200 rounded-full" />
                <div className="left-[15px] top-[10px] absolute text-zinc-900 text-base font-bold leading-tight">4</div>
            </div>
            <div className="w-10 h-10 relative cursor-pointer">
                <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-200 rounded-full" />
                <div className="left-[13px] top-[12px] absolute text-zinc-900 text-base font-bold leading-tight"><img src={nextArrow} alt="" /></div>
            </div>
        </div>
    )
}

export default PageNavi