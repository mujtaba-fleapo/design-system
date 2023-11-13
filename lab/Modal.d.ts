import * as React from 'react';
export interface ModalProps {
    title?: string;
    children: React.ReactNode;
    open: boolean;
    onClose?: () => void;
    size?: 'small' | 'medium' | 'large';
    closeOnBackdropClick?: boolean;
}
export declare const Modal: ({ title, children, open, onClose, closeOnBackdropClick, size }: ModalProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Modal.d.ts.map