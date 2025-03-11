import { client } from "@repo/db/client"

export default async function Home() {
  const users = await client.user.findMany()
  return (
    <div>
      {JSON.stringify(users)}
    </div>
  )
}

export const revalidate = 60 // revalidate every 60 seconds
// or
// export const dynamic = 'force-dynamic'
