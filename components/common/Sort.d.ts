interface Options {
    label: string;
    key: string;
}
interface Props {
    disableMobilePanel?: boolean;
    options: Options[];
    onMenuItemClick: (key: string) => void;
    header?: string;
}
export declare const Sort: ({ options, onMenuItemClick, header, disableMobilePanel }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sort.d.ts.map