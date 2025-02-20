import React, { useEffect, useRef } from 'react';
import { LuDot } from "react-icons/lu";

const SearchModal = ({ isOpen, onClose }) => {
    const inputRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, onClose]);

    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <section
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center pt-6
             transition-opacity duration-300"
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className="bg-white w-[60%] h-[65vh] py-3 rounded-xl shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Searching part */}
                <div className="flex gap-3 items-center px-3 py-4 border-b-2 border-gray-200">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search here"
                        className="border-2 border-gray-300 w-full px-4 py-2 rounded-lg outline-none 
                        hover:border-blue-200 hover:shadow-lg"
                    />
                    <button
                        className="w-16 h-16 text-[#2a3547] text-[40px] hover:text-[#5d87ff] rounded-full 
                        hover:bg-[#5d87ff1a] flex items-center justify-center"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>

                {/* List part */}
                <div className='h-[420px] overflow-y-auto mt-3 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
                    <div className='text-[30px] px-3'>
                        <h2 className='text-[#2a3547]'>Quick Page Links</h2>
                        <ul className='mt-5'>
                            <li className='flex items-center justify-center'>
                                <LuDot style={{ fontSize: 36 }} />
                                <button className='w-full flex flex-col items-start hover:bg-[#f6f9fc]
                             p-3 rounded-xl'
                                    style={{ fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
                                    <h6 className='text-[#2a3547] text-xl'>Modern</h6>
                                    <h6 className='text-[#5a6a85bf] text-lg'>
                                        /dashboards/dashboard1
                                    </h6>

                                </button>
                            </li>
                            <li className='flex items-center justify-center'>
                                <LuDot style={{ fontSize: 36 }} />
                                <button className='w-full flex flex-col items-start hover:bg-[#f6f9fc]
                             p-3 rounded-xl'
                                    style={{ fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
                                    <h6 className='text-[#2a3547] text-xl'>Modern</h6>
                                    <h6 className='text-[#5a6a85bf] text-lg'>
                                        /dashboards/dashboard1
                                    </h6>

                                </button>
                            </li>
                            <li className='flex items-center justify-center'>
                                <LuDot style={{ fontSize: 36 }} />
                                <button className='w-full flex flex-col items-start hover:bg-[#f6f9fc]
                             p-3 rounded-xl'
                                    style={{ fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
                                    <h6 className='text-[#2a3547] text-xl'>Modern</h6>
                                    <h6 className='text-[#5a6a85bf] text-lg'>
                                        /dashboards/dashboard1
                                    </h6>

                                </button>
                            </li>
                            <li className='flex items-center justify-center'>
                                <LuDot style={{ fontSize: 36 }} />
                                <button className='w-full flex flex-col items-start hover:bg-[#f6f9fc]
                             p-3 rounded-xl'
                                    style={{ fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
                                    <h6 className='text-[#2a3547] text-xl'>Modern</h6>
                                    <h6 className='text-[#5a6a85bf] text-lg'>
                                        /dashboards/dashboard1
                                    </h6>

                                </button>
                            </li>
                            <li className='flex items-center justify-center'>
                                <LuDot style={{ fontSize: 36 }} />
                                <button className='w-full flex flex-col items-start hover:bg-[#f6f9fc]
                             p-3 rounded-xl'
                                    style={{ fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
                                    <h6 className='text-[#2a3547] text-xl'>Modern</h6>
                                    <h6 className='text-[#5a6a85bf] text-lg'>
                                        /dashboards/dashboard1
                                    </h6>

                                </button>
                            </li>
                            <li className='flex items-center justify-center'>
                                <LuDot style={{ fontSize: 36 }} />
                                <button className='w-full flex flex-col items-start hover:bg-[#f6f9fc]
                             p-3 rounded-xl'
                                    style={{ fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
                                    <h6 className='text-[#2a3547] text-xl'>Modern</h6>
                                    <h6 className='text-[#5a6a85bf] text-lg'>
                                        /dashboards/dashboard1
                                    </h6>

                                </button>
                            </li>
                            <li className='flex items-center justify-center'>
                                <LuDot style={{ fontSize: 36 }} />
                                <button className='w-full flex flex-col items-start hover:bg-[#f6f9fc]
                             p-3 rounded-xl'
                                    style={{ fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
                                    <h6 className='text-[#2a3547] text-xl'>Modern</h6>
                                    <h6 className='text-[#5a6a85bf] text-lg'>
                                        /dashboards/dashboard1
                                    </h6>

                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default SearchModal;
