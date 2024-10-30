import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item, onAdd, totalItems }) => {
  console.log(item);
  return (
    <section style={{ padding: "40px 80px", display: "flex" }}>
      <div>
        <img src={item.imageURL} width="100%" alt={item.title} />
      </div>
      <div>
        <h6>{item.brand}</h6>
        <h4 style={{ padding: "40px 0 20px 0" }}>{item.title}</h4>
        <span style={{ lineHeight: "25px" }}>Stock:{item.stock}</span>
        <h2 style={{ fontSize: "26px" }}>${item.price}</h2>
        <h4>Descripcion:</h4>
        <span>{item.description}</span>
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
