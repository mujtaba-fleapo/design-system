import '@pqina/pintura/pintura.css';
import { PinturaDefaultImageWriterResult, PinturaReadState } from '@pqina/pintura';
interface ImageEditorModalProps {
    /**
     * The image url to be edited, this is required to open the modal
     * @type string
     * @default ''
     * @required
     */
    imageUrl: string | File | Blob;
    /**
     * Whether the modal is open or not
     * @type boolean
     * @default false
     * @required
     *
     */
    open: boolean;
    /**
     * Callback function that closes the modal
     * @type function
     * @param error {PinturaReadState} - The error object if any
     */
    onClose: (error?: PinturaReadState) => void;
    /**
     *  Callback function that returns the edited image. Check description to know more.
     * @type function
     * @param {PinturaDefaultImageWriterResult} result - The edited image object after the user clicks on done on the editor modal.
     * @required
     * @description
     *  The image can be uploaded to a server by using the result.dest property and creating a formData object
     *
     *  ```js
     *  const formData = new FormData();
     *  formData.append('file', result.dest);
     *
     *  const requestOptions = {
     *   method: 'POST',
     *   body: formData
     *  };
     *
     *  fetch('https://tmpfiles.org/api/v1/upload', requestOptions)
     *    .then((response) => {
     *      console.log(response);
     *    });
     *
     *
     * ```
     */
    onComplete: (result: PinturaDefaultImageWriterResult) => void;
}
/**
 * This is the ImageEditorModal which would open the image editor modal by pintura
 * - The prop ```imageUrl``` corresponds to the url of the image that needs to be edited.
 * - After the image is edited and the user presses on done on the modal, the ```onComplete``` prop is called
 * - The image can be uploaded to the server after editing using the same function, please refer to the example of ```onComplete``` provided to see how to do the same.
 */
export declare const ImageEditorModal: ({ imageUrl, open, onClose, onComplete }: ImageEditorModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ImageEditorModal.d.ts.map