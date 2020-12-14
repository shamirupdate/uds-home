import React from 'react';

import Layout from '../components/layout/Layout';
import CustomerCard from '../components/CustomerCard';
import customerData from '../data/customer-data';
import { Link, graphql } from 'gatsby';
import Carousel from "react-multi-carousel";
// import { WithStyles } from "@material-ui/core/styles";
import { Image } from 'semantic-ui-react'
import InstagramEmbed from 'react-instagram-embed';
import Iframe from 'react-iframe';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

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

import a1 from '../images/about/about-1.jpg'
import a2 from '../images/about/about-2.jpg'
import a3 from '../images/about/about-3.jpg'
import a4 from '../images/about/about-4.jpg'
import a5 from '../images/about/about-5.jpg'

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
          <p className="home-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
                tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
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
          <h1 className="section-subheading pt-2 md:pt-4 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none tracking-tight">
            Destination for all your voiceovers, recordings and dubbing needs.
          </h1>
          <img src={vr} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4 
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            Update Studios covers every aspect of vocal and instruments recording in both studio
            and field for TV production, films, commercials & voice over with most advanced audio interface,
            sound card, microphones & monitoring systems. We offer high-quality professional services in
            voiceovers and dubbing. With the well-connected network of many voiceover artists, we have
            worked with hundreds of satisfied clients for their short films, documentaries, feature films,
            advertisements, podcasts and audiobooks.
          </p>

          <div className="more-link-container">
            <Link to="/voice-recording" aria-label="instagram tag link" 
              className="more-link py-1 md:py-2 px-2 md:px-4 text-sm sm:text-base lg:text-lg">
              <p className="pr-0.5 md:pr-1">View More</p><BsBoxArrowUpRight /></Link>
            <a className="insta-hash text-sm sm:text-base lg:text-lg" 
              aria-label="instagram tag link"
              href="https://www.instagram.com/explore/tags/updatestudios_dub/">
              <FaInstagram class="insta-hash-icon text-xl sm:text-2xl lg:text-3xl"/>updatestudios_dub 
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="sound-effects">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Sound Effects
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4  text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none tracking-tight">
            Record & recreate the sound effects present in the picture without any compromise.
          </h1>
          <img src={se} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4 
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            Update Studios is equipped with various international and indian sound libraries, self
            recorded sounds, Foley pit to record & recreate the sound effects present in the picture. We
            work to deliver top-notch sound tracks for your movies without any compromise in quality.
          </p>

          <div className="more-link-container">
            <Link to="/sound-effects" aria-label="instagram tag link" 
              className="more-link py-1 md:py-2 px-2 md:px-4 text-sm sm:text-base lg:text-lg">
              <p className="pr-0.5 md:pr-1">View More</p><BsBoxArrowUpRight /></Link>
            <a className="insta-hash text-sm sm:text-base lg:text-lg" 
              aria-label="instagram tag link"
              href="https://www.instagram.com/explore/tags/updatestudios_sfx/">
              <FaInstagram class="insta-hash-icon text-xl sm:text-2xl lg:text-3xl"/> updatestudios_sfx
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="video-editing">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Video Editing
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4  text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none tracking-tight">
            Edit with powerful Apple editing workstation (FCPX) for video post-production.
          </h1>
          <img src={ve} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            Update Studios has very powerful Apple editing workstation (FCPX) for video post
            production of films, TVC and documentaries. We work to enhance the perception of the viewer
            by following every aspect of editing and offer a comprehensive range of quality video editing
            services with one year of storage backup.
          </p>

          <div className="more-link-container">
            <Link to="/video-editing" aria-label="instagram tag link" 
              className="more-link py-1 md:py-2 px-2 md:px-4 text-sm sm:text-base lg:text-lg">
              <p className="pr-0.5 md:pr-1">View More</p><BsBoxArrowUpRight /></Link>
            <a className="insta-hash text-sm sm:text-base lg:text-lg" 
              aria-label="instagram tag link"
              href="https://www.instagram.com/explore/tags/updatestudios_cuts/">
              <FaInstagram class="insta-hash-icon text-xl sm:text-2xl lg:text-3xl"/> updatestudios_cuts
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="color-grading">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Color Grading
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none tracking-tight">
            Color Grade your video with very powerful Apple workstation.
          </h1>
          <img src={cg} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            Update Studios has a very powerful Apple workstation to do high-end DI (Digital
            Intermediate) /Color Grading which is the final stage in Video Post Production to give the
            best real cinematic color feel for films, TVC, etc. We work to bring out aesthetically proper
            look to the videos using the advanced software.
          </p>

          <div className="more-link-container">
            <Link to="/color-grading" aria-label="instagram tag link" 
              className="more-link py-1 md:py-2 px-2 md:px-4 text-sm sm:text-base lg:text-lg">
              <p className="pr-0.5 md:pr-1">View More</p><BsBoxArrowUpRight /></Link>
            <a className="insta-hash text-sm sm:text-base lg:text-lg" 
              aria-label="instagram tag link"
              href="https://www.instagram.com/explore/tags/updatestudios_color/">
              <FaInstagram class="insta-hash-icon text-xl sm:text-2xl lg:text-3xl"/> updatestudios_color
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="green-matte-studio">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Green Matte Studio
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none tracking-tight">
            Cyclorama Infinity curve green matte studio for CG works equipped with CRI 90+ cinema standard LED light & all camera equipment.
          </h1>
          <img src={gm} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            Update Studios is introducing a new fully equipped air-conditioned Cyclorama Infinity
            curve green matte studio with CRI 90+ cinema standard LED light & all camera equipment
            (heavy tripod, slider jimmy grip trolley that is suitable for CG work in songs, short films, Ad film &
            corporate videos. The size of the room is 20’×16’×9’ and can be completely customized to
            white, black or any other color according to the customer's need.
          </p>

          <div className="more-link-container">
            <Link to="/green-matte" aria-label="instagram tag link" 
              className="more-link py-1 md:py-2 px-2 md:px-4 text-sm sm:text-base lg:text-lg">
                <p className="pr-0.5 md:pr-1">View More</p><BsBoxArrowUpRight /></Link>
            <a className="insta-hash text-sm sm:text-base lg:text-lg" 
              aria-label="instagram tag link"
              href="https://www.instagram.com/explore/tags/updatestudios_green/">
              <FaInstagram class="insta-hash-icon text-xl sm:text-2xl lg:text-3xl"/> updatestudios_green
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-4 md:pt-8" id="preview-theatre">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Preview Theatre
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none tracking-tight">
            A theatre to screen films, teach and discuss.
          </h1>
          <img src={pt} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            Update Studios is introducing its new air-conditioned 30-seat sound treated preview
            theatre with REC 709 projector and Studio Monitor for film screening. It also has whiteboard
            facilities for teaching and discussion purposes.
          </p>

          <div className="more-link-container">
            <Link to="/preview-theatre" aria-label="instagram tag link" 
              className="more-link py-1 md:py-2 px-2 md:px-4 text-sm sm:text-base lg:text-lg">
              <p className="pr-0.5 md:pr-1">View More</p><BsBoxArrowUpRight/>
            </Link>
            <a className="insta-hash text-sm sm:text-base lg:text-lg" 
              aria-label="instagram tag link"
              href="https://www.instagram.com/explore/tags/updatestudios_theatre/">
              <FaInstagram class="insta-hash-icon text-xl sm:text-2xl lg:text-3xl"/> updatestudios_theatre
            </a>
          </div>
        </div>
      </div>
    </section>


    <section className="pt-4 md:pt-8">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            About
          </h1>
          <h2 className="about-name pt-2 md:pt-4 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none tracking-tight">
            A. Shamir Mohamed
          </h2>
          <h3 className="about-degree pt-2 md:pt-4 text-left text-sm sm:text-base lg:text-lg xl:text-xl leading-none tracking-tight">
            M. Tech Multimedia, Proprietor
          </h3>
          <img src={a1} className="pt-2 md:pt-4"/>
          <p className="section-description px-8 lg:px-16 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            "Just Dream" - A powerful spell inside me has brought me the growth I cherish as an
            entrepreneur. From childhood, I was good at the creative works and this made my quest for
            things I really wanted in my life. Later, I found myself active and enthusiastic when I discovered
            that my brain was put to think out of the box. And that's how I chose my profession and now, I
            own " Update studios".
          </p>

          <p className="section-description px-8 lg:px-16 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            Initially, I started my career as a video editor, later equipped myself to become a sound
            engineer (Foley sound & mixing) and now I execute colour grading works too. Apart from this, I
            have partnered with a big network of pre-production and production companies for story board,
            script writing, direction, cinematography, computer graphics and music to offer a complete
            process of film making.
          </p>

          <img src={a2} className="pt-2 md:pt-4"/>

          <p className="section-description px-8 lg:px-16 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            My sense of social responsibility was turned on when I worked in the documentary films.
            I have done camera and full post production for "Mudivin aarambam", which is about the
            kudankulam power plant. And, I'm proud of being one of the editors in tamil version and for
            doing complete English version of the documentary "Uyirvali" about Rajiv Gandhi's case which
            was the reason behind the cancellation of death penalty of seven convicts and this earned me
            an award from Perarivalan's mother Arpudammal. Then I worked for the documentary "Saving
            lakes of Kanchipuram". All these works gave me insights into the documentary industry. I have
            worked for the feature films of director Manivannan sir's "Amadai padai 2" and Ram sir's
            "Peranbu".
          </p>

          <img src={a3} className="pt-2 md:pt-4"/>

          <p className="section-description px-8 lg:px-16 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            Currently, I work for many famous YouTube channels like Eruma saani, Nakkalites,
            Thiruvilaiyadal, Banana talkies, etc. and started doing advancement and corporate videos. Apart
            from this, as a mark of growth of the studio, I work as a dubbing engineer for the feature film
            "Aelay", directed by Halitha featuring Samuthrakani as a hero. I'm the foley designer and
            dubbing engineer for the movie "TNT" directed by Aravind maduvan featuring Kadai
            Kamalakanan as a hero and Rohini mam in lead role.
          </p>

          <img src={a4} className="pt-2 md:pt-4"/>

          <p className="section-description px-8 lg:px-16 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            Being a motivational speaker, I enlighten the school and college students about the
            scope of multimedia and social work. I also provide them internship facilities and encourage
            visits to my studio for an experience.
          </p>

          <img src={a5} className="pt-2 md:pt-4"/>

          <p className="section-description px-8 lg:px-16 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            These works of mine have been highly recognized and helped me receive many awards.
            A short film, for which I have done sound have been selected in international film festivals. I
            have even received Best entrepreneur awards and several other awards for my untiring and
            ardent work. My works show my passion and dedication in offering quality services to fulfill the
            customer's needs. I’m always open to new opportunities and have plenty of room for more
            award-winning works.
          </p>

          <p className="section-description mb-8 px-8 lg:px-16 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            I'm indebted and thankful to all my customers, friends and family's feedback which
            helped me improve and achieve a lot in my career.
          </p>

        </div>
      </div>
    </section>
    
    <section className="pt-4 md:pt-8 mb-4 md:mb-8">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content visit-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            Visit Us
          </h1>
          
          <div className="map-container mt-2 lg:mt-4">
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1804680796963!2d76.92991861523902!3d11.025082792153057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859f3649a161d%3A0x3cba30bd475d4e7a!2sUpdate%20Studios!5e0!3m2!1sen!2sus!4v1605781940076!5m2!1sen!2sus"
              width="600px"
              height="350px"
              className="map"
              display="initial"
              position="relative"/>
          </div>

          <div className="map-container-lg mt-2 lg:mt-4">
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1804680796963!2d76.92991861523902!3d11.025082792153057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859f3649a161d%3A0x3cba30bd475d4e7a!2sUpdate%20Studios!5e0!3m2!1sen!2sus!4v1605781940076!5m2!1sen!2sus"
              width="960px"
              height="350px"
              className="map"
              display="initial"
              position="relative"/>
          </div>
        </div> 
      </div>
    </section>

 
    {/* <section id="testimonials" className="py-20">
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
    </section> */}
    {/* <section className="container mx-auto my-20 py-24 rounded-lg text-center locate-us-section">
      <h3 className="text-5xl font-semibold">Locate Us</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section> */}
  </Layout>
);
