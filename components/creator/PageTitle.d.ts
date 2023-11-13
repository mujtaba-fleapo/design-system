interface buttonItem {
    title: string;
    onClick: () => unknown;
    icon?: string;
    variant?: string;
}
interface PageTitleProps {
    title: string;
    buttonItems?: buttonItem[];
}
export declare const PageTitle: ({ title, buttonItems }: PageTitleProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PageTitle.d.ts.map