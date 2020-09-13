import { Svg } from "./Stars.styles";

type PropsType = {
  filled: boolean;
};

const Star = ({ filled }: PropsType) => (
  <Svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    filled={filled}
  >
    <g>
      <polygon
        points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 
      255.898,401.21 416.035,502.431 369.263,318.842"
      />
    </g>
  </Svg>
);

export default Star;
