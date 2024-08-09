'use client';

import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, PaperPlaneIcon } from '@radix-ui/react-icons';

export default function guestbook() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    console.log(data)
    setUsers(data);
  };

  const deleteUser = async (id: number, userInfo: any) => {
    console.log(id)
    await fetch(`/api/users?id=${id}`, {
      method: 'DELETE',
      body: JSON.stringify(userInfo),
    })
      .then(() => {
        fetchUsers()
      })
      .catch((error) => {
        alert(error)
      });

    // if (res.ok) {
    //   setUsers(users.filter(user => user.id !== id));
    // } else {
    //   console.error('Failed to delete user');
    // }
  };
  const hash = () => {

  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const userInfo = {
      id,
      password: (form.elements.namedItem('password') as HTMLInputElement).value,
    };

    deleteUser(id, userInfo)
  }

  return (
    <div className='px-10 divide-y'>
      {users.map((item: any, i) => (
        <div key={item.id} className='font-serif py-3'>
          <div className='flex justify-between text-xs'>
            <div>
              <span className='text-gy-6'>{item.name}</span>
              <span className='text-xxs ml-1'>2024.08.08</span>
            </div>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <Cross2Icon className='cursor-pointer'  />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="GuestBookDlgOverlay" />
                <Dialog.Content className="GuestBookDlgContent">
                  <Dialog.Title className="flex justify-between font-serif mb-4">
                    방명록 삭제
                  </Dialog.Title>
                  <form onSubmit={(e) => onSubmit(e, item.id)}>
                    <label className='flex mb-2 font-serif'>
                      <input className="Input w-full h-8 pl-2" name='password' type='password' placeholder="비밀번호" />
                    </label>
                    <label className='flex justify-center gap-2 mt-2 font-serif'>
                      <button className="text-xs px-3 py-1" onClick={() => setOpen(false)}>취소</button>
                      <button className="text-xs px-3 py-1 rounded bg-black text-white">확인</button>
                    </label>
                  </form>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
          <div className='text-xs pr-4 mt-1'>{item.content}</div>
        </div>
      ))}
    </div>
  )
}