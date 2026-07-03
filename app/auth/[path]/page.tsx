import {authview} from "@neondatabase/auth/react";

export const dynamicParams = false;

export default 

    async function AuthPage({ params }: { params: Promise<{ path: string }> }) {
  const{path}=await params;
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <authview path={path} />
    </main>
  );


}