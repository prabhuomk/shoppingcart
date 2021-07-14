import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import { useState } from "react";
export function Cart({ title, src, price, count, SetCount }) {
  const [expand, SetExpand] = useState(false);
  return (
    <div className="Pro">
      <Card
        className="cards"
        style={{
          width: "300px",
          backgroundColor: "sandybrown",
          margin: "10px"
        }}
      >
        <h3>{title}</h3>
        <img src={src} alt={"noimage found"} height="100px" />
        <h4>{price}</h4>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            SetExpand(!expand);
            SetCount(expand ? count - 1 : count + 1);
          }}
        >
          {expand ? "remove from" : "Add To"} Cart
        </Button>
      </Card>
    </div>
  );
}
