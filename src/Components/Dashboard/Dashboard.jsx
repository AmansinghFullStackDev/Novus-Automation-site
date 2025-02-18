import React from 'react'
import MainSidebar from './MainSidebar/MainSidebar'
import MainHeader from './MainHeader/MainHeader'
import { Route, Routes } from 'react-router-dom'

const Dashboard = () => {
    return (
        <main className='bg-[#ffffff] h-screen w-full flex'>

            <div className='flex h-full border-r-2 border-[#ebf1f6]'>
                {/* for Sidebar start*/}
                <aside className='h-full w-[280px] '>
                    <MainSidebar>
                        <div className="flex-1 p-4">
                            <Routes>
                                <Route path="https://www.novusapl.com/" />
                                <Route path="/profile" />
                            </Routes>
                        </div>
                    </MainSidebar>
                </aside>
            </div>

            <div className='h-full w-full bg-green-900'>
                {/* for Header */}
                <header className=' h-[70px] w-full px-5 bg-green-400'>
                    <MainHeader />
                </header>

                {/* for Header */}
            </div>



        </main>
    )
}

export default Dashboard