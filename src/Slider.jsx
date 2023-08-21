import { useState } from "react";

function Slider() {
  const [progress, setProgress] = useState(0);

  function handleSlider(e) {
    e.preventDefault();
    setProgress(e.target.value);
  }
  //::-webkit-slider-thumb
  return (
    <div className="lg:absolute lg:top-16 lg:lg:w-[444px]">
      {/* <div className="bg-[#979797] h-2 w-full rounded-md absolute top-1 left-0"></div> */}
      <label className="hidden" htmlFor="slider" aria-hidden="true">
        range:
      </label>
      <input
        type="range"
        id="slider"
        name="slider"
        max={100}
        min={0}
        value={progress}
        step={1}
        onChange={handleSlider}
        className="min-w-[279px]"
        // style={{  webkitS backgroundImage: "url('./icon-slider.svg')" }}
      />
    </div>
  );
}

export default Slider;
