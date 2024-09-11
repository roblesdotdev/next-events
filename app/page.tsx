import { db } from '~/lib/db'

export default async function Home() {
  const totalEvents = await db.event.count()
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-xl">Working...</h1>
      <div className="py-8">
        <p>Total events: {totalEvents}</p>
      </div>
    </div>
  )
}
