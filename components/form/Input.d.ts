interface Props {
    id: string;
    width?: string;
    label?: string;
    variant?: 'standard' | 'outlined';
    type?: 'search' | 'text' | 'password' | 'email' | 'currency';
    placeholder?: string;
    onChange?: (e: any) => void;
    value?: string | number;
    disabled?: boolean;
    chartCount?: boolean;
    hasCharacterLimit?: boolean;
}
export declare const Input: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Input.d.ts.map