import { createNeonAuth } from "@neondatabase/auth/nextjs/server";

export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL!,
  cookieSecret: process.env.NEON_AUTH_COOKIE_SECRET!,
  databaseUrl: process.env.DATABASE_URL!,
});

export function getSession() {
  return auth.getSession();
}