import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Hero() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header class="hero">
            <img src="img/draw-kerk.png"></img>
            <div>
                <h1>{siteConfig.title}</h1>
                <p>{siteConfig.tagline}</p>
                <a href="./docs">Naar handleidingen</a>
            </div>
      </header>
    );
  }