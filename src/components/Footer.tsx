import React from 'react';
import { css } from "../../styled-system/css";
import { colors } from '../lib/color';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: colors.secondary}} className={css({ color: '#fff', padding: '4rem 0' })}>
      <div className="container" style={{ maxWidth: '90%' }}>
        <div className={css({ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' })}>
          {/* Section FusionHeberg */}
          <div>
            <h4 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}>FusionHeberg</h4>
            <p className={css({ fontSize: '18px', marginBottom: '1rem', color: colors.primary })}><strong>Nos services</strong></p>
            <ul className={css({ listStyleType: 'none', padding: 0 })}>
              <li>Minecraft Java</li>
              <li>BungeeCord</li>
              <li style={{ color: colors.tertiary }}>Web</li>
              <li>Discord.JS</li>
              <li>Discord.PY</li>
            </ul>
          </div>
          {/* Section Liens utiles */}
          <div>
            <h4 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}><strong>Liens utiles</strong></h4>
            <ul className={css({ listStyleType: 'none', padding: 0 })}>
              <li>Espace Client</li>
              <li>Panel Game</li>
              <li>Panel Web</li>
              <li>CGU/CGV</li>
              <li>Mentions Légales</li>
              <li>Status</li>
            </ul>
          </div>
          {/* Section Contactez-nous */}
          <div>
            <h4 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}><strong>Contactez-nous</strong></h4>
            <p><strong>Email:</strong> <a href="mailto:contact@fusionheberg.com" style={{ color: colors.tertiary }}>contact@fusionheberg.com</a></p>
            <p><strong>Discord:</strong> <a href="https://discord.gg/fusionheberg" style={{ color: colors.tertiary }}>discord.gg/fusionheberg</a></p>
            <p><strong>Ticket:</strong> <a href="https://fusionheberg.com/ticket" style={{ color: colors.tertiary }}>fusionheberg.com/ticket</a></p>
          </div>
        </div>
      </div>
      <div className={css({ textAlign: 'center', marginTop: '2rem', fontSize: '18px', fontWeight: 'bold' })}>
        <p>©️ FusionHeberg 2024. - Site conçu par Fusion Studio.</p>
      </div>
    </footer>
  );
};

export default Footer;
