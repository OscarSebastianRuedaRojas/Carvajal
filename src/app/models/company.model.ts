export interface ValueProposition {
  title: string;
  description: string;
  icon: string;
}

export interface MethodologyStep {
  stepNumber: string; // "01", "02", "03", "04"
  title: string;
  description: string;
}

export interface SocialLinks {
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}

export interface CompanyInfo {
  companyName: string;
  tagline: string;
  responseTimeCommitment: string;
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  aboutBadge: string;
  aboutTitle: string;
  aboutDescription: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  addressPlaceholder: string;
  whatsappUrl: string;
  logoHorizontal: string;
  logoVertical: string;
  socialLinks: SocialLinks;
  valuePropositions: ValueProposition[];
  methodologySteps: MethodologyStep[];
}
