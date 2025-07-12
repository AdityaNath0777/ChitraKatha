import { BASE_URL } from "@/config/api";

export async function apiFetch<T>(path: string): Promise<T> {
  const url = `${BASE_URL}/${path}`;
  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error(`API Error: ${response.status}`);
  return response.json();
}
