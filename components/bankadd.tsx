'use client';
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from 'react';

export default function BankAdd() {
  const copyBank1 = () => {
    navigator.clipboard.writeText('01033873644')
  }
  const copyBank2 = () => {
    navigator.clipboard.writeText('52940101236371')
  }
  return (
    <div className="px-10">
      <Accordion.Root
        type="single"
        collapsible
        className="w-full max-w-md shadow-sm bg-white"
      >
        {/* Item 1 */}
        <Accordion.Item value="item-1" className="border-b border-gray-200">
          <Accordion.Header>
            <Accordion.Trigger
              className="flex w-full justify-between items-center px-4 py-3 text-left text-gray-800 font-serif text-xs hover:bg-gray-100 focus:outline-none [&[data-state=open]>svg]:rotate-180"
            >
              아빠 계좌번호
              <ChevronDownIcon
                className="h-4 w-4 shrink-0 transition-transform duration-200"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className="px-4 py-2 text-gray-600 text-sm overflow-hidden transition-all [data-state=open]:animate-accordion-down [data-state=closed]:animate-accordion-up"
          >
            <div className="flex justify-between items-center text-xxs">
              <span>기업은행 01033873644</span>
              <button className="font-serif text-xxs flex content-center gap-2 rounded-lg border border-gray-300 px-3 py-1" onClick={copyBank1}>
                복사하기
              </button>
            </div>
            <div className="flex justify-between items-center text-xxs mt-1">
              <span>예금주 이재은</span>
              <a href="https://qr.kakaopay.com/FSpP2CgEa" target="_blank" rel="noopener noreferrer">
                <img src="/images/Kakao_pay.png" width="63.34" height="63.34" alt="copy" />
              </a>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Item 2 */}
        <Accordion.Item value="item-2" className="border-b border-gray-200">
          <Accordion.Header>
            <Accordion.Trigger
              className="flex w-full justify-between items-center px-4 py-3 text-left text-gray-800 font-serif text-xs hover:bg-gray-100 focus:outline-none [&[data-state=open]>svg]:rotate-180"
            >
              엄마 계좌번호
              <ChevronDownIcon
                className="h-4 w-4 shrink-0 transition-transform duration-200"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content
            className="px-4 py-2 text-gray-600 text-sm overflow-hidden transition-all [data-state=open]:animate-accordion-down [data-state=closed]:animate-accordion-up"
          >
            <div className="flex justify-between items-center text-xxs">
              <span>국민 52940101236371</span>
              <button className="font-serif text-xxs flex content-center gap-2 rounded-lg border border-gray-300 px-3 py-1" onClick={copyBank2}>
                복사하기
              </button>
            </div>
            <div className="flex justify-between items-center text-xxs mt-1">
              <span>예금주 전하리</span>
              <a href="https://qr.kakaopay.com/Ej8Kp0VRS" target="_blank" rel="noopener noreferrer">
                <img src="/images/Kakao_pay.png" width="63.34" height="63.34" alt="copy" />
              </a>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}