'use client';

import { useEffect, useState } from "react";

interface Room {
  room_id: number;
  room_number: number;
  room_type: string;
  price_per_night: number;
}

export default function Home() {

  const [rooms, setRooms] = useState<Room[] | null>([]);

  useEffect(() => {
    fetch('/api/rooms', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setRooms((data as { results: Room[] }).results));
  }, []);

  function addRoom() {
    const req_body = {
      room_number: Math.floor(Math.random() * 1000),
      room_type: Math.random() > 0.5 ? 'Single' : 'Double',
      price_per_night: 100
    }
    fetch('/api/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req_body)
    })
      .then(response => {
        if (response.status === 500) {
          alert('Failed to add room');
        } else if (response.status === 200) {
          return response.json();
        }
      })
      .then(data => {
        if (data) {
          setRooms([...(rooms || []), data as Room]);
        }
      });
  }

  function deleteRoom(room_id: number) {
    if (room_id) {
      fetch('/api/rooms', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ room_id: room_id })
      })
        .then(response => {
          if (response.status === 500) {
            alert('Failed to delete room');
          } else if (response.status === 200) {
            return response.json();
          }
        })
        .then(data => {
          if (data) {
            if (rooms) {
              setRooms(rooms.filter(room => room.room_id !== room_id));
            }
          }
        });
    }
  }

  return (
    <main className="flex flex-wrap relative">
      {rooms?.map((room ,index) => {
        return <div key={index} className="h-[100px] w-[100px] flex flex-col items-center justify-center p-4 m-4 bg-gray-200 rounded-lg shadow-lg text-black cursor-pointer" onClick={() => deleteRoom(room.room_id)}>
          <p className="text-2xl font-bold">{room.room_number}</p>
          <p className="text-lg">{room.room_type}</p>
        </div>
      })}
      <div className="h-[100px] w-[100px] flex flex-col items-center justify-center p-4 m-4 bg-gray-200 rounded-lg shadow-lg text-black cursor-pointer" onClick={addRoom}>
        <p className="text-[2em]">+</p>
      </div>
    </main>
  );
}
