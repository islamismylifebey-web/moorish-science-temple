import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { principles, routeMap, routes, site, type RouteSlug } from "../content";

export const dynamicParams = false;

const originalMedia = {
  community: "https://moorishsciencetemple.org/wp-content/uploads/2024/05/Mask-group-2024-05-17T143815.529.png",
  prophetQuote: "https://moorishsciencetemple.org/wp-content/uploads/2024/05/Group-128-3.png",
  antique: "https://moorishsciencetemple.org/wp-content/uploads/2025/04/Moorish-Science-Temple-Antique-Photo.webp",
  nobleDrewAli: "https://moorishsciencetemple.org/wp-content/uploads/2025/04/Noble-Drew-Ali-Image.webp",
  gallery: "https://moorishsciencetemple.org/wp-content/uploads/2024/05/Group-129-2.png",
} as const;

const heritageByRoute: Partial<Record<RouteSlug, { src: string; alt: string; caption: string; folio: string }>> = {
  history: { src: originalMedia.nobleDrewAli, alt: "Prophet Noble Drew Ali from the original Temple website", caption: "Prophet Noble Drew Ali · Original Temple site", folio: "HISTORY FOLIO" },
  leadership: { src: originalMedia.antique, alt: "Historic Moorish Science Temple photograph from the original Temple website", caption: "Temple heritage · Original site archive", folio: "LEADERSHIP & HERITAGE" },
  community: { src: originalMedia.community, alt: "Temple community service and fellowship from the original website", caption: "Community service · Original Temple site", folio: "COMMUNITY RECORD" },
  library: { src: originalMedia.prophetQuote, alt: "Original Temple teaching image accompanying Prophet Noble Drew Ali", caption: "Preserved visual record · Original Temple site", folio: "ARCHIVE FOLIO" },
  teachings: { src: originalMedia.prophetQuote, alt: "Original Temple teaching image accompanying Prophet Noble Drew Ali", caption: "Teaching & remembrance · Original Temple site", folio: "TEACHINGS FOLIO" },
  events: { src: originalMedia.gallery, alt: "Temple gathering from the original Temple website gallery", caption: "Gathering & fellowship · Original Temple site", folio: "COMMUNITY MEMORY" },
};

export function generateStaticParams() {
  return routes.map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = routeMap[slug as RouteSlug];
  if (!route) return {};
  return { title: route[1], description: route[4] };
}

function HeritagePanel({ slug }: { slug: RouteSlug }) {
  const heritage = heritageByRoute[slug];
  if (!heritage) return null;
  return <aside className="heritage-panel" aria-label="Temple heritage photograph">
    <figure className="heritage-frame page-heritage-frame">
      <img src={heritage.src} alt={heritage.alt} loading="lazy" />
      <figcaption><span>{heritage.folio}</span><b>{heritage.caption}</b></figcaption>
    </figure>
  </aside>;
}

export default async function InstitutionalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = routeMap[slug as RouteSlug];
  if (!route) notFound();
  const typedSlug = slug as RouteSlug;
  const [, label, title, kicker, copy, items] = route;
  const isLibrary = slug === "library";
  const isTeachings = slug === "teachings";
  const isLeadership = slug === "leadership";
  const isContact = slug === "contact";

  return <>
    <section className="page-hero"><div className="arch-field" aria-hidden="true" /><img className="page-seal-watermark" src="/brand/circle-seven-original.png" alt="" aria-hidden="true" width="192" height="192" /><div className="wrap page-hero-grid"><div className="narrow"><p className="eyebrow">{kicker}</p><h1>{title}</h1><p>{copy}</p></div><HeritagePanel slug={typedSlug} /></div></section>

    {isLibrary && <section className="section archive-hall"><div className="wrap"><div className="archive-header"><span className="stamp">VERIFIED SOURCE REQUIRED</span><div><p className="eyebrow">Library & Digital Archive</p><h2>Four doors into the archive</h2><p>Each future item should carry source, date, provenance, transcription status, and authority notes before publication.</p></div></div><div className="archive-doors">{items.map((item, i) => <article className="archive-door" key={item}><small>FOLIO {String(i+1).padStart(2,"0")}</small><strong>{item}</strong><span>Collection established · records added only after verification</span><b>ARCHIVE ACCESSION STANDARD</b></article>)}</div></div></section>}

    {isTeachings && <section className="section paper textured-section"><div className="wrap"><p className="eyebrow dark">Divine Principles</p><h2>Principles become meaningful through practice</h2><div className="principle-chambers">{principles.map(([n,name,text]) => <article className="principle-chamber" key={name}><span>{n}</span><h3>{name}</h3><p>{text}</p><small>Reflection prompt</small><b>How should this principle change my conduct today?</b></article>)}</div></div></section>}

    {isLeadership && <section className="section paper textured-section"><div className="wrap leadership-chamber"><div><span className="stamp">TEMPLE-LEVEL STEWARDSHIP</span><p className="eyebrow dark">Leadership Chamber</p><h2>{site.leader}</h2><p>This site identifies Grand Sheik Eric Thompson-Bey as leader of this Baltimore Temple. It does not claim national office or jurisdiction beyond verified Temple records.</p></div><div className="framed seal-backed"><h3>Stewardship nearest the congregation</h3><p>Teaching, moral leadership, community engagement, congregational care, institutional integrity, and preservation of Temple records.</p></div></div></section>}

    {!isLibrary && !isTeachings && !isLeadership && <section className="section paper textured-section"><div className="wrap"><p className="eyebrow dark">{label}</p><h2>{title}</h2><div className="grid">{items.map((item, i) => <article className="card" key={item}><small>{String(i+1).padStart(2,"0")}</small><h3>{item}</h3><p>{copy}</p></article>)}</div></div></section>}

    <section className="section dark-section archive-with-mark"><div className="seal-watermark" aria-hidden="true"><img src="/brand/circle-seven-original.png" alt="" width="192" height="192" /></div><div className="wrap split"><div><p className="eyebrow">Institutional standard</p><h2>Clarity before convenience</h2><p>Historical claims, events, offices, donations, and directory records remain unpublished when current verification is missing.</p></div><div className="framed dark"><h3>{isContact ? "Temple contact" : "Corrections welcomed"}</h3>{isContact ? <p>{site.address}<br />{site.locality}<br /><a href={`tel:${site.phone.replace(/[^0-9]/g,"")}`}>{site.phone}</a><br /><a href={`mailto:${site.email}`}>{site.email}</a></p> : <p>Use the Contact page to submit a correction, source, archive record, or question for Temple review.</p>}</div></div></section>

    <section className="closing"><div className="wrap closing-inner"><div><p className="eyebrow">Continue exploring</p><h2>Study with context. Serve with purpose.</h2></div><Link className="button gold" href={isContact ? "/library/" : "/contact/"}>{isContact ? "Enter the archive" : "Contact the Temple"}</Link></div></section>
  </>;
}