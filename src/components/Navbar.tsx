// components/Navbar.js

import React from 'react';
import { css } from "../../styled-system/css";
import Link from 'next/link';
import { colors } from '../lib/color'; // Importer la couleur primaire depuis le fichier color.ts

import { User2Icon } from 'lucide-react'
// Import du logo de Fusion Heberg
const fusionHebergLogo = "https://my.fusionheberg.com/images/1711226924.png"

// Composant de bouton réutilisable avec lien
const Button = ({ href, children }) => (
    <Link  href={`https://my.fusionheberg.com${href}`}>
      <button className={css({ 
        backgroundColor: 'transparent', 
        display: 'flex', flexDir: 'row' , justifyContent: 'center',
        alignItems:'center',
        color: '#fff',
        padding: '1rem 2rem',
        borderRadius: '100px',
        backgroundImage: 'linear-gradient(to right, #00C2FF, #002ED9)',
        border: '2px solid transparent', // Bordure transparente
        backgroundClip: 'padding-box', // Ne pas remplir le dégradé dans la bordure
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

// Composant de lien de la navbar utilisant le bouton
const NavItem = ({ href, children }) => (
    <Link href={`https://my.fusionheberg.com${href}`}>
      <p className={css({ 
        color: href === "/" ? colors.primary : '#fff',
        fontWeight: "bold", 
        fontSize: '20px', 
        textDecoration: 'none' 
      })}>{children}</p>
    </Link>
  );
  

const Navbar = () => {
  return (
    <nav className={css({ margin: '2rem 2rem', fontFamily: 'rubik' })}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo de Fusion Heberg */}
        <img src={fusionHebergLogo} alt="Fusion Heberg Logo" style={{ height: '100px', marginRight: '1rem' }} />

        <div className={css({ display: 'flex', alignItems: 'center', justifyContent: "center", gap: "10"})}>
          <NavItem href="/">Acceuil</NavItem>
          <NavItem href="/minecraft">Offres Minecraft</NavItem>
          <NavItem href="/web">Offres Web</NavItem>
          <NavItem href="/discord">Offres Discord</NavItem>
        </div>

        {/* Marge automatique à gauche pour aligner à droite */}
        <div style={{ marginLeft: 'auto' }}>
          <Button href="/client"><User2Icon size={20}  />Espace Client</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
