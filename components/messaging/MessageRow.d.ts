interface Props {
    key?: number;
    channelId: string;
    name: string;
    message: string;
    time: string;
    photo: string;
    unread: boolean;
    revenue: number;
    onClick: (channelId: string) => void;
}
export declare const MessageRow: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MessageRow.d.ts.map