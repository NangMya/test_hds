"use client";

type Props = {
  children: any;
  color: string;
};
const WavyCard3 = ({ children, color }: Props) => {
  return (
    <div className=" w-full h-auto min-h-[500px] sm:min-h-[600px]  overflow-hidden">
      <svg
        className="absolute inset-0 -z-10 w-full h-[600px] sm:h-full"
        viewBox="0 0 2354 1100"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M164.076 160.217C26.7511 167.405 -2.42528 213.124 0.152139 235.085L0.152139 1100L2353.85 1100V235.085C2356.43 213.124 2350.25 167.405 2189.92 160.217C2018.27 151.233 2022.91 119.789 1996.62 94.3335C1970.33 68.8784 1928.57 43.4235 1781.66 63.6377C1634.75 83.8521 1490.93 90.5901 1381.13 42.6747C1293.29 4.34229 1208.26 0 1177 0C1145.74 0 1060.71 4.34229 972.868 42.6747C863.071 90.5901 719.251 83.8521 572.338 63.6377C425.425 43.4235 383.671 68.8784 357.382 94.3335C331.092 119.789 335.732 151.233 164.076 160.217Z"
          fill={color}
        />
      </svg>

      <div className=" z-10 p-4">{children}</div>
    </div>
  );
};

export default WavyCard3;
