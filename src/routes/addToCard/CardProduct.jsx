import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../../store/CardSlice";
import cardImage from "../../assets/images/empty-card.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";

const CardProduct = () => {
  const handleToast = (name) =>
    toast.success(`Remove  Product: ${name}  `, { icon: "👋" });

  const products = useSelector((state) => state.card.cart);

  const grandTotal = products.reduce(
    (price, item) => price + item.price * item.qty,
    0
  );
  // const products =Object.keys(product)
  console.log("card product :", products);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
    handleToast(productId);
  };
  const handleIncrement = (productId) => {
    dispatch(incrementQty(productId));
    // console.log("incrementQty", productId);
  };
  const handleDecrement = (productId) => {
    dispatch(decrementQty(productId));
  };
  useEffect(() => {
    document.title = "Pizza Time || CardProduct";
  });

  return (
    <div className="bg-white pt-4">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              border: "3px solid red",
            },
          },
        }}
      />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        {products.length !== 0 ? (
          <>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Customers also purchased
            </h2>

            <div className="mt-8  w-full flex  ">
              <div className="flow-root w-2/3 p-5 ">
                <ul
                  role="list"
                  className="-my-6 divide-y divide-gray-200  items-end justify-between"
                >
                  {products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <Link to={`/product-details/${product.id}`}>
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            loading="lazy"
                            src={product.Image}
                            alt={product.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </Link>
                      <div className="ml-2 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">
                              {product.price * product.qty}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm gap-4">
                          <div className="flex gap-4">
                            <button
                              type="button"
                              className="font-medium  hover:text-indigo-500  "
                              onClick={() =>
                                product.qty > 1
                                  ? handleDecrement(product.id)
                                  : product.qty
                              }
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <p className="text-gray-500">{product.qty} </p>

                            <button
                              type="button"
                              className="font-medium  hover:text-indigo-500"
                              onClick={() => handleIncrement(product.id)}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium  hover:text-indigo-500"
                              onClick={() => handleRemove(product.id)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                             
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6 sticky \">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal :</p>
                  <p>{`${grandTotal}`}</p>
                </div>
                {/* <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p> */}
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <Link to="/menu">
                  <p>
                  or{" "}
                    <span className="text-yellow-400"> Continue Shopping</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <div>
                <img
                  className="h-full  w-full transition ease-in-out delay-150 
                hover:rotate-45 hover:duration-1000 hover:ease-in-out "
                  src={cardImage}
                  alt="logo"
                />
              </div>
              <Link to="/menu">
                <div>
                  <p>
                    or{" "}
                    <span className="text-yellow-400"> Continue Shopping</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </p>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default CardProduct;
