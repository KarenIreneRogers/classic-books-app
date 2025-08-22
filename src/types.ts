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

export type NewBook = Omit<Book, 'id'| 'createdAt'| 'updatedAt'|'updatedOrderAt'>;

// Define allowed sort keys for type safety
export type SortableBookKey = 'title' | 'authorLast' | 'read';