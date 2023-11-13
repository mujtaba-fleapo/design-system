interface Props {
    imageUrls: string[];
    firstImageFree?: boolean;
    allImagesFree?: boolean;
    onAddClick?: () => void;
    onDeleteClick: (index: number) => void;
    onReorder: (imageUrls: string[]) => void;
    allowAdd?: boolean;
}
export declare const MediaStack: ({ onAddClick, imageUrls, onDeleteClick, firstImageFree, allImagesFree, onReorder, allowAdd }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MediaStack.d.ts.map