import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function CategorySection() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((json) => setCategories(json.data));
  }, [])
  return (
    <div className="container my-5 pb-5">
      <div className="my-5 text-center">
        <h1>Categories</h1>
        <p className="text-dark">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quos
          architecto, aliquid commodi facilis rerum tempora beatae doloribus in
          sed fugiat nihil ullam excepturi minima aspernatur ad, temporibus
          magni consequuntur!
        </p>
      </div>

      <div className="row bg-primary">
        {categories.map((category, key) => (
          <div className="col-md-3 my-3 text-center fw-bold" key={key}>
            <Link
              div className="text-decoration-none"
              to={`/products/category/${category}`}
            >
              <Card>
                <Card.Body>{category.toUpperCase()}</Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
