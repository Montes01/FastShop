export const getItemList = () => {
  return new Promise((resolve) => {
    const itemList = [
      {
        id: 1,
        title: "Item 1",
        description: "Description of Item 1",
        image: "item1.jpg",
        price: 9.99,
      },
      {
        id: 2,
        title: "Item 2",
        description: "Description of Item 2",
        image: "item2.jpg",
        price: 14.99,
      },
      {
        id: 3,
        title: "Item 3",
        description: "Description of Item 3",
        image: "item3.jpg",
        price: 19.99,
      },
      {
        id: 4,
        title: "Item 4",
        description: "Description of Item 4",
        image: "item4.jpg",
        price: 24.99,
      },
      {
        id: 5,
        title: "Item 5",
        description: "Description of Item 5",
        image: "item5.jpg",
        price: 29.99,
      },
    ];
    setTimeout(() => resolve(itemList), 1000);
  });
};
