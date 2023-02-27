import React, { useEffect } from "react";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import Hero from '../components/Hero/index.js';

export default function videolibary(){
const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Start`}
      description="Technische documentatie voor Hervormd Oud-Alblas">
      <main>
        <video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" width="500px" height="300px"></video>
      </main>
    </Layout>
  );
  }
