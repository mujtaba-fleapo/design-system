import { SxProps, Theme } from '@mui/material';
interface Props {
    alt?: string;
    src: string;
    type?: string;
    height?: string | number;
    width?: string | number;
    className?: string;
    isFree?: boolean;
    sx?: SxProps<Theme>;
    onUnlockMedia?: () => unknown;
    isExclusive?: boolean;
    onSubscribeCreator?: () => unknown;
}
export declare const PostThumbnail: ({ alt, src, type, height, width, className, isFree, sx, onUnlockMedia, isExclusive, onSubscribeCreator }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PostThumbnail.d.ts.map