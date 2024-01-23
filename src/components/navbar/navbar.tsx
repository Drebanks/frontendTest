import React from 'react'

const Nav = () => {
    return (
        <div className="flex justify-between items-center">
            <ul className="flex flex-row space-x-7 ">
                <li className="text-white">Features</li>
                <li className="text-white">News</li>
            </ul>
            <div className="flex flex-row space-x-7 ">
                <button className="p-[10px_24px] text-yellow  border-[1px] border-yellow hover:border-black hover:bg-white hover:text-black ">
                    Sign Up
                </button>
                <button className="bg-yellow text-black p-[10px_24px] hover:bg-white hover:text-black">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Nav