'use server'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getTokenCookie } from '@/lib/auth'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    const token = getTokenCookie()
    if (!token) {
      router.push('/auth/login')
    }
  }, [router])

  return <>{children}</>
}