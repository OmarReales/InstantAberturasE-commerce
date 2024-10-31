import CounterContainer from "../../common/counter/CounterContainer";
import "./itemDetail.css";

const ItemDetail = ({ item, onAdd, totalItems }) => {
  return (
    <section className="item-detail">
      <div className="item-image">
        <img src={item.imageURL} alt={item.title} />
      </div>
      <div className="item-info">
        <span className="brand">{item.brand}</span>
        <h1 className="title">{item.title}</h1>
        <div className="stock">Stock: {item.stock}</div>
        <div className="price">${item.price}</div>
        <div className="description">
          <h4>Descripción:</h4>
          <p>{item.description}</p>
        </div>
        <CounterContainer
          onAdd={onAdd}
          stock={item.stock}
          totalItems={totalItems}
        />
      </div>
    </section>
  );
};

export default ItemDetail;
