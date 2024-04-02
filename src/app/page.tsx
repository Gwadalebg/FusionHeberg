"use client"

import { css } from '../../styled-system/css';
import Navbar from '../components/Navbar';
import Acceuil from '../components/Acceuil';
import ServicesSection from '../components/ServiceSection';
import TeamSection from '../components/TeamSection';
import PresentationSection from '../components/Presentation';
import { colors } from '../lib/color';
import Footer from '../components/Footer';

export default function Home() {


  return (
      <div style={{ color: colors.text_primary }}>
        <Navbar />
        <Acceuil />
        <div className={css({ fontFamily: 'rubik' })}>
          <PresentationSection />
          <ServicesSection />
          <TeamSection />
          <Footer />
        </div>
      </div>
  );
}
