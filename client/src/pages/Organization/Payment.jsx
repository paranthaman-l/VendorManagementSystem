/* eslint-disable react/no-unknown-property */

const Payment = () => {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen flex-auto flex-shrink-0">
    //   <div className="relative h-56 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg w-96 overflow-hidden">
    //     <svg viewBox="0 0 220 192" width="220" height="192" fill="none" className="absolute -left-10 -top-16 text-blue-900 opacity-50">
    //       <defs>
    //         <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    //           <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
    //         </pattern>
    //       </defs>
    //       <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
    //     </svg>
    //     <svg viewBox="0 0 220 192" width="220" height="192" fill="none" className="absolute -right-20 -bottom-32 text-blue-900 opacity-50">
    //       <defs>
    //         <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
    //           <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
    //         </pattern>
    //       </defs>
    //       <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
    //     </svg>
    //     <img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_pos_92px_2x.png" alt="" srcSet="" className="absolute right-4 bottom-2 h-24"//>
    //     <div className="absolute top-10 left-8 h-12 w-16 bg-gradient-to-r from-yellow-400 to-yellow-200 opacity-90 rounded-lg overflow-hidden">
    //       <span className="flex absolute top-1/2 left-1 h-full w-10 bg-opacity-50 rounded-lg transform -translate-y-1/2 -translate-x-1/2 border border-gray-400"></span>
    //       <span className="flex absolute top-1/2 right-1 h-full w-10 bg-opacity-50 rounded-lg transform -translate-y-1/2 translate-x-1/2 border border-gray-400"></span>
    //       <span className="flex absolute top-1.5 right-0 w-full h-5 bg-opacity-50 rounded-full transform -translate-y-1/2 border border-gray-400"></span>
    //       <span className="flex absolute bottom-1.5 right-0 w-full h-5 bg-opacity-50 rounded-full transform translate-y-1/2 border border-gray-400"></span>
    //     </div>
    //     <div className="absolute bottom-20 left-8 text-white font-semibold text-2xl space-x-1.5">
    //       <span>****</span>
    //       <span>****</span>
    //       <span>****</span>
    //       <span>8237</span>
    //     </div>
    //     <div className="absolute bottom-16 left-8 text-gray-200 font-semibold text-base">
    //       <span>10</span>
    //       <span>/</span>
    //       <span>22</span>
    //     </div>
    //     <div className="absolute bottom-6 left-8 text-gray-200 font-semibold text-xl uppercase">
    //       <span>John Doe</span>
    //     </div>
    //   </div>
    // </div>
    <div className="m-4">
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" x-data="creditCard">
        <header className="flex flex-col justify-center items-center">
          <div
            className="relative"
            x-show="card === 'front'"
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 transform scale-90"
            x-transition:enter-end="opacity-100 transform scale-100"
          >
            <img className="w-full h-auto" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png" alt="front credit card"/>
            <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
              <p className="number mb-5 sm:text-xl" x-text="cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'"></p>
              <div className="flex flex-row justify-between">
                <p x-text="cardholder !== '' ? cardholder : 'Card holder'"></p>
                <div className="">
                  <span x-text="expired.month"></span>
                  <span x-show="expired.month !== ''">/</span>
                  <span x-text="expired.year"></span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative"
            x-show="card === 'back'"
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 transform scale-90"
            x-transition:enter-end="opacity-100 transform scale-100"
          >
            <img className="w-full h-auto" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png" alt=""/>
            <div
              className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12"
            >
              <div className="border border-white w-16 h-9 flex justify-center items-center">
                <p x-text="securityCode !== '' ? securityCode : 'code'"></p>
              </div>
            </div>
          </div>
          <ul className="flex">
            <li className="mx-2">
              <img className="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
            </li>
            <li className="mx-2">
              <img className="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
            </li>
            <li className="ml-5">
              <img className="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
            </li>
          </ul>
        </header>
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card holder"
                maxlength="22"
                x-model="cardholder"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card number"
                x-model="cardNumber"
                x-on:keydown="format()"
                x-on:keyup="isValid()"
                maxlength="19"
              />
            </div>
            <div className="my-3 flex flex-col">
              <div className="mb-2">
                <label for="" className="text-gray-700">Expired</label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  x-model="expired.month"
                >
                  <option value="" selected disabled>MM</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  x-model="expired.year"
                >
                  <option value="" selected disabled>YY</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
                <input
                  type="text"
                  className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Security code"
                  maxlength="3"
                  x-model="securityCode"
                  x-on:focus="card = 'back'"
                  x-on:blur="card = 'front'"
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="mt-6 p-4">
          <button
            className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
            x-bind:disabled="!isValid"
            x-on:click="onSubmit()"
          >
            Pay now
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Payment