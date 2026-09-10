import React from 'react';

const services = [
  {
    kicker: 'BE EASY TO FIND',
    title: 'Google Business Profile',
    copy: 'Clean up the profile, categories, services, photos, reviews and local signals so customers can actually find and call you.'
  },
  {
    kicker: 'MAKE THE PHONE RING',
    title: 'Website + Lead Capture',
    copy: 'A fast mobile site with clear calls, texts and forms. No design theater. The site has one job: turn attention into a real customer.'
  },
  {
    kicker: 'TURN GOOD WORK INTO PROOF',
    title: 'Reviews + Reputation',
    copy: 'Simple review requests, clean links and follow-up so the reputation you already earned in the field shows up online.'
  },
  {
    kicker: 'STOP LOSING LEADS',
    title: 'Lead Follow-Up',
    copy: 'Put calls, forms and customer requests into one simple follow-up flow so a busy day does not turn into forgotten revenue.'
  },
  {
    kicker: 'KILL REPEAT ADMIN',
    title: 'Practical Automation',
    copy: 'Reminders, intake, estimates, status updates and repetitive office work handled quietly in the background. We use AI; we do not make you study it.'
  },
  {
    kicker: 'KEEP CLEAN RECORDS',
    title: 'Compliance + Field Systems',
    copy: 'Time records, recurring deadlines, documentation and audit-ready history for operators who would rather be doing the work than chasing paperwork.'
  }
];

const trades = ['Construction', 'HVAC', 'Plumbing', 'Electrical', 'Concrete', 'Flooring', 'Roofing', 'Landscaping', 'Towing', 'Trucking', 'Auto + Tire', 'Equipment'];

function SilverbackMark() {
  return (
    <svg viewBox="0 0 72 72" role="img" aria-label="Silverback" className="sb-mark">
      <path d="M13 57V33c0-14 9.8-24 23-24s23 10 23 24v24" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="square" />
      <path d="M19 29c5-8 12-12 17-12s12 4 17 12" fill="none" stroke="#d2d7db" strokeWidth="5" strokeLinecap="square" />
      <path d="M26 57V38h20v19" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="square" />
    </svg>
  );
}

