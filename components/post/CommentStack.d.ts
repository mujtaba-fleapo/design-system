interface Comment {
    author: {
        userId: string;
        username: string;
        avatarUrl: string;
    };
    createdAt: string;
    comment: string;
    likeCount: number;
    id: string;
    replies?: Comment[];
    likes?: Like[];
}
export interface Like {
    id: string;
}
interface Props {
    likeCount: number;
    data: Comment[];
    usersComments: Comment[];
    loading: boolean;
    options?: {
        label: string;
        key: string;
    }[];
    showMoreComments?: boolean;
    onComment: (comment: string) => void;
    onReply?: (id: string) => void;
    onLike?: (commentId: string) => void;
    onShowMoreClick?: () => void;
    onAvatarClick?: (comment: Comment) => void;
    onMenuItemClick?: (key: string, index: number) => void;
    isLiked?: boolean;
    onLikeClick?: (id?: string) => void;
    onCommentLike?: (id?: string) => void;
    profilePic?: string;
    showMore?: boolean;
    lastItemIsAlert?: boolean;
}
export declare const CommentStack: ({ data, usersComments, loading, onReply, options, onComment, onShowMoreClick, showMoreComments, onAvatarClick, onMenuItemClick, onCommentLike, profilePic, showMore, lastItemIsAlert }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CommentStack.d.ts.map