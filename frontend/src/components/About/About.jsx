import aboutImg from "../../assets/images/about.png";
// import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between flex-col  lg:flex-row gap-[50px] lg:gap-[130px] xl:gap-0 ">
          {/* ========= about img ======== */}
          <div className="relative z-10 w-3/4 lg:w-1/2  xl:w-[770px] order-2 lg:order-1">
            <img src={aboutImg} alt="about_img" />
            {/* <div className=" w-[200px] md:w-[300px] absolute bottom-4 right-[-30%]  md:right-[-7%]  lg:right-[22%] z-20">
              <img src={aboutCardImg} alt="" />
            </div> */}
          </div>

          {/* =========== about content ============ */}
          <div className=" w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, deleniti qui reiciendis dolorum nesciunt doloremque, neque, recusandae quo vel voluptates non commodi. Impedit excepturi voluptatem rem quae ratione, a consequatur.
            </p>
            <p className="text__para mt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum similique accusamus vero aliquam distinctio error sequi aspernatur cumque, minus, consequatur repellendus! Doloremque atque repellendus esse itaque, exercitationem dolore similique inventore.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
