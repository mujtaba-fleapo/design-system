/// <reference types="react" />
interface Props {
    data: any;
    index: number;
    handleClick: (e: any) => void;
    onRowItemClick?: (index: number) => unknown;
    menuOpen: boolean;
    hasActions?: boolean;
    circularImages?: boolean;
    imageKey?: string;
    headers: {
        icon: React.ReactNode | string;
        title: string;
        key: string;
    }[];
}
export declare const DesktopTableRow: ({ data, index, handleClick, onRowItemClick, menuOpen, hasActions, circularImages, imageKey, headers }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DesktopTableRow.d.ts.map