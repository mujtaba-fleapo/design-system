interface Props {
    avatarSrc?: string;
    avatarSize?: number;
    onAvatarClick?: () => void;
    onOptionsClick?: (key: string) => unknown;
    posterName: string;
    options?: {
        label: string;
        key: string;
        onClick?: () => void;
    }[];
    lastItemIsAlert?: boolean;
}
export declare const PostTop: ({ options, avatarSrc, avatarSize, onOptionsClick, posterName, onAvatarClick, lastItemIsAlert }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PostTop.d.ts.map