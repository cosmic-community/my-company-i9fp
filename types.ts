export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    short_description?: string;
    description?: string;
    featured_image?: CosmicImage;
    icon?: string;
    key_features?: string[] | string;
    starting_price?: string;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    photo?: CosmicImage;
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title?: string;
    client_name?: string;
    industry?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    hero_image?: CosmicImage;
    related_service?: Service;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    client_role?: string;
    client_photo?: CosmicImage;
    rating?: number;
    related_case_study?: CaseStudy;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}