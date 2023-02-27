
import React, { useEffect } from "react";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Hero from '../components/Hero/index.js';

export default function Home() {
  useEffect(() => {
    setTimeout(() => {window.location.replace('./docs/intro');}, 2000)
  });

return(
  <layout style={{margin: 'auto'}}>
    <img id="kerk" style={{height: '250px', width: '370px', 'background-color': 'white', padding: '30px'}} src='./img/draw-kerk.png'></img>
    <h1 style={{'text-align': 'center', color: '#E6A31E', 'margin-top': '20px'}}>Aan het laden...</h1> 
  </layout>
);

  /*const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Start`}
      description="Technische documentatie voor Hervormd Oud-Alblas">
      <Hero />
      <main>
      </main>
    </Layout>
  ); */
}
