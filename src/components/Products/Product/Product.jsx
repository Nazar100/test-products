import s from "./Product.module.css";

const Product = ({ product }) => {
  return (
    <div className={s.container}>
      <li className={s.item}>{product.name}</li>
    </div>
  );
};

export default Product;
