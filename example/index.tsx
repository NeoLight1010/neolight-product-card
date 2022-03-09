import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';
import {Product} from '../dist/interfaces/interfaces';

const product: Product = {
  title: "Test Product",
}

const App = () => {
  return (
    <>
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
