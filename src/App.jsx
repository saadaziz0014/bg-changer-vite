import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#000000");

  return (
    <>
      <div
        className={`w-full h-full fixed`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex flex-wrap inset-x-0 bottom-0 fixed justify-center mb-4">
          <input
            type="color"
            onChange={(e) => setBgColor(e.target.value)}
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default App;
