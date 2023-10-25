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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
