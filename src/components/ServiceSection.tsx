"use client"

import React, { useEffect } from 'react';
import { css } from "../../styled-system/css";
import Service from "./Service";
import { colors } from '../lib/color';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en millisecondes
      once: true, // Animation ne se répète qu'une seule fois
    });
  }, []);

  return (
    <section className={css({ padding: '8rem 0',  width: '100%' })}>
      <div className="container" style={{ maxWidth: '100%' }}>
        <h2 className={css({ fontSize: '100px', fontFamily:'saira', textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' })}>Voici nos <span style={{ color: colors.primary}}>services!</span></h2>
        <div
          className={css({ display: 'grid', scale: '0.9',  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '100%' })}
        >
          <Service 
            title="Minecraft" 
            ram="4Go de RAM" 
            vcore="1 vCore" 
            icon="https://my.fusionheberg.com/storage/categories/IKayzXCwtkatj4H4VQ0bnWIV1xlJrNFTdq3UOrRx.png"
            storage="20Go de Stockage SSD" 
            price="2.00€" 
            aosType="fade-right" // Animation de fondu vers la gauche
            aosDuration="1000" // Durée de l'animation en millisecondes
            aosDelay="0" // Pas de délai pour le premier élément
          />
          <Service 
            title="BungeeCord" 
            ram="4Go de RAM" 
            vcore="1 vCore" 
            icon="https://my.fusionheberg.com/storage/categories/MdRY3Es474g87l5KYEAxXJGXPMTF1moRjz8wdchJ.png"
            storage="20Go de Stockage SSD" 
            price="2.00€" 
            aosType="fade-down" // Animation de fondu vers la gauche
            aosDuration="1000" // Durée de l'animation en millisecondes
            aosDelay="200" // Délai pour le deuxième élément
          />
          <Service 
            title="Web" 
            ram="4Go de RAM" 
            vcore="1 vCore" 
            icon="https://my.fusionheberg.com/storage/categories/V4ANOC0SElLZBAwE0qohJtD0WID6ssBsUynS2lsf.png"
            storage="20Go de Stockage SSD" 
            price="2.00€/" 
            aosType="fade-up" // Animation de fondu vers la gauche
            aosDuration="1000" // Durée de l'animation en millisecondes
            aosDelay="0" // Pas de délai pour le troisième élément
          />
          <Service 
            title="Discord" 
            ram="4Go de RAM" 
            vcore="1 vCore" 
            icon="https://my.fusionheberg.com/storage/categories/5ydmAmV8Eac1SX49oDSzDm04Q1SCdMiA8GYMMNxX.png"
            storage="20Go de Stockage SSD" 
            price="2.00€" 
            aosType="fade-left" // Animation de fondu vers la gauche
            aosDuration="1000" // Durée de l'animation en millisecondes
            aosDelay="200" // Délai pour le quatrième élément
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
