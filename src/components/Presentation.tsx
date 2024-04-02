// components/PresentationSection.js

import React from 'react';
import { css } from "../../styled-system/css";
import Feature from "./Feature"; // Importer la couleur primaire depuis le fichier color.ts
import { Timer, Headset, DollarSign } from 'lucide-react'; // Importer les icônes
import { colors } from '../lib/color';

const PresentationSection = () => {
  return (
      <section style={{ background: colors.black }} className={css({ padding: '5rem 0', marginTop: '8rem', marginRight: '1rem', marginLeft:'1rem', width: '100%'})}>
      <div className="container" style={{ maxWidth:'100%'}}>
        <div className={css({ display: 'grid', justifyItems:'center', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' })}>
          <Feature title="Livraison rapide" icon={<Timer size={100} color={colors.primary} />} />
          <Feature title="Support réactif"  icon={<Headset size={100} color={colors.primary} />} />
          <Feature title="Prix abordables"  icon={<DollarSign size={100} color={colors.primary} />} />
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
