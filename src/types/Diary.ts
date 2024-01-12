export interface DiaryProps {
  _id: string;
  title: string;
  content: string;
  date: string;
  onClick: () => void;
}