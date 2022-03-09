import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

type HOCType = typeof ProductCardHOC;
interface ProductCardHOCInterface extends HOCType {
    Image: typeof ProductImage,
    Title: typeof ProductTitle,
    Buttons: typeof ProductButtons,
}

export const ProductCard: ProductCardHOCInterface = Object.assign(
  ProductCardHOC,
  {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons,
  }
);

export default ProductCard;
