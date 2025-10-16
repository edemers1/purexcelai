import React from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";

// ===== PureXcel AI — Growth Engine for Healthcare Software & Services =====
// Tone: AI-driven growth, scalable revenue acceleration, demand generation.

// ===== Brand tokens =====
const brand = {
  primary: "#28d27a",
  secondary: "#1fb0ff",
  midnight: "#0b1220",
  slate: "#0f1a2b",
  text: "#e6edf7",
  textMuted: "#9fb2cc",
};

// ===== Utility Components =====
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => (
  <section id={id} className={`py-14 sm:py-20 ${className}`}>
    <Container>
      {(eyebrow || title || subtitle) && (
        <div className="mb-8 sm:mb-12 max-w-3xl">
          {eyebrow && <div className="uppercase tracking-widest text-xs font-semibold" style={{ color: brand.primary }}>{eyebrow}</div>}
          {title && <h2 className="mt-2 text-3xl sm:text-4xl font-bold" style={{color:"#fff"}}>{title}</h2>}
          {subtitle && <p className="mt-3 text-base sm:text-lg" style={{ color: brand.textMuted }}>{subtitle}</p>}
        </div>
      )}
      {children}
    </Container>
  </section>
);

const Card = ({ title, children, cta, to }) => (
  <div className="group rounded-2xl" style={{background:"#0e1a2c", boxShadow:"0 10px 30px rgba(0,0,0,.25)", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
    <h3 className="text-lg font-semibold" style={{color:"#fff"}}>{title}</h3>
    <div className="mt-3 text-sm leading-6" style={{ color: brand.textMuted }}>{children}</div>
    {cta && (
      <div className="mt-6">
        <NavLink to={to || "/contact"} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold" style={{ color:"#fff", backgroundColor: brand.secondary }}>{cta} →</NavLink>
      </div>
    )}
  </div>
);

// ===== CTA =====
const CTA = () => (
  <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12" style={{ background: `linear-gradient(135deg, ${brand.primary}, ${brand.secondary})` }}>
    <div className="relative z-10">
      <h3 className="text-2xl sm:text-3xl font-bold" style={{color:"#fff"}}>Book a 2-Week Growth Audit</h3>
      <p className="mt-2" style={{color:"rgba(255,255,255,.9)"}}>We’ll analyze your ICP, funnels, outbound strategy, and demand engine — delivering a 90-day plan to accelerate growth for your healthcare software or services company.</p>
      <div className="mt-6" style={{display:"flex", gap:"12px", flexWrap:"wrap"}}>
        <NavLink to="/contact" className="rounded-xl px-4 py-2 font-semibold" style={{ color:"#fff", background:"rgba(255,255,255,.1)", border:"1px solid rgba(255,255,255,.3)"}}>Request a Demo</NavLink>
        <NavLink to="/resources" className="rounded-xl px-4 py-2 font-semibold" style={{ color:"#fff", background:"#0b1220", border:"1px solid rgba(255,255,255,.1)"}}>View Playbooks</NavLink>
      </div>
    </div>
  </div>
);

// ===== Layout =====
const Logo = ({ className = "" }) => (
  <div className="flex items-center gap-3">
    <img src="/logo.png" alt="PureXcel AI logo" style={{height:"32px"}} className={className} />
  </div>
);

const Nav = () => (
  <header className="sticky top-0 z-50" style={{ backdropFilter:"blur(8px)", backgroundColor:"rgba(11,18,32,.6)", borderBottom:"1px solid rgba(255,255,255,.06)" }}>
    <Container className="flex h-16 items-center justify-between">
      <NavLink to="/" className="inline-flex items-center gap-3"><Logo /></NavLink>
      <nav className="hidden md:flex items-center gap-6 text-[15px]">
        {[["Solutions","/solutions"],["Industries","/industries"],["Pricing","/pricing"],["Resources","/resources"],["About","/about"],["Contact","/contact"]].map(([label, to]) => (
          <NavLink key={to} to={to} className={({ isActive }) => `transition hover:opacity-90 ${isActive ? "text-white" : "text-white/80"}`}>{label}</NavLink>
        ))}
      </nav>
      <NavLink to="/contact" className="hidden md:inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold" style={{ color:"#fff", backgroundColor: brand.secondary }}>Request a Demo</NavLink>
    </Container>
  </header>
);

const Footer = () => (
  <footer className="mt-20" style={{borderTop:"1px solid rgba(255,255,255,.1)", backgroundColor: brand.slate, padding:"2.5rem 0"}}>
    <Container className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"2rem"}}>
      <div>
        <Logo />
        <p className="mt-4" style={{ color: brand.textMuted }}>AI‑driven growth and compliant outreach for healthcare software and service organizations.</p>
      </div>
      <div>
        <h4 style={{color:"#fff", fontWeight:600}}>Solutions</h4>
        <ul className="mt-3" style={{display:"grid", gap:"8px", color:"rgba(255,255,255,.8)"}}>
          <li><NavLink to="/solutions#growth">Growth Engine</NavLink></li>
          <li><NavLink to="/solutions#outreach">Compliance‑Safe Outreach</NavLink></li>
        </ul>
      </div>
      <div>
        <h4 style={{color:"#fff", fontWeight:600}}>Company</h4>
        <ul className="mt-3" style={{display:"grid", gap:"8px", color:"rgba(255,255,255,.8)"}}>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/resources">Resources</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <div>
        <h4 style={{color:"#fff", fontWeight:600}}>Get Started</h4>
        <p className="mt-3" style={{color:"rgba(255,255,255,.8)"}}>Claim your free 2‑week audit (limited availability).</p>
        <NavLink to="/contact" className="mt-4 inline-flex rounded-xl px-4 py-2 text-sm font-semibold" style={{ color:"#fff", backgroundColor: brand.primary }}>Book a Strategy Call</NavLink>
      </div>
    </Container>
    <Container className="mt-10" style={{display:"flex", justifyContent:"space-between", alignItems:"center", color:"rgba(255,255,255,.6)", fontSize:"12px"}}>
      <p>© {new Date().getFullYear()} PureXcel AI. All rights reserved.</p>
      <div>Privacy • Terms</div>
    </Container>
  </footer>
);

