import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div>
      <div className="main__container">
        <div className="main__content-about">
          <h2 className="content__heading-about">Welcome to our online store!</h2>
          <div className="content__text-about">
            <p>
              We are a team of enthusiasts who are passionate about bringing you the best products
              and customer service. Our goal is to provide you with an exceptional shopping
              experience from the comfort of your own home.
            </p>
            <p>
              We believe that every customer is unique and we strive to cater to your individual
              needs. Whether you&apos;re shopping for yourself or looking for the perfect gift for a
              loved one, we&apos;ve got you covered.
            </p>
            <p>Thank you for choosing our online store and we look forward to serving you!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
