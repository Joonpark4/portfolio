import { notFound } from "next/navigation";

export async function getMemoData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diary`, {
    cache: "no-cache",
  });
  if (!res.ok) return notFound();
  return res.json();
}
