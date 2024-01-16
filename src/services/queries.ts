import { useQuery, useMutation } from "@tanstack/react-query";
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

// export function useAddDiary(){
//   return useMutation({
//     mutationFn: async (diary) => {
//       const res = await axios.post("http://localhost:3000/api/diary", diary);
//       return res.data;
//     },
//   })
// }