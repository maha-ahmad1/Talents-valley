import { useState } from "react";
import "./DropDown.css";

const DropDown = ({ items }) => {
  const [isOpen, setOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    toggleDropdown();
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id === selectedItem).label
          : "Choose your document type" } 
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items &&
          items.map((item) => (
            <div
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
              key={item.id}
            >
              <span
                className={`dropdown-item-dot ${
                  item.id === selectedItem && "selected"
                }`}
              >
                •{" "}
              </span>
              {item.label}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DropDown;
