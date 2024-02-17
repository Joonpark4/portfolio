import { notFound } from "next/navigation";

export async function getMemoData() {
  const res = await fetch("api/diary", {
    cache: "no-cache",
  });
  if (!res.ok) return notFound();
  return res.json();
}
