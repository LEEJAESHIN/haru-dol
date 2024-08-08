'use client';

import { useEffect, useState } from 'react';

export default function guestbook() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('/api/users');
      const data = await res.json();
      console.log(data)
      setUsers(data);
    }

    fetchUsers();
  }, []);

  // const deleteUser = async (id: number) => {
  //   const res = await fetch(`/api/users?id=${id}`, {
  //     method: 'DELETE',
  //   });

  //   if (res.ok) {
  //     setUsers(users.filter(user => user.id !== id));
  //   } else {
  //     console.error('Failed to delete user');
  //   }
  // };

  return (
    <div>
      {users.map((item: any, i) => (
        <div key={item.id} className='font-serif'>
          <div className='flex'>
            {item.name}
          </div>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  )
}