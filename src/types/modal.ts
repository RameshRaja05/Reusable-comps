import { ReactNode } from "react";

export type modalProps = {
    children: ReactNode;
    onClose: () => void;
    actionBar: ReactNode;
};