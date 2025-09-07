import type { ReactNode } from "react";

// For simple listing (like on homepage banners)
export interface Listing {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Address for properties
export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

// Offers like bed, shower, occupants
export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

// Full property details
export interface PropertyProps {
  id: string;
  name: string;
  description: string;
  address: AddressProps;
  price: number;
  image: string;
  rating: number;
  offers: OffersProps;
  category: string[];
  discount: string;
}

// Pill button
export interface PillProps {
  label: string;
  onClick?: () => void; // optional click handler
}

// Layout wrapper
export interface LayoutProps {
  children: ReactNode;
}

// PropertyCard for listing cards
export interface PropertyCardProps {
  property: {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
  };
}

// Review for property
export interface Review {
  id: string;
  comment: string;
  rating: number;
  author: string;
}