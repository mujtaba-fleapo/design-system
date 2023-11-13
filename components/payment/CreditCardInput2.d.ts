import { VGSCollectVaultEnvironment } from '@vgs/collect-js-react';
import { ReactElement } from 'react';
import '../../styles/style.scss';
interface CreditCardInputProps {
    vgsVaultId?: string;
    vgsEnvironment?: VGSCollectVaultEnvironment;
    buttonText?: string;
    buttonIcon?: ReactElement;
    fullWidthButton?: boolean;
    buttonLoading?: boolean;
    accessToken: string;
    handleSubmitNewCard?: (status: any, data: any) => unknown;
    onError?: () => unknown;
    onSubmit?: () => unknown;
}
export declare const CreditCardInput2: (props: CreditCardInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CreditCardInput2.d.ts.map