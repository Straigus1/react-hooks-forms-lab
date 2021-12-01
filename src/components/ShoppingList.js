import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterItems, setFilterItems] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleItemFilter(e) {
    setFilterItems(e.target.value)
  }

  const searchDisplay = items.filter((items) => {
    return items.name == filterItems
  })
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  

      return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} search={filterItems} onSearchChange={handleItemFilter} />
      <ul className="Items">
        {searchDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          )) }
        
      </ul>
    </div>
  );
}

export default ShoppingList;
