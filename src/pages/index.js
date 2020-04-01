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
            #Updatestudios - [social]
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Update Studios is an independent pre-production, production and post-production studio that specializes in video editing, 
          color grading, dubbing, Foley recording, chroma key green room studio with standard lights and equipments & preview theatre 
          for screening films and discussion purposes. The studio ensures confidentiality of the projects and works for the satisfaction 
          of the clients.
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <div className="feature-header">
      <h2 className="text-center text-3xl lg:text-5xl font-semibold">Main Features</h2>
    </div>
    <SplitSection
      id="voice-recording"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Voice Recording</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Destination for all your voiceovers, recordings and dubbing needs.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      id="sound-effects"
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Sound Effects
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Record & recreate the sound effects present in the picture without any compromise.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      id="video-editing"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Video Editing
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Edit with powerful Apple editing workstation (FCPX) for video post-production 
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    /> 
    <SplitSection
      reverseOrder
      id="color-grading"
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Color Grading
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Color Grade your video with very powerful Apple workstation.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      id="green-matte-studio"
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Green Matte Studio
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Cyclorama Infinity curve green matte studio for CG works equipped with CRI 90+ cinema standard LED light & all camera equipment.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      id="preview-theatre"
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Preview Theatre
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          A theatre to screen films, teach and discuss.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
