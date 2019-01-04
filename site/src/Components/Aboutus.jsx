import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="history__wrapper">
        <h1 className="history__heading">What Do We Offer</h1>

        <div className="history">
          <img src="/img/saba.jpg" alt="" className="history__photo" />
          <span className="text__about">
            Kyle Kirkpatrick is an extreme athlete and a nerd for tech. But he
            was fed up with headphones because they wouldn’t stay in, sounded
            awful or hurt his ears. After weeks of searching, Kyle couldn’t find
            one pair of headphones that would stay put and wouldn’t hurt. So he
            took it upon himself to develop an earphone that actually worked.
          </span>
        </div>

        <div className="history">
          <p className="text__about">
            “The human ear is incredibly diverse; in fact, our ears are as
            unique to us as our fingerprints,” Kyle said. “I found the only way
            to create earphones that fit well is to mold them to the exact shape
            of the ear. Some custom earphone products were already available,
            but the $300 to $2,000 price tag was just unacceptable.”
          </p>
          <img src="/img/dato.jpg" alt="" className="history__photo" />
        </div>

        <div className="history">
          <img src="/img/mariam.jpg" alt="" />
          <p className="text__about">
            Kyle consulted audio engineers, material specialists and high-level
            athletes to develop and test hundreds of designs, formulas and
            prototypes in order to create an easy and affordable custom molded
            earphone. In February 2012 Kyle created the worlds first thermo-fit
            custom earphone and Decibullz was born.
          </p>
        </div>

        <div className="history">
          <p className="text__about">
            “I can honestly say Decibullz are the best earphones I have ever
            had, and I’m really excited to share them with the world.” Decibullz
            are the first thermo-fit custom molded earbuds. They are also the
            only custom earphones that can be remolded.
          </p>
          <img src="/img/mariami.jpg" alt="" />
        </div>
      </div>
    );
  }
}

export default About;
