export interface DiaryProps {
  title: string;
  content: string;
  date: string;
  className?: string;
  onClick?: () => void;
}