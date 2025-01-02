export const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((currPrice) => currPrice.price);
      let maxPrice = Math.max(...priceArr);
      let minPrice = Math.min(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice, minPrice },
      };

    case "SET_GRID_VIEW":
      return { ...state, grid_view: true };

    case "SET_LIST_VIEW":
      return { ...state, grid_view: false };

    case "GET_SORT_VALUE":
      return { ...state, sorting_value: action.payload };

    case "SORTING_PRODUCTS":
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];
      const sortingProducts = (a, b) => {
        switch (sorting_value) {
          case "bestselling":
            return tempSortProduct;

          case "lowest":
            return a.price - b.price;

          case "highest":
            return b.price - a.price;

          case "az":
            return a.name.localeCompare(b.name);

          case "za":
            return b.name.localeCompare(a.name);

          default:
            return tempSortProduct;
        }
      };

      let newSortData = tempSortProduct.sort(sortingProducts);
      return { ...state, filter_products: newSortData };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (category !== "All") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.category.toLowerCase() === category.toLowerCase()
        );
      }

      if (company !== "All") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }

      if (color !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      if (price) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.price <= price
        );
      }

      return { ...state, filter_products: tempFilterProduct };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filter,
          text: "",
          category: "All",
          company: "All",
          color: "All",
          price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
          maxPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};
