// 'use server'
// import { hashPassword, comparePassword, setTokenCookie, generateToken } from './auth'
// import { redirect } from 'next/navigation'
// import prisma from './db'
// import { cookies } from 'next/headers'

// export async function loginAction(prevState: any, formData: FormData) {
//   const email = formData.get('email')?.toString() || ''
//   const password = formData.get('password')?.toString() || ''

//   if (!email || !password) {
//     return { error: 'Email and password are required' }
//   }

//   const user = await prisma.users.findUnique({
//     where: { email },
//   })

//   if (!user) {
//     return { error: 'Invalid credentials' }
//   }

//   const isValid = await comparePassword(password, user.password)
//   if (!isValid) {
//     return { error: 'Invalid credentials' }
//   }

//   const token = await generateToken(user.id)
  
//   cookies().set('auth-token', token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     maxAge: 60 * 60 * 24 * 7, //1 
//     path: '/',
//   })
//   redirect('/admin/dashboard')
// }

// export async function registerAction(prevState: any, formData: FormData) {
//   try {
//     const email = formData.get('email')?.toString() || ''
//     const password = formData.get('password')?.toString() || ''
//     const name = formData.get('name')?.toString() || ''

//     if (!email || !password || !name) {
//       return { error: 'All fields are required' }
//     }

//     const hashedPassword = await hashPassword(password)
//     const newUser = await prisma.users.create({
//       data: {
//         email,
//         name,
//         password: hashedPassword,
//       },
//     })

//     const token = generateToken(newUser?.id)
//     setTokenCookie(token);

//   } catch (error) {
//     console.error('Registration error:', error)
//     return { error: 'Registration failed. Please try again.' }
//   }
//   redirect('/admin/dashboard')

// }
// export async function logoutAction() {
//   'use server'
//   const { clearTokenCookie } = await import('./auth')
//   clearTokenCookie()
//   redirect('/admin/login')
// }