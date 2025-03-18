# Лендинг с циклическим распределением ссылок

Этот проект представляет собой лендинг с 4 карточками финансовых продуктов. При нажатии на кнопку "Оформить" пользователь перенаправляется на внешнюю ссылку, которая выбирается циклически из пула доступных ссылок для каждого продукта.

## Технологии

- Next.js 15
- TypeScript
- Tailwind CSS
- Firebase Realtime Database

## Структура проекта

- `src/app` - Основные страницы приложения
- `src/components` - Компоненты React
- `src/firebase` - Конфигурация и сервисы Firebase
- `src/constants` - Константы и данные
- `public/images` - Статические изображения

## Настройка Firebase

1. Создайте проект в [Firebase Console](https://console.firebase.google.com/)
2. Включите Realtime Database в разделе "Build" 
3. Импортируйте следующие данные в базу:

```json
{
  "links": {
    "debit_card": ["https://example.com/debit1", "https://example.com/debit2", "https://example.com/debit3", "https://example.com/debit4"],
    "credit_card": ["https://example.com/credit1", "https://example.com/credit2", "https://example.com/credit3", "https://example.com/credit4"],
    "loan": ["https://example.com/loan1", "https://example.com/loan2", "https://example.com/loan3", "https://example.com/loan4"],
    "cash_credit": ["https://example.com/cash1", "https://example.com/cash2", "https://example.com/cash3", "https://example.com/cash4"]
  },
  "counters": {
    "debit_card": 0,
    "credit_card": 0,
    "loan": 0,
    "cash_credit": 0
  }
}
```

4. Добавьте веб-приложение в проект и получите настройки конфигурации
5. Заполните файл `.env.local` полученными значениями

## Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

## Деплой на Vercel

1. Создайте аккаунт на [Vercel](https://vercel.com/) если у вас его еще нет
2. Установите Vercel CLI (опционально):
   ```bash
   npm install -g vercel
   ```

3. Вариант 1: Деплой через GitHub
   - Создайте репозиторий на GitHub и загрузите код
   - Войдите в Dashboard Vercel
   - Нажмите "New Project" и выберите импорт из GitHub
   - Выберите репозиторий и продолжите настройку
   - В разделе "Environment Variables" добавьте все переменные из вашего файла `.env.local`
   - Нажмите "Deploy"

4. Вариант 2: Деплой через CLI
   - Войдите в Vercel из терминала:
     ```bash
     vercel login
     ```
   - Находясь в корне проекта, запустите:
     ```bash
     vercel
     ```
   - Следуйте инструкциям в интерактивном режиме
   - Для добавления переменных окружения используйте:
     ```bash
     vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
     ```
     и так далее для каждой переменной из `.env.local`

## Проверка работы

После деплоя убедитесь, что:
1. Лендинг корректно отображается
2. При нажатии на кнопки происходит перенаправление на внешние ссылки
3. Ссылки циклически меняются для каждого нового пользователя
4. Адаптивная верстка работает на разных устройствах
