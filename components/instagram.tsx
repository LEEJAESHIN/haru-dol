'use client'

import { Grid } from '@radix-ui/themes';
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { cn } from '@/libs/utils';
import { CaretDownIcon } from '@radix-ui/react-icons';

export default function instagram() {
  const [images, setImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);
  const [currentImg, setCurrentImg] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/api/images')
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const openImg = (src: string, i: number) => {
    setCurrentImg(src)
    setCurrentIndex(i)
  }

  const nextImg = () => {
    if (images.length === currentIndex + 1) return;
      setCurrentImg(images.filter((el, i) => i === currentIndex + 1)[0])
    setCurrentIndex(currentIndex + 1)
  }

  const prevImg = () => {
    if(currentIndex === 0) return;
    setCurrentImg(images.filter((el, i) => i === currentIndex - 1)[0])
    setCurrentIndex(currentIndex - 1)
  }

  const handlePlusList = () => {
    setVisibleCount(visibleCount + 12);
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Grid columns="3" gap="1" width="auto">
          {images.slice(0, visibleCount).map((src, i) => (
            <button
              key={i}
              onClick={() => openImg(src, i)}
            >
              <img key={i} src={src} className='w-full h-full object-cover aspect-square pointer-events-none'></img>
            </button>
          ))}
        </Grid>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='DialogOverlay'>
          <Dialog.Content className='DialogContent'>
            <div className={cn('flex-1 flex items-center flex-shrink-0 select-none')}>
              <img src={currentImg} alt='' data-animate className='pointer-events-none' />
            </div>

            <div className='flex justify-center'>
              <div className='mt-5 min-h-20 max-h-20'>
                <div className='font-serif text-center text-[10px]'>
                  {images.length}장 중 {currentIndex + 1}번
                </div>
                <div className='font-serif flex justify-center mt-2'>
                  <button className='mr-2' onClick={() => prevImg()}>이전</button>
                  <Dialog.Close asChild>
                    <button className='mr-2'>닫기</button>
                  </Dialog.Close>
                  <button onClick={() => nextImg()}>다음</button>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
      <div className='flex justify-center mt-4'>
        <CaretDownIcon onClick={handlePlusList}/>
      </div>
    </Dialog.Root>
  );
}