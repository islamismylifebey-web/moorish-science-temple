import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { principles, routeMap, routes, site, type RouteSlug } from "../content";

export const dynamicParams = false;

export function generateStaticParams() {
  return routes.map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = routeMap[slug as RouteSlug];
  if (!route) return {};
  return { title: route[1], description: route[4] };
}

export default async function InstitutionalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = routeMap[slug as RouteSlug];
  if (!route) notFound();
  const [, label, title, kicker, copy, items] = route;
  const isLibrary = slug === "library";
  const isTeachings = slug === "teachings";
  const isLeadership = slug === "leadership";
  const isContact = slug === "contact";

  return <>
    <section className="page-hero"><div className="arch-field" aria-hidden="true" /><div className="wrap narrow"><p className="eyebrow">{kicker}</p><h1>{title}</h1><p>{copy}</p></div></section>

    {isLibrary && <section className="section archive-hall"><div className="wrap"><div className="archive-header"><span className="stamp">VERIFIED SOURCE REQUIRED</span><div><p className="eyebrow">Library & Digital Archive</p><h2>Four doors into the archive</h2><p>Each future item should carry source, date, provenance, transcription status, and authority notes before publication.</p></div></div><div className="archive-doors">{items.map((item, i) => <article className="archive-door" key={item}><small>FOLIO {String(i+1).padStart(2,"0")}</small><strong>{item}</strong><span>Collection established · records added only after verification</span><b>ARCHIVE ACCESSION STANDARD</b></article>)}</div></div></section>}

    {isTeachings && <section className="section paper"><div className="wrap"><p className="eyebrow dark">Divine Principles</p><h2>Principles become meaningful through practice</h2><div className="principle-chambers">{principles.map(([n,name,text]) => <article className="principle-chamber" key={name}><span>{n}</span><h3>{name}</h3><p>{text}</p><small>Reflection prompt</small><b>How should this principle change my conduct today?</b></article>)}</div></div></section>}

    {isLeadership && <section className="section paper"><div className="wrap leadership-chamber"><div><span className="stamp">TEMPLE-LEVEL STEWARDSHIP</span><p className="eyebrow dark">Leadership Chamber</p><h2>{site.leader}</h2><p>This site identifies Grand Sheik Eric Thompson-Bey as leader of this Baltimore Temple. It does not claim national office or jurisdiction beyond verified Temple records.</p></div><div className="framed"><h3>Stewardship nearest the congregation</h3><p>Teaching, moral leadership, community engagement, congregational care, institutional integrity, and preservation of Temple records.</p></div></div></section>}

    {!isLibrary && !isTeachings && !isLeadership && <section className="section paper"><div className="wrap"><p className="eyebrow dark">{label}</p><h2>{title}</h2><div className="grid">{items.map((item, i) => <article className="card" key={item}><small>{String(i+1).padStart(2,"0")}</small><h3>{item}</h3><p>{copy}</p></article>)}</div></div></section>}

    <section className="section dark-section"><div className="wrap split"><div><p className="eyebrow">Institutional standard</p><h2>Clarity before convenience</h2><p>Historical claims, events, offices, donations, and directory records remain unpublished when current verification is missing.</p></div><div className="framed dark"><h3>{isContact ? "Temple contact" : "Corrections welcomed"}</h3>{isContact ? <p>{site.address}<br />{site.locality}<br /><a href={`tel:${site.phone.replace(/[^0-9]/g,"")}`}>{site.phone}</a><br /><a href={`mailto:${site.email}`}>{site.email}</a></p> : <p>Use the Contact page to submit a correction, source, archive record, or question for Temple review.</p>}</div></div></section>

    <section className="closing"><div className="wrap closing-inner"><div><p className="eyebrow">Continue exploring</p><h2>Study with context. Serve with purpose.</h2></div><Link className="button gold" href={isContact ? "/library/" : "/contact/"}>{isContact ? "Enter the archive" : "Contact the Temple"}</Link></div></section>
  </>;
}
