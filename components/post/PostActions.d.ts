/// <reference types="react" />
interface Props {
    numLikes: number;
    numComments: number;
    isLiked?: boolean;
    onLikeClick?: (e: boolean) => void;
    onCommentClick?: () => void;
    onTipClick?: () => void;
    onMessageClick?: () => void;
}
export declare const PostActions: React.FC<Props>;
export {};
//# sourceMappingURL=PostActions.d.ts.map