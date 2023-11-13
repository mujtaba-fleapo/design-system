export interface ProfileHeaderProps {
    bioText: string;
    firstName: string;
    lastName: string;
    userName: string;
    profilePic: string;
    totalPosts: number;
    totalFollowers?: number;
    onMessage: () => unknown;
    onTip?: () => unknown;
    onSubscribe?: () => unknown;
    isSubscribed?: boolean;
    onOptionsClick?: () => unknown;
    backgroundImage?: string;
    tipjarOptions?: {
        id: string;
        tipAmount: number;
        tipFor: string;
    }[];
    onTipJarClick?: (id: string) => unknown;
}
export declare const ProfileHeader: ({ profilePic, firstName, lastName, userName, bioText, onMessage, onTip, onSubscribe, totalPosts, totalFollowers, isSubscribed, onOptionsClick, backgroundImage, tipjarOptions, onTipJarClick }: ProfileHeaderProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ProfileHeader.d.ts.map