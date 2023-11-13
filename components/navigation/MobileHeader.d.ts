import { ReactElement } from 'react';
interface MobileHeaderProps {
    notificationCount?: number;
    onNotificationsClick?: () => unknown;
    state?: string;
    variant?: 'white' | 'reverse';
    title?: ReactElement | string;
    onBackClick?: () => unknown;
    options?: {
        label: string;
        key: string;
    }[];
    onMenuItemClick?: (e: string) => unknown;
    lastItemIsAlert?: boolean;
}
export declare const MobileHeader: ({ notificationCount, state, variant, title, onNotificationsClick, onBackClick, options, onMenuItemClick, lastItemIsAlert }: MobileHeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MobileHeader.d.ts.map