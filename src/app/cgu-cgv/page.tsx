// components/TermsAndConditions.js

import React from 'react';
import { css } from '../../../styled-system/css';

const TermsAndConditions = () => {
  return (
    <div className="container">
      <h1 className={css({ fontSize: '28px', marginBottom: '1rem', fontWeight: 'bold' })}>Conditions Générales de Vente et d'Utilisation de FusionHeberg</h1>

      <article className="article">
        <h2 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}>Article 1 - Objet</h2>
        <p className={css({ fontSize: '18px', marginBottom: '1rem' })}>Les conditions générales de vente (CGV) et les conditions générales d'utilisation (CGU) s'appliquent à tous les services de FusionHeberg (ou "hébergeur") commandés par des personnes physiques (ou "clients") sur le site https://fusionheberg.fr/.</p>
      </article>

      <article className="article">
        <h2 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}>Article 2 - Services</h2>
        <p className={css({ fontSize: '18px', marginBottom: '1rem' })}>Tous les services proposés sur le site sont décrits par l'hébergeur et les prix sont en euros sur le site. L'hébergeur se réserve le droit de modifier ses services ou prix à tout moment. Les clients peuvent acheter un service sur le site de l'hébergeur, la commande sera validée quand le client aura effectué le paiement et accepté les CGV.</p>
      </article>

      <article className="article">
        <h2 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}>Article 3 - Paiements</h2>
        <p className={css({ fontSize: '18px', marginBottom: '1rem' })}>Les paiements se font par le moyen de paiement PayPal, PaySafeCard ou Stripe.</p>
      </article>

      <article className="article">
        <h2 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}>Article 4 - Livraisons</h2>
        <p className={css({ fontSize: '18px', marginBottom: '1rem' })}>Le service sera livré au client dans un délai de maximum 24h après avoir commandé le service.</p>
      </article>

      <article className="article">
        <h2 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}>Article 5 - Remboursement</h2>
        <p className={css({ fontSize: '18px', marginBottom: '1rem' })}>Les remboursements sont possibles uniquement si le client n'a pas reçu son service 24h après avoir payé.</p>
      </article>

      <article className="article">
        <h2 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}>Article 6 - Responsabilité</h2>
        <p className={css({ fontSize: '18px', marginBottom: '1rem' })}>L'hébergeur et le client sont responsables du fonctionnement des services. Si des services ne fonctionnent plus, l'hébergeur s'engage à régler le problème dans le délai le plus court possible. Si un client installe un logiciel malveillant ou autre chose pouvant causer problème au service, l'hébergeur n'est pas responsable. L'hébergeur ne garantit pas une disponibilité permanente de ses services. Si les services sont indisponibles, l'hébergeur essaiera si possible d'avertir ses clients avant que ses services ne deviennent indisponibles.</p>
      </article>

      <article className="article">
        <h2 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}>Article 7 - Obligations</h2>
        <p className={css({ fontSize: '18px', marginBottom: '1rem' })}>Le client s'engage à utiliser le site de l'hébergeur dans les conditions de ne pas utiliser les services à des fins illégales ou malveillantes et de ne pas tenter de pirater ou d'attaquer l'hébergeur.</p>
      </article>

      <article className="article">
        <h2 className={css({ fontSize: '24px', marginBottom: '1rem', fontWeight: 'bold' })}>Article 8 - CGV ou CGU</h2>
        <p className={css({ fontSize: '18px', marginBottom: '1rem' })}>L'hébergeur se réserve le droit de modifier à tout moment les CGV ou CGU. S'il y a des modifications, les clients auront en tout temps accès aux modifications des CGV et CGU.</p>
      </article>
    </div>
  );
};

export default TermsAndConditions;
