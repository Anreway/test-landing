import { Product } from '../firebase/linkService';

export const PRODUCTS: Product[] = [
  {
    id: 'debit_card',
    title: 'Дебетовая карта',
    description: 'Кэшбек до 3000₽ в месяц',
    imageSrc: '/images/Product_1.png',
    buttonText: 'Оформить'
  },
  {
    id: 'credit_card',
    title: 'Кредитная карта',
    description: 'Снятие наличных без комиссии',
    imageSrc: '/images/Product_2.png',
    buttonText: 'Оформить'
  },
  {
    id: 'loan',
    title: 'Займ',
    description: 'Под выгодный процент',
    imageSrc: '/images/Product_3.png',
    buttonText: 'Оформить'
  },
  {
    id: 'cash_credit',
    title: 'Кредит наличными',
    description: 'До 90 дней без первого платежа',
    imageSrc: '/images/Product_4.png',
    buttonText: 'Оформить'
  }
]; 