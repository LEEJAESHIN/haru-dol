'use client'

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function guestBook() {
  const [open, setOpen] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e)

    const form = e.target as HTMLFormElement;

    const userInfo = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      password: (form.elements.namedItem('password') as HTMLInputElement).value,
      content: (form.elements.namedItem('content') as HTMLInputElement).value,
    };

    await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    console.log(userInfo)
    setOpen(false);
  };
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="font-serif text-xs flex content-center gap-2 rounded-lg border border-gray-300 px-3 py-1">
          <PaperPlaneIcon className='w-3 h-3 mt-1'/>
          보내기
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="GuestBookDlgOverlay" />
        <Dialog.Content className="GuestBookDlgContent">
          <Dialog.Title className="flex justify-between font-serif mb-4">
            방명록 작성
          </Dialog.Title>
          <form onSubmit={(e) => onSubmit(e)}>
            <label className='flex mb-2 font-serif'>
              <input className="Input w-2/5 h-8 mr-2 pl-2" name='name' placeholder="이름" />
              <input className="Input w-3/5 h-8 pl-2" name='password' type='password' placeholder="비밀번호" />
            </label>
            <label>
              <textarea maxLength={100} name='content' className="Input w-full h-16 pt-1 pl-2 font-serif" placeholder="메시지" />
            </label>
            <label className='flex justify-center gap-2 mt-2 font-serif'>
              <button className="text-xs px-3 py-1" onClick={() => setOpen(false)}>취소</button>
              <button className="text-xs px-3 py-1 rounded bg-black text-white">확인</button>
            </label>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}