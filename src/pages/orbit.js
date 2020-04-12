import React from 'react';
import Button from '../components/Button';
// import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

import './index.css';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40 landing-section">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Update Studios
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Update Studios is an independent pre-production, production and post-production studio
            that specializes in video editing, color grading, dubbing, Foley recording, chroma key
            green room studio with standard lights and equipments & preview theatre for screening
            films and discussion purposes. The studio ensures confidentiality of the projects and
            works for the satisfaction of the clients.
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
  </Layout>
);
