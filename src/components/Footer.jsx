import amazonpay from '../assets/images/amazon-pay.png'
import americanexpress from '../assets/images/American-Express-Color.png'
import mastercard from '../assets/images/mastercard.webp'
import paypal from '../assets/images/paypal.png'
import appleapp from '../assets/images/get-apple-store.png'
import googleapp from '../assets/images/get-google-play.png'



export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8 mt-8">
      <div className="container mx-auto px-4">
        {/* App Section */}
        <header>
          <h2 className="capitalize text-3xl">Get The FreshCart App</h2>
          <p className="capitalize text-gray-500 my-4">
            We Will Send You a Link, Open it on Your Phone to Download the App
          </p>
        </header>

        {/* Form Section */}
        <form className="input flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
          <input
            type="email"
            className="w-full md:w-[85%] p-2 rounded border-0 focus:outline-none"
            name="user_mail"
            placeholder="Email .."
            aria-label="Enter your email"
          />
          <button
            type="submit"
            className="capitalize w-full md:w-[15%] mx-auto rounded text-white bg-green-500 hover:bg-green-800 duration-300 text-sm px-4 py-2"
            aria-label="Submit your email to get the app link"
          >
            Share App Link
          </button>
        </form>

        {/* Partners Section */}
        <div className="flex my-4 items-center justify-between flex-wrap border-gray-300 border-y py-6">
          {/* Payment Partners */}
          <div className="flex items-center justify-center w-full xl:w-auto gap-4 flex-wrap">
            <h3 className="capitalize text-2xl text-center">Payment Partners</h3>
            <img
              src={amazonpay}
              className="w-20"
              alt="Amazon Pay logo"
              loading="lazy"
            />
            <img
              src={americanexpress}
              className="w-20"
              alt="American Express logo"
              loading="lazy"
            />
            <img
              src={mastercard}
              className="w-20"
              alt="MasterCard logo"
              loading="lazy"
            />
            <img
              src={paypal}
              className="w-20"
              alt="PayPal logo"
              loading="lazy"
            />
          </div>

          {/* App Stores */}
          <div className="flex items-center justify-center w-full xl:w-auto gap-4 flex-wrap">
            <h3 className="capitalize text-2xl text-center">Get Deliveries with FreshCart</h3>
            <img
              src={appleapp}
              className="w-24"
              alt="Apple App Store badge"
              loading="lazy"
            />
            <img
              src={googleapp}
              className="w-24"
              alt="Google Play Store badge"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}





// export default function Footer() {
//   return (
//     <div>
// <footer class="bg-gray-100 py-6 mt-8">
//   <div class="container mx-auto px-4 text-center">
//      {/* App Link Section  */}
//     <p class="text-lg font-medium mb-4">Get the FreshCart app</p>
//     <p class="text-sm text-gray-600 mb-6">
//       We will send you a link, open it on your phone to download the app.
//     </p>
//     <div class="flex justify-center items-center space-x-2 mb-6">
//       <input
//         type="email"
//         placeholder="Email .."
//         class="border border-gray-300 rounded-l-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
//       />
//       <button class="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600">
//         Share App Link
//       </button>
//     </div>

//      {/* Payment Partners and Store Links  */}


//     </div>
// </footer>
//     </div>
//   )
// }

