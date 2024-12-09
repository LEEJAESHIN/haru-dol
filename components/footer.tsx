"use client";
import { Share1Icon } from '@radix-ui/react-icons';
import Script from 'next/script';

export default function footer() {
  const URL =
    process.env.NODE_ENV === 'production'
      ? 'https://haru-dol.vercel.app'
      : 'http://localhost:3000/';

  const urlCopy = () => {
    navigator.clipboard.writeText('https://haru-dol.vercel.app/')
  }

  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  };
  const kakaoSend = (image: { imageUrl: string; imageWidth: number; imageHeight: number }) => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        ...image,
        title: '이하루, 첫 생일 초대합니다.',
        description: '01월 11일 오후 1시 \n판교, 루나드블랑',
        link: {
          mobileWebUrl: URL,
          webUrl: URL,
        },
      },
      buttons: [
        {
          title: '돌잔치 초대장 보기',
          link: {
            mobileWebUrl: URL,
            webUrl: URL,
          },
        },
      ],
    });
  };

  const kakaoShareStudio = () => {
    kakaoSend({
      imageUrl:
        'https://haru-dol.vercel.app/images/2.jpg',
      imageWidth: 480,
      imageHeight: 720,
    });
  };
  return (
    <div className="px-10">
      <Script
        src='https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js'
        integrity='sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH'
        crossOrigin='anonymous'
        onLoad={kakaoInit}
      />
      <div className="flex items-center text-xs">
        <button onClick={kakaoShareStudio} className="group rounded-full bg-gray-200 hover:bg-black transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            className="w-9 h-9"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="18" cy="18" r="18" />
              <path d="M0 0H18V18H0z" transform="translate(9 9)" />
              <path
                d="M9.375 1.5C5.025 1.5 1.5 4.393 1.5 7.962c0 2.718 1.151 3.858 2.949 5.042l.01 3.315c0 .149.178.234.303.145L7.827 14.3c.5.082 1.018.125 1.548.125 4.35 0 7.875-2.893 7.875-6.463 0-3.569-3.526-6.462-7.875-6.462"
                transform="translate(9 9)"
                className="fill-current text-black group-hover:text-white transition-colors"
              />
            </g>
          </svg>
        </button>
        <button onClick={urlCopy} className="group rounded-full p-2.5 ml-2 bg-gray-200 hover:bg-black transition-colors">
          <Share1Icon
            className="w-4 h-4 text-black group-hover:text-white transition-colors"
            aria-label="Share"
          />
        </button>
      </div>
      <div className='font-serif text-xs text-gy-6 mt-2'>© 2024 jaeshin. All rights reserved.</div>
    </div>
  )
}