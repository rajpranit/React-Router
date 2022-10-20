import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">The Online Course</Link>
        </li>
        <li>
          <Link to="/products/p3">Samsung TV</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
