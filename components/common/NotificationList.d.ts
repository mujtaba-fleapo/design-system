export interface NotificationItem {
    firstName: string;
    lastName: string;
    message: string;
    avatar: string;
    unRead?: boolean;
    id: string;
}
interface Props {
    items: NotificationItem[];
    onClick: (item: NotificationItem) => void;
}
export declare const NotificationList: ({ items, onClick }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=NotificationList.d.ts.map