import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

interface Env {
  DB: D1Database;
}

interface postRequest {
  room_number: number;
  room_type: string;
  price_per_night: number;
}


export async function GET(request: NextRequest) {
  const env: Env = { DB: process.env.DB as unknown as D1Database };
  
  const result = await env.DB.prepare('SELECT * FROM Rooms').all();
  
  return new Response(JSON.stringify(result), {
    headers: {
      'content-type': 'application/json',
    },
  });
}

export async function POST(request: NextRequest) {
  const env: Env = { DB: process.env.DB as unknown as D1Database };
  const { room_number, room_type, price_per_night } = await request.json() as postRequest;
  //add one room to the db
  const result = await env.DB.prepare('INSERT INTO Rooms (room_number, room_type, price_per_night) VALUES (?, ?, ?)').bind(room_number, room_type, price_per_night).run();
  if (result.success) {
    const insertedRoom = { room_id: result.meta.last_row_id, room_number, room_type, price_per_night };
    return new Response(JSON.stringify(insertedRoom), {
      headers: {
        'content-type': 'application/json',
      },
      status: 200
    });
  } else {
    return new Response(JSON.stringify({ error: 'Failed to add room' }), {
      headers: {
        'content-type': 'application/json',
      },
      status: 500
    });
  }
}

export async function DELETE(request: NextRequest) {
  const env: Env = { DB: process.env.DB as unknown as D1Database };
  const { room_id } = await request.json() as { room_id: number };
  
  //TODO: delete room from db

  
}
