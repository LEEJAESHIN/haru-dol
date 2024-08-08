'use client';

import { useEffect, useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function guestbook() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    console.log(data)
    setUsers(data);
  };

  const deleteUser = async (id: number) => {
    console.log(id)
    await fetch(`/api/users?id=${id}`, {
      method: 'DELETE',
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

  return (
    <div className='px-10 divide-y'>
      {users.map((item: any, i) => (
        <div key={item.id} className='font-serif py-3'>
          <div className='flex justify-between text-xs'>
            <div>
              <span className='text-gy-6'>{item.name}</span>
              <span className='text-xxs ml-1'>2024.08.08</span>
            </div>
            <Cross2Icon onClick={() => deleteUser(item.id)} />
          </div>
          <div className='text-xs pr-4 mt-1'>{item.content}</div>
        </div>
      ))}
    </div>
  )
}