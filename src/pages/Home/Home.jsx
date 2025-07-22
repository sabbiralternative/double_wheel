import { useEffect, useState } from "react";
import { playWheelSound } from "../../utils/sound";
import DesktopLayout from "./DesktopLayout/DesktopLayout";
import MobileLayout from "./MobileLayout/MobileLayout";

const Home = () => {
  const [leftWheel, setLeftWheel] = useState(0);
  const [rightWheel, setRightWheel] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleSpin = () => {
    playWheelSound();
    setLeftWheel((prev) => prev + 2000);
    setRightWheel((prev) => prev - 2000);
    setTimeout(() => {
      setIsWin(true);
    }, 5000);
  };

  useEffect(() => {
    if (isWin) {
      setTimeout(() => {
        setIsWin(false);
      }, 2000);
    }
  }, [isWin]);

  useEffect(() => {
    function detectDevice() {
      if (window.innerWidth > 800) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }
    detectDevice();

    // Run on resize
    window.addEventListener("resize", detectDevice);
    return () => window.removeEventListener("resize");
  }, []);

  return (
    <div className="root">
      {isMobile ? (
        <MobileLayout
          handleSpin={handleSpin}
          isWin={isWin}
          leftWheel={leftWheel}
          rightWheel={rightWheel}
        />
      ) : (
        <DesktopLayout
          handleSpin={handleSpin}
          isWin={isWin}
          leftWheel={leftWheel}
          rightWheel={rightWheel}
        />
      )}
    </div>
  );
};

export default Home;
