export interface UploadedFileType {
    type: string;
    mime_type: string;
    size: number;
    name: string;
    File: File;
    allowed: boolean;
    comments: string;
}
interface Props {
    accept?: string;
    multiple?: boolean;
    onSubmit: (files: UploadedFileType[]) => unknown;
}
export declare const FileUploader: ({ accept, multiple, onSubmit }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FileUploader.d.ts.map