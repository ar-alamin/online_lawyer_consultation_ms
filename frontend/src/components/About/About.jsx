import React from "react";
import aboutImg from "../../assets/images/about.png";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="flex-1">
            <img src={aboutImg} />
          </div>

          <div className="flex-1 mt-[30px]">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              sapiente! Inventore harum error hic exercitationem. Molestias
              totam rem aperiam voluptates, tempore laudantium ducimus, ipsam,
              ipsum at provident minus sapiente quia!
            </p>

            <p className="text__para mt-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nemo vitae animi, ea praesentium nobis maiores perferendis
              aspernatur magni possimus quibusdam necessitatibus recusandae
              quasi ipsum beatae temporibus molestiae suscipit fuga?
            </p>

            <Link to="/">
              <button className="btn rounded-md">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
