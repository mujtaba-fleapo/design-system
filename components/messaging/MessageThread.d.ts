interface MediaAssetsProps {
    id: string;
    assetType: string;
    assetUrl: string;
    assetThumbnailUrl?: string;
}
export interface MessageMediaProps {
    id: string;
    senderId: string;
    receiverId: string;
    price: number;
    paidMedia: boolean;
    expiringDate: string;
    purchased: boolean;
    assets: MediaAssetsProps[];
    useTeaser?: boolean;
}
interface MessageProps {
    id: string;
    senderId: string;
    receiverId: string;
    messageCost: number;
    text: string;
    media?: MessageMediaProps;
}
interface Props {
    messages: {
        messages: MessageProps[];
        timestamp: string;
    }[];
    onClick?: (asst: MediaAssetsProps) => void;
    onUnlockClick?: (media: MessageMediaProps) => void;
    loggedInUserId: string;
    isUserCreator: boolean;
    creatorAvatar: string;
    userAvatar: string;
}
export declare const MessageThread: ({ messages, onClick, loggedInUserId, isUserCreator, creatorAvatar, userAvatar, onUnlockClick }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MessageThread.d.ts.map