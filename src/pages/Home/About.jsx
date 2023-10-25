import img1 from "../../assets/images/about_us/person.jpg";
import img2 from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="my-10">
      <div className="hero min-h-screen">
        <div className="hero-content gap-10 flex-col lg:flex-row">
          <div className="flex-1 relative">
            <img src={img1} className="w-4/5 rounded-lg shadow-2xl" />
            <img
              src={img2}
              className="w-1/2 rounded-lg  absolute right-0 -bottom-16 border-8 border-white"
            />
          </div>
          <div className="flex-1 space-y-5">
            <h3 className="text-orange-600 text-3xl font-semibold">About</h3>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don&apos;t look even slightly
              believable.
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
