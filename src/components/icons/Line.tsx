const LineIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width="6"
      height="100"
      viewBox="0 0 6 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 3L3 153"
        stroke="#00ADEF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="24 24"
      />
    </svg>
    // <svg
    //   width="30"
    //   height="80"
    //   viewBox="0 0 45 159"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={className}
    // >
    //   <path
    //     d="M19.8511 158.093C21.0073 159.28 22.9066 159.305 24.0934 158.149L43.4332 139.308C44.62 138.152 44.6448 136.253 43.4887 135.066C42.3325 133.879 40.4332 133.854 39.2464 135.01L22.0555 151.758L5.30816 134.567C4.152 133.38 2.25267 133.355 1.06588 134.511C-0.120905 135.667 -0.145733 137.567 1.01043 138.754L19.8511 158.093ZM26.9997 3.0392C27.0214 1.38249 25.6959 0.0219005 24.0392 0.000244096C22.3825 -0.0214123 21.0219 1.30406 21.0003 2.96078L26.9997 3.0392ZM24.9997 156.039L26.9997 3.0392L21.0003 2.96078L19.0003 155.961L24.9997 156.039Z"
    //     fill="#00ADEF"
    //   />
    // </svg>
  );
};

export default LineIcon;
