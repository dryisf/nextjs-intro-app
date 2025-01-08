import { NextResponse } from 'next/server';

function middleware(request: Request) {
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/test'],
};

export default middleware;
