import { SxProps, Theme } from '@mui/material';
interface Option {
    label: string;
    key: string;
}
interface Props {
    options: Option[];
    open: boolean;
    onClose: () => unknown;
    onClick: (key: string) => unknown;
    lastItemIsAlert?: boolean;
    sx?: SxProps<Theme>;
}
export declare const MobilePanel: ({ options, open, onClose, onClick, lastItemIsAlert, sx }: Props) => import("react/jsx-runtime").JSX.Element;
export declare const ShowMobilePanel: () => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MobilePanel.d.ts.map