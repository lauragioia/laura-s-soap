
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1">
      <div className="glass-card h-full p-6 space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-playfair text-xl">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
          <p className="text-xs text-muted-foreground">SKU: {product.sku}</p>
          <p className="font-semibold">€{product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
