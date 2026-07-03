import { AuthView } from "@neondatabase/auth-ui";
import { authViewPaths } from "@neondatabase/auth-ui/server";

export function generateStaticParams() {
  return Object.values(authViewPaths).map((path) => ({ path }));
}

interface AuthPageProps {
  params: Promise<{
    path: string;
  }>;
}

export default async function AuthPage({ params }: AuthPageProps) {
  const { path } = await params;
  return (
    <div className="relative min-h-[calc(100vh-68px)] w-full flex items-center justify-center px-4 py-6 overflow-hidden">
      {/* Full-screen Background Image */}
      <img
        src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80"
        alt="Event Atmosphere Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Blur Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />

      {/* Centered Compact Form Card */}
      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6 sm:p-8 flex flex-col justify-center overflow-hidden">
        {/* Top Accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

        {/* Compact Logo & Title */}
        <div className="flex flex-col items-center mb-4">
          <div className="flex gap-[3px] items-end h-6 mb-2">
            <span className="w-[4px] h-2 bg-blue-600 rounded-sm" />
            <span className="w-[4px] h-5 bg-indigo-500 rounded-sm" />
            <span className="w-[4px] h-3 bg-purple-500 rounded-sm" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Event Manager</h2>
          <p className="text-xs text-gray-500 mt-0.5">Secure access to your dashboard</p>
        </div>

        {/* Neon Auth View Component */}
        <div className="w-full">
          <AuthView pathname={path} />
        </div>
      </div>
    </div>
  );
}
