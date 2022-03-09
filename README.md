# NeoLight Product Card

Testing NPM deployment with TSDX.

### Example

```JSX
import {} from "neolight-product-card";
```

```JSX
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {() => (
        <>
            <ProductCard.Image />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons />
        </>
    )}
</ProductCard>
```
