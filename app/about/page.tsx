import React from "react";
import { Zap, CalendarClock, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast setup",
    description: "Launch an event page and open registration in minutes.",
  },
  {
    icon: CalendarClock,
    title: "Smart scheduling",
    description: "Conflict-free agendas across sessions, rooms, and speakers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure access",
    description: "Role-based permissions and encrypted attendee data.",
  },
  {
    icon: BarChart3,
    title: "Analytics dashboard",
    description: "Track registrations, attendance, and revenue in real time.",
  },
];

const stats = [
  { value: "100+", label: "Events hosted" },
  { value: "480", label: "Attendees managed" },
  { value: "99.9%", label: "Platform uptime" },
];

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-700">
            About the platform
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Event management, built for teams that can't afford to wing it.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            We handle the logistics — bookings, schedules, payments, and
            attendee data — so your team can focus on running a great event,
            not troubleshooting spreadsheets.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 max-w-xl border-y border-slate-200 py-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center first:text-left">
              <div className="text-2xl sm:text-3xl font-semibold text-slate-900">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy + features */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Why teams choose us
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Whether you're organizing a 20-person workshop or a
              multi-track conference, the platform scales with you —
              without adding operational overhead.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="p-5 rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition"
                  >
                    <Icon className="w-5 h-5 text-emerald-700" strokeWidth={1.75} />
                    <h3 className="mt-3 text-sm font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: signature element — live schedule mockup */}
          <div className="relative">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">
                  Today's schedule
                </span>
                <span className="text-xs text-emerald-700 font-medium">
                  Live
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { time: "09:00", label: "Registration opens", room: "Main Hall" },
                  { time: "10:30", label: "Keynote session", room: "Main Hall" },
                  { time: "13:00", label: "Workshop: Onboarding", room: "Room B" },
                ].map((item) => (
                  <div
                    key={item.time}
                    className="flex items-center gap-4 rounded-lg bg-white border border-slate-200 px-4 py-3"
                  >
                    <span className="text-xs font-medium text-slate-500 w-12 shrink-0">
                      {item.time}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">
                        {item.label}
                      </p>
                      <p className="text-xs text-slate-500">{item.room}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* subtle depth accent, no blur haze */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-xl bg-emerald-100 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}