// components/TeamSection.js

import React from 'react';
import { css } from "../../styled-system/css";
import TeamMember from "./TeamMember";
import { colors } from '../lib/color';

const TeamSection = () => {
  return (
    <section style={{ background: colors.black }} className={css({ padding: '8rem 0',width: '100%' })}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className={css({ fontSize: '100px', '@media (max-width: 768px)': { fontSize:'80px' }, fontFamily: 'saira', textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' })}>Voici notre <span style={{ color: colors.primary }}>équipe!</span></h2>
        <div className={css({ display: 'grid', width:'100%', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', justifyItems: 'center', gap: '1rem' })}>
          <TeamMember image='https://images-ext-1.discordapp.net/external/qaJON-STxBPanXK6TPTIXDh_ZleUjOBVC5vwqVl-3M0/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/697012204339462216/4300194f71878e1faa01a33c6f1e6aa9.png?format=webp&quality=lossless&width=416&height=416' name="Ludo M." role="admin" />
          <TeamMember image='https://images-ext-1.discordapp.net/external/2w-oR1zNjvU27obVBYqExYRosnzWH9_YcOkkciMEVnQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/842845835477123122/d5242de302333b3b7239d164cb0ff4c2.png?format=webp&quality=lossless&width=1252&height=1252' name="Antoine G." role="director" />
          <TeamMember image='https://images-ext-1.discordapp.net/external/iwIuUY4KHVWO-9-MIt4myTRXLuhJOuqyGdA9ORfyiiY/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1021213770640539678/d7fbf14f80d0e0ba1634a0df1137c8b1.png?format=webp&quality=lossless&width=1252&height=1252' name="Nolhan G." role="admin" />
          <TeamMember image='https://images-ext-1.discordapp.net/external/d_9KYsikeilQZMOqMrc3cnt85qXBWpHdcX2FbnwyWEc/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/559813311223431198/e47868a137bb63e3f1d6da119854005f.png?format=webp&quality=lossless&width=1252&height=1252' name="Elium S." role="commercial" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
