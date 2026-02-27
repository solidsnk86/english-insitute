import Link from "next/link";
import { ComponentProps, CSSProperties, ReactNode } from "react";

interface FancyCardProps extends ComponentProps<"button"> {
  children: ReactNode;
  duration?: string | number;
  radius?: string | number;
  inset?: string | number;
  fancyColor?: string;
  [key: string]: unknown;
  isLink?: boolean;
  linkURL?: string;
}

export const FancyButton = ({
  children,
  className,
  style,
  duration = 2,
  radius = 10,
  inset = 1,
  fancyColor = "#98E7E5",
  isLink = false,
  linkURL,
  ...props
}: FancyCardProps) => {
  return isLink ? (
    <Link
      href={linkURL as string}
      className={`fancy-button ${className}`}
      style={
        {
          ...style,
          "--animation-duration": `${duration}s`,
          "--radius": `${radius}px`,
          "--inset": `${inset}px`,
          "--fancy-color": `${fancyColor}`,
        } as CSSProperties
      }
    >
      <div className="fancy"></div>
      <span className="mx-2 z-50">{children}</span>
    </Link>
  ) : (
    <button
      className={`fancy-button ${className}`}
      style={
        {
          ...style,
          "--animation-duration": `${duration}s`,
          "--radius": `${radius}px`,
          "--inset": `${inset}px`,
          "--fancy-color": `${fancyColor}`,
        } as CSSProperties
      }
      {...props}
    >
      <div className="fancy"></div>
      <span className="mx-2 z-50">{children}</span>
    </button>
  );
};
