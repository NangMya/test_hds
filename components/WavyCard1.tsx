"use client";

type Props = {
  children: any;
};
const WavyCard1 = ({ children }: Props) => {
  return (
<div className="relative w-full h-auto min-h-[600px] md:min-h-[750px] lg:min-h-[770px] overflow-hidden">
      <svg
    className="absolute inset-0 -z-10 w-full h-[900px] md:h-[1000px] lg:h-full"
        viewBox="0 0 4000 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M278.823 1138.79C45.464 1131.51 -4.12023 1085.22 0.258525 1062.99L0.258525 0L4000 0V1062.99C4004.52 1085.22 3939.86 1229.29 3704.99 1236.57C3663.02 1262.34 3277.85 1257.04 3027.67 1236.57C2777.49 1216.1 2532.41 1209.28 2346.51 1257.79C2197.89 1296.6 2053.81 1301 2003.5 1301C1953.19 1301 1809.11 1296.6 1659.49 1257.79C1466.86 1209.28 1071.55 1295.03 821.365 1315.5C571.18 1335.97 651.972 1231.26 607.24 1205.49C562.508 1179.72 570.198 1147.88 278.823 1138.79Z"
          fill="url(#paint0_linear_118_18074)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_118_18074"
            x1="1001.5"
            y1="0"
            x2="1001.5"
            y2="1301"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#EDF2F4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="relative z-10 p-4">{children}</div>
    </div>
  );
};

export default WavyCard1;
