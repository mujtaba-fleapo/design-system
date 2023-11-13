/// <reference types="react" />
interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSend: () => void;
    disabled: boolean;
    placeHolder?: string;
    messageCost: number;
}
export declare const FanMessageInput: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FanMessageInput.d.ts.map