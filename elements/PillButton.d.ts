/// <reference types="react" />
import { SxProps, Theme } from '@mui/material';
interface Props {
    fullWidth?: boolean;
    text: string | React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit';
    loading?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    variant?: string;
    color?: 'black' | 'gray';
    size?: 'small' | 'medium' | 'large';
    sx?: SxProps<Theme>;
    background?: string;
    backgroundHover?: string;
}
export declare const PillButton: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PillButton.d.ts.map