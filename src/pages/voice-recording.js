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
import InstagramEmbed from 'react-instagram-embed';

import './index.css';

export default () => (
  <Layout>
    <section className="landing-section">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            voice recording
          </h1>
        </div>

            {/* <h3 className="insta-heading pt-2 md:pt-4 text-center text-sm sm:text-base lg:text-lg xl:text-xl leading-none tracking-tight">
                #updatestudios_dub
            </h3>
            <div className="instaSection pt-6 pb-2">
                <InstagramEmbed
                    url='https://www.instagram.com/p/BpMRN1bDgRJ/'
                    clientAccessToken='1812019072296010|dd9b6011d0cadb5013c3ebced773f1ca'
                    maxWidth={320}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    className="instaPost"
                />
                <InstagramEmbed
                    url='https://www.instagram.com/p/BfuentcBB5E/'
                    clientAccessToken='1812019072296010|dd9b6011d0cadb5013c3ebced773f1ca'
                    maxWidth={320}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    className="instaPost"
                />
                <InstagramEmbed
                    url='https://www.instagram.com/p/B31dSJSBtPY/'
                    clientAccessToken='1812019072296010|dd9b6011d0cadb5013c3ebced773f1ca'
                    maxWidth={320}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    className="instaPost"
                />
            </div> */}
      </div>
    </section>
  </Layout>
);
