import React,{ ReactNode } from "react";

export interface panelProps extends React.ComponentPropsWithoutRef<'div'> {
    children?: ReactNode;
    className?: string;
}