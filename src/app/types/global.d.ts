declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }

  const content: IClassNames;
  export = content;
}

declare module "*.svg" {
  import React from "react";

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;

  export default SVG;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare const __IS_DEV__: boolean;
