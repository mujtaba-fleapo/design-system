export interface NavigationItem {
    title: string;
    path: string;
}
export interface DesktopCreatorNavigationProps {
    onRouteChange: (path: string) => any;
    onNewPost: () => any;
    onMessageBlast: () => any;
    onLiveStream: () => any;
    onNotificationsClick: () => any;
    onAvatarClick: () => any;
    NavigationItems: NavigationItem[];
    name: string;
    imageURL: string;
    notificationCount: number;
    messagesCount: number;
    activePath?: string;
}
export declare const DesktopCreatorNavigation: ({ onRouteChange, onNewPost, onMessageBlast, onLiveStream, onNotificationsClick, onAvatarClick, NavigationItems, name, imageURL, messagesCount, notificationCount, activePath }: DesktopCreatorNavigationProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DesktopCreatorNavigation.d.ts.map