// ===== Pages =====
const Home = () => (
  <main>
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${brand.midnight}, ${brand.slate})` }}>
      <Container className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{border:"1px solid rgba(255,255,255,.2)", color:"rgba(255,255,255,.9)"}}>
            <span style={{ color: brand.primary }}>For Healthcare Software & Services</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight" style={{color:"#fff"}}>
            AI-Driven Growth Systems for <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${brand.primary}, ${brand.secondary})`, WebkitBackgroundClip:"text", color:"transparent" }}>Healthcare Companies</span>
          </h1>
          <p className="mt-4 text-lg" style={{color:"rgba(255,255,255,.8)"}}>PureXcel AI helps healthcare software and service organizations accelerate revenue with precision targeting, predictive outreach, and scalable demand generation.</p>
          <div className="mt-8" style={{display:"flex", gap:"12px", flexWrap:"wrap"}}>
            <NavLink to="/contact" className="rounded-xl px-5 py-3 text-sm font-semibold" style={{ color:"#fff", backgroundColor: brand.secondary }}>Request a Demo</NavLink>
            <NavLink to="/solutions" className="rounded-xl px-5 py-3 text-sm font-semibold" style={{ color:"rgba(255,255,255,.9)", border:"1px solid rgba(255,255,255,.2)" }}>Explore Solutions</NavLink>
          </div>
        </div>
      </Container>
    </section>

    <Section eyebrow="Why PureXcel AI" title="Outcomes That Compound" subtitle="Strategic demand generation, outbound automation, and scalable revenue acceleration.">
      <div className="grid" style={{display:"grid", gap:"1.5rem", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))"}}>
        <Card title="ICP & Positioning Sprints" cta="Run a Sprint" to="/solutions#growth">Clarify your ideal customer profile, sharpen messaging, and position your product to win.</Card>
        <Card title="Signal-Driven Pipeline" cta="See Signals" to="/solutions#growth">Identify funding triggers, intent data, and market signals to target the right buyers at the right time.</Card>
        <Card title="Compliance-Safe Outreach" cta="See Outreach" to="/solutions#outreach">Launch outbound campaigns with compliant messaging, opt-in workflows, and precision targeting.</Card>
        <Card title="Demo → Revenue Playbooks" cta="Optimize Funnel" to="/solutions#growth">Convert more demos into revenue with optimized scripts, ROI content, and objection handling.</Card>
        <Card title="Partner-Led Distribution" cta="Scale Faster" to="/resources">Unlock new growth channels through strategic content and co-marketing.</Card>
        <Card title="Founder-Friendly Model">Fixed-fee pilots and transparent SLAs designed for speed and measurable outcomes.</Card>
      </div>
    </Section>

    <Container><CTA /></Container>
  </main>
);

