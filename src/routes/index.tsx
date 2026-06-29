import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  TrendingUp,
  ChevronDown,
  CheckCircle2,
  Bitcoin,
  CreditCard,
  Landmark,
  Apple,
  CircleDollarSign,
  Send,
  Menu,
  X,
  UserPlus,
  IdCard,
  Wallet,
  LineChart,
  Monitor,
  Smartphone,
} from "lucide-react";
import heroImg from "@/assets/hero-bull-bear.jpg";
import mt5Img from "@/assets/mt5-platform.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ByteFX — Forex Trading Platform with Institutional-Grade Performance" },
      { name: "description", content: "Trade 150+ instruments on MT5 with leverage up to 1:2000, spreads from 0.0 pips and ~20ms execution. Open an account from $20." },
      { property: "og:title", content: "ByteFX — Institutional-Grade Forex Trading" },
      { property: "og:description", content: "Lightning-fast MT5 execution, leverage up to 1:2000, spreads from 0.0 pips across 150+ instruments." },
    ],
  }),
  component: LandingPage,
});

const stats = [
  { value: "1:2000", label: "Leverage up to" },
  { value: "0.0", label: "Tight spreads (pips)" },
  { value: "150+", label: "Tradable instruments" },
  { value: "~20ms", label: "Order execution" },
  { value: "24/6", label: "Dedicated support" },
];

const steps = [
  { icon: UserPlus, title: "Sign Up", text: "Create your trading account in just a few clicks with our streamlined registration." },
  { icon: IdCard, title: "KYC Verification", text: "Complete fast, secure identity verification for the highest level of account security." },
  { icon: Wallet, title: "Add Funds", text: "Deposit instantly using your preferred method — from cards to crypto transfers." },
  { icon: LineChart, title: "Start Trading", text: "Access global markets and open your first position with professional-grade tools." },
];

const plans = [
  {
    name: "Standard", price: "$20", tag: "Entry",
    desc: "The perfect entry point for new traders exploring global markets with zero commissions.",
    features: ["Variable spreads from 1.9 pips", "Zero commission", "Min. volume per trade: 0.01", "Leverage up to 1:2000*", "Spread type: Variable", "Swap-free support"],
  },
  {
    name: "Pro", price: "$2,000", tag: "Most popular", featured: true,
    desc: "Tailored for experienced traders who demand tighter spreads and enhanced execution.",
    features: ["Variable spreads from 1.0 pips", "Zero commission", "Min. deposit $2,000", "Min. volume per trade: 0.01", "Leverage up to 1:2000*", "Spread type: Variable"],
  },
  {
    name: "Raw", price: "$25,000", tag: "Institutional",
    desc: "Raw spreads and direct market access with institutional precision.",
    features: ["Raw spreads from 0.0 pips", "Commission: $8 round", "Min. volume per trade: 0.01", "Leverage up to 1:2000*", "Spread type: Raw", "Swap-free support"],
  },
];

const markets = [
  { name: "Forex", desc: "Deep liquidity across the global currency market with tight spreads and institutional execution.", emoji: "💱" },
  { name: "Commodities", desc: "Diversify with precious metals, energies, and soft commodities under stable conditions.", emoji: "🪙" },
  { name: "Indices", desc: "Capture entire market movements with a single trade on the world's leading indices.", emoji: "📈" },
  { name: "Stocks", desc: "Direct-share investing with flexible leverage and real-time data from global exchanges.", emoji: "🏛️" },
  { name: "Crypto", desc: "Trade leading digital assets and cryptocurrencies 24/7 with secured market access.", emoji: "₿" },
];

const payments = [
  { icon: Bitcoin, name: "Crypto", note: "Instant & Secure", speed: "Instant" },
  { icon: CircleDollarSign, name: "USDT", note: "Digital Dollar", speed: "Instant" },
  { icon: CreditCard, name: "Visa", note: "Secure Payment", speed: "Up to 24h" },
  { icon: CreditCard, name: "Mastercard", note: "Safe & Verified", speed: "Up to 24h" },
  { icon: Apple, name: "Apple Pay", note: "One-Tap Deposit", speed: "Up to 24h" },
  { icon: Landmark, name: "Bank Wire", note: "Global Transfers", speed: "1–3 Days" },
];

