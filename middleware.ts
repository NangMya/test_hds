import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const publicPaths = ['/auth/login', '/auth/register','/api/auth/verify-2fa','/auth/verify-2fa','/auth/forgot-password','/api/auth/request-new-2fa'];

  const token = request.cookies.get('auth-token')?.value;
  const path = request.nextUrl.pathname;

  if (publicPaths.includes(path)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],

  // matcher: ['/auth/:path*'],
};