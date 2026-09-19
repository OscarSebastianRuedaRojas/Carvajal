export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  icon: string;
  linkText?: string;
  benefits: ServiceBenefit[];
  deliverables: ServiceDeliverable[];
  metaTitle: string;
  metaDescription: string;
}
