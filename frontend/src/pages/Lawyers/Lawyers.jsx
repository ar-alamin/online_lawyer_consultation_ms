import { lawyers } from "../../assets/data/lawyers";
import LawyerCard from "../../components/Lawyers/LawyerCard";
import Testimonial from "../../components/testimonial/Testimonial";

const Lawyers = () => {
  return (
    <>
      <section className="bg-[#fff9ea] pb-[75px]">
        <div className="container text-center">
          <h2 className="heading">Find a Lawyer</h2>

          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-2 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Lawyer"
            />

            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {lawyers.map((lawyer) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our clients says</h2>
            <p className="txt__para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit blanditiis
              exercitationem.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Lawyers;
