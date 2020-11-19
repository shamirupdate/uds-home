import React from 'react';

const HomeSection = ({ sectionHeading, sectionSubHeading, sectionDescription, imageSrc }) => (
    <section className="pt-4 md:pt-8" id="voice-recording">
      <div className="container mx-auto py-1 md:py-4 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 lg:flex section">
        <div className="text-justify section-content">
          <h1 className="section-heading text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-none">
            {sectionHeading}
          </h1>
          <h1 className="section-subheading pt-2 md:pt-4 text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-none tracking-tight">
            {sectionSubHeading}
          </h1>
          <img src={imageSrc} className="pt-2 md:pt-4"/>
          <p className="section-description text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4 
              tracking-tighter lg:tracking-tight leading-tight lg:leading-snug">
            {sectionDescription}
          </p>
        </div>
      </div>
    </section>
);

export default HomeSection;
