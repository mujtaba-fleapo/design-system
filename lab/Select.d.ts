interface Props {
    id?: string;
    label: string;
    multiple?: boolean;
    options: {
        value: string;
        label: string;
    }[];
    onChange?: (e: string) => void;
}
export declare const Select: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Select.d.ts.map