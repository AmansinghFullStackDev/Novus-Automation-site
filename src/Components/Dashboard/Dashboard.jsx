import React, { useState } from 'react'
import MainSidebar from './MainSidebar/MainSidebar'
import MainHeader from './MainHeader/MainHeader'
import { Route, Routes } from 'react-router-dom'
import CollapsedSidebar from './MainSidebar/Collapsed'
import ExpandSidebar from './MainSidebar/ExpandSidebar'

const Dashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <main className='bg-[#ffffff] h-screen w-full flex'>

            <div className={`flex h-full border-r-2 border-[#ebf1f6] shadow-2xl 
            ${isCollapsed ? isExpanded ? 'w-[450px]' : 'w-[120px]' : 'w-[400px]'}`}>

                {/* for Sidebar start*/}
                {!isCollapsed ?
                    <aside className='h-full w-full'>
                        <MainSidebar>
                            <div className="flex-1 p-4">
                                <Routes>
                                    <Route path="https://www.novusapl.com/" />
                                    <Route path="/profile" />
                                </Routes>
                            </div>
                        </MainSidebar>
                    </aside> :
                    <aside className='h-full w-full'
                        onMouseEnter={() => setIsExpanded(true)}
                        onMouseLeave={() => setIsExpanded(false)}
                        style={{ 
                            transition: "all 0.9s ease-in-out",
                            transitionDelay:'150ms',
                             height: "100vh" }}
                    >
                       {isExpanded ? <ExpandSidebar /> : <CollapsedSidebar />}
                    </aside>
                }
            </div>

            <div className='h-full w-full'>
                {/* for Header */}
                <header className='h-[77px] w-full px-5'>
                    <MainHeader toggleSidebar={toggleSidebar} />
                </header>

                {/* for DashBoard */}
                <div className='bg-green-700'>
                    <p>cajshcvahju</p>
                </div>
            </div>



        </main>
    )
}

export default Dashboard