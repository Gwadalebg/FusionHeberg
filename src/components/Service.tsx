import React from 'react';
import { css } from "../../styled-system/css";
import { colors } from '../lib/color';
import { ShoppingCart } from 'lucide-react'; // Import de l'icône "Package" de Lucide React

// Composant Button avec possibilité d'inclure une icône
const Button = ({ children, icon, title }: { children: React.ReactNode, icon: React.ReactNode, title: string}) => {
    const handleClick = () => {
      const lowercaseTitle = title.toLowerCase();
      window.location.href = `https://my.fusionheberg.com/${lowercaseTitle}`;
    };
  
    return (
      <button 
        className={css({ 
          backgroundColor: colors.primary, 
          color: '#fff', 
          padding: '1rem 2rem', 
          width: '80%',
          border: 'none', 
          backgroundImage: 'linear-gradient(to right, #00C2FF, #4700A3)',
          borderRadius: '100px', 
          cursor: 'pointer',
          position: 'relative', // Pour positionner correctement le pseudo-élément
          overflow: 'hidden', // Pour masquer le texte lors du survol
          transition: '0.3s ease-in-out', // Transition pour une animation fluide
          _hover: { width: '90%', borderRadius: '10px' },
          justifyContent: 'center',
          fontWeight: 'medium',
          fontSize: "25px",
          display: 'flex', // Utiliser flexbox pour aligner l'icône et le texte
          alignItems: 'center', // Aligner les éléments sur l'axe vertical
          gap: '0.5rem', // Espacement entre l'icône et le texte
        })}
        onClick={handleClick}
      >
        <span className="icon-wrapper" style={{ position: 'relative', transition: '0.3s ease-in-out' }}>
          {icon && icon}
        </span>
        <span className="text" style={{ position: 'relative', transition: '0.3s ease-in-out' }}>
          {children}
        </span>
      </button>
    );
  };

const Service = ({ title, ram, vcore, storage, price, icon, aosType, aosDuration, aosDelay }: {icon: string, title: string, price: string, ram: string, vcore: string, aosType: string, aosDuration: string, aosDelay: string, storage: string}) => {
  return (
    <div 
      style={{ background: colors.secondary }} 
      className={css({
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '35px',
        padding: '1rem',
        paddingBottom: '1rem',
        fontFamily: 'saira',
        borderRadius: '25px',
        marginBottom: '1rem',
      })}
      data-aos={aosType} // Utilisation de l'attribut AOS pour définir le type d'animation
      data-aos-duration={aosDuration} // Utilisation de l'attribut AOS pour définir la durée de l'animation
      data-aos-delay={aosDelay} // Utilisation de l'attribut AOS pour définir le délai de l'animation
    >
      {icon && <img src={icon} alt="Icon" style={{ width: '40%', marginBottom: '1rem' }} />} {/* Affichage de l'icône si elle est fournie */}
      <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'center' })}>
        <div className={css({ display: 'flex', flexDirection: 'column', marginBottom: '4rem', gap:'0', alignItems: 'center' })}>
          <p className={css({ fontSize: '25px', fontWeight: 'bold', marginBottom: '0.5rem' })}>Offres</p>
          <h3 style={{ color: colors.primary}} className={css({ fontSize: '50px', fontWeight: 'bold' })}>{title}</h3>
        </div>
        <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'center' })}>
          <p className={css({ color: '#999' })}>À partir de</p>
          <a style={{ color: colors.grey}}><span style={{ color: colors.primary}} className={css({ fontSize: '50px', fontWeight: 'bold', })}>{price}</span>/mois</a>
        </div>
        <div style={{ color: colors.tertiary}} className={css({ fontSize: '25px', marginTop: '3rem', lineHeight: '0.9', textAlign: 'center', fontWeight: 'bold' })}>
          <p className={css({ marginBottom: '0.5rem' })}>RAM: {ram}</p>
          <p className={css({ marginBottom: '0.5rem' })}>vCore: {vcore}</p>
          <p className={css({ marginBottom: '1rem' })}>Stockage: {storage}</p>
        </div>
      </div>
      {/* Utilisation de l'icône "Package" de Lucide React pour le bouton */}
       <Button 
        title={title} 
        icon={<ShoppingCart size={30} color='#fff' style={{ transition: '0.3s ease-in-out', transform: 'rotate(0deg)' }} />}
      >
        Commander
      </Button>
    </div>
  );
};

export default Service;
