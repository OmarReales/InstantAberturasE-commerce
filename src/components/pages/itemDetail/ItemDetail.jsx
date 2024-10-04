import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
const ItemDetail = ({ item, onAdd }) => {
  console.log(item);
  return (
    <div>
      <div className="img">
        <img src={item.imageURL} alt={item.title} />
      </div>
      <div className="details">
        <h2>{item.title}</h2>
        <h4>{item.stock}</h4>
        <h5>{item.price}</h5>
        <span>{item.description}</span>
      </div>

      <CounterContainer onAdd={onAdd} stock={item.stock} />
    </div>
  );
};

export default ItemDetail;
