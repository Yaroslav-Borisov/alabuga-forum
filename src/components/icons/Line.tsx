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
  );
};

export default LineIcon;
