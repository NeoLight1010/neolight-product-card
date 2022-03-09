import React from "react"; React;

import renderer from "react-test-renderer";
import { ProductCard, ProductImage } from "../../src/components";
import {product2} from "../data/products";

describe("Product Image", () => {
    it("should show component with custom image", () => {
        const wrapper = renderer.create(
            <ProductImage img="./my-custom-image.jpg"/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it("should show component with the product's image", () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {() => (
                    <ProductImage />
                )}
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
