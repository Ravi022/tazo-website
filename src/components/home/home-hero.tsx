import { HeroCarousel } from "@/components/home/hero-carousel";
import { ButtonLink, TextLink } from "@/components/ui/links";
import { Eyebrow } from "@/components/ui/eyebrow";
import { homeHeroes } from "@/content/heroes";
import { site } from "@/config/site";

export function HomeHero() {
  return (
    <HeroCarousel names={homeHeroes.map((hero) => hero.name)}>
      {homeHeroes.map((hero, index) => {
        const Heading = index === 0 ? "h1" : "h2";

        return (
          <div className="campaign-hero" key={hero.slug}>
            <div className="campaign-hero-media">
              <img
                className="campaign-hero-image"
                src={`/heroes/${hero.image}.webp`}
                alt={hero.alt}
                width={1672}
                height={941}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <span className="hero-image-note">Illustrative product concept</span>
            </div>
            <div className="campaign-hero-content wrap">
              <div className="campaign-hero-copy">
                <Eyebrow>TAZO / {hero.name}</Eyebrow>
                <Heading className="campaign-hero-heading">
                  {hero.headline}
                  <span>{hero.accent}</span>
                </Heading>
                <p className="campaign-hero-description">{hero.description}</p>
                <div className="hero-actions">
                  <ButtonLink href={`/contact?product=${hero.slug}`}>Book a demo</ButtonLink>
                  <TextLink href={`/products/${hero.slug}`}>Explore product</TextLink>
                </div>
                <div className="campaign-hero-signature">{site.tagline}</div>
                <div className="origin-line">
                  <span>Made in USA.</span>
                  <span>Indian pricing.</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </HeroCarousel>
  );
}
