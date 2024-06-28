import React from 'react'
import Image from 'next/image'
import {FileClock, Home, Settings, WalletCards} from 'lucide-react'

function SideNav() {

    const MenuList=[
        {
            name:'Home',
            icon: Home,
            path: '/dashboard',
        },
        {
            name:'History',
            icon: FileClock,
            path: '/dashboard/history',
        },
        {
            name:'Billing',
            icon: WalletCards,
            path: '/dashboard/billing',
        },
        {
            name:'Settings',
            icon: Settings,
            path: '/dashboard/setting',
        },
    ]

  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='felx justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={50} height={50}/>
        </div>

        <div>
            {MenuList.map((menu, index)=>(
                <div className='flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg'>
                    <menu.icon />
                    <h2>{menu.name}</h2>
                </div>
            ))}
            38:54 to be continued
        </div>
    </div>
  )
}

export default SideNav