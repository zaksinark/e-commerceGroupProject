const Card = () => {
  return (
    <>
      <div className="card bg-white w-[200px] m-4 h-[310px] rounded-lg shadow-lg">
        <div className="top">
          <img
            className="w-[200px] h-[200px] object-cover p-2"
            src="https://www.wagnerbrake.com/content/loc-na/loc-us/fmmp-wagner/en_US/products/brakes/_jcr_content/header/foreground-image.img.png/Wagner-Group_Rotors%2CPads%2CFluid_022321-1670350232885.png"
            alt="img"
          ></img>
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3">
          <div className="titlee font font-semibold my-1">Brake Pads</div>
          <div className="description text-xs font-light">Description</div>
          <div className="flex justify-between items-center w-[150px] my-2">
          <div className="price text-red-500">$80</div>
          <button className="border px-4 ml-4 rounded-lg">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
