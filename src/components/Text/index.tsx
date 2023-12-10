import React from "react";

const sizeClasses = {
  txtKohSantepheapLight96: "font-kohsantepheap font-light",
  txtKohSantepheapBold64WhiteA700: "font-bold font-kohsantepheap",
  txtKohSantepheapRegular64: "font-kohsantepheap font-normal",
  txtKohSantepheapRegular128: "font-kohsantepheap font-normal",
  txtKohSantepheapRegular40: "font-kohsantepheap font-normal",
  txtRalewayBold32: "font-bold font-raleway",
  txtKohSantepheapBold96: "font-bold font-kohsantepheap",
  txtKohSantepheapLight48: "font-kohsantepheap font-light",
  txtKohSantepheapRegular36: "font-kohsantepheap font-normal",
  txtKohSantepheapBold64: "font-bold font-kohsantepheap",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
