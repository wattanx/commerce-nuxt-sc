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

  const body = await readBody<{ productId: number; size: string; quantity: number }>(event);

  const storage = useStorage<CartItem[]>("cart");
  const items: CartItem[] = (await storage.getItem(sessionId)) ?? [];

  const existing = items.find(
    (item) => item.productId === body.productId && item.size === body.size,
  );

  if (existing) {
    existing.quantity += body.quantity;
  } else {
    items.push({
      productId: body.productId,
      size: body.size,
      quantity: body.quantity,
    });
  }

  await storage.setItem(sessionId, items);

  return items;
});
