"use server";

export const fetchAnimes = async (page: number) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?${page}&limit=8&order=popularity`
  );
  const data = res.json();
  console.log(data);
  return data;
};
