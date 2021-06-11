import { Paper } from "@material-ui/core";

export default function Item(props) {
  return (
    <Paper>
      <img src={props.item.img} alt="" />
    </Paper>
  );
}
