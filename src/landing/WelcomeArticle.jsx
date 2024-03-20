import Image from "../assets/images/black-bg.jpg";

const WelcomeArticle = () => {
  return (
    <div
      className="bg-black text-white h-auto  bg-no-repeat  bg-local welcome-Article  "
      style={{ backgroundImage: `url(${Image})`, width: "100%", height: "50%" }}
    >
      <div className="   px-6 pt-3 lg:px-8  ">
        <div className="mx-auto max-w-2xl py-32 sm:py-4 lg:py-4">
          <div className="text-center  Article-text">
            <h1 className="text-md font-semibold tracking-tight text-orange-600  sm:text-6xl">
              WELCOME TO PIZZA TIME RESTAURANT
            </h1>
            <p className="mt-6 text-lg font-medium leading-8 text-white ">
              Founded in 1982 we bring pizza slice by slice to the next level!
              Unique branding and being in the pizza industry is the formula to
              out success. We do understand what people want and convert desires
              to unique experiences of taste. Freshness, orignality and quality
              is only the small part of out priorities. Affortable costs,
              located almost anywhere you go, amazing online operational system
              to order food in one click. Easy to navigate pre-order options and
              amazing options for corporate parties! At Pizaa Time we care about
              you because you are the one who makes us special!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeArticle;
