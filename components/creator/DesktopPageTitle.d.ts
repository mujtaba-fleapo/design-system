interface Props {
    options?: {
        label: string;
        key: string;
        onClick?: () => void;
    }[];
    title: string;
    backArrow?: boolean;
    onBackClick?: () => void;
    onOptionsClick?: (key: string) => unknown;
    lastItemIsAlert?: boolean;
}
export declare const DesktopPageTitle: ({ options, title, backArrow, onBackClick, onOptionsClick, lastItemIsAlert }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DesktopPageTitle.d.ts.map