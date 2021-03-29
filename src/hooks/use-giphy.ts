import { useCallback, useEffect, useState } from 'react';
import { buildQuery, getRandomImage } from './utils';
import { UseGiphyHookType } from './types';

export function useGiphy(query: string): UseGiphyHookType {
  const [images, setImages] = useState(null);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (Boolean(query)) {
      const getImg = async () => {
        try {
          const response = await fetch(buildQuery(query));
          const results = await response.json();
          const previewImage = getRandomImage(results?.data);
          if (previewImage) {
            setImage({
              title: previewImage.title,
              ...previewImage?.images?.downsized
            });
          }

          setImages(results?.data);
        } catch (error) {
          setError(error);
        }
      };
      getImg();
    }
  }, [query]);

  const shuffleImages = useCallback(() => {
    const newPreviewImage = getRandomImage(images);
    console.log({ newPreviewImage });
    setImage({
      title: newPreviewImage.title,
      ...newPreviewImage.images.downsized
    });
  }, [images]);

  return { image, error, shuffleImages };
}
