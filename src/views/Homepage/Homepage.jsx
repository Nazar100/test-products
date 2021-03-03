import { useEffect, useState, useMemo } from "react";
import { Products, Filter } from "../../components";
import fetchProducts from "../../services/fetch";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [filterState, setFilterState] = useState([]);

  useEffect(() => {
    fetchProducts().then(({ products }) => setProducts(products));
  }, []);

  const filterChange = ({ target }) => {
    setFilterState(target.value);
  };

  const filteredProducts = useMemo(
    () => products.filter((p) => p.name.toLowerCase().includes(filterState)),
    [filterState, products]
  );

  return (
    <>
      <Filter filterState={filterState} filterChange={filterChange} />
      <Products filteredProducts={filteredProducts} />
    </>
  );
};

export default Homepage;
