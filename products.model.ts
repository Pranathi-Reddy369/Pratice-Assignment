export interface Product {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  availabilityStatus: string;
  stock: number;
  images: string[];
}
export interface Student {
  id?:number;
  firstname: string;
  lastname: string;
  email: string;
  age: number;
  gender: string;
  dob: string;           // Format: yyyy-mm-dd
  phone: string;
  address: string;
  country: string;
  username: string;
  password: string;
}

export interface Teacher{
  id?:number,
  name:string,
  subject:string
}
export interface School{
  id?:number,
  name:string,
  strength:number
}
export interface Principal{
  id?: any;
  name:string;
  experience:number;
}