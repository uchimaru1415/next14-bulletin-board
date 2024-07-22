import prisma from '@/lib/prismaClient'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const allBBSposts = prisma.post.findMany()
  return NextResponse.json(allBBSposts)
}
