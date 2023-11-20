import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Button } from './ui/button'

export default async function AuthButton() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <Button className="px-4 py-2 no-underline rounded-md">
          Logout
        </Button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="flex px-3 py-2 no-underline rounded-md"
    >
      Login
    </Link>
  )
}
