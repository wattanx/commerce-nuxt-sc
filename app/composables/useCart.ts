import type { Product } from "~/utils/products";

interface ServerCartItem {
  productId: number;
  size: string;
  quantity: number;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

function toCartItems(serverItems: ServerCartItem[]): CartItem[] {
  return serverItems
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      return { product, size: item.size, quantity: item.quantity };
    })
    .filter((item): item is CartItem => item !== null);
}

export function useCart() {
  const items = useState<CartItem[]>("cart", () => []);

  const { refresh } = useFetch<ServerCartItem[]>("/api/cart", {
    default: () => [],
    onResponse({ response }) {
      items.value = toCartItems(response._data || []);
    },
    immediate: true,
  });

  async function addItem(product: Product, size: string, quantity = 1) {
    const data = await $fetch<ServerCartItem[]>("/api/cart", {
      method: "POST",
      body: { productId: product.id, size, quantity },
    });
    items.value = toCartItems(data);
  }

  async function removeItem(index: number) {
    const data = await $fetch<ServerCartItem[]>("/api/cart", {
      method: "DELETE",
      body: { index },
    });
    items.value = toCartItems(data);
  }

  const totalItems = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0));

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  );

  return {
    items,
    addItem,
    removeItem,
    totalItems,
    totalPrice,
    refresh,
  };
}
