// import { Bars } from "react-loader-spinner";

// export default function Loading() {
//   return (
//     <div className="bg-white absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
//       <Bars
//         height="80"
//         width="80"
//         color="#4fa94d"
//         ariaLabel="bars-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//         visible={true}
//       />
//     </div>
//   )
// }
import { PropagateLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="bg-white absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
      <PropagateLoader 
        color="#29B629" 
        size={18} 
        speedMultiplier={1.5} 
      />
    </div>
  );
}
