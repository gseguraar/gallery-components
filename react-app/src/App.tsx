import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  //state variable that determines the visibility of showing or not the alert, false = initially hidden
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["new york", "tokio", "london", "amsterdam"];
  const handleSelect = (item: String) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelect} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          THIS IS THE ALERT
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        my btn
      </Button>
    </div>
  );
}

export default App;
