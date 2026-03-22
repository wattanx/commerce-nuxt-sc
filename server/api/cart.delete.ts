interface CartItem {
  productId: number;
  size: string;
  quantity: number;
}

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event);
  const sessionId = session.id;

  if (!sessionId) {
    throw createError({ statusCode: 401, statusMessage: "No session" });
  }

  const query = getQuery<{ index: string }>(event);
  const index = Number(query.index);

  const storage = useStorage<CartItem[]>("cart");
  const items: CartItem[] = (await storage.getItem(sessionId)) ?? [];

  items.splice(index, 1);

  await storage.setItem(sessionId, items);

  return items;
});
