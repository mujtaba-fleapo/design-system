/// <reference types="react" />
import { UploadedFileType } from '../../extras/FileUploader';
interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onAttachmentAdded: (files: UploadedFileType[]) => void;
    onSend: () => void;
    disabled: boolean;
    placeHolder?: string;
    onAddClick: () => void;
}
export declare const CreatorMessageInput: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CreatorMessageInput.d.ts.map