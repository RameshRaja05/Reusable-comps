import { ReactNode } from "react";

export type linkProps = {
    to?: string;
    children: ReactNode;
    className?: string;
    activeClassName:string;
};