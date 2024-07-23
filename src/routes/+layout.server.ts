// In order to get access to the Auth token on the server, use a +layout.server.ts file to pass in the session from event.locals.

import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { session }, cookies }) => {
  return {
    session,
    cookies: cookies.getAll(),
  }
}