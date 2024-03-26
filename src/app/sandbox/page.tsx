"use client";
import Image from "next/image";
import Img1 from "./_assets/dogs1.jpeg";
import Img2 from "./_assets/dogs2.jpeg";
import Img3 from "./_assets/dogs3.jpeg";
import Img4 from "./_assets/dogs4.jpg";
import Img5 from "./_assets/dogs5.jpeg";
import Img6 from "./_assets/dogs6.jpg";
import { SwiperUtil } from "./_assets/swiper";
import { useRef, useState } from "react";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

export default function SandBoxPage() {
  // const selected = useRef<number>(1);
  const [selected, setSelected] = useState(1);
  const handleButtonClick = (value: number) => {
    // selected.current = value;
    // console.log(selected.current);
    setSelected(value);
    console.log(selected);
  };
  return (
    <div>
      <div className="p-10">
        <SwiperUtil index={selected} slides={images} />
      </div>

      <button className="p-5 text-4xl" onClick={() => handleButtonClick(1)}>
        1
      </button>
      <button className="p-5 text-4xl" onClick={() => handleButtonClick(2)}>
        2
      </button>
      <button className="p-5 text-4xl" onClick={() => handleButtonClick(3)}>
        3
      </button>
      <button className="p-5 text-4xl" onClick={() => handleButtonClick(4)}>
        4
      </button>
      <button className="p-5 text-4xl" onClick={() => handleButtonClick(5)}>
        5
      </button>
      <button className="p-5 text-4xl" onClick={() => handleButtonClick(6)}>
        6
      </button>
    </div>
  );
}
