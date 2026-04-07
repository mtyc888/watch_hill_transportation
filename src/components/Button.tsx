import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outline";
  as?: "button" | "span";
}

export default function Button({
  children,
  variant = "filled",
  as: Tag = "button",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "font-body text-[13px] font-normal tracking-widest2 uppercase px-9 py-3.5 cursor-pointer transition-all duration-300 inline-block";

  const variants = {
    filled: "bg-navy text-txt-light border-none hover:bg-navy-light",
    outline:
      "bg-transparent text-navy border border-navy hover:text-navy-light hover:border-navy-light",
  };

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...(props as any)}>
      {children}
    </Tag>
  );
}