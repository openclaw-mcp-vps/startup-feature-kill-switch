export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Emergency disable features<br />
          <span className="text-[#58a6ff]">without deployments</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Feature Kill Switch gives your team a real-time dashboard to instantly toggle off broken features — no code, no deploys, no engineers woken up at 3am.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Integrate in minutes. Cancel anytime.</p>

        {/* Feature highlights */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Instant Toggles", desc: "Flip a flag and your app responds in under a second via Server-Sent Events." },
            { icon: "🔑", title: "API Key Integration", desc: "Drop one SDK snippet into your app. Works with any stack." },
            { icon: "👥", title: "Non-Technical Friendly", desc: "Your PM can kill a bad feature without filing a ticket." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Startup Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$29<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to ship safely</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited feature flags",
              "Real-time SSE updates (<1s latency)",
              "Up to 5 team members",
              "API key management",
              "Audit log of all changes",
              "Email alerts on flag changes"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Now — $29/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How do I integrate Feature Kill Switch into my app?",
              a: "After signing up you get an API key. Add our lightweight SDK (one npm install) or call our REST endpoint directly. Flags are evaluated in real-time via Server-Sent Events."
            },
            {
              q: "What happens if the service goes down?",
              a: "Our SDK defaults to the last known flag state cached locally, so your app keeps running. You can also set a hard-coded fallback per flag."
            },
            {
              q: "Can non-engineers really use this without help?",
              a: "Yes. The dashboard is a simple list of toggles with names you define. No code, no terminal — just click to disable a feature instantly."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-10">
        © {new Date().getFullYear()} Feature Kill Switch. All rights reserved.
      </footer>
    </main>
  )
}
