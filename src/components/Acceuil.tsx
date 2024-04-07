// components/ServicesSection.js

import React from 'react';
import { css } from "../../styled-system/css";
import { colors } from '../lib/color';

const Acceuil = () => {
  return (
    <section className={css({ padding: '2rem 0', width: '100%',})}>
      <div className="container" style={{ maxWidth: '100%', display: 'flex',justifyContent: 'center', alignItems:'center', flexDirection: 'column', gap:'0'  }}>
        <h2 className={css({ fontSize: { base: '70px', lg:'100px'}, fontWeight: 'bold', lineHeight: '0.9', width: '75%', marginBottom: '1rem', fontFamily: 'saira', textAlign: 'center'})}>Plusieurs services <span style={{ color: colors.primary }}>fusionné</span> en un hébergeur!  </h2>
        <p  style={{color: colors.grey}} className={css({ fontSize: { base: '20px', lg:'35px'}, width: '75%',   fontWeight: 'bold',  textAlign: "center" })}>FusionHeberg vous offre des services d’hébergement de qualité pour vos projets <strong>Minecraft</strong>, <strong>Web</strong> et <strong>Discord!</strong></p>
      </div>
    </section>
  );
};

export default Acceuil;
