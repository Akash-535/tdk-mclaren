import React, { useEffect, useState } from 'react'
import { HEADER_LIST } from '../utils/helper';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../utils/icons';

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    const navigate = useNavigate()
    const toggleNavigation = (link) => {
        navigate(link)
    }
    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);
    return (
        <div className='overflow-hidden mx-auto bg-tory-blue pb-4'>
            <div className='flex lg:flex-col max-lg:justify-between max-lg:items-center max-lg:pr-5'>
                <div className='flex w-full justify-between lg:bg-congress-blue max-xl:pl-5 max-xl:pr-3'>
                    <div className="container flex lg:w-full lg:justify-between items-baseline max-lg:gap-1">
                        <img className='max-w-[115px] max-h-6 max-md:max-w-20' src="./assets/images/webp/logo.webp" alt="logo" />
                        <img className='max-w-[427px] max-lg:hidden' src="./assets/images/webp/header-img.webp" alt="logo" />
                        <p className='lg:hidden text-white text-sm font-medium text-end'>GLOBAL</p>
                    </div>
                </div>
                <div className='flex justify-between w-full pt-[27px] items-end container max-xl:pl-5 max-xl:pr-3'>
                    <div className={`flex gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center ${open ? 'max-lg:z-10 max-lg:translate-x-0 max-lg:bg-tory-blue max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full duration-500 ease-linear blur-[80%] justify-center items-center' : 'max-lg:-left-full max-lg:hidden duration-500 ease-linear'}`}>
                        {HEADER_LIST.map((obj, i) => (
                            <ul key={i}>
                                <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5'>
                                    <a onClick={() => toggleNavigation(obj.link)} href={obj.link} className='text-custom-xs font-normal text-white leading-custom-xl'>{obj.item}</a>
                                </li>
                            </ul>
                        ))}
                        <form className='lg:hidden flex max-w-48 justify-between py-[7px] px-3.5 border border-white w-full rounded-[5px]'>
                            <input type="text" placeholder='Search by Keyword' required className='!outline-none !bg-transparent placeholder:text-white placeholder:text-custom-xs placeholder:font-normal text-white text-custom-xs font-normal w-full placeholder:leading-custom-xl leading-custom-xl' />
                            <button><SearchIcon /></button>
                        </form>
                    </div>
                    <form className='max-lg:hidden flex max-w-[257px] justify-between py-[7px] px-3.5 border border-white w-full rounded-[5px] xl:translate-x-32'>
                        <input type="text" placeholder='Search by Keyword' required className='!outline-none !bg-transparent placeholder:text-white placeholder:text-custom-xs placeholder:font-normal text-white text-custom-xs font-normal w-full placeholder:leading-custom-xl leading-custom-xl' />
                        <button><SearchIcon /></button>
                    </form>
                </div>
                <div onClick={toggleSidebar} className='z-[15] flex-col gap-1 lg:hidden flex items-center pt-3'>
                    <span className={`${open ? 'w-5 h-0.5 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-6 h-0.5 bg-white duration-300 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-5 h-0.5 bg-white -translate-x-10 opacity-0 duration-700 ease-linear' : 'w-6 h-0.5 bg-white duration-700 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-5 h-0.5 bg-white -rotate-45 -translate-y-0 duration-300 ease-linear rounded' : 'w-6 h-0.5 bg-white duration-300 ease-linear rounded'}`}></span>
                    <p className="text-white text-sm font-light duration-300 ease-linear">MENU</p>
                </div>
            </div>
        </div>
    )
}

export default Header