const faqs = [
  { q: "What markets can I trade with ByteFX?", a: "ByteFX offers access to a wide range of global markets, including forex, commodities, indices, metals, and cryptocurrencies — all from a single secure platform." },
  { q: "What is the minimum deposit required to start trading?", a: "You can start trading with ByteFX with a minimum deposit of just $20, allowing both beginners and professionals to access the markets." },
  { q: "Is my trading account and personal data secure?", a: "Absolutely. We employ bank-level SSL encryption and maintain segregated client accounts to ensure your funds and information are protected at all times." },
  { q: "What trading platforms does ByteFX support?", a: "ByteFX provides full integration with MetaTrader 5 (MT5), the industry standard for high-performance trading, available across desktop and mobile devices." },
  { q: "How fast are withdrawals?", a: "Crypto and USDT withdrawals are processed instantly. Cards, Apple Pay and wires follow standard processing times of up to 1–3 business days." },
];

const tickers = [
  { s: "EUR/USD", p: "1.0842", c: "+0.21%" },
  { s: "GBP/USD", p: "1.2671", c: "-0.08%" },
  { s: "USD/JPY", p: "157.32", c: "+0.45%" },
  { s: "XAU/USD", p: "2,348.10", c: "+0.92%" },
  { s: "BTC/USD", p: "67,420", c: "+1.34%" },
  { s: "ETH/USD", p: "3,512", c: "+0.87%" },
  { s: "US30", p: "39,420", c: "-0.12%" },
  { s: "NAS100", p: "18,210", c: "+0.55%" },
  { s: "WTI", p: "78.32", c: "+0.41%" },
  { s: "AUD/USD", p: "0.6612", c: "-0.18%" },
];

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Ticker />
      <Steps />
      <Pricing />
      <Platform />
      <Markets />
      <Payments />
      <FAQ />
      <Telegram />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Markets", "Platform", "Accounts", "Payments", "FAQ"];
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold">B</div>
          <span className="font-display text-lg font-bold tracking-tight">ByteFX</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/auth" search={{ mode: "login" }} className="text-sm text-muted-foreground hover:text-foreground">Log in</Link>
          <Link to="/auth" search={{ mode: "signup" }} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            Sign up <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="flex flex-col gap-3 px-6 py-4">
            {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">{l}</a>)}
            <Link to="/auth" search={{ mode: "signup" }} onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Sign up</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Live markets · MT5 execution online
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Forex trading with
            <span className="block gradient-text">institutional-grade performance.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            ByteFX gives traders advanced tools, lightning-fast execution and a secure environment to connect to the markets and grow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#accounts" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground glow hover:opacity-90 transition-opacity">
              Get started <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#platform" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 font-semibold hover:bg-surface transition-colors">
              Explore platform
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Segregated funds</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> ~20ms execution</div>
            <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-primary" /> 150+ instruments</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-bear/20 blur-3xl" />
          <img src={heroImg} alt="Bull and bear market" width={1920} height={1280} className="relative w-full rounded-3xl border border-border" />
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden border-t border-border py-3">
        <div className="marquee flex w-max gap-10 font-mono text-sm">
          {[...tickers, ...tickers].map((t, i) => {
            const up = t.c.startsWith("+");
            return (
              <div key={i} className="flex items-center gap-3 whitespace-nowrap px-3">
                <span className="font-semibold">{t.s}</span>
                <span className="text-muted-foreground">{t.p}</span>
                <span className={up ? "text-bull" : "text-destructive"}>{t.c}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Get started in minutes</p>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Sign up before the next move happens</h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="group relative rounded-2xl border border-border bg-surface/60 p-6 transition-all hover:border-primary/60 hover:bg-surface">
            <div className="absolute -top-3 -right-3 grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</div>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="accounts" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Accounts</p>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">One click away from global markets</h2>
        <p className="mt-4 text-muted-foreground">Three account types — transparent pricing, robust execution and tailored features for every trader.</p>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`relative flex flex-col rounded-3xl border p-8 ${p.featured ? "border-primary bg-surface glow" : "border-border bg-surface/60"}`}>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${p.featured ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground"}`}>{p.tag}</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-5xl font-bold">{p.price}</span>
              <span className="text-sm text-muted-foreground">min. deposit</span>
            </div>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/auth" search={{ mode: "signup" }} className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${p.featured ? "bg-primary text-primary-foreground" : "border border-border bg-surface-2"}`}>
              Open account <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="#" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">Contact us for a custom plan →</a>
      </div>
    </section>
  );
}

function Platform() {
  const downloads = [
    { os: "Windows", icon: Monitor },
    { os: "macOS", icon: Monitor },
    { os: "iOS", icon: Smartphone },
    { os: "Android", icon: Smartphone },
    { os: "Web", icon: Globe2 },
  ];
  return (
    <section id="platform" className="border-y border-border bg-surface/30">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Trading platform</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">MetaTrader 5, supercharged.</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Multi-asset trading on MT5 — advanced charting, multiple order types, and a wide range of analytical tools to monitor markets and manage trades with confidence.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
            <Feature icon={TrendingUp} text="Advanced charting" />
            <Feature icon={Zap} text="One-click trading" />
            <Feature icon={ShieldCheck} text="Secure execution" />
            <Feature icon={Globe2} text="Cross-device sync" />
          </div>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Available on</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {downloads.map((d) => (
                <a key={d.os} href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm hover:border-primary/60 transition-colors">
                  <d.icon className="h-4 w-4 text-primary" /> {d.os}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-3xl" />
          <img src={mt5Img} alt="MT5 platform" width={1600} height={1100} loading="lazy" className="relative w-full rounded-3xl border border-border" />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, text }: { icon: typeof TrendingUp; text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="h-4 w-4 text-primary" /> {text}
    </div>
  );
}

function Markets() {
  return (
    <section id="markets" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Markets</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">One platform. Global markets. Endless opportunities.</h2>
          <p className="mt-4 text-muted-foreground">Curated market hubs with live data, institutional insights and on-demand education to sharpen every trade.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
          Get started <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {markets.map((m, i) => (
          <div key={m.name} className={`group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 transition-all hover:border-primary/60 ${i === 0 ? "lg:row-span-2 lg:p-10" : ""}`}>
            <div className="text-5xl">{m.emoji}</div>
            <h3 className="mt-6 font-display text-2xl font-bold">{m.name}</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">{m.desc}</p>
            <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-80 group-hover:opacity-100">
              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Payments() {
  return (
    <section id="payments" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Funding</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Fast and reliable payment methods.</h2>
            <p className="mt-4 text-muted-foreground">Convenient deposit and withdrawal options, supported by automated and audited processes to ensure the safety of your funds.</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Open your account <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {payments.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-surface p-5 transition-all hover:border-primary/60">
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">{p.speed}</span>
                </div>
                <div className="mt-4 font-display font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Frequently asked questions</h2>
        <p className="mt-4 text-muted-foreground">Got questions? We've got answers. Still not satisfied? Hit us up.</p>
      </div>
      <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-surface/60">
        {faqs.map((f, i) => (
          <button
            key={f.q}
            onClick={() => setOpen(open === i ? null : i)}
            className="block w-full px-6 py-5 text-left"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-display font-semibold">{f.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
            </div>
            {open === i && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
          </button>
        ))}
      </div>
    </section>
  );
}

function Telegram() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 p-10 md:p-16">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Community</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Never trade alone.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Join 5,000+ active traders in our official Telegram community. Real-time market updates, trade ideas and technical analysis from our expert team.
            </p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground glow hover:opacity-90">
              <Send className="h-4 w-4" /> Join Telegram community
            </a>
          </div>
          <div className="hidden justify-center md:flex">
            <div className="grid h-40 w-40 place-items-center rounded-3xl bg-primary/10">
              <Send className="h-20 w-20 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Company", links: ["About", "Careers", "Legal", "Contact"] },
    { title: "Markets", links: ["Forex", "Commodities", "Indices", "Stocks", "Crypto"] },
    { title: "Platform", links: ["MT5 Windows", "MT5 macOS", "MT5 Mobile", "WebTrader"] },
    { title: "Support", links: ["Help center", "FAQ", "Status", "Telegram"] },
  ];
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground font-display font-bold">B</div>
              <span className="font-display text-lg font-bold">ByteFX</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Institutional-grade forex trading with MT5 execution, leverage up to 1:2000 and spreads from 0.0 pips.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-semibold">{c.title}</h4>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>* Leverage and trading conditions vary by jurisdiction and instrument. Trading derivatives carries a high level of risk and may not be suitable for all investors.</p>
          <p className="mt-3">© {new Date().getFullYear()} ByteFX Capital Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
