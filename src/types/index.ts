export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  service: Service;
  date: Date;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
