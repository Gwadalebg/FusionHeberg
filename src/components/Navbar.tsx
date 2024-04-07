// components/Navbar.js

import React, { useState } from 'react';
import { css } from "../../styled-system/css";
import Link from 'next/link';
import { colors } from '../lib/color';
import { Menu, User2Icon } from 'lucide-react';

const fusionHebergLogo = "https://my.fusionheberg.com/images/1711226924.png";

const Button = ({ href, children }: {href: string, children : React.ReactNode}) => (
  <Link href={`https://my.fusionheberg.com${href}`}>
    <button className={css({ 
      backgroundColor: 'transparent', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      padding: '1rem 2rem',
      borderRadius: '100px',
      backgroundImage: 'linear-gradient(to right, #00C2FF, #002ED9)',
      border: '2px solid transparent',
      backgroundClip: 'padding-box',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, border-color 0.3s ease',
      textDecoration: 'none',
      '&:hover': {
        backgroundColor: '#002ED9',
        borderColor: '#00C2FF',
      },
    })}>{children}</button>
  </Link>
);

const NavItem = ({ href, children }: {href: string, children : React.ReactNode}) => (
  <Link href={`https://my.fusionheberg.com${href}`}>
    <p className={css({ 
      color: href === "/" ? colors.primary : '#fff',
      fontWeight: "bold", 
      fontSize: '20px', 
      textDecoration: 'none',
      lg: { fontSize: '16px' } // Réduire la taille du texte sur les écrans larges
    })}>{children}</p>
  </Link>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={css({ margin: '2rem 2rem', fontFamily: 'rubik' })}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={fusionHebergLogo} style={{ height: '100px', marginRight: '1rem' }} />

        {/* Menu complet */}
        <div className={css({ 
               display: showMenu ? 'flex' : 'none' , 
               alignItems: 'center', 
               justifyContent: 'center', 
               gap: "10",
               lg: { display: 'flex' } 
        })}>
          <NavItem href="/">Acceuil</NavItem>
          <NavItem href="/minecraft">Offres Minecraft</NavItem>
          <NavItem href="/web">Offres Web</NavItem>
          <NavItem href="/discord">Offres Discord</NavItem>
        </div>

        {/* Menu hamburger */}
        <div className={css({ right: '0'})} onClick={toggleMenu}>
          <Menu size={50} />
        </div>

        {/* Bouton de l'espace client */}
        <div style={{ marginLeft: 'auto' }}>
          <Button href="/client"><User2Icon size={20}  />Espace Client</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
