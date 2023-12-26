import React from "react";

const Input = () => {
  return (
    <div className="flex justify-between  ">
      <input
        className="p-2 focus:border-none h-full text-lg focus:outline-none"
        type="text"
        placeholder="Type something..."
      />
      <div className="flex gap-2 pr-3 items-center">
        <input type="file" className="hidden" id="attachment" />
        <label htmlFor="attachment">
          <img
            className="w-6"
            src="https://cdn-icons-png.flaticon.com/512/4700/4700815.png"
          />
        </label>

        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
