import SHOP_DATA from "../../shop-data.json";

function Shop() {
  return (
    <div>
      {SHOP_DATA.map(({ id, name, price }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>${price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
