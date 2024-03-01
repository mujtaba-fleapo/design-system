import Stack from '@mui/material/Stack';
import FilePondPluginImageEditor from '@pqina/filepond-plugin-image-editor';
import {
  createDefaultImageOrienter,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultShapePreprocessor,
  legacyDataToImageState,
  locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
  // editor
  openEditor,
  plugin_annotate,
  plugin_annotate_locale_en_gb,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_filter,
  plugin_filter_defaults,
  plugin_filter_locale_en_gb,
  plugin_finetune,
  plugin_finetune_defaults,
  plugin_finetune_locale_en_gb,
  processImage,
  // plugins
  setPlugins
} from '@pqina/pintura';
import { FilePondErrorDescription } from 'filepond';
import {
  default as FilePondPluginFileSize,
  default as FilePondPluginFileValidateSize
} from 'filepond-plugin-file-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import { useEffect, useRef, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import { PillButton } from '../elements/PillButton';
import { Typography } from '../elements/Typography';
import { Modal } from './Modal';

import '@pqina/pintura/pintura.css';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';

registerPlugin(
  FilePondPluginFileValidateType,
  FilePondPluginImageEditor,
  FilePondPluginFileValidateSize,
  FilePondPluginImagePreview,
  FilePondPluginFileSize,
  FilePondPluginImageTransform
);

// pintura
setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

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
   */
  onClose: () => void;

  /**
   * Function to handle errors from the modal
   * @type function
   * @param error <optional> {FilePondErrorDescription} - If any error occurs, would send the error object else undefined
   * @required
   */
  onError: (error: FilePondErrorDescription) => void;
  /**
   * Callback function that returns after the file is  uploaded.
   * @param {Asset} asset - The asset data for the uploaded media
   * @type Asset
   * @example (asset) => console.log(asset) {originalURL: 'https://storage.googleapis.com/fleapo.appspot.com/...',...}
   * @required
   *
   */
  onComplete: (asset?: Asset[]) => void;
}

/**
 * This is the MediaUploadModal which uses filePond to upload the files/assets to the server. \
 * - The ```uploadDestinationUrl``` prop must be provided with a url that this component would be uploading the selected media to. \
 * - If the url requires authentication, you can pass such auth headers with other more general header props into the ```additionalHeaders``` property. \
 * - When using this modal to upload multiple images, make sure to provide the max number of files that can be uploaded through the ```maxFiles``` property. \
 * - You can modify the ```maxParallelUploads``` prop to change the number of files that would be uploaded at once to the provided ```uploadDestinationUrl```
 */
export const MediaUploadModal = ({
  title = 'Add Media',
  open,
  multiple = false,
  acceptedFileTypes = 'image',
  allowImageEditor = false,
  uploadObjectKeyName = 'file',
  imageLayout = undefined,
  mediaType = 'PostMedia',
  maxFileSize = '250MB',
  allowImagePreview = false,
  maxParallelUploads = 3,
  maxFiles = 5,
  uploadDestinationUrl,
  additionalHeaders,
  onClose,
  onError,
  onComplete
}: MediaUploadModalProps) => {
  const [uploadResponses, setUploadResponses] = useState<Asset[]>([]);

  const filePondRef = useRef<FilePond>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [fileUrls, setFileUrls] = useState<any[]>([]);
  const [idleFilesPresent, setIdleFilesPresent] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!uploadDestinationUrl) {
      console.error('File upload destination url was not provided');
      return onError({
        body: 'File upload destination url was not provided',
        code: 0,
        type: 'developer-error'
      });
    }
    if (open) {
      setFiles([]);
      setFileUrls([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, uploadDestinationUrl]);

  return (
    <Modal size="medium" open={open} closeOnBackdropClick={false}>
      <Stack
        data-testid={`media-upload-modal-stack-ds`}
        display={'flex'}
        flexDirection={'column'}
        flex={1}
      >
        <Stack data-testid={`media-upload-modal-title-ds`}>
          <Typography className="interMedium24">{title}</Typography>
        </Stack>
        <Stack data-testid={`media-upload-modal-description-ds`}>
          <Typography className="interRegular14">
            {`You can upload ${multiple ? `up to ${maxFiles} files` : 'single file'
              } at once`}
          </Typography>
          <Typography className="interRegular14" sx={{ mb: '10px' }}>
            {`Maximum upload file size is ${maxFileSize}`}
          </Typography>
        </Stack>

        <Stack
          data-testid={`media-upload-modal-filepond-ds`}
          sx={{ cursor: 'pointer' }}
        >
          <FilePond
            onerror={(error) => onError(error)}
            imageTransformOutputStripImageHead={true}
            ref={filePondRef}
            credits={false}
            allowImageEditor={allowImageEditor}
            files={files}
            instantUpload={true}
            onupdatefiles={setFiles}
            maxParallelUploads={maxParallelUploads}
            maxFiles={multiple ? maxFiles : 1}
            allowFileSizeValidation={true}
            onwarning={(error) => {
              if (error) {
                if (error.body === 'Max files') {
                  return onError({
                    body: `Can't upload more than ${maxFiles} files`,
                    code: 0,
                    type: 'developer-error'
                  });
                }
              }
            }}
            maxFileSize={maxFileSize}
            labelIdle={`Drag & Drop your file${multiple ? 's' : ''
              } or <span class="filepond--label-action"> Browse </span>`}
            acceptedFileTypes={['image/*', 'video/*']}
            allowMultiple={multiple}
            imagePreviewHeight={200}
            allowRevert={false}
            onaddfile={(error: any, file) => {
              if (file.fileExtension === 'heic') {
                return onError({
                  body: `HEIC filetype is not supported`,
                  code: 0,
                  type: 'developer-error'
                });
              }
              if (error) {
                setFiles((prev) =>
                  prev.filter((prevFile) => prevFile.source !== file.source)
                );
                return onError({
                  body: `${error.main}. ${error.sub}`,
                  code: 0,
                  type: 'developer-error'
                });
              }
              setIdleFilesPresent(true);
            }}
            styleImageEditorButtonEditItemPosition="top"
            allowImagePreview={allowImagePreview}
            server={{
              process: (
                fieldName,
                file,
                metadata,
                load,
                error,
                progress,
                abort,
                transfer,
                options
              ) => {
                const generateSignedUrlRequest = new XMLHttpRequest();
                const uploadMediaRequest = new XMLHttpRequest();
                const confirmUploadRequest = new XMLHttpRequest();

                generateSignedUrlRequest.open(
                  'POST',
                  uploadDestinationUrl + '/generate-upload-url',
                  true
                );
                generateSignedUrlRequest.setRequestHeader(
                  'Content-Type',
                  'application/json'
                );

                if (additionalHeaders) {
                  Object.keys(additionalHeaders).forEach((key) => {
                    generateSignedUrlRequest.setRequestHeader(
                      key,
                      additionalHeaders[key]
                    );
                  });
                }

                const generateSignedUrlBody = JSON.stringify({
                  mediaType,
                  name: file.name,
                  mimeType: file.type
                });

                generateSignedUrlRequest.onload = function () {
                  if (
                    generateSignedUrlRequest.status >= 200 &&
                    generateSignedUrlRequest.status < 300
                  ) {
                    const payload = JSON.parse(
                      generateSignedUrlRequest.responseText
                    );

                    if (!payload?.uploadURL) error('Something went wrong.');

                    uploadMediaRequest.open('PUT', payload.uploadURL);
                    uploadMediaRequest.setRequestHeader(
                      'x-goog-acl',
                      'public-read'
                    );
                    uploadMediaRequest.setRequestHeader(
                      'Content-Type',
                      file.type
                    );

                    uploadMediaRequest.upload.onprogress = (e) => {
                      progress(e.lengthComputable, e.loaded, e.total);
                    };

                    uploadMediaRequest.onload = function () {
                      if (
                        uploadMediaRequest.status >= 200 &&
                        uploadMediaRequest.status < 300
                      ) {
                        confirmUploadRequest.open(
                          'PUT',
                          uploadDestinationUrl + '/confirm-upload',
                          true
                        );
                        confirmUploadRequest.setRequestHeader(
                          'Content-Type',
                          'application/json'
                        );

                        if (additionalHeaders) {
                          Object.keys(additionalHeaders).forEach((key) => {
                            confirmUploadRequest.setRequestHeader(
                              key,
                              additionalHeaders[key]
                            );
                          });
                        }

                        const confirmUploadBody = JSON.stringify({
                          mediaType,
                          name: file.name,
                          fileId: payload.fileId,
                          filePath: payload.filePath
                        });

                        confirmUploadRequest.onload = function () {
                          if (
                            confirmUploadRequest.status >= 200 &&
                            confirmUploadRequest.status < 300
                          ) {
                            const confirmed = JSON.parse(
                              confirmUploadRequest.responseText
                            );
                            load(JSON.stringify(confirmed));
                          } else error('Something went wrong.');
                        };
                        confirmUploadRequest.send(confirmUploadBody);
                      } else error('Something went wrong.');
                    };
                    uploadMediaRequest.send(file);
                  } else error('Something went wrong.');
                };

                generateSignedUrlRequest.send(generateSignedUrlBody);

                return {
                  abort: () => {
                    generateSignedUrlRequest.abort();
                    uploadMediaRequest.abort();
                    confirmUploadRequest.abort();
                    abort();
                  }
                };
              }
            }}
            name={uploadObjectKeyName ?? 'file'}
            onprocessfilestart={(file) => setIsUploading(true)}
            onprocessfileabort={(file) => {
              if (
                filePondRef.current
                  ?.getFiles()
                  .find((file) => [3, 9].includes(file.status))
              )
                setIsUploading(true);
              else {
                setIsUploading(false);
                files.length === fileUrls.length && setIdleFilesPresent(false);
              }
            }}
            onpreparefile={() => setIsUploading(true)}
            onprocessfile={(error, file) => {
              setFileUrls((prev) => [
                ...prev,
                {
                  ...file,
                  source: JSON.parse(file.serverId)?.data,
                  options: { type: 'local' }
                }
              ]);
              const response = JSON.parse(file.serverId);

              setUploadResponses((prevResponses) => {
                if (
                  !prevResponses.some(
                    (prevResponse) => prevResponse === response
                  )
                ) {
                  return [...prevResponses, response];
                }
                return prevResponses;
              });

              if (
                filePondRef.current
                  ?.getFiles()
                  .find((file) => [3, 9].includes(file.status))
              )
                setIdleFilesPresent(true);

              if (
                filePondRef.current
                  ?.getFiles()
                  .find((file) => [3, 9].includes(file.status))
              )
                setIsUploading(true);
              else {
                setIsUploading(false);
                setIdleFilesPresent(false);
              }
            }}
            onremovefile={(error, file) => {
              if (filePondRef.current?.getFiles().length === 0) {
                setIdleFilesPresent(false);
                setIsUploading(false);
                setFiles([]);
              }
            }}
            stylePanelLayout={imageLayout || null}
            imageEditor={{
              legacyDataToImageState: legacyDataToImageState,
              createEditor: openEditor,
              imageReader: [createDefaultImageReader],
              imageWriter: [createDefaultImageWriter],
              imageProcessor: processImage,
              editorOptions: {
                imageOrienter: createDefaultImageOrienter(),
                shapePreprocessor: createDefaultShapePreprocessor(),
                ...plugin_finetune_defaults,
                ...plugin_filter_defaults,
                ...markup_editor_defaults,
                locale: {
                  ...locale_en_gb,
                  ...plugin_crop_locale_en_gb,
                  ...plugin_finetune_locale_en_gb,
                  ...plugin_filter_locale_en_gb,
                  ...plugin_annotate_locale_en_gb,
                  ...markup_editor_locale_en_gb
                }
              }
            }}
          />
        </Stack>

        {files.length !== 0 && fileUrls.length === files.length && (
          <Stack>
            <PillButton
              text="Continue"
              type="button"
              loading={isUploading}
              disabled={files.length === 0 && files.length !== fileUrls.length}
              onClick={() => {
                if (files.length > 0 && fileUrls.length === files.length) {
                  onComplete(uploadResponses);
                }
              }}
            />
          </Stack>
        )}
        {!isUploading &&
          files.length === 0 &&
          fileUrls.length === files.length && (
            <Stack>
              <PillButton
                text="Close"
                type="button"
                disabled={isUploading}
                onClick={() => onClose()}
              />
            </Stack>
          )}
      </Stack>
    </Modal>
  );
};
