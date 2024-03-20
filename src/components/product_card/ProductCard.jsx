import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { allProductsData } from "../../data/AllProductsData";
import "../../routes/blog/Blog.css";
 import Card from "../product_card/Card"
import PaginationComponent from "../pagination/PaginationComponent";

const ProductCard = () => {


  const [searchData, setSearchData] = useState([]);
  // searchData is use to store the initial data = allProductsData
  const [data, setData] = useState([]);
  // setData is used to collect the  searchValue ,those filter by search
  const [filterValue, setFilterValue] = useState("");
  // filterValue is use for filtering products by search(name)

  //...........  start pagination
  const [currentPage, setCurrentPage] = useState(1); //*initial page
  const [postPerPage] = useState(10); // values per page
  const lastPageIndex = currentPage * postPerPage;
  const firstPageIndex = lastPageIndex - postPerPage;
  const currentPost = data.slice(firstPageIndex, lastPageIndex); // use currentPost for mapping purposes
  let TotalPost = data.length;
  // console.log(TotalPost);
  // console.log("post per page", currentPost);
  useEffect(() => {
    document.title = "Pizza Time || Blog";
    currentPage;
    // useDispatch( setProduct(allProductsData));
  }, [currentPost, currentPage]);
  //.......... end pagination

  const [selectedFilters, setSelectedFilters] = useState([]);
  //const [filteredItems, setFilteredItems] = useState(allProductsData); //* for initial data store

  const menuItems = [...new Set(allProductsData.map((val) => val.Category))]; // *collection for unique category

 
  //  handle more then one category selection
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      // console.log(selectedFilters.length + " selected" + selectedFilters);
      setCurrentPage(1); //* always set current page = first page ,when filtering
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = allProductsData.filter(
          (item) => item.Category === selectedCategory
        );
        // there we filter the data in the initial data array = allProductsData
        // if we filter data from //! filteredItems
        //  then we try to  select more then one item that time we face more problems
        // console.log(temp);
        return temp;
      });
      //console.log(tempItems);
      setData(tempItems.flat());
    } else {
      setData([...allProductsData]);
      // if we not filtering data  then return allProductsData those are initial data
    }
  };

  useEffect(() => {
    filterItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters]);
  //..........

  useEffect(() => {
    setData(allProductsData);
    setSearchData(allProductsData); // store initial data
  }, [setData, setSearchData]);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchData);
    } else {
      const filterResult = searchData.filter(
        (item) =>
          item.ItemName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.Category.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterResult);
      setCurrentPage(1); //* always set current page = first page ,when filtering
    }
    setFilterValue(e.target.value);
  };
  //  console.log(filterValue);
  return (
    <>
      <div className="">
        <div style={{ padding: "5px" }} className="text-black">
          <input
            placeholder="search"
            value={filterValue}
            onInput={(e) => {
              handleFilter(e);
            }}
          />
        </div>
        {menuItems.map((Category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(Category)}
            className={`button ${
              selectedFilters?.includes(Category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {Category}
          </button>
        ))}
      </div>
       
      <div className=" w-full buttons-container">
        <PaginationComponent
          totalPosts={TotalPost}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          // currentPost={currentPost}
          TotalPost={TotalPost}
        />
      </div>
      {/* <Card  currentPost={currentPost}/> */}

      {currentPost.length !== 0 ? (
        <>
          {currentPost &&
            Object.values(currentPost).map((product) => (
              // <div
              //   key={product.id}
              //   className="group relative bg-slate-400 rounded-lg"
              // >
              //   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              //     <img
              //       loading="lazy"
              //       src={product.ItemImg}
              //       alt={product.ItemName}
              //       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              //     />
              //   </div>
              //   <div className="mt-4 flex justify-between">
              //     <div>
              //       <h3 className="text-sm text-gray-700">
              //         <Link to={`/product-details/${product.id}`}>
              //           <span aria-hidden="true" className="absolute inset-0" />
              //           {product.ItemName}
              //         </Link>
              //       </h3>
              //     </div>
              //     <p className="text-sm font-medium text-gray-900">
              //       {product.ItemPrice}
              //     </p>
              //   </div>
              // </div>
              <Card  product={product}  key={product.id}/>
            ))}
        </>
      ) : (
        <div>
          <h1>
            <b style={{ color: "yellow" }}>{filterValue}</b> :- related data not
            found
          </h1>
        </div>
      )}
    </>
  );
};

export default ProductCard;
