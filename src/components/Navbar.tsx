import React from 'react';
import { css } from "../../styled-system/css";
import Link from 'next/link';
import { colors } from '../lib/color';
import { Menu, User2Icon } from 'lucide-react';

const fusionHebergLogo = "https://my.fusionheberg.com/images/1711226924.png";

const Button = ({ href, children }: {href: string, children : React.ReactNode}) => {
  const buttonStyles = css({ 
    backgroundColor: 'transparent', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center',
    gap: '10px',
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
  });

  return (
    <Link href={`https://my.fusionheberg.com${href}`}>
      <button className={buttonStyles}>{children}</button>
    </Link>
  );
};

const NavItem = ({ href, children }: {href: string, children : React.ReactNode}) => (
  <Link href={`https://my.fusionheberg.com${href}`}>
    <p className={css({ 
      color: '#fff',
      marginLeft: '2rem',
      fontWeight: "bold", 
      fontSize: '22px', 
      textDecoration: 'none',
      display: 'block',
      '@media (max-width: 698px)': {
      fontSize: '16px', 
      }
    })}>{children}</p>
  </Link>
);

const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <nav className={css({ margin: '2rem 2rem', fontFamily: 'rubik' })}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={fusionHebergLogo} style={{ height: '100px', marginRight: '1rem' }} />

        {/* Menu complet */}
        <div className={css({ 
               display: isOpen? 'none' : 'flex', 
               opacity: isOpen? '0' : '1', 
               transition: '2s ease-in-out',
               alignItems: 'center', 
               justifyContent: 'center', 
               gap: "10px",
               borderRadius: '10px',
               '@media (max-width: 768px)': {
                 flexDirection: 'column',
                 position: 'absolute',
                 top: '20%',
                 width: '80%',
                 backgroundColor: 'rgba(255,255,255,0.2)',
                 padding: '2rem',
                 backdropFilter: 'blur(20px)',
                 boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
               }
        })}>
          <NavItem href="/">Acceuil</NavItem>
          <NavItem href="/minecraft">Offres Minecraft</NavItem>
          <NavItem href="/web">Offres Web</NavItem>
          <NavItem href="/discord">Offres Discord</NavItem>
        </div>
        {/* Bouton de l'espace client */}
        <div className={css({ marginLeft: 'auto', '@media (max-width: 768px)': {marginLeft: '0'}})}>
          <Button href="/home"><User2Icon size={20}  />Espace Client</Button>
        </div>
        {/* Bouton de menu */}
       <button onClick={() => setOpen(!isOpen)} className={css({ 
  backgroundColor: 'transparent', 
  display: 'flex', 
  alignItems: 'center', 
  cursor:'pointer',
  justifyContent: 'center', 
  marginLeft: 'auto',
  gap: "10",
  '@media (min-width: 769px)': {
    display: 'none',
  }
})}>
  <Menu size={30} />
</button>
      </div>
    </nav>
  );
};

export default Navbar;