import type { Metadata } from "next";
import Link from "next/link";
import { routes, site } from "./content";
import "./styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.mission,
  applicationName: site.name,
  robots: { index: true, follow: true },
  openGraph: { title: site.name, description: site.mission, url: site.url, siteName: site.name, type: "website", locale: "en_US" },
};

function Seal({ small = false }: { small?: boolean }) {
  return <span className={small ? "seal seal-small" : "seal"} aria-label="Circle Seven emblem"><span>7</span></span>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="header">
          <div className="wrap header-inner">
            <Link className="brand" href="/"><Seal small /><span><strong>Moorish Science Temple</strong><small>Baltimore · Moorish American</small></span></Link>
            <nav className="nav" aria-label="Primary navigation">
              {routes.slice(0, 6).map(([slug, label]) => <Link key={slug} href={`/${slug}/`}>{label}</Link>)}
            </nav>
            <details className="more"><summary>More</summary><div>{routes.slice(6).map(([slug, label]) => <Link key={slug} href={`/${slug}/`}>{label}</Link>)}</div></details>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="wrap footer-grid">
            <div><Link className="brand" href="/"><Seal small /><span><strong>Moorish Science Temple</strong><small>Love · Truth · Peace · Freedom · Justice</small></span></Link><p>{site.mission}</p></div>
            <div><h2>Temple</h2><p>{site.address}<br />{site.locality}<br />{site.phone}<br />{site.email}</p></div>
            <div><h2>Explore</h2>{routes.slice(0, 6).map(([slug, label]) => <Link key={slug} href={`/${slug}/`}>{label}</Link>)}</div>
          </div>
          <div className="wrap footer-bottom">© 2026 {site.name} · {site.temple}<span>Corrections welcomed through Contact</span></div>
        </footer>
      </body>
    </html>
  );
}
