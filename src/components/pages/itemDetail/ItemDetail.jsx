import CounterContainer from "../../common/counter/CounterContainer";
import "./itemDetail.css";
const ItemDetail = ({ item, onAdd, totalItems }) => {
  console.log(item);
  return (
    <div id="prodetails" className="section-p1">
      <div className="single-pro-image">
        <img src={item.imageURL} width="100%" alt={item.title} />
      </div>
      <div className="singe-pro-details">
        <h4>{item.title}</h4>
        <span>Stock:{item.stock}</span>
        <h2>{item.price}</h2>
        <h4>Descripcion:</h4>
        <span>{item.description}</span>
      </div>
      <CounterContainer
        onAdd={onAdd}
        stock={item.stock}
        totalItems={totalItems}
      />
    </div>
  );
};

export default ItemDetail;
