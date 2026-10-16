import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/config/site";
import { products } from "@/content/products";

export function Footer() {
  return (
    <footer>
      <div className="footer-top wrap">
        <div>
          <Link href="/" className="brand">
            <img src="/brand/tazo.jpeg" alt="TAZO home" width={48} height={51} />
          </Link>
          <p>
            Integrated Solutions.
            <br />
            Connected Thinking.
          </p>
          <span className="footer-position">
            Made in USA. <span>Indian pricing.</span>
          </span>
        </div>
        <div>
          <p className="eyebrow">EXPLORE</p>
          {site.footerExplore.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="eyebrow">SOFTWARE</p>
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              {product.short}
            </Link>
          ))}
        </div>
        <div>
          <p className="eyebrow">FIND US</p>
          <p>
            301A, 3rd Floor, World Trade Tower
            <br />
            Fire Brigade Lane, Adjacent Lalit Hotel
            <br />
            Connaught Place, New Delhi – 110001
          </p>
          <Link className="footer-talk" href="/contact">
            Let’s talk <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} TAZO. All rights reserved.</span>
        <Link href="/privacy">Enquiry privacy</Link>
        <span>Business software. Human purpose.</span>
      </div>
    </footer>
  );
}
