import React from "react"; React;

import renderer from "react-test-renderer";
import { ProductTitle, ProductCard } from "../../src/components";
import {product1} from "../data/products";

describe("Product Title", () => {
    it("should show component with custom title", () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it("should show component with the product's name", () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {() => (
                    <ProductTitle />
                )}
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
