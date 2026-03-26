import ServiceTierCard from "./ServiceTierCard";

const tiers = [
  {
    tier: "Tier 1",
    title: "Business Setup",
    price: "$900",
    description: "Just getting started? I'll get you legal, organized & ready to take on jobs.",
    features: [
      "LLC/Non-profit formation",
      "Licensing & insurance setup",
      "Scheduling & quoting tools",
      "Pricing system to stop undercharging",
    ],
  },
  {
    tier: "Tier 2",
    title: "Operations & Strategy",
    price: "$1,500",
    description: "Ready to grow, but disorganization is standing in the way?",
    features: [
      "Calendar + crew scheduler setup",
      "Subcontractor onboarding system",
      "Material & supply tracking tools",
      "CRM for customer + lead management",
      "Proposal + estimating templates",
      "Branding refresh that wins trust",
      "Hiring help (job ads, interviews)",
      "Profit-first financial planning",
    ],
    featured: true,
  },
  {
    tier: "Tier 3",
    title: "Retainer",
    price: "$1,500 + $500/wk",
    description: "All of Tier 2, plus ongoing personalized support.",
    features: [
      "Weekly support calls & updates",
      "Real-time advice & custom checklists",
      "Done-for-you systems",
      "3+ weeks personalized consulting",
      "Implementation support",
    ],
  },
  {
    tier: "Tier 4",
    title: "Nonprofits & Grant Writing",
    price: "$1,500+",
    description: "You've got vision and heart—I'll help you secure funding and build systems.",
    features: [
      "501(c)(3) setup or compliance review",
      "Grant strategy + prospect list",
      "Compelling LOI or full proposal",
      "Budgeting + outcomes worksheets",
      "Donor management & fundraising",
      "Board development & policy templates",
      "Custom grant compliance reporting",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-amber mb-4 block">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Choose Your Path to Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <ServiceTierCard key={tier.tier} {...tier} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
