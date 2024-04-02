import React from 'react';
import { css } from "../../styled-system/css";
import { colors } from '../lib/color';
import { Youtube, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: colors.night.bg}} className={css({ color: '#fff', padding: '4rem 0' })}>
      <div className="container" style={{ maxWidth: '90%' }}>
        <div className={css({ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '2rem' })}>
        <div>
            <h4 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'extrabold'  })}>
              <img src='https://my.fusionheberg.com/images/1711226924.png' className={css({ width: "20%" })} alt="FusionHeberg Logo" />
              Fusion<span style={{ color: colors.primary }}>Heberg</span>
            </h4>
            <div className={css({ display: 'flex', gap: '10px' })}>
              <Youtube size="40" color="#fff" />
              <Twitter size="40" color="#fff" />
              <Instagram size="40" color="#fff" />
              <Facebook size="40" color="#fff" />
            </div>
          </div>
          <div>
            <p className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'extrabold' })}><strong>Nos services</strong></p>
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
            <h4 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'extrabold' })}><strong>Liens utiles</strong></h4>
            <ul className={css({ listStyleType: 'none', padding: 0 })}>
              <li><a href='/https://my.fusionheberg.com'>Espace Client</a></li>
              <li><a href='https://panel.fusionheberg.com'>Panel Game</a></li>
              <li><a href='https://web.fusionheberg.com'>Panel Web</a></li>
              <li><a href='/cgu-cgv'>CGU/CGV</a></li>
              <li>Mentions Légales</li>
              <li><a href='https://status.fusionheberg.com'>Status</a></li>
            </ul>
          </div>
          {/* Section Contactez-nous */}
          <div>
            <h4 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'extrabold' })}><strong>Contactez-nous</strong></h4>
            <p><strong>Email:</strong> <a href="mailto:contact@fusionheberg.com" style={{ color: colors.primary }}>contact@fusionheberg.com</a></p>
            <p><strong>Discord:</strong> <a href="https://discord.gg/fusionheberg" style={{ color: colors.primary }}>discord.gg/fusionheberg</a></p>
            <p><strong>Ticket:</strong> <a href="https://fusionheberg.com/ticket" style={{ color: colors.primary }}>fusionheberg.com/ticket</a></p>
          </div>
        </div>
      </div>
      <div style={{ background: colors.black }} className={css({ textAlign: 'center', marginTop: '2rem', fontSize: '18px', fontWeight: 'bold' })}>
        <p>©️ FusionHeberg 2024. - Site conçu par Fusion Studio.</p>
      </div>
    </footer>
  );
};

export default Footer;
