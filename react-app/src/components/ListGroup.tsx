import { useState } from "react";

/* --- PROPS (REUSABLE) ---- to be able to reuse a component and fill it in with some diferent data that has the same structure we use 
  props 
  */
//create an object with 2 properties
//we use an interface to define the shape or interface of an object
//after an item is selected we need an action ... but we don't do that INSIDE of the component otherwise it won't be reusable
//props-->immutable, cause a re render

interface Props {
  items: string[];
  heading: string;
  // we want a f(x) that recives a string as a parameter and it's void just to handle the selected item by the user
  onSelectItem: (item: string) => void;
}

//{ items, heading } --> this is a distructure of parameters, instead of accesing to them by props.property we can specifity which one to use.
function ListGroup({ items, heading, onSelectItem }: Props) {
  //event handler
  //its a hook that will tell react this component will change his status
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // hook = object that will have a status and change over time

  return (
    <>
      <h1>{heading}</h1>
      {/* really used technique to render data/ conditional rendering*/}
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {/*do mapping with to convert each item into another TYPE of item */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        {/*convert each item into a li element */}
      </ul>
    </>
  );
}

export default ListGroup;
