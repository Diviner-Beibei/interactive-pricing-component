import { useState } from "react";
import PropTypes from "prop-types";

Slider.propTypes = {
  onInput: PropTypes.func,
};

function Slider({ onInput }) {
  const [progress, setProgress] = useState(50);

  function handleSlider(e) {
    e.preventDefault();
    setProgress(e.target.value);

    onInput(e.target.value);
    // console.log(e.target.value, e.target.max);
  }

  return (
    <div className="h-20 lg:absolute lg:top-16 lg:lg:w-[444px] flex items-center">
      <label className="hidden" htmlFor="slider" aria-hidden="true">
        range:
      </label>
      <input
        type="range"
        aria-label="range"
        id="slider"
        name="slider"
        max={100}
        min={0}
        value={progress}
        onChange={handleSlider}
        className="min-w-[279px] appearance-none w-full rounded-md h-2"
        style={{
          background: `linear-gradient(to right, hsl(174, 77%, 80%) ${progress}%, hsl(224, 65%, 95%) ${progress}%)`,
        }}
      />
    </div>
  );
}

export default Slider;
