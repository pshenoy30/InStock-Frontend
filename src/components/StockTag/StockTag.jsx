import "./StockTag.scss";

function StockTag({ stockStatus }) {
  let className = "stockTag";

  if (stockStatus === "In Stock") {
    className += "__inStock";
  } else if (stockStatus === "Out of Stock") {
    className += "__outOfStock";
  }

  return (
    <div className={className}>{stockStatus}</div>
  )
   
}

export default StockTag;
