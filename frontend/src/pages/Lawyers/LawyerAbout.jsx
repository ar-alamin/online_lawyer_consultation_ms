import { formateDate } from "../../utils/FormateDate";

const LawyerAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Abdur Rahman Al Amin
          </span>
        </h3>

        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          modi vero consectetur tenetur sit nostrum eos temporibus voluptates
          assumenda nihil, animi dolores? Culpa placeat tempore deleniti eaque
          labore quibusdam cum.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5
           mb-[30px]"
          >
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("01-05-2012")}-{formateDate("05-17-2014")}
              </span>

              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Criminology
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Bangladesh Suprimcourt, Dhaka
            </p>
          </li>

          <li
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5
           mb-[30px]"
          >
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("07-17-2017")}-{formateDate("08-20-2021")}
              </span>

              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Criminology
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Bangladesh Suprimcourt, Dhaka
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("07-04-2010")}-{formateDate("08-13-2014")}
            </span>

            <p className="text-[16px] leading-6 font-medium text-textColor">
              Advocate
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              Chandpur Judge Court
            </p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formateDate("07-04-2010")}-{formateDate("08-13-2014")}
            </span>

            <p className="text-[16px] leading-6 font-medium text-textColor">
              Advocate
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              Chandpur Judge Court
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LawyerAbout;
