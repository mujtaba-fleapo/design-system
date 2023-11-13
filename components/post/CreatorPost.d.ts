export interface CreatorPostProps {
    id: string;
    avatarImage: string;
    username: string;
    caption: string;
    likeCount: number;
    commentCount: number;
    isExclusive?: boolean;
    onLikeClick?: () => unknown;
    onCommentClick?: () => unknown;
    onOptionsClick?: (e: string) => unknown;
    onTipClick?: () => unknown;
    onMessageClick?: () => unknown;
    onPostAvatarClick?: () => unknown;
    onUnlockMedia?: () => unknown;
    isLiked?: boolean;
    lastItemIsAlert?: boolean;
    assets: {
        id: string;
        url: string;
        isFree: boolean;
        resizedUrl: string;
        type: string;
    }[];
    options?: {
        label: string;
        key: string;
        onClick?: () => void;
    }[];
    onSubscribeCreator?: () => unknown;
}
export declare const CreatorPost: ({ id, avatarImage, username, caption, likeCount, commentCount, onCommentClick, onLikeClick, onOptionsClick, onTipClick, onMessageClick, onPostAvatarClick, assets, isLiked, options, onUnlockMedia, lastItemIsAlert, isExclusive, onSubscribeCreator }: CreatorPostProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CreatorPost.d.ts.map