import { ObjectId } from "mongodb";

export interface DiaryProps {
  title: string;
  content: string;
  date: string;
  className?: string;
  onClick?: () => void;
  isWriting?: boolean;
  id: ObjectId;
}

export interface DiaryGridProps {
  cols: number;
}

export interface DiaryForm {
  title: string;
  content: string;
  _id?: ObjectId | undefined;
  date?: string;
}
