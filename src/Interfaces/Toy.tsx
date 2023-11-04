export type Toy = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  feedback: Feedback[];
};

export type Feedback = {
  text: string;
  author: string;
  date: string;
};
