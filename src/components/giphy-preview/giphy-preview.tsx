import React, { useCallback } from 'react';
import Button, { ButtonType } from '@/components/button';

import { useGiphy } from '@/hooks';
import { GiphyPreviewPropsType } from './types';

import './giphy-preview.scss';

const baseClass = 'giphy-preview';

export default function GiphyPreviewContainer(props: GiphyPreviewPropsType) {
  const { closeGiphy, query, sendImage } = props;
  const { image, error, shuffleImages } = useGiphy(query);

  const handleCancel = useCallback(() => {
    closeGiphy();
  }, []);

  const handleSendImage = useCallback(() => {
    sendImage(image.url, image.title);
    closeGiphy();
  }, [image]);

  if (error) {
    closeGiphy();
  }

  if (!image) {
    return null;
  }

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__title`}>{image.title}</div>
      <img className={`${baseClass}__image`} src={image.url} alt={image.alt} />
      <div className={`${baseClass}__actions`}>
        <Button id='send-image' title='Send' handleClick={handleSendImage} type={ButtonType.primary} />
        <Button id='shuffle-image' title='Shuffle' handleClick={shuffleImages} type={ButtonType.default} />
        <Button id='cancel-giphy' title='Cancel' handleClick={handleCancel} type={ButtonType.default} />
      </div>
    </div>
  );
}
