import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, TrendingUp, Wallet, LineChart, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [{ title: "Dashboard — ByteFX" }],
  }),
  component: Dashboard,
});

function Dashboard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? "");
    });
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", search: { mode: "login" }, replace: true });
  }

  const cards = [
    { icon: Wallet, label: "Account balance", value: "$0.00", hint: "Deposit to start trading" },
    { icon: TrendingUp, label: "Open positions", value: "0", hint: "No active trades" },
    { icon: LineChart, label: "P&L today", value: "—", hint: "Awaiting first trade" },
    { icon: ShieldCheck, label: "KYC status", value: "Pending", hint: "Verify to unlock all features" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-surface/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold">B</div>
            <span className="font-display text-lg font-bold tracking-tight">ByteFX</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">{email}</span>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium hover:bg-surface"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="font-display text-3xl font-bold md:text-4xl">Welcome back{email && `, ${email.split("@")[0]}`}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Your trading control center.</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.label} className="rounded-2xl border border-border bg-surface/60 p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="mt-1 font-display text-2xl font-bold">{c.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.hint}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface/60 p-8 text-center">
          <h2 className="font-display text-xl font-semibold">Ready to fund your account?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Deposit via crypto, card or bank wire and start trading 150+ instruments.</p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Add funds
          </button>
        </div>
      </section>
    </main>
  );
}
