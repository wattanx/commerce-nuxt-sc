export default defineEventHandler(async (event) => {
  const session = await getUserSession(event);
  const sessionId = session.id;

  if (!sessionId) {
    return [];
  }

  const storage = useStorage("cart");
  const items = await storage.getItem(sessionId);

  return items || [];
});
