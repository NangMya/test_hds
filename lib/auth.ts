"use server"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'

const JWT_SECRET = process.env.JWT_SECRET || 'MySuper$ecretKey@2025!ForJWTSigningPurposesOnly#NextJSMySQLAppNMZ'

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash)
}

export async function generateToken(userId: string | number) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1d' })
}

export async function setTokenCookie(token: string) {
  cookies().set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, //1 
    path: '/',
  })
}

export async function getTokenCookie() {
  return cookies().get('auth-token')?.value
}

export async function clearTokenCookie() {
  cookies().delete('auth-token')
}

// export function verifyToken(token: string) {
//   try {
//     return jwt.verify(token, JWT_SECRET) as { userId: string }
//   } catch {
//     return null
//   }
// }