export default function BlueCollarHome() {
  return (
    <div className="sb-page">
      <style>{`
        :root{--sb-black:#0b0d0f;--sb-charcoal:#15191d;--sb-steel:#b9c0c6;--sb-white:#f4f3ee;--sb-muted:#a7afb6;--sb-line:#2a3036;--sb-blue:#183d59;--sb-warm:#d7d0c4}
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}.sb-page{min-height:100vh;background:var(--sb-black);color:var(--sb-white);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.55}.sb-page a{color:inherit}.sb-wrap{width:min(1180px,92vw);margin:0 auto}.sb-nav{position:sticky;top:0;z-index:20;background:rgba(11,13,15,.94);backdrop-filter:blur(14px);border-bottom:1px solid var(--sb-line)}.sb-nav-inner{height:76px;display:flex;align-items:center;justify-content:space-between}.sb-brand{display:flex;align-items:center;gap:12px;text-decoration:none}.sb-mark{width:42px;height:42px;color:#8f989f}.sb-word{font-weight:900;letter-spacing:.16em;font-size:20px}.sb-word span{color:#8f989f}.sb-nav-links{display:flex;gap:24px;align-items:center}.sb-nav-links a{text-decoration:none;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--sb-muted)}.sb-nav-links a:hover{color:white}.sb-cta-small{border:1px solid #69747d!important;padding:10px 14px;color:white!important}.sb-hero{position:relative;overflow:hidden;padding:110px 0 86px;background:radial-gradient(circle at 78% 24%,rgba(24,61,89,.46),transparent 34%),linear-gradient(145deg,#0b0d0f 0%,#10161b 72%,#0d1820 100%)}.sb-hero:after{content:"";position:absolute;right:-10vw;bottom:-30vw;width:70vw;height:70vw;border:1px solid rgba(185,192,198,.07);border-radius:50%;box-shadow:0 0 0 6vw rgba(185,192,198,.025),0 0 0 13vw rgba(185,192,198,.02)}.sb-eyebrow{font-size:12px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;color:#9ca6ae}.sb-hero h1{position:relative;z-index:1;max-width:980px;margin:18px 0 24px;font-size:clamp(52px,7.8vw,108px);line-height:.92;letter-spacing:-.045em;text-transform:uppercase}.sb-hero h1 em{font-style:normal;color:#aeb6bc}.sb-hero-copy{position:relative;z-index:1;max-width:760px;font-size:clamp(18px,2vw,25px);color:#ced4d8}.sb-buttons{position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}.sb-button{display:inline-block;text-decoration:none;font-weight:900;letter-spacing:.055em;text-transform:uppercase;font-size:12px;padding:15px 19px}.sb-button-primary{background:#d3d7da;color:#0b0d0f}.sb-button-secondary{border:1px solid #5e6870;color:white}.sb-proof{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--sb-line);margin-top:62px;background:rgba(0,0,0,.2)}.sb-proof div{padding:20px;border-right:1px solid var(--sb-line);color:var(--sb-muted)}.sb-proof div:last-child{border-right:0}.sb-proof strong{display:block;color:white;font-size:17px;margin-bottom:4px}.sb-section{padding:84px 0}.sb-light{background:#f0eee9;color:#121619}.sb-section h2{font-size:clamp(38px,5.4vw,70px);line-height:1.02;letter-spacing:-.04em;margin:10px 0 18px}.sb-lead{max-width:790px;font-size:20px;color:var(--sb-muted)}.sb-light .sb-lead{color:#59636b}.sb-service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#cfcac1;border:1px solid #cfcac1;margin-top:40px}.sb-service{background:#f7f5f0;padding:28px;min-height:245px}.sb-service .sb-eyebrow{color:#59636b;font-size:10px}.sb-service h3{font-size:22px;margin:14px 0 10px}.sb-service p{color:#5d666d;margin:0}.sb-principle{background:var(--sb-charcoal);border-top:1px solid var(--sb-line);border-bottom:1px solid var(--sb-line)}.sb-principle-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:60px;align-items:center}.sb-quote{font-size:clamp(31px,4.2vw,58px);line-height:1.06;letter-spacing:-.035em;margin:0}.sb-quote span{color:#aeb6bc}.sb-rule{border-left:3px solid #9099a0;padding-left:22px;color:#c2c8cc;font-size:19px}.sb-trades{display:flex;flex-wrap:wrap;gap:9px;margin-top:34px}.sb-trade{border:1px solid #bcb7ae;padding:10px 13px;font-size:12px;font-weight:850;letter-spacing:.06em;text-transform:uppercase}.sb-process{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:38px}.sb-step{border:1px solid var(--sb-line);padding:27px}.sb-step b{font-size:12px;color:#9ba4aa;letter-spacing:.12em}.sb-step h3{font-size:23px;margin:12px 0 8px}.sb-step p{color:var(--sb-muted);margin:0}.sb-close{padding:88px 0;background:linear-gradient(135deg,#183d59 0%,#0d202d 100%)}.sb-close h2{max-width:850px}.sb-footer{border-top:1px solid var(--sb-line);padding:27px 0;color:#78828a;font-size:12px}.sb-footer-inner{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}.sb-no-ai{font-weight:850;color:#aeb6bc}.sb-case{margin-top:42px;display:grid;grid-template-columns:1fr 1fr;gap:18px}.sb-case-card{border:1px solid var(--sb-line);background:#101419;padding:26px}.sb-case-card strong{display:block;font-size:22px;margin-bottom:8px}.sb-case-card p{margin:0;color:var(--sb-muted)}
        @media(max-width:820px){.sb-nav-links a:not(.sb-cta-small){display:none}.sb-hero{padding:78px 0 62px}.sb-proof,.sb-service-grid,.sb-principle-grid,.sb-process,.sb-case{grid-template-columns:1fr}.sb-proof div{border-right:0;border-bottom:1px solid var(--sb-line)}.sb-proof div:last-child{border-bottom:0}.sb-section{padding:62px 0}.sb-principle-grid{gap:28px}}
      `}</style>

      <header className="sb-nav">
        <div className="sb-wrap sb-nav-inner">
          <a className="sb-brand" href="#top" aria-label="Silverback home">
            <SilverbackMark />
            <div className="sb-word">SILVERBACK<span>.</span></div>
          </a>
          <nav className="sb-nav-links" aria-label="Primary navigation">
            <a href="#what-we-do">What we do</a>
            <a href="#who-we-help">Who we help</a>
            <a href="#how-it-works">How it works</a>
            <a className="sb-cta-small" href="/?appParams=intake">Show me what you'd fix</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="sb-hero">
          <div className="sb-wrap">
            <div className="sb-eyebrow">Business support for the trades + physical economy</div>
            <h1>You do the work. <em>We handle the work around it.</em></h1>
            <p className="sb-hero-copy">Websites, Google Business Profile, reviews, lead follow-up, simple automation and compliance systems for contractors, fleets, shops and local service businesses. No lectures. No AI theater.</p>
            <div className="sb-buttons">
              <a className="sb-button sb-button-primary" href="/?appParams=intake">Show me what you'd fix first</a>
              <a className="sb-button sb-button-secondary" href="#what-we-do">See the practical stuff</a>
            </div>
            <div className="sb-proof">
              <div><strong>Respect the craft</strong>You do not need to become a marketer or technologist.</div>
              <div><strong>Fix real friction</strong>Calls, leads, reviews, admin and compliance—not buzzwords.</div>
              <div><strong>Stay if useful</strong>Practical setup plus ongoing support when it keeps paying for itself.</div>
            </div>
          </div>
        </section>

        <section className="sb-section sb-light" id="what-we-do">
          <div className="sb-wrap">
            <div className="sb-eyebrow">What we do</div>
            <h2>Make the business around the trade work better.</h2>
            <p className="sb-lead">Most good operators do not need a giant digital transformation. They need someone competent to notice what is leaking time or money and fix it.</p>
            <div className="sb-service-grid">
              {services.map((service) => (
                <article className="sb-service" key={service.title}>
                  <div className="sb-eyebrow">{service.kicker}</div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sb-section sb-principle">
          <div className="sb-wrap sb-principle-grid">
            <p className="sb-quote">Everybody has a craft. <span>We respect yours.</span></p>
            <div className="sb-rule">Silverback does not make clients feel behind because they are not technical. We use technology quietly to make their work easier, their business stronger and their time more valuable. <span className="sb-no-ai">Never make the client feel small. Make them feel supported.</span></div>
          </div>
        </section>

        <section className="sb-section" id="who-we-help">
          <div className="sb-wrap">
            <div className="sb-eyebrow">Who we help</div>
            <h2>Businesses that still have to show up.</h2>
            <p className="sb-lead">AI may change the office. It does not eliminate the road, the roof, the jobsite, the truck, the pipe, the tire or the customer standing at the counter.</p>
            <div className="sb-trades">
              {trades.map((trade) => <span className="sb-trade" key={trade}>{trade}</span>)}
            </div>
            <div className="sb-case">
              <div className="sb-case-card"><strong>Already good at the work?</strong><p>We are not here to teach you how to run your trade. We are here to make sure people can find you, reach you, trust you and get followed up with.</p></div>
              <div className="sb-case-card"><strong>Too busy for another system?</strong><p>Good. The system should do work for you. If it creates another dashboard you have to babysit, we built the wrong thing.</p></div>
            </div>
          </div>
        </section>

        <section className="sb-section" id="how-it-works">
          <div className="sb-wrap">
            <div className="sb-eyebrow">How it works</div>
            <h2>Start with one obvious problem.</h2>
            <p className="sb-lead">We do not need to sell you twenty services. Start with the thing that is clearly broken or being ignored.</p>
            <div className="sb-process">
              <div className="sb-step"><b>01</b><h3>We look</h3><p>Profile, website, calls, reviews, lead flow and repetitive office work. We identify the handful of issues worth touching.</p></div>
              <div className="sb-step"><b>02</b><h3>We fix</h3><p>We implement the practical change rather than handing you a report and another list of things to do yourself.</p></div>
              <div className="sb-step"><b>03</b><h3>We stay useful</h3><p>If ongoing support keeps producing value, we keep it handled. If not, you keep what we built.</p></div>
            </div>
          </div>
        </section>

        <section className="sb-close">
          <div className="sb-wrap">
            <div className="sb-eyebrow">Strength in service</div>
            <h2>You're good at your work. You shouldn't have to be good at all of this too.</h2>
            <p className="sb-lead" style={{color:'#d7e0e6'}}>Let us show you the first three things we would fix. No lecture. No giant proposal.</p>
            <div className="sb-buttons"><a className="sb-button sb-button-primary" href="/?appParams=intake">Show me the three things</a></div>
          </div>
        </section>
      </main>

      <footer className="sb-footer">
        <div className="sb-wrap sb-footer-inner"><strong>SILVERBACK.</strong><span>Technology should make capable people stronger—not make them feel behind.</span></div>
      </footer>
    </div>
  );
}
