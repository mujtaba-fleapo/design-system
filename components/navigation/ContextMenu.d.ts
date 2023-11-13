interface Props {
    options: {
        label: string;
        key: string;
    }[];
    open: boolean;
    onClick: (key: string) => unknown;
    anchorEl: any;
    setAnchorEl: any;
    lastItemIsAlert?: boolean;
    disableMobilePanel?: boolean;
}
export declare const ContextMenu: (props: Props) => import("react/jsx-runtime").JSX.Element;
export declare const ShowMobileMenu: () => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ContextMenu.d.ts.map