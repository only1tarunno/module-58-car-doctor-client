import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";

const Banner = () => {
  const bannerContent = (
    <div className="rounded-xl absolute flex items-center gap-5 w-full  left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)">
      <div className="text-white space-y-5 pl-24 w-[500px]">
        <h2 className="text-6xl font-bold">
          Affordable Price For Car Servicing
        </h2>
        <p>
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="flex gap-5">
          <button className="btn btn-primary">Discover More</button>
          <button className="btn btn-error">Latest Project</button>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div className="carousel h-[768px] w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-cover rounded-xl" />
          {bannerContent}
          <div className="absolute flex justify-end transform gap-5 -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-cover rounded-xl" />
          {bannerContent}
          <div className="absolute flex justify-end transform gap-5 -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-cover rounded-xl" />
          {bannerContent}
          <div className="absolute flex justify-end transform gap-5 -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full object-cover rounded-xl" />
          {bannerContent}
          <div className="absolute flex justify-end transform gap-5 -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
