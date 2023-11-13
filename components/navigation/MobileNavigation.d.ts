/// <reference types="react" />
import { IconType } from '../../elements/icons';
export type MobileNavigationItem = {
    linkName: string;
    icon: IconType;
    onClick?: (e: React.MouseEvent) => void;
    unReadCount?: number;
};
interface MobileNavigationProps {
    items: MobileNavigationItem[];
    avatar?: string;
    activePath?: string;
}
export declare const MobileNavigation: ({ items, avatar, activePath }: MobileNavigationProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MobileNavigation.d.ts.map