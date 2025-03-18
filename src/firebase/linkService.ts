import { ref, get, update } from 'firebase/database';
import { database } from './config';

export type ProductType = 'debit_card' | 'credit_card' | 'loan' | 'cash_credit';

export interface Product {
  id: ProductType;
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
}

export const getProductLink = async (productType: ProductType): Promise<string> => {
  try {
    if (!database) {
      console.error('База данных не инициализирована');
      return '#';
    }

    // Получаем текущие данные из Firebase
    const linksRef = ref(database, 'links/' + productType);
    const counterRef = ref(database, 'counters/' + productType);
    
    const linksSnapshot = await get(linksRef);
    const counterSnapshot = await get(counterRef);
    
    if (!linksSnapshot.exists() || !counterSnapshot.exists()) {
      console.error('Данные не найдены в базе');
      return '#';
    }
    
    const links = linksSnapshot.val() as string[];
    let counter = counterSnapshot.val() as number;
    
    // Получаем текущую ссылку
    const currentLink = links[counter];
    
    // Инкрементируем счетчик и сбрасываем его, если достигнуто максимальное значение
    counter = (counter + 1) % links.length;
    
    // Обновляем счетчик в базе
    await update(ref(database), {
      [`counters/${productType}`]: counter
    });
    
    return currentLink;
  } catch (error) {
    console.error('Ошибка при получении ссылки:', error);
    return '#';
  }
}; 