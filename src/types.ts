export type Book = {
  id: string;
  title: string;
  authorFirst: string;
  authorLast: string;
  publisher: string;
  pubCity: string;
  pubDate: string;
  description: string;
  category: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
  updatedOrderAt: string;
};

export type NewBook = Omit<Book, 'id'>;