import { Chat } from '@/components/chat'
import { nanoid } from 'ai'
import { AI } from '@/app/actions'
import { redirect } from 'next/navigation'

export const runtime = 'edge'

export const maxDuration = 60

export default function Page({
  searchParams
}: {
  searchParams: { q: string }
}) {
  if (!searchParams.q) {
    redirect('/')
  }
  const id = nanoid()

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} query={searchParams.q} />
    </AI>
  )
}
