import React, { useState, useRef, useEffect } from "react";
import dot from "../../Assets/dot.svg";
import "./../../App.scss";
const CategoriesProduct = ({
  text,
  placeholder,
  big,
  setValue,
  value,
  type,
}) => {
  const valueField = useRef(null);
  const [warning, setWarning] = useState(false);
  const handleKeyDown = (e) => {
    if (valueField.current.value === " ") {
      setValue("");
    } else {
      setValue(e.target.value);
    }
    console.log(valueField.current.value);
  };
  const handleKeyPrice = (e) => {
 const values = valueField.current.value 
    const price = values.replace(/\ /g, '').replace(/\D/g,'')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    setValue(price);
  };
  useEffect(() => {
    setWarning(false);
  }, [value]);
  return (
    <div className="categories_wrapper">
      <div className="text_container">
        <span className="description">{text}</span>
        <img src={!big && dot} className="dot" />
      </div>
      <div
        className="input_container"
        style={{
          height: big ? 108 : 36,
          outline: warning && value === "" && "1px solid #FF8484",
        }}
      >
        {!big && (
          <input
            value={value}
            onChange={!type ? handleKeyDown : handleKeyPrice}
            ref={valueField}
            
            placeholder={placeholder}
            onBlur={() => setWarning(true)}
          />
        )}
        {big && (
          <textarea
            value={value}
            onChange={handleKeyDown }
            ref={valueField}
            placeholder={placeholder}
           
           
          />
        )}
      </div>
      {warning && value === "" && (
        <div className="text_warning">
          <span>Поле является обязательным</span>
        </div>
      )}
    </div>
  );
};

export default CategoriesProduct;
