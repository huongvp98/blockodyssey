import React, { useEffect, useState } from "react";
import { postData } from "service/listProduct";
import { ProductInfo } from "type/product";
import "./style.css";
function ProductList() {
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [listProduct, setListProduct] = useState<ProductInfo[]>([]);

  const [key, setKey] = useState<string>("all");
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const response = await postData({ limit: pageSize, skip: 0 });
    setListProduct(response.products);
    setTotal(response.total);
    console.log(response);
  };
  const onSearch = () => {
    console.log(key, value);
  };
  return (
    <div className="list-product-wrap">
      <div className="search-list">
        <select onChange={(e) => setKey(e.target.value)}>
          <option value="all">전체</option>
          <option value="title">상품명</option>
          <option value="brand">브랜드</option>
          <option value="description">상품내용</option>
        </select>
        <input onChange={(e) => setKey(e.target.value)}></input>
        <button onClick={() => onSearch()}></button>
      </div>
      <div>Total: {total}</div>

      <div className="content">
        <div className="list-product">
          <table>
            <thead>
              {/*index*/}
              <td>상품번호</td>
              {/*name*/}
              <td>상품명</td>
              {/*brand */}
              <td>브랜드</td>
              {/*content */}
              <td>상품내용</td>
              {/*price */}
              <td>가격</td>
              {/*level */}
              <td> 평점</td>
              {/*warehouse */}
              <td>재고</td>
            </thead>
            <tbody>
              {listProduct.map((product: ProductInfo, index: number) => {
                return (
                  <tr>
                    <td>{index}</td>
                    {/*name*/}
                    <td>{product.title}</td>
                    {/*brand */}
                    <td>{product.brand}</td>
                    {/*content */}
                    <td>{product.description}</td>
                    {/*price */}
                    <td>{product.price}</td>
                    {/*level */}
                    <td>{product.rating}</td>
                    {/*warehouse */}
                    <td>{product.stock}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="pagination-container">
          <div className="pagination-inner">
            <span>PageSize</span>
            <select></select>{" "}
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
