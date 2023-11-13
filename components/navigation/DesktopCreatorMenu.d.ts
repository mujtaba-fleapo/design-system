interface NavigationItem {
    title: string;
    path: string;
}
interface DesktopCreatorMenuProps {
    NavigationItems: NavigationItem[];
    messagesCount: number;
    onRouteChange: (path: string) => unknown;
    activePath?: string;
}
export declare const DesktopCreatorMenu: ({ NavigationItems, messagesCount, onRouteChange, activePath }: DesktopCreatorMenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DesktopCreatorMenu.d.ts.map