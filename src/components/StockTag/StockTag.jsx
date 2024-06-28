import "./StockTag.scss";

function StockTag({ stockStatus }) {
  let className = "stockTag";

  if (stockStatus === "in stock") {
    className += " inStock";
  } else if (stockStatus === "out of stock") {
    className += " outOfStock";
  }

  return (
    <div className={className}>{stockStatus}</div>
  )
   
}

export default StockTag;
