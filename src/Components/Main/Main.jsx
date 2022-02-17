import React, { useState, useEffect } from "react";
import AddProduct from "./../AddProduct/AddProduct";
import "./../../App.scss";
import { Product } from "../Product/Product";
import arrow from "../../Assets/arrow.svg";

const Main = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("product")) || []
  );
  const [filterTypes, setFilterTypes] = useState([
    { title: "По возрастанию" },
    { title: "По убыванию" },
    { title: "По названию" },
  ]);
  const [currentFilter, setCurrentFilter] = useState({ title: "По умолчанию" });
  const coinTypesFiltered = filterTypes.filter(
    (item) => item.title !== currentFilter.title
  );
  const [chooseFilter, setChooseFilter] = useState(false);

  const addProduct = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        name: userInput.name,
        description: userInput.description,
        src: userInput.src,
        price: userInput.price,
      };

      setProducts([...products, newItem]);
    }
  };

  const removeProduct = (id) => {
    setTimeout(()=>{
    setProducts([...products.filter((product) => product.id !== id)]);
    
  }
,1000)}

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(products));
  }, [products]);

  const sortedProducts = (title) => {
    if (title === "По убыванию") {
      products.sort((a, b) => {
        const firstPrice = parseInt(a.price.replace(/ /g, ""));
        const secondPrice = parseInt(b.price.replace(/ /g, ""));
        if (firstPrice > secondPrice) {
          return -1;
        }
        if (firstPrice < secondPrice) {
          return 1;
        }
        console.log(firstPrice);
        return 0;
      });
    }
    if (title === "По возрастанию") {
      products.sort((a, b) => {
        const firstPrice = parseInt(a.price.replace(/ /g, ""));
        const secondPrice = parseInt(b.price.replace(/ /g, ""));
        if (firstPrice < secondPrice) {
          return -1;
        }
        if (firstPrice > secondPrice) {
          return 1;
        }

        return 0;
      });
    }
    if (title === "По названию") {
      products.sort((a, b) => {
        const firstName = a.name.toLowerCase();
        const secondName = b.name.toLowerCase();
        if (firstName < secondName) {
          return -1;
        }
        if (firstName > secondName) {
          return 1;
        }
        return 0;
      });
    }
  };

  return (
    <div className="main_container">
      <div className="main_up_wrapper">
        <h1>Добавление товара</h1>

        <div
          className="filter_block"
          onClick={() => setChooseFilter(!chooseFilter)}
        >
          <span>{currentFilter.title}</span>
          <img src={arrow} />
          {chooseFilter && (
            <div className="choose_filter_block">
              {coinTypesFiltered.map((i) => {
                return (
                  <span
                    onClick={() => {
                      setCurrentFilter(i);
                      setChooseFilter(false);
                      sortedProducts(i.title);
                    }}
                    style={{ fontSize: 15 }}
                  >
                    {i.title}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="main_wrapper">
        <AddProduct addProduct={addProduct} />
        <div className="product_container">
          {products.map((product) => {
            return (
              <Product
                product={product}
                key={product.id}
                removeProduct={removeProduct}
               
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
