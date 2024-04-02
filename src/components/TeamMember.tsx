import React from 'react';
import { css } from "../../styled-system/css";
//import AOS from 'aos';
//import 'aos/dist/aos.css';

// Définition des correspondances entre les rôles et les couleurs
interface RoleColors {
  [key: string]: string;
}

const roleColors: RoleColors = {
  admin: '#E74C3C',
  director: '#FF0000',
  commercial: '#F1C40F',
  moderator: '#E67E22',
};


const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  // Initialiser AOS une seule fois
  /*React.useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
    });
  }, []);*/

  // Convertir le nom et le rôle en minuscules pour une correspondance insensible à la casse
  const lowercaseName = name.toLowerCase();
  const lowercaseRole = role.toLowerCase();

  // Transformer le rôle en son équivalent en majuscules
  const roleName = roleColors[lowercaseRole] ? capitalizeFirstLetter(lowercaseRole) : role;

  // Vérifier si le rôle et le nom fournis correspondent à une couleur prédéfinie
  const nameColor = roleColors[lowercaseRole] || '#000'; // Couleur par défaut si le rôle n'est pas trouvé

  return (
    <div
      className={css({ padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', border: `2px solid ${nameColor}`, width: '100%', borderRadius: '8px' })}
      //data-aos="zoom-in" // Animation de zoom-in
    >
      {image && <img src={image} alt="Team Member" style={{ width: '100%', borderRadius: '100%', marginBottom: '0.5rem' }} />} {/* Affichage de l'image si elle est fournie */}
      <h3 className={css({ fontWeight: 'medium', fontSize: '50px' })}>{name}</h3>
      <p style={{ color: nameColor }} className={css({ marginBottom: '1rem', fontSize: '25px', color: roleColors[lowercaseRole] })}>{roleName}</p>
    </div>
  );
};

export default TeamMember;
