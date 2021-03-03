import Product from "./Product/Product";
import s from "./Products.module.css";

const Products = ({ filteredProducts }) => {
  return (
    <ul className={s.list}>
      {filteredProducts.length ? (
        filteredProducts.map((p) => {
          return <Product key={p.img} product={p} />;
        })
      ) : (
        <h1>NOT FOUND</h1>
      )}
    </ul>
  );
};
export default Products;
