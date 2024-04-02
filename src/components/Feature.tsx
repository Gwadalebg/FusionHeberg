"use client"

import React, { useEffect, useRef } from 'react';
import { css } from "../../styled-system/css";
import { colors } from '../lib/color';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = ({ title, icon}: {title: string, icon: React.ReactNode}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
      once: true, // Animation ne se répète qu'une seule fois
    });

  });

  return (
    <div
      ref={elementRef}
      data-aos="fade-up" // Animation de fondu vers le haut
      data-aos-duration="1000" // Durée de l'animation en millisecondes
      style={{ background: colors.secondary }}
      className={css({ padding: '1.5rem',  display:'flex', flexDirection: 'row', borderRadius: '15px', marginBottom: '2rem' })}
    >
      {/* Affichage de l'icône en grand à gauche */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        {icon}
      </div>
      <div className={css({ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '1' })}>
        <h3 className={css({ fontSize: '35px', fontWeight: 'bold', marginBottom: '0.5rem' })}>{title}</h3>
      </div>
    </div>
  );
};

export default Feature;
