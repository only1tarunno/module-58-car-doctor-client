import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="flex">
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body justify-between items-end flex-row ">
          <div>
            <h2 className="card-title">{title}</h2>
            <p className="text-xl font-bold text-orange-400">price: ${price}</p>
          </div>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
