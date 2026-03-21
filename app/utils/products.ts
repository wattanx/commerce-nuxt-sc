import item1 from "~/assets/images/item_1.png";
import item2 from "~/assets/images/item_2.png";
import item3 from "~/assets/images/item_3.png";
import item4 from "~/assets/images/item_4.png";
import item5 from "~/assets/images/item_5.png";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    description:
      "A timeless white crew-neck t-shirt made from premium cotton. Comfortable and versatile for everyday wear.",
    price: 29,
    category: "Tops",
    image: item1,
  },
  {
    id: 2,
    name: "Straight Fit Denim Jeans",
    description:
      "Classic straight-fit denim jeans with a medium wash. Durable and stylish for any occasion.",
    price: 79,
    category: "Bottoms",
    image: item2,
  },
  {
    id: 3,
    name: "Essential Black T-Shirt",
    description:
      "A wardrobe staple black crew-neck t-shirt. Soft, breathable fabric with a relaxed fit.",
    price: 29,
    category: "Tops",
    image: item3,
  },
  {
    id: 4,
    name: "Beige Relaxed T-Shirt",
    description:
      "A warm beige t-shirt with a relaxed silhouette. Perfect for layering or wearing on its own.",
    price: 34,
    category: "Tops",
    image: item4,
  },
  {
    id: 5,
    name: "Light Blue T-Shirt",
    description:
      "A refreshing light blue t-shirt crafted from soft cotton blend. Great for casual outings.",
    price: 34,
    category: "Tops",
    image: item5,
  },
];

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}
