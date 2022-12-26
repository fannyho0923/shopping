import { post } from "..";

export const createProduct = async (token, data) => {
  console.log(data);
  return post(`/product?accessToken=${token}`, data);
};
export const createImg = async (token, data) => {
  console.log(data);
  return post(`/product/image?accessToken=${token}`, data);
};
// name,
// price,
// originalPrice,
// stock,
// startSaleDate,
// endSaleDate,
// description,
// information,
// typeId,
// categoryId,
// languageId,
// statusId,

// {
//   "name" : "超級人馬",
//   "price" : 999,
//   "originalPrice" : 99999,
//   "stock" : 100,
//   "startSaleDate" : 0,
//   "endSaleDate" : 0,
//   "description": "test",
//   "information" : "test",
//   "typeId" : 1,
//   "categoryId" : 1,
//   "languageId" : 3,
//   "statusId" : 1
// }
