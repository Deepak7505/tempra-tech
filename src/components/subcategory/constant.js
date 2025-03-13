import { categories } from "../categories/constant";


export const subCategories = {
  bottles: [
    
    {
      id: "ss-bottles",
      name: "SS Bottles",
      ProductList: categories[0].productList2,
    },
    {
      id: "hot-and-cold-bottles",
      name: "Bottles On Demand",
      ProductList: categories[0].productList3,
    },
    {
      id: "tempreture-bottles",
      parentCategory:"Bottles",
      name: "Tempreture Bottles",
      ProductList: categories[0].prodcutList,
    },
  ],

  lunchBox: [
    {
      name: "Lunch With Bottels And Spoon",
      parentCategory:"Lunch Box",
      id:"lunch-with-bottels-and-spoon",
      ProductList: categories[1].prodcutList,
    },
    {
      name: "Rectangular",
      id:"rectangular",
      ProductList: categories[1].prodcutList2,
    },
  ],

  mugs: [
    {
      name: "A Grade Mug",
      parentCategory:"Mugs",
      id:"a-grade-mug",
      ProductList: categories[2].prodcutList4,
    },
    {
      name: "AAA Grade Mug",
      id:"aaa-grade-mug",
      ProductList: categories[2].prodcutList2,
    },
    {
      name: "Heart Handle Shape Mug",
      id:"heart-handle-shape-mug",
      ProductList: categories[2].prodcutList5,
    },
    {
      name: "Megic Mug",
      id:"megic-mug",
      ProductList: categories[2].prodcutList3,
    },
    {
      name: "Metellic Mug",
      id:"metellic-mug",
      ProductList: categories[2].prodcutList6,
    }, 
    {
      name: "3 Tone Mug",
      id:"3-tone-mug",
      ProductList: categories[2].prodcutList,
    },
  ],

  clothes: [
    {
      id: "t-shirts",
      parentCategory:"Clothes",
      name: "T shirts",
      ProductList: categories[3].prodcutList,
    },
    { id: "shirts", name: "Shirts", ProductList: categories[3].prodcutList },
  ],

  mousePad: [
    {
      name: "Small Mouse Pad( 7.9 x 9 )",
      parentCategory:"Mouse Pad",
      id:"7.9-9-inch-mouse-pad",
      ProductList: categories[4].prodcutList,
    },
    {
      name: "Large Mouse Pad( 11 x 23 )",
      id:"11-23-inch-mouse-pad",
      ProductList: categories[4].prodcutList2,
    }
  ],

  paperClipBoard: [
    {
      name: "MDF Clip Board",
      parentCategory:"Paper Clip Board",
      id:"mdf-clip-board",
      ProductList: categories[5].productList2,
    },
    {
      name: "Plastic Clip Board",
      id:"plastic-clip-board",
      ProductList: categories[5].prodcutList,
    },
    {
      name: "Acrylic Clip Board",
      id:"acrylic-clip-board",
      ProductList: categories[5].prodcutList,
    },
  ],

  paperWeight: [
    {
      name: "Acrylic Paper Weight",
      parentCategory:"Paper Weight",
      id:"acrylic-paper-weight",
      ProductList: categories[6].prodcutList,
    },
    {
      name: "Plastic Paper Weight",
      id:"plastic-paper-weight",
      ProductList: categories[6].prodcutList2,
    },
  ],
  pen: [
    {
      name: "Plastic Pen",
      parentCategory:"Pen",
      id:"plastic-pen",
      ProductList: categories[7].prodcutList,
    },
    {
      name: "Tip Top Pen",
      id:"tip-top-pen",
      ProductList: categories[7].prodcutList,
    },
    {
      name: "SS Quality Pen",
      id:"ss-quality-pen",
      ProductList: categories[7].prodcutList,
    },
    {
      name: "Luxury Pen",
      id:"luxury-pen",
      ProductList: categories[7].prodcutList,
    },
  ],
};
