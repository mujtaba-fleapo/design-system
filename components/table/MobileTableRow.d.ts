/// <reference types="react" />
interface Props {
    key: string;
    data: any;
    handleClick: (e: any) => unknown;
    hasActions?: boolean;
    circularImages?: boolean;
    imageKey?: string;
    headers: {
        icon: React.ReactNode | string;
        title: string;
        key: string;
    }[];
    showThreeDots?: boolean;
}
export declare const MobileTableRow: ({ key, data, handleClick, hasActions, showThreeDots, circularImages, imageKey, headers }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MobileTableRow.d.ts.map