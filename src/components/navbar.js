"use client"

import styles from './navbar.module.css'
import Link from 'next/link';

import { exo } from '../../fonts';
import { hauser_italic } from '../../fonts';

import { useEffect, useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavbarButton({title, link}) {
    return (
        <Link className={styles.navlink} href={link}>
            <div className={exo.className}>{title}</div>
        </Link>
    )
}

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const drop = useRef(null);
    const btn = useRef(null);
    function dropdown() {
        setToggle(!toggle);
        console.log(toggle);
    }

    useEffect(() => {
        if (!toggle) return;
        const handleOutSideClick = (event) => {
            if (drop.current
                && drop.current.contains(event.target)) {

                if (drop.current) { console.log('drop.current'); }
                if (drop.current.contains(event.target)) { console.log('!drop.current.contains(event.target)'); }
                console.log('OUTSIDE CLICKED');
                setToggle(false);
            }
        };
    
        window.addEventListener("click", handleOutSideClick);
    
        return () => window.removeEventListener("click", handleOutSideClick);
    }, [toggle]);
    
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_flex}>
                <div className={styles.logo}>
                    <div className={hauser_italic.className}>AJ</div>
                </div>
                <ul className={styles.mainnav}>
                    <NavbarButton title="HOME" link="/" />
                    <NavbarButton title="PROGRAMMING" link="/programming" />
                    <NavbarButton title="VIDEO" link="/video" />
                    <NavbarButton title="MOTION" link="/motion" />
                    <NavbarButton title="GRAPHIC DESIGN" link="/graphic_design" />
                    <NavbarButton title="3D ANIMATION" link="/3d_animation" />
                </ul>
                <button onClick={() => setToggle(b => !b)} ref={btn} className={styles.dropdown_btn} >
                    <FontAwesomeIcon icon={faBars} /> 
                </button>
            </div>
            <div className={styles.dropdown_nav}>
                <div id="myDropdown" 
                     ref={drop} style={{ display: toggle ? "block" : "none" }} 
                     className={styles.dropdown_content}>
                    <NavbarButton title="HOME" link="/" />
                    <NavbarButton title="PROGRAMMING" link="/programming" />
                    <NavbarButton title="VIDEO" link="/video" />
                    <NavbarButton title="MOTION" link="/motion" />
                    <NavbarButton title="GRAPHIC DESIGN" link="/graphic_design" />
                    <NavbarButton title="3D ANIMATION" link="/3d_animation" />
                </div>
            </div>
        </div>
    )
}