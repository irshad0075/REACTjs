import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';

export function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoryName}`)
      .then(response => setProducts(response.data.products))
      .catch(error => console.error(error));
  }, [categoryName]);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1>{categoryName.toUpperCase()}</h1>
        <div className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quos molestiae fugit enim consequatur blanditiis est natus, iste ducimus eius eos reiciendis suscipit, velit delectus a corporis magni esse eaque.</div>
      </div>
      <div className="row">
        {products.map((val, key) => (
          <div className="col-md-6" key={key}>
            <Card>
              <Card.Img variant="top" src={val.thumnail} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
