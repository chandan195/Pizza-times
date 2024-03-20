//import React from 'react'

// const CategoryButton = ({ menuItems }) => {
//     console.log("CategoryButton" ,menuItems)
//   return (
//     <div className="d-flex justify-contend-center">
//       {
//         menuItems.map((val)=>(
//             <button className="btn-dark text-white p-1 px-2 mx-5">

//         {val}
//             </button>
//         ))
//      }

//     </div>
//   );
// };

function CategoryButton({ menuItems }) {
    console.log(menuItems)
  return (
    <div className="d-flex justify-contend-center">
        <p>hello button </p>
      {menuItems && menuItems.map((val) => 
       
      (
       
        <button key={val} className="btn-dark text-white p-1 px-2 mx-5">{val}</button>
      ))}
    </div>
  );
}

export default CategoryButton;

{
  /* <button className="btn-dark text-white p-1 px-2 mx-5">
        
        
</button> */
}
