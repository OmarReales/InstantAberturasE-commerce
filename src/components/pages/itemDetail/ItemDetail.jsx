import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h1>{item.title}</h1>

      <CounterContainer />
    </div>
  );
};

export default ItemDetail;
