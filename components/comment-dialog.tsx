'use client'

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, PaperPlaneIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import axios from 'axios';
import { sha512 } from 'js-sha512';

export default function guestBook({ getUsers }: any) {
  const [open, setOpen] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const userInfo = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      password: (form.elements.namedItem('password') as HTMLInputElement).value,
      content: (form.elements.namedItem('content') as HTMLInputElement).value,
    };
    if (!userInfo.content) return alert("내용을 입력해 주세요.")

    const isSecure = isSecureQuery(userInfo.content)
    if (!isSecure) return alert("사용 할 수 없는 내용이 포함되어 있습니다. 😵")
    userInfo.password = sha512(userInfo.password)

    await axios.post(`/api/users`, userInfo, { timeout: 10000 })
      .then(() => {
        getUsers()
        setOpen(false);
      })
      .catch((err: any) => {
        alert("서비스 문제가 발생 하였습니다. 잠시 후 다시 시도 해 주세요 🥲")
      })
  };

  const isSecureQuery = (v: string) => {
    if (v.includes("1’or’1’=‘1")) return false
    if (v.includes("or 1=1 --")) return false
    if (v.includes("or 2>1 --")) return false
    if (v.includes("‘or 1 like 1 --")) return false
    if (v.includes("‘)or’1’=1--")) return false
    if (v.includes("1’ORDER BY 1 --")) return false
    if (v.includes("<script>")) return false
    if (v.includes("<body onload=")) return false
    if (v.includes(`<body background=`)) return false
    if (v.includes(`<img src=`)) return false
    if (v.includes(`<iframe src="`)) return false
    if (v.includes(`<link rel="`)) return false
    if (v.length > 128) return false
    return true
  }
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="font-serif text-xs flex content-center gap-2 rounded-lg border border-gray-300 px-3 py-1">
          <PaperPlaneIcon className='w-3 h-3 mt-1' />
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
              <input className="Input w-2/5 h-8 mr-2 pl-2" name='name' maxLength={9} placeholder="이름" />
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