import React from 'react';
export type Direction = 'asc' | 'desc';
export interface Header {
    icon: React.ReactNode | string | any;
    title: string;
    key: string;
}
interface TableProps {
    headers: Header[];
    sortableHeaders?: string[];
    hasActions?: boolean;
    onSort?: (key: string, direction: Direction) => void;
    sortedColumn?: string;
}
export declare const DesktopTableHeader: (props: TableProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DesktopTableHeader.d.ts.map