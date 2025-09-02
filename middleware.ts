import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const publicPaths = ['/admin/login', '/admin/register','/api/auth/verify-2fa','/admin/verify-2fa','/admin/forgot-password','/api/auth/request-new-2fa'];

  const token = request.cookies.get('auth-token')?.value;
  const path = request.nextUrl.pathname;
  console.log('token=>',token);

  if (publicPaths.includes(path)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};