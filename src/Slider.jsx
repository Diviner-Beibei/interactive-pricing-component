import { useState } from "react";

function Slider() {
  const [progress, setProgress] = useState(0);

  function handleSlider(e) {
    e.preventDefault();
    setProgress(e.target.value);
  }
  return (
    <div className="lg:absolute lg:top-14 lg:lg:w-[444px]">
      {/* <div className="bg-[#979797] h-2 w-full rounded-md absolute top-1 left-0"></div> */}
      <label htmlFor="slider"></label>
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
      />
    </div>
  );
}

export default Slider;
