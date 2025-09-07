import type { ReactNode } from "react";

export interface Listing {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface AddressProps { //they have their own interfaces because they are objects
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}


export interface PropertyProps {
  id: number;
  name: string;
  address: AddressProps;
  price: number;
  image: string;
  rating: number;
  offers: OffersProps;
  category:String [];
  discount:string;
}

export interface LayoutProps {
  children: ReactNode; // ReactNode is a type from React used with TypeScript. It means: “whatever valid JSX/HTML element or text can go inside this component”.
}

export interface PillProps {
  label: string;
  onClick?: () => void; // optional click handler
}

export interface PropertyCardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
}
