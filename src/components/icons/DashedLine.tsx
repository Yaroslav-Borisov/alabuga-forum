const DashedLine = ({ className }: { className: string }) => {
  return (
    <svg
      width="782"
      height="1310"
      viewBox="0 0 782 1310"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M712.507 1C733.887 30.5 781.141 89.7454 781.141 137.5C781.141 197.5 769.141 276.5 729.641 333C545.488 596.408 361.845 421.5 213.641 444C109.704 459.779 42.1897 543.393 19.1409 654.5C-0.359131 748.5 -4.72122 777.094 8.89948 883.5C35.1409 1088.5 210.889 1153 318.141 1190.5C458.366 1239.53 712.993 1309.5 712.993 1309.5"
        stroke="#545454"
        strokeDasharray="7 7"
      />
    </svg>
  );
};

export default DashedLine;
