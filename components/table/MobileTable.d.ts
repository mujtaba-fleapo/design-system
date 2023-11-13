/// <reference types="react" />
interface Props {
    headers: {
        icon: React.ReactNode | string;
        title: string;
        key: string;
    }[];
    hasActions?: boolean;
    data: any[];
    circularImages?: boolean;
    imageKey?: string;
    options?: {
        label: string;
        key: string;
    }[];
    onMenuItemClick?: (key: string, index: number) => void;
    showContextMenu?: boolean;
    lastItemIsAlert?: boolean;
}
export declare const MobileTable: ({ headers, hasActions, data, circularImages, showContextMenu, imageKey, options, onMenuItemClick, lastItemIsAlert }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MobileTable.d.ts.map