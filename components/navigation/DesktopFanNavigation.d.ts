import React from 'react';
import { IconType } from '../../elements/icons';
export type DesktopFanNavigationItem = {
    linkName: string;
    icon: IconType;
    onClick?: (e: React.MouseEvent) => void;
    unReadCount?: number;
};
export interface DesktopFanNavigationProps {
    activePath?: string;
    handleMessage?: (e: React.MouseEvent) => void;
    handleTip?: (e: React.MouseEvent) => void;
    avatar?: string;
    items: DesktopFanNavigationItem[];
    isAssetLoading?: boolean;
}
export declare const DesktopFanNavigation: ({ handleMessage, handleTip, items, avatar, activePath, isAssetLoading }: DesktopFanNavigationProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DesktopFanNavigation.d.ts.map