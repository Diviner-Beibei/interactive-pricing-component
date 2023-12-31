import { useState } from "react";
import Slider from "./Slider";

function PriceComponent() {
  const [isYearly, setIsYearly] = useState(false);
  const [amount, setAmount] = useState(16);
  const [view, setView] = useState("100K");

  function handleClick(e) {
    e.preventDefault();

    const node = e.target.closest(".plan");
    if (!node) {
      console.log(e.target, node);
      return;
    }
    if (!isYearly) {
      node.classList.remove("bg-light-grayish-blue-bg");
      node.classList.add("bg-[#7aeadf]");

      node.children[0].classList.remove("left-[4px]");
      node.children[0].classList.add("right-[4px]");
    } else {
      node.classList.remove("bg-[#7aeadf]");
      node.classList.add("bg-light-grayish-blue-bg");

      node.children[0].classList.remove("right-[4px]");
      node.children[0].classList.add("left-[4px]");
    }

    setIsYearly((isYearly) => !isYearly);
  }

  function onInput(rangeValue) {
    // console.log(rangeValue);

    function togglePrice(total) {
      isYearly ? setAmount(total - total * 0.25) : setAmount(total);
    }

    function togglePageViews(tview) {
      return rangeValue >= 36 ? setView(`${tview}M`) : setView(`${tview}K`);
    }

    switch (rangeValue) {
      case "8":
        togglePageViews(10);
        togglePrice(8);
        break;
      case "12":
        togglePageViews(50);
        togglePrice(8);
        break;
      case "16":
        togglePageViews(100);
        togglePrice(16);
        break;
      case "24":
        togglePageViews(500);
        togglePrice(24);
        break;
      case "36":
        togglePageViews(1);
        togglePrice(36);
        break;
    }
  }

  return (
    <div className="min-w-[375px] relative bg-white rounded-md overflow-hidden h-screen w-full">
      <div className="min-h-[400px] relative px-6 flex flex-col items-center text-center max-h-[400px] bg-[url('/bg-pattern.svg')]">
        {/* <div className="border-[1px] border-[#CFD8EF] h-[145px] w-[145px] rounded-full absolute top-20 right-1/2 translate-x-1/2">
          <div className="border-[1px] border-[#CFD8EF] h-[82px] w-[82px] rounded-full absolute bottom-[80px] left-[80px]"></div>
        </div> */}
        <img
          src="./pattern-circles.svg"
          alt=""
          className="absolute top-12 lg:top-16 right-1/2 translate-x-1/2"
        />
        <h1 className="font-extrabold text-xl z-10 mt-[82px] lg:mt-[108px] lg:text-[28px]">
          Simple, traffic-based pricing
        </h1>
        <p className="text-[13px] text-grayish-blue z-10 max-w-[11.5rem] mt-2 lg:mt-4 leading-6 lg:text-[15px] lg:max-w-none">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>

      <div className="bg-white absolute top-[230px] lg:top-[265px] w-4/5 flex flex-col items-center h-full right-1/2 translate-x-1/2 rounded-md pt-10 gap-7 lg:gap-10 min-w-[327px] max-w-[540px] max-h-[478px] lg:max-h-[397px] shadow-[0_20px_30px_-5px_rgba(0,0,0,0.1521)]">
        <div className="flex flex-col w-full items-center gap-3 lg:flex-row lg:relative lg:justify-around lg:mb-12">
          <h2 className="uppercase text-grayish-blue text-[12px] tracking-[1.71px] lg:text-sm lg:tracking-[2px]">
            {view} Pageviews
          </h2>

          <Slider onInput={onInput} />

          <div className="flex items-center gap-2 mt-[-30px] lg:mt-0">
            <span className="text-[32px] font-extrabold tracking-[-0.8px] lg:text-[40px] lg:tracking-[-1px]">
              ${amount}.00
            </span>
            <span className="text-grayish-blue text-sm lg:text-base">
              /month
            </span>
          </div>
        </div>

        <div className="flex gap-[5px] lg:gap-4">
          <p className="text-grayish-blue text-[12px] font-semibold">
            Monthly Billing
          </p>
          <div
            className="bg-light-grayish-blue-bg w-11 h-5 rounded-2xl relative mx-1 plan"
            onClick={handleClick}
          >
            <span className="h-[14px] w-[14px] bg-white absolute top-[2.5px] left-[4px] rounded-full"></span>
          </div>
          <p className="text-grayish-blue text-[12px] font-semibold">
            Yearly Billing
          </p>
          <span className="text-[10px] text-[#ff8d68] bg-[#feede8] py-[2px] px-2 rounded-2xl font-extrabold hidden lg:inline">
            25% discount
          </span>
          <span className="text-[10px] text-[#ff8d68] bg-[#feede8] py-[2px] px-2 rounded-2xl font-extrabold lg:hidden">
            -25%
          </span>
        </div>

        <div className="bg-grayish-blue h-[1px] opacity-30 w-full"></div>

        <div className="flex flex-col gap-8 lg:flex-row lg:justify-around lg:gap-0 lg:w-full lg:items-center">
          <ul className="flex flex-col gap-2 place-items-center lg:place-items-start text-grayish-blue">
            <li className="flex gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                  fill="none"
                  stroke="#10D8C4"
                  strokeWidth="2"
                  d="M1 4.134l1.907 1.908L7.949 1"
                />
              </svg>
              <span>Unlimited websites</span>
            </li>
            <li className="flex gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                  fill="none"
                  stroke="#10D8C4"
                  strokeWidth="2"
                  d="M1 4.134l1.907 1.908L7.949 1"
                />
              </svg>
              <span>100% data ownership</span>
            </li>
            <li className="flex gap-3 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                <path
                  fill="none"
                  stroke="#10D8C4"
                  strokeWidth="2"
                  d="M1 4.134l1.907 1.908L7.949 1"
                />
              </svg>
              <span>Email reports</span>
            </li>
          </ul>

          <button className="w-[170px] h-10 bg-[#293356] text-[#becdff] text-[12px] font-extrabold rounded-3xl">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceComponent;
