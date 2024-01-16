export interface DiaryProps {
  title: string;
  content: string;
  date: string;
  className?: string;
  onClick?: () => void;
  isWriting?: boolean;
  getDiaryData?: any;
}

export interface DiaryGridProps {
  cols : number;
}

export interface DiaryForm {
  title: string;
  content: string;
}