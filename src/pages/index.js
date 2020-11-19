import React from 'react';
import Button from '../components/Button';
// import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
// import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import { Link, graphql } from 'gatsby';
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import h1 from '../images/home-slider/home-1.jpg'
import h2 from '../images/home-slider/home-2.jpg'
import h3 from '../images/home-slider/home-3.jpg'
import h4 from '../images/home-slider/home-4.jpg'
import h5 from '../images/home-slider/home-5.jpg'
import h6 from '../images/home-slider/home-6.jpg'
import h7 from '../images/home-slider/home-7.jpg'
import h8 from '../images/home-slider/home-8.jpg'

import vr from '../images/sections/voice-recording.jpg'
import se from '../images/sections/sound-effects.jpg'
import ve from '../images/sections/video-editing.jpg'
import cg from '../images/sections/color-grading.jpg'
import gm from '../images/sections/green-matte.jpg'
import pt from '../images/sections/preview-theatre.jpg'

const imgs = [h1, h2, h3, h4, h5, h6, h7, h8];

import "react-multi-carousel/lib/styles.css";
import './index.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30
  }
};

export default () => (
  <Layout>
    <section>
      <Carousel
        itemClass="image-item"
        responsive={responsive}
      >
        {imgs.map(image => {
          return (
            <Image
              draggable={false}
              style={{ width: "100%", height: "100%" }}
              src={image}
            />
          );
        })}
      </Carousel>
    </section>
    <section className="pt-4 md:pt-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex">
        <div className="text-justify">
          <h1 className="home-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            The Multimedia Hub
          </h1>
          <p className="home-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4">
            Update Studios is an independent pre-production, production and post-production studio
            that specializes in video editing, color grading, dubbing, foley recording, chroma key
            green room studio with standard lights and equipments & preview theatre for screening
            films and discussion purposes. The studio ensures confidentiality of the projects and
            works for the satisfaction of the clients.
          </p>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="voice-recording">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Voice Recording
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none">
            Destination for all your voiceovers, recordings and dubbing needs.
          </h1>
          <img src={vr} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4">
            Update Studios covers every aspect of vocal and instruments recording in both studio
            and field for TV production, films, commercials & voice over with most advanced audio interface,
            sound card, microphones & monitoring systems. We offer high-quality professional services in
            voiceovers and dubbing. With the well-connected network of many voiceover artists, we have
            worked with hundreds of satisfied clients for their short films, documentaries, feature films,
            advertisements, podcasts and audiobooks.
          </p>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="sound-effects">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Sound Effects
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4  text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none">
            Record & recreate the sound effects present in the picture without any compromise.
          </h1>
          <img src={se} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4">
            Update Studios is equipped with various international and indian sound libraries, self
            recorded sounds, Foley pit to record & recreate the sound effects present in the picture. We
            work to deliver top-notch sound tracks for your movies without any compromise in quality.
          </p>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="video-editing">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Video Editing
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4  text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none">
            Edit with powerful Apple editing workstation (FCPX) for video post-production.
          </h1>
          <img src={ve} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4">
            Update Studios has very powerful Apple editing workstation (FCPX) for video post
            production of films, TVC and documentaries. We work to enhance the perception of the viewer
            by following every aspect of editing and offer a comprehensive range of quality video editing
            services with one year of storage backup.
          </p>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="color-grading">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Color Grading
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none">
            Color Grade your video with very powerful Apple workstation.
          </h1>
          <img src={cg} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4">
            Update Studios has a very powerful Apple workstation to do high-end DI (Digital
            Intermediate) /Color Grading which is the final stage in Video Post Production to give the
            best real cinematic color feel for films, TVC, etc. We work to bring out aesthetically proper
            look to the videos using the advanced software.
          </p>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="green-matte-studio">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Green Matte Studio
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none">
            Cyclorama Infinity curve green matte studio for CG works equipped with CRI 90+ cinema standard LED light & all camera equipment.
          </h1>
          <img src={gm} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4">
            Update Studios is introducing a new fully equipped air-conditioned Cyclorama Infinity
            curve green matte studio with CRI 90+ cinema standard LED light & all camera equipment
            (heavy tripod, slider jimmy grip trolley that is suitable for CG work in songs, short films, Ad film &
            corporate videos. The size of the room is 20’×16’×9’ and can be completely customized to
            white, black or any other color according to the customer's need.
          </p>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="preview-theatre">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Preview Theatre
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none">
            A theatre to screen films, teach and discuss.
          </h1>
          <img src={pt} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4">
            Update Studios is introducing its new air-conditioned 30-seat sound treated preview
            theatre with REC 709 projector and Studio Monitor for film screening. It also has whiteboard
            facilities for teaching and discussion purposes.
          </p>
        </div>
      </div>
    </section>

    

    <section className="pt-8 md:pt-16 landing-section">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex">
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
          <Link to="/orbit/">orbit</Link>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <div className="feature-header">
      <h2 className="text-center text-3xl lg:text-5xl font-semibold">Our Services</h2>
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
          <h3 className="text-3xl font-semibold leading-tight">Sound Effects</h3>
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
          <h3 className="text-3xl font-semibold leading-tight">Video Editing</h3>
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
          <h3 className="text-3xl font-semibold leading-tight">Color Grading</h3>
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
          <h3 className="text-3xl font-semibold leading-tight">Green Matte Studio</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Cyclorama Infinity curve green matte studio for CG works equipped with CRI 90+ cinema
            standard LED light & all camera equipment.
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
          <h3 className="text-3xl font-semibold leading-tight">Preview Theatre</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            A theatre to screen films, teach and discuss.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">About Us</LabelText>
        <p className="text-xl lg:text-2xl mt-6 font-light">
          I am Shamir (M.Tech Multimedia) proprietor of Update Studios. I started my career as a
          video editor, later became sound engineer (Foley sound & mixing) & started executing
          colour grading works. I am working with many famous YouTube channels like Eruma Saani,
          Nakkalites, Thiruvilaiyadal, Banana talkies, etc. I have worked for the feature films
          Amadai padai 2 with director Manivannan sir & also with director Ram in Peranbu. I work
          dedicatedly with passion to offer quality services to the clients.
        </p>
      </div>
    </section>
    <section id="testimonials" className="py-20">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Update Studio In Press</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 rounded-lg text-center locate-us-section">
      <h3 className="text-5xl font-semibold">Locate Us</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
