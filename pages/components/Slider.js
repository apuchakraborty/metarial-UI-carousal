import React from "react";
import Carousel from "react-material-ui-carousel";
import Items from "./Items";

export default function Slider(props) {
  var items = [
    {
      img:
        "https://images.unsplash.com/photo-1623228675987-57d5999f6c5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      img:
        "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    }
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Items key={i} item={item} />
      ))}
    </Carousel>
  );
}
