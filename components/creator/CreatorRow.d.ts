interface CreatorRowProps {
    firstName: string;
    lastName: string;
    userName: string;
    profilePic: string;
    subPrice: number;
    publicPostCount: number;
    privatePostCount: number;
    showPillButton?: boolean;
    onClick?: (id?: string) => unknown;
    onSubscription?: () => unknown;
}
export declare const CreatorRow: ({ firstName, lastName, userName, profilePic, subPrice, publicPostCount, privatePostCount, showPillButton, onClick, onSubscription }: CreatorRowProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CreatorRow.d.ts.map