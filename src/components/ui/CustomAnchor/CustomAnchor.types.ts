import { AnchorHTMLAttributes, PropsWithChildren } from "react";

export interface CustomAnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    PropsWithChildren {
  href: string;
  className?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
}
