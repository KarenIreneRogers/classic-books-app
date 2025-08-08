export type Book = {
  id: string;
  title: string;
  author: string;
  publisher: string;
  pubCity: string;
  pubDate: string;
  description: string;
  category: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
};

export type NewBook = Omit<Book, 'id'>;