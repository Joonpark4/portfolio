import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useDiaryData(){
  return useQuery({
    queryKey: ["diary"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/diary");
      return res.data;
    },
  })
}