'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from "../theme/ThemeToggle";
import HamburgerButton from '../common/IconButtons/HamburgerButton';
import NavbarMenuButton from '../common/MenuButtons/NavbarMenuButton';
import { Navbar } from '@/config/constants/Navbar';

export default function DashboardHeader() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <div className='flex justify-between items-center'>
                <div><HamburgerButton onClick={() => setDrawerOpen(true)} /></div>
                <div className='flex gap-2'>
                    <div>
                        <div className={`flex flex-row gap-8`}>
                            {Navbar.links.map((v, i) => {
                                return (
                                    <div key={i}>
                                        <NavbarMenuButton href={v.href}>{v.label}</NavbarMenuButton>
                                    </div>
                                )
                            })}

                            <div><ThemeToggle /></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
