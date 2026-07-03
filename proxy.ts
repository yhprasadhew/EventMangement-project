import { NextRequest } from "next/server";

export default async function proxy(req: NextRequest) {
    const{auth} = await import("./app/lib/auth/server");
    return auth.middleware({loginUrl: "/auth/sign-in"})(req);
}