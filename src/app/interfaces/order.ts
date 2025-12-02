export interface Order {
  id: number;
  customer: string;
  items: { name: string; price: number; qty?: number }[];
  total: number;
  status: 'pendiente' | 'preparando' | 'listo' | 'entregado';
  date: string;
}
