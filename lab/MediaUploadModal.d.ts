import { FilePondErrorDescription } from 'filepond';
import '../styles/MediaUploadModal.scss';
export interface Asset {
    originalURL: string;
    resizedURL: string;
    blurredURL: string;
    name: string;
    mimeType: string;
    fileType: string;
    mediaType: string;
    size: number;
    playbackId: string;
    assetId: string;
}
interface MediaUploadModalProps {
    /**
     * Title of the modal
     * @type string
     * @default Add Media
     *
     */
    title?: string;
    /**
     * Whether the modal is open or not
     * @type boolean
     * @default false
     * @required
     *
     */
    open: boolean;
    /**
     * The url to which the file is to be uploaded
     * @type string
     * @required
     * @note If the API requires authorization headers, plese use the additionalHeaders props to pass the header data. Else the upload won't work.
     */
    uploadDestinationUrl: string;
    /**
     * The auth headers to be sent with the post request like auth tokens
     * @type object
     * @required
     * @example
     * ```js
     *  {
     *    Authorization: 'Bearer token'
     *   }
     * ```
     */
    additionalHeaders?: any;
    /**
     * Whether to allow multiple file upload or not
     * @type boolean
     * @default false
     */
    multiple?: boolean;
    /**
     * Accepted file types
     * @default image
     * @options image | video | both
     * @type "image" | "video" | "both"
     */
    acceptedFileTypes?: 'image' | 'video' | 'both';
    /**
     * Whether to allow image editor or not
     * @type boolean
     * @default false
     */
    allowImageEditor?: boolean;
    /**
     * Whether to allow image preview or not after selection
     * @type boolean
     * @default false
     */
    allowImagePreview?: boolean;
    /**
     * Name of the key to be used for uploading the file, sent in the body of the post request
     * @type string
     * @default file
     */
    uploadObjectKeyName?: string;
    /**
     * Layout of the image preview
     * @default compact
     * @options compact | circle
     * @type "compact" | "circle"
     *
     */
    imageLayout?: 'compact' | 'circle';
    /**
     * Type of media that is being uploaded
     * @default PostMedia
     * @options ProfileMedia | PostMedia | MessageMedia
     * @type "ProfileMedia"|"PostMedia"|"MessageMedia"
     * @example "PostMedia"
     *
     * @description
     * Use PostMedia for uploading media for posts
     * Use ProfileMedia for uploading media for profile
     * Use MessageMedia for uploading media for messages
     *
     * note: when using this for profile picture upload, remeber to set the imageLayout to circle
     */
    mediaType?: 'ProfileMedia' | 'PostMedia' | 'MessageMedia';
    /**
     * Maximum file size allowed
     * @default 250MB
     * @type string
     * @example "250MB"
     */
    maxFileSize?: string;
    /**
     * Maximum number of files allowed to be uploaded parallely
     * @default 1
     * @type number
     */
    maxParallelUploads?: number;
    /**
     * Maximum number of files allowed to be selected at once. To be used with multiple set to true
     * @default 1
     * @type number
     * @description
     * note: this is only applicable when multiple is set to true else it will be ignored
     *
     */
    maxFiles?: number;
    /**
     * Function to close the modal
     * @type function
     * @param error <optional> {FilePondErrorDescription} - If any error occurs, would send the error object else undefined
     * @required
     */
    onClose: (error?: FilePondErrorDescription) => void;
    /**
     * Callback function that returns after the file is  uploaded. Called for every upload that gets completed.
     * @param {Asset} asset - The asset data for the uploaded media
     * @type Asset
     * @example (asset) => console.log(asset) {originalURL: 'https://storage.googleapis.com/fleapo.appspot.com/...',...}
     * @required
     * @description
     * note: if multiple is set to true, the call back will be fired for every upload that gets completed
     *
     */
    onComplete: (asset?: Asset) => void;
}
/**
 * This is the MediaUploadModal which uses filePond to upload the files/assets to the server. \
 * - The ```uploadDestinationUrl``` prop must be provided with a url that this component would be uploading the selected media to. \
 * - If the url requires authentication, you can pass such auth headers with other more general header props into the ```additionalHeaders``` property. \
 * - When using this modal to upload multiple images, make sure to provide the max number of files that can be uploaded through the ```maxFiles``` property. \
 * - You can modify the ```maxParallelUploads``` prop to change the number of files that would be uploaded at once to the provided ```uploadDestinationUrl```
 */
export declare const MediaUploadModal: ({ title, open, multiple, acceptedFileTypes, allowImageEditor, uploadObjectKeyName, imageLayout, mediaType, maxFileSize, allowImagePreview, maxParallelUploads, maxFiles, uploadDestinationUrl, additionalHeaders, onClose, onComplete }: MediaUploadModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MediaUploadModal.d.ts.map