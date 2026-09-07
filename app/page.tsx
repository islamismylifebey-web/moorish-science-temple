import Link from "next/link";
import { principles, routes, site } from "./content";

const originalMedia = {
  community: "https://moorishsciencetemple.org/wp-content/uploads/2024/05/Mask-group-2024-05-17T143815.529.png",
  prophetQuote: "https://moorishsciencetemple.org/wp-content/uploads/2024/05/Group-128-3.png",
  nobleDrewAli: "https://moorishsciencetemple.org/wp-content/uploads/2025/04/Noble-Drew-Ali-Image.webp",
  gallery1: "https://moorishsciencetemple.org/wp-content/uploads/2024/05/Mask-group-2024-05-17T120317.915.png",
  gallery2: "https://moorishsciencetemple.org/wp-content/uploads/2024/05/Mask-group-2024-05-17T120355.445.png",
  gallery3: "https://moorishsciencetemple.org/wp-content/uploads/2024/05/Mask-group-2024-05-17T120425.666.png",
} as const;

function Seal({ decorative = false }: { decorative?: boolean }) {
  return <img className="brand-seal hero-brand-seal" src="/brand/circle-seven-original.png" alt={decorative ? "" : "Circle Seven emblem"} aria-hidden={decorative || undefined} width="192" height="192" />;
}

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
        <div className="heritage-stage" aria-label="Temple heritage">
          <figure className="heritage-frame hero-photo">
            <img src={originalMedia.community} alt="Temple community service and fellowship" loading="eager" />
            <figcaption><span>From the original Temple site</span><b>Community · Service · Fellowship</b></figcaption>
          </figure>
          <div className="hero-seal-medallion"><Seal /></div>
        </div>
      </div>
    </section>

    <section className="principle-band"><div className="wrap principle-row">{principles.map(([n,name]) => <Link href="/teachings/" className="principle-pill" key={name}><span>{n}</span><b>{name}</b></Link>)}</div></section>

    <section className="section paper textured-section"><div className="wrap split"><div><p className="eyebrow dark">Leadership chamber</p><h2>Leadership rooted in service</h2><p>This site presents {site.leader} as leader of this Baltimore Temple and keeps wider jurisdictional claims unpublished unless separately verified.</p><Link className="text-link" href="/leadership/">Enter the leadership chamber →</Link></div><div className="framed seal-backed"><span className="stamp">TEMPLE-LEVEL STEWARDSHIP</span><h3>Teaching. Service. Stewardship.</h3><p>Leadership is presented through moral instruction, congregational care, community responsibility, trustworthy administration, and preservation of the work.</p></div></div></section>

    <section className="section heritage-gallery-section">
      <div className="wrap">
        <div className="gallery-heading"><div><p className="eyebrow dark">Original Temple gallery</p><h2>The people are part of the record.</h2></div><p>Photographs from the original Temple website are treated here as institutional memory—framed, captioned, and given room to speak rather than used as decoration alone.</p></div>
        <div className="heritage-mosaic">
          <figure className="heritage-frame heritage-large"><img src={originalMedia.prophetQuote} alt="Original Temple image accompanying a teaching of Prophet Noble Drew Ali" loading="lazy" /><figcaption><span>Heritage folio 01</span><b>Teaching & remembrance</b></figcaption></figure>
          <figure className="heritage-frame"><img src={originalMedia.gallery1} alt="Original Temple gallery photograph" loading="lazy" /><figcaption><span>Heritage folio 02</span><b>Community record</b></figcaption></figure>
          <figure className="heritage-frame"><img src={originalMedia.gallery2} alt="Original Temple gallery photograph" loading="lazy" /><figcaption><span>Heritage folio 03</span><b>Fellowship</b></figcaption></figure>
          <figure className="heritage-frame heritage-wide"><img src={originalMedia.gallery3} alt="Original Temple gallery photograph" loading="lazy" /><figcaption><span>Heritage folio 04</span><b>Service in community</b></figcaption></figure>
        </div>
      </div>
    </section>

    <section className="section dark-section archive-with-mark"><div className="seal-watermark" aria-hidden="true"><Seal decorative /></div><div className="wrap"><p className="eyebrow">Digital Moorish Archive</p><h2>A living institutional record</h2><p className="lede">The archive is designed to grow carefully: verified documents, photographs, notices, study materials, and community records can be added without rewriting history or inventing provenance.</p><div className="archive-preview">{routes.filter(([slug]) => ["history","teachings","community","misconceptions"].includes(slug)).map(([slug,label,title]) => <Link className="archive-card" key={slug} href={`/${slug}/`}><small>COLLECTION</small><strong>{label}</strong><span>{title}</span><b>Open folio →</b></Link>)}</div><div className="actions"><Link className="button gold" href="/library/">Enter the Moorish Digital Archive</Link></div></div></section>

    <section className="section cream"><div className="wrap"><p className="eyebrow dark">Public clarity</p><h2>Faith, history, and civic responsibility</h2><div className="grid"><div className="card"><h3>Know the tradition</h3><p>Explore careful historical context around Prophet Noble Drew Ali and the Moorish Science Temple of America.</p><Link href="/history/">Explore history →</Link></div><div className="card"><h3>Understand the principles</h3><p>Study Love, Truth, Peace, Freedom, and Justice as standards for character and service.</p><Link href="/teachings/">Study teachings →</Link></div><div className="card"><h3>Dispelling misconceptions</h3><p>Moorish Science is not presented here as sovereign-citizen ideology, pseudo-law, tax evasion, fake consulates, or invented government.</p><Link href="/misconceptions/">Read clarification →</Link></div></div></div></section>

    <section className="closing"><div className="wrap closing-inner"><div><p className="eyebrow">Visit · Study · Serve</p><h2>Begin with the Temple.</h2><p>{site.address}, {site.locality} · {site.phone}</p></div><Link className="button gold" href="/contact/">Contact the Temple</Link></div></section>
  </>;
}
