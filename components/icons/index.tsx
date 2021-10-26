import { CSSProperties } from "react";
export function HeroLocation({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export function SVGLocation({
  className = "h-4 w-4",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
      fill="#fff"
      viewBox="0 0 460.047 430.047"
      stroke="currentColor"
    >
      <path
        strokeWidth={1}
        d="M439.616 1.029L9.615 166.405a15 15 0 00-.913 27.615l175.93 81.379 81.379 175.93a15 15 0 0027.615-.912c.755-1.963 164.899-428.76 165.398-430.069 4.689-12.383-7.601-23.859-19.408-19.319zM53.478 181.677L384.415 54.402 192.728 246.089l-139.25-64.412zm224.875 224.875l-64.412-139.25L405.629 75.614 278.353 406.552z"
      ></path>
    </svg>
  );
}

export function SVGTarget({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="#ffffff"
      viewBox="0 0 485 485"
      stroke="currentColor"
    >
      <path
        strokeWidth={2}
        d="M424.456 227.5c-7.25-88.734-78.222-159.706-166.956-166.956V0h-30v60.544C138.766 67.794 67.794 138.766 60.544 227.5H0v30h60.544c7.251 88.734 78.222 159.706 166.956 166.956V485h30v-60.544c88.734-7.251 159.706-78.222 166.956-166.956H485v-30h-60.544zm-30.118 30c-7.076 72.18-64.658 129.762-136.838 136.838v-64.186h-30v64.186C155.32 387.262 97.738 329.68 90.662 257.5h64.186v-30H90.662C97.738 155.32 155.32 97.738 227.5 90.662v64.186h30V90.662c72.18 7.076 129.762 64.658 136.838 136.838h-64.186v30h64.186z"
      ></path>
    </svg>
  );
}
