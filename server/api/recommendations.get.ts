interface CartItem {
  productId: number;
  size: string;
  quantity: number;
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const currentProductId = Number(query.currentProductId);

  const session = await getUserSession(event);
  const sessionId = session.id;

  let cartItems: CartItem[] = [];
  if (sessionId) {
    const storage = useStorage<CartItem[]>("cart");
    cartItems = (await storage.getItem(sessionId)) ?? [];
  }

  const cartProductIds = new Set(cartItems.map((item) => item.productId));
  const excludeIds = new Set([currentProductId, ...cartProductIds]);

  // Count categories in cart
  const categoryCounts = new Map<string, number>();
  for (const item of cartItems) {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      categoryCounts.set(product.category, (categoryCounts.get(product.category) ?? 0) + item.quantity);
    }
  }

  // Sort categories by count (descending)
  const sortedCategories = [...categoryCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([category]) => category);

  const candidates = products.filter((p) => !excludeIds.has(p.id));

  // Prioritize products from cart's top categories
  const prioritized = candidates.sort((a, b) => {
    const aIndex = sortedCategories.indexOf(a.category);
    const bIndex = sortedCategories.indexOf(b.category);
    const aPriority = aIndex === -1 ? Infinity : aIndex;
    const bPriority = bIndex === -1 ? Infinity : bIndex;
    return aPriority - bPriority;
  });

  return prioritized.slice(0, 4);
});
