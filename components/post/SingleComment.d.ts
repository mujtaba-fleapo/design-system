interface Props {
    commentId: string;
    username: string;
    date: string;
    numLikes: number;
    comment: string;
    profilePic: string;
    onReply?: () => void;
    onLike?: (commentId: string) => void;
    onMenuItemClick?: (e: any) => void;
    onAvatarClick?: () => void;
    isLiked?: boolean;
    onLikeClick?: (e: boolean) => void;
}
export declare const SingleComment: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SingleComment.d.ts.map