const Solutions = () => (
  <main>
    <Section id="growth" eyebrow="Solutions" title="Growth Engine for Healthcare Software & Services" subtitle="From ICP definition to signal-driven demand generation and revenue acceleration.">
      <div className="grid" style={{display:"grid", gap:"1.5rem", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))"}}>
        {[
          ["ICP & Narrative Sprint","Define your ideal buyer, surface pain points, and align your messaging."],
          ["Demand Generation & ABM","Targeted content, campaigns, and events for your highest-value accounts."],
          ["Signals & Lists","Identify key funding, intent, and growth signals to power your pipeline."],
          ["Outbound Ops","Build and optimize your outbound engine with tested messaging and sequencing."],
          ["Demo Excellence","Increase conversion with talk tracks, ROI tools, and follow-ups."],
          ["Revenue Operations","Build dashboards, KPIs, and workflows for predictable growth."]
        ].map(([t,d]) => (
          <div key={t} className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
            <h4 style={{color:"#fff", fontWeight:600}}>{t}</h4>
            <p className="mt-2" style={{color:"rgba(255,255,255,.8)", fontSize:"14px"}}>{d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section id="outreach" title="Compliance-Safe Outreach & Events" subtitle="Permissioned engagement and role-based targeting for healthcare decision-makers.">
      <div className="grid" style={{display:"grid", gap:"1.5rem", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))"}}>
        <div className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
          <h4 style={{color:"#fff", fontWeight:600}}>Channels</h4>
          <ul className="mt-3" style={{color:"rgba(255,255,255,.8)", paddingLeft:"1.25rem"}}>
            <li>Precision email and LinkedIn outreach</li>
            <li>Thought leadership webinars and industry roundtables</li>
            <li>Conference playbooks with pre-booked meetings</li>
          </ul>
        </div>
        <div className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
          <h4 style={{color:"#fff", fontWeight:600}}>Assets</h4>
          <ul className="mt-3" style={{color:"rgba(255,255,255,.8)", paddingLeft:"1.25rem"}}>
            <li>ROI case studies and use-case stories</li>
            <li>Discovery guides and follow-up cadences</li>
            <li>Privacy and compliance templates</li>
          </ul>
        </div>
      </div>
    </Section>

    <Container className="mt-10"><CTA /></Container>
  </main>
);

const Pricing = () => (
  <main>
    <Section eyebrow="Pricing & Engagement" title="Flexible Models to Fit Your Growth Stage" subtitle="From early validation to full-scale growth operations, PureXcel AI offers transparent pricing and predictable outcomes.">
      <div className="grid" style={{display:"grid", gap:"2rem", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))"}}>
        {[
          ["Growth Audit", "$4,500", ["ICP & messaging sprint","Outbound audit & recommendations","90-day growth roadmap"], "Start Audit"],
          ["Growth Sprint", "$12,000 /mo", ["Signal-driven outbound & ABM","Demo-to-revenue optimization","Weekly growth ops support"], "Launch Sprint"],
          ["Scale Program", "$25,000+ /mo", ["Dedicated growth team","Full demand gen & RevOps","Quarterly strategic reviews"], "Scale With Us"],
        ].map(([name, price, bullets, cta]) => (
          <div key={name} className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
            <h3 className="text-2xl font-bold" style={{color:"#fff"}}>{name}</h3>
            <p className="mt-6 text-3xl font-bold" style={{color:"#fff"}}>{price}</p>
            <ul className="mt-4" style={{color:"rgba(255,255,255,.7)", paddingLeft:"1.25rem"}}>
              {bullets.map((b)=>(<li key={b}>{b}</li>))}
            </ul>
            <NavLink to="/contact" className="mt-6 inline-flex rounded-xl px-4 py-2 font-semibold" style={{ color:"#fff", backgroundColor: brand.primary }}>{cta}</NavLink>
          </div>
        ))}
        <div className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
          <h3 className="text-2xl font-bold" style={{color:"#fff"}}>Performance Partnership</h3>
          <p className="mt-2" style={{color:"rgba(255,255,255,.8)", fontSize:"14px"}}>For teams that prefer variable pricing tied to outcomes.</p>
          <ul className="mt-4" style={{color:"rgba(255,255,255,.7)", paddingLeft:"1.25rem"}}>
            <li>Revenue-share or per-qualified demo</li>
            <li>Shared KPIs and transparent attribution</li>
            <li>Limited availability; fit required</li>
          </ul>
          <p className="mt-6 text-2xl font-bold" style={{color:"#fff"}}>Custom / Contact Us</p>
          <NavLink to="/contact" className="mt-6 inline-flex rounded-xl px-4 py-2 font-semibold" style={{ color:"#fff", backgroundColor: brand.primary }}>Discuss Partnership</NavLink>
        </div>
      </div>
    </Section>
    <Container><CTA /></Container>
  </main>
);

const Industries = () => (
  <main>
    <Section eyebrow="Who We Serve" title="Healthcare Software & Service Organizations" subtitle="Tailored strategies for SaaS founders, marketing leaders, and revenue teams.">
      <div className="grid" style={{display:"grid", gap:"1.5rem", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))"}}>
        {[
          ["Healthtech SaaS","Accelerate go-to-market and scale customer acquisition."],
          ["Digital Health Platforms","Expand enterprise adoption and payer/provider partnerships."],
          ["Clinical Workflow Solutions","Improve win rates with messaging built for decision-makers."],
          ["Population Health & Analytics","Land payer and ACO contracts with compelling evidence."],
          ["Healthcare Services","Drive referrals, partnerships, and strategic accounts."],
          ["Private Equity Portfolios","Deploy repeatable GTM frameworks across portfolio companies."]
        ].map(([t,d]) => (
          <div key={t} className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
            <h4 style={{color:"#fff", fontWeight:600}}>{t}</h4>
            <p className="mt-2" style={{color:"rgba(255,255,255,.8)", fontSize:"14px"}}>{d}</p>
          </div>
        ))}
      </div>
    </Section>
    <Container><CTA /></Container>
  </main>
);

const ROIQuickForm = () => {
  const [mql, setMql] = React.useState(300); // monthly qualified leads
  const [rate, setRate] = React.useState(0.12); // demo → close
  const [acv, setAcv] = React.useState(18000); // average contract value ($)
  const monthly = Math.round(mql * rate * acv);
  return (
    <div className="mt-4" style={{display:"grid", gap:"12px", fontSize:"14px"}}>
      <label style={{color:"rgba(255,255,255,.7)"}}>Monthly qualified leads
        <input type="number" value={mql} onChange={e=>setMql(Number(e.target.value||0))} style={{marginTop:"6px", width:"100%", borderRadius:"10px", background:"rgba(0,0,0,.3)", color:"#fff", padding:"8px 12px", border:"1px solid rgba(255,255,255,.1)"}} />
      </label>
      <label style={{color:"rgba(255,255,255,.7)"}}>Demo → Close rate (0–1)
        <input type="number" step="0.01" min={0} max={1} value={rate} onChange={e=>setRate(Number(e.target.value||0))} style={{marginTop:"6px", width:"100%", borderRadius:"10px", background:"rgba(0,0,0,.3)", color:"#fff", padding:"8px 12px", border:"1px solid rgba(255,255,255,.1)"}} />
      </label>
      <label style={{color:"rgba(255,255,255,.7)"}}>Average contract value ($)
        <input type="number" value={acv} onChange={e=>setAcv(Number(e.target.value||0))} style={{marginTop:"6px", width:"100%", borderRadius:"10px", background:"rgba(0,0,0,.3)", color:"#fff", padding:"8px 12px", border:"1px solid rgba(255,255,255,.1)"}} />
      </label>
      <div className="mt-2" style={{borderRadius:"12px", background:"rgba(0,0,0,.3)", padding:"16px", color:"#fff"}}>
        <div style={{color:"rgba(255,255,255,.7)"}}>Estimated monthly new revenue</div>
        <div className="text-2xl font-bold">${monthly.toLocaleString()}</div>
      </div>
      <NavLink to="/contact" className="mt-1 inline-flex rounded-xl px-4 py-2 font-semibold" style={{ color:"#fff", backgroundColor: brand.secondary }}>Book a Growth Strategy Call</NavLink>
    </div>
  );
};

const Resources = () => (
  <main>
    <Section eyebrow="Resources" title="Growth Playbooks & Tools" subtitle="Templates and calculators for founder‑led GTM in healthcare.">
      <div className="grid" style={{display:"grid", gap:"1.5rem", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))"}}>
        <div className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
          <h4 style={{color:"#fff", fontWeight:600}}>Featured Playbooks</h4>
          <ul className="mt-3" style={{color:"rgba(255,255,255,.8)", paddingLeft:"1.25rem"}}>
            <li>ICP & Messaging Sprint (Healthcare)</li>
            <li>Funding‑Trigger Outbound Sequences</li>
            <li>Demo → Revenue Checklist</li>
          </ul>
        </div>
        <div className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
          <h4 style={{color:"#fff", fontWeight:600}}>Monthly Revenue Calculator</h4>
          <p className="mt-2" style={{color:"rgba(255,255,255,.8)", fontSize:"14px"}}>Estimate new monthly revenue from lead volume, close rate, and ACV.</p>
          <ROIQuickForm />
        </div>
      </div>
    </Section>
  </main>
);

const About = () => (
  <main>
    <Section eyebrow="About" title="Built by operators, engineered for outcomes" subtitle="SaaS growth and healthcare expertise applied to real revenue acceleration.">
      <div className="grid" style={{display:"grid", gap:"1.5rem", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))"}}>
        <div style={{color:"rgba(255,255,255,.8)"}}>
          <p>We pair founder‑level GTM with automation so healthcare companies can scale efficiently and compliantly.</p>
          <p>Engagements start with a 2‑week audit and a 30‑day implementation sprint. We operate on clear SLAs and measurable KPIs.</p>
        </div>
        <div className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
          <h4 style={{color:"#fff", fontWeight:600}}>Principles</h4>
          <ul className="mt-3" style={{color:"rgba(255,255,255,.8)", paddingLeft:"1.25rem"}}>
            <li>Clarity over noise: ICP before channels.</li>
            <li>Operate ethically and compliantly.</li>
            <li>Automate the repeatable; amplify the human.</li>
          </ul>
        </div>
      </div>
    </Section>
  </main>
);

const Contact = () => (
  <main>
    <Section eyebrow="Get Started" title="Request a Demo or Audit" subtitle="Tell us about your company and goals.">
      <div className="grid" style={{display:"grid", gap:"2rem", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))"}}>
        <form className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}} method="POST" action="https://api.web3forms.com/submit">
          {/* Web3Forms: replace value with your real Access Key */}
          <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
          <input type="hidden" name="subject" value="PureXcel AI — Website Inquiry" />
          <input type="hidden" name="from_name" value="PureXcel AI Website" />
          <input type="hidden" name="redirect" value="https://example.com/#/contact?success=true" />
          <div className="grid" style={{display:"grid", gap:"12px"}}>
            <label style={{color:"rgba(255,255,255,.7)"}}>Full name
              <input name="name" required className="rounded-lg" style={{marginTop:"6px", width:"100%", borderRadius:"10px", background:"rgba(0,0,0,.3)", color:"#fff", padding:"8px 12px", border:"1px solid rgba(255,255,255,.1)"}} placeholder="Jane Doe" />
            </label>
            <label style={{color:"rgba(255,255,255,.7)"}}>Work email
              <input type="email" name="email" required className="rounded-lg" style={{marginTop:"6px", width:"100%", borderRadius:"10px", background:"rgba(0,0,0,.3)", color:"#fff", padding:"8px 12px", border:"1px solid rgba(255,255,255,.1)"}} placeholder="jane@company.com" />
            </label>
            <label style={{color:"rgba(255,255,255,.7)"}}>Company
              <input name="company" className="rounded-lg" style={{marginTop:"6px", width:"100%", borderRadius:"10px", background:"rgba(0,0,0,.3)", color:"#fff", padding:"8px 12px", border:"1px solid rgba(255,255,255,.1)"}} placeholder="Acme Health" />
            </label>
            <label style={{color:"rgba(255,255,255,.7)"}}>Message
              <textarea name="message" rows="4" className="rounded-lg" style={{marginTop:"6px", width:"100%", borderRadius:"10px", background:"rgba(0,0,0,.3)", color:"#fff", padding:"8px 12px", border:"1px solid rgba(255,255,255,.1)"}} placeholder="Briefly describe your goals (lead quality, demo conversion, partnerships)…"></textarea>
            </label>
            <button type="submit" className="rounded-xl px-4 py-2 font-semibold" style={{ color:"#fff", backgroundColor: brand.primary }}>Submit</button>
            <p style={{fontSize:"12px", color:"rgba(255,255,255,.6)"}}>Tip: Replace <code>YOUR_WEB3FORMS_ACCESS_KEY</code> with your key from web3forms.com. Update the <code>redirect</code> URL to your domain.</p>
          </div>
        </form>
        <div className="rounded-2xl" style={{background:"#0e1a2c", padding:"1.5rem", border:"1px solid rgba(255,255,255,.06)"}}>
          <h4 style={{color:"#fff", fontWeight:600}}>What to expect</h4>
          <ul className="mt-3" style={{color:"rgba(255,255,255,.8)", paddingLeft:"1.25rem"}}>
            <li>15‑minute discovery</li>
            <li>Audit readout with a 90‑day plan</li>
            <li>30‑day go‑live sprint</li>
          </ul>
          <div className="mt-6" style={{borderRadius:"12px", background:"rgba(0,0,0,.3)", padding:"16px", color:"rgba(255,255,255,.8)", fontSize:"14px"}}>Prefer email? Reach us at <span style={{color:"#fff", fontWeight:700}}>hello@purexcel.ai</span></div>
        </div>
      </div>
    </Section>
  </main>
);

// ===== App Shell =====
export default function App() {
  React.useEffect(() => {
    document.documentElement.style.backgroundColor = brand.midnight;
    document.body.style.color = brand.text;
    document.body.style.fontFamily = "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial";
  }, []);

  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: brand.midnight }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
