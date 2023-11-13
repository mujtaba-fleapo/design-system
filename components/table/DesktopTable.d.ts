/// <reference types="react" />
export type Direction = 'asc' | 'desc';
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
    lastItemIsAlert?: boolean;
    onMenuItemClick?: (key: string, index: number) => void;
    onSort?: (key: string, direction: Direction) => void;
    sortedColumn?: string;
    sortableHeaders?: string[];
    onRowClick?: (index: number) => void;
}
export declare const DesktopTable: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DesktopTable.d.ts.map