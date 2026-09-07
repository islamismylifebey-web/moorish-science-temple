import Link from "next/link";
import { principles, routes, site } from "./content";

function Seal() { return <span className="seal hero-seal" aria-hidden="true"><span>7</span></span>; }

export default function HomePage() {
  return <>
    <section className="hero">
      <div className="arch-field" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Faith · Knowledge · Service · Community</p>
          <h1>Moorish Science Temple <span>of America</span></h1>
          <p className="hero-copy">{site.mission}</p>
          <div className="office"><strong>{site.leader}</strong><span>Temple leadership · Baltimore</span></div>
          <div className="actions"><Link className="button gold" href="/teachings/">Study the principles</Link><Link className="button ghost" href="/library/">Enter the archive</Link><Link className="button ghost" href="/contact/">Visit the Temple</Link></div>
        </div>
        <div className="seal-stage"><Seal /></div>
      </div>
    </section>

    <section className="principle-band"><div className="wrap principle-row">{principles.map(([n,name]) => <Link href="/teachings/" className="principle-pill" key={name}><span>{n}</span><b>{name}</b></Link>)}</div></section>

    <section className="section paper"><div className="wrap split"><div><p className="eyebrow dark">Leadership chamber</p><h2>Leadership rooted in service</h2><p>This site presents {site.leader} as leader of this Baltimore Temple and keeps wider jurisdictional claims unpublished unless separately verified.</p><Link className="text-link" href="/leadership/">Enter the leadership chamber →</Link></div><div className="framed"><span className="stamp">TEMPLE-LEVEL STEWARDSHIP</span><h3>Teaching. Service. Stewardship.</h3><p>Leadership is presented through moral instruction, congregational care, community responsibility, trustworthy administration, and preservation of the work.</p></div></div></section>

    <section className="section dark-section"><div className="wrap"><p className="eyebrow">Digital Moorish Archive</p><h2>A living institutional record</h2><p className="lede">The archive is designed to grow carefully: verified documents, photographs, notices, study materials, and community records can be added without rewriting history or inventing provenance.</p><div className="archive-preview">{routes.filter(([slug]) => ["history","teachings","community","misconceptions"].includes(slug)).map(([slug,label,title]) => <Link className="archive-card" key={slug} href={`/${slug}/`}><small>COLLECTION</small><strong>{label}</strong><span>{title}</span><b>Open folio →</b></Link>)}</div><div className="actions"><Link className="button gold" href="/library/">Enter the Moorish Digital Archive</Link></div></div></section>

    <section className="section cream"><div className="wrap"><p className="eyebrow dark">Public clarity</p><h2>Faith, history, and civic responsibility</h2><div className="grid"><div className="card"><h3>Know the tradition</h3><p>Explore careful historical context around Prophet Noble Drew Ali and the Moorish Science Temple of America.</p><Link href="/history/">Explore history →</Link></div><div className="card"><h3>Understand the principles</h3><p>Study Love, Truth, Peace, Freedom, and Justice as standards for character and service.</p><Link href="/teachings/">Study teachings →</Link></div><div className="card"><h3>Dispelling misconceptions</h3><p>Moorish Science is not presented here as sovereign-citizen ideology, pseudo-law, tax evasion, fake consulates, or invented government.</p><Link href="/misconceptions/">Read clarification →</Link></div></div></div></section>

    <section className="closing"><div className="wrap closing-inner"><div><p className="eyebrow">Visit · Study · Serve</p><h2>Begin with the Temple.</h2><p>{site.address}, {site.locality} · {site.phone}</p></div><Link className="button gold" href="/contact/">Contact the Temple</Link></div></section>
  </>;
}
