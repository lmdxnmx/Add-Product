import React, { useState } from "react";
import CategoriesProduct from "./CategoriesProduct";
import "./../../App.scss";
const AddProduct = ({ addProduct }) => {
  let handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      name: name,
      description: description,
      src: src,
      price: price,
    });
    setName("");
    setDescription("");
    setSrc("");
    setPrice("");
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [src, setSrc] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div className="addproduct_wrapper">
      <CategoriesProduct
        text={"Наименование товара"}
        placeholder={"Введите наименование товара"}
        setValue={setName}
        value={name}
        w
      />
      <CategoriesProduct
        text={"Описание товара"}
        placeholder={"Введите описание товара"}
        big
        setValue={setDescription}
        value={description}
      />
      <CategoriesProduct
        text={"Ссылка на изображение товара"}
        placeholder={"Введите ссылку"}
        setValue={setSrc}
        value={src}
      />
      <CategoriesProduct
        text={"Цена товара"}
        placeholder={"Введите цену"}
        setValue={setPrice}
        value={price}
        type
      />
      <form onSubmit={handleSubmit}>
        <div className="btn_container">
          <button
            className={
              name === "" || src === "" || price === ""
                ? "btn_add_disable"
                : "btn_add_active"
            }
            disabled={name === "" || src === "" || price === "" ? true : false}
            onClick={handleSubmit}
          >
            Добавь товар
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
