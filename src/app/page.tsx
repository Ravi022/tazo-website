import { AiSolutions } from "@/components/home/ai-solutions";
import { CompanyTeaser } from "@/components/home/company-teaser";
import { ConnectedAdvantage } from "@/components/home/connected-advantage";
import { HomeHero } from "@/components/home/home-hero";
import { SectorsPreview } from "@/components/home/sectors-preview";
import { TechnologyTeaser } from "@/components/home/technology-teaser";
import { CustomerFeedback } from "@/components/customers/customer-feedback";
import { ProductPortfolio } from "@/components/products/product-portfolio";
import { ClosingCta } from "@/components/ui/closing-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ConnectedAdvantage />
      <AiSolutions />
      <ProductPortfolio />
      <SectorsPreview />
      <CustomerFeedback />
      <TechnologyTeaser />
      <CompanyTeaser />
      <ClosingCta />
    </>
  );
}
