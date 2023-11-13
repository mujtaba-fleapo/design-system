interface Messages {
    messages: Message[];
    onClick: (arg: string) => void;
}
interface Message {
    photo: string;
    channelId: string;
    name: string;
    message: string;
    time: string;
    unread: boolean;
    revenue: number;
    onClick: (arg: string) => void;
}
export declare const MessageRowStack: (props: Messages) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MessageRowStack.d.ts.map