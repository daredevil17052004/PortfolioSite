'use client'
import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-accent text-myAccent absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0 hover:w-full`}>&nbsp;</span>
        </Link>
    );
};


const NavigationBar = () => {
    return (
        <div className='h-20 flex justify-between items-center w-full font-chakra'>
            <div className='flex items-center justify-between  w-1/3'>
                <div>
                    <CustomLink href="/" title='Ansh Sharma' className='text-xl'/>
                </div>

                <div>
                    <CustomLink href="/about" title='About' />
                </div>

                <div>
                    <CustomLink href="/projects" title='Projects' />
                </div>

                <div>
                    <CustomLink href="/experiences" title='Experiences' />
                </div>

            </div>

            <div className='flex items-center justify-between  w-80 '>
                <div className='cursor-pointer'>
                    <BiSearchAlt />
                </div>

                <div className='flex items-center justify-between '>
                    <ThemeSwitcher />
                </div>
                <div>
                    <CustomLink href="/contact" title='Contact' />
                </div>

            </div>
        </div>
    )
}

export default NavigationBar