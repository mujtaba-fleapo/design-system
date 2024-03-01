// react-pintura
import { PinturaEditorModal } from '@pqina/react-pintura';

// pintura
import '@pqina/pintura/pintura.css';

import {
  PinturaDefaultImageWriterResult,
  PinturaEditorOptions,
  PinturaReadState,
  createDefaultImageOrienter,
  // editor
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultShapePreprocessor,
  locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
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

  // plugins
  setPlugins
} from '@pqina/pintura';

import {
  LocaleAnnotate,
  LocaleCore,
  LocaleCrop,
  LocaleFilter,
  LocaleFinetune,
  LocaleMarkupEditor
} from '@pqina/pintura/locale/en_GB';
import { useEffect } from 'react';

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

const editorDefaults: PinturaEditorOptions = {
  utils: ['crop', 'finetune', 'filter', 'annotate'],
  imageOrienter: createDefaultImageOrienter(),
  imageReader: createDefaultImageReader(),
  imageWriter: createDefaultImageWriter(),

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
    ...markup_editor_locale_en_gb,
    ...LocaleCore,
    ...LocaleCrop,
    ...LocaleFinetune,
    ...LocaleFilter,
    ...LocaleAnnotate,
    ...LocaleMarkupEditor
  }
};

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
export const ImageEditorModal = ({
  imageUrl = 'https://storage.googleapis.com/fleapo.appspot.com/PostMedia/488ba67a-4d85-4d67-81d7-7f4a855a330d/cb4aae30-2b55-4c9d-b9b8-15ee1c1bf8b1_original.png',
  open,
  onClose,
  onComplete
}: ImageEditorModalProps) => {
  const handleError = (error?: PinturaReadState) => {
    console.error(error);
    onClose(error);
  };

  useEffect(() => {
    if (!imageUrl) {
      console.error('Image url is required to open the editor modal');
      return onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl]);

  return !!imageUrl && open ? (
    <PinturaEditorModal
      {...editorDefaults}
      src={imageUrl}
      onProcess={(res) => {
        onComplete(res);
      }}
      onClose={onClose}
      onLoaderror={handleError}
      onLoadabort={handleError}
      onDestroy={handleError}
      onHide={handleError}
      onProcesserror={handleError}
    />
  ) : (
    <></>
  );
};
