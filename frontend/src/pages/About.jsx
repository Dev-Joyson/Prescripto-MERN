import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            quibusdam nobis inventore laboriosam accusamus mollitia unde, minus
            voluptate hic illum pariatur, soluta, distinctio maxime? Error
            quibusdam neque ipsum iste iure.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            quo voluptatem ea minima natus non, pariatur nisi, officiis ut
            blanditiis quidem ratione ipsum vero soluta? Sed, nesciunt.
            Obcaecati, amet quae.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            sed nemo ut veritatis consequuntur debitis quas, voluptates
            explicabo nobis inventore deleniti, enim voluptatem ipsa nam
            molestias necessitatibus modi suscipit neque.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY</b>
          <p>Consectetur adipisicing elit. Quia, error! Culpa perferendis repellat velit minima ex, non in aut voluptate illum reprehenderit rerum quis sed, autem assumenda consectetur natus itaque.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE</b>
          <p>Ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ab, recusandae tempora modi molestias ipsa error hic beatae porro ratione accusamus.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION</b>
          <p>Dolor sit amet consectetur, adipisicing elit. Et sit culpa soluta itaque quisquam harum maiores laborum accusantium repellat molestias earum, velit repellendus iure ipsam.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
