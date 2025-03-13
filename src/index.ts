import * as ItemsAPI from './ItemResource.js';

const API: ItemsAPI.ItemsResource = new ItemsAPI.ItemsResource("http://localhost:3000");

API.getItems().then((items) => {
  console.log(items);
});
