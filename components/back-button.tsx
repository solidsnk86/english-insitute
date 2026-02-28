"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type BackButtonProps = ComponentProps<"button">;

export const BackButton = ({ ...props }: BackButtonProps) => {
  const pathname = usePathname();

  const validatePathname = (path: string) => {
    if (path === "/admin/register" || path === "/admin/forgotten-password") {
      return "/admin/login";
    }
    return "/";
  };

  return pathname !== "/admin" ? (
    <button className="absolute top-4 left-4" {...props}>
      <Link
        href={validatePathname(pathname)}
        className="flex group items-center justify-center rounded-md w-28 text-center gap-1.5 mx-auto py-2 bg-primary hover:bg-primary/80 transition-colors duration-300"
      >
        <ArrowLeft size={20} className="text-white group-hover:-translate-x-1 transition-transform" />
        <div className="text-md text-white">Volver</div>
      </Link>
    </button>
  ) : null;
};
