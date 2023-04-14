import hero1 from "../assets/img/hero1.png";
import hero2 from "../assets/img/hero2.png";
import hero3 from "../assets/img/hero3.png";

import p1 from "../assets/img/p1.png";
import p2 from "../assets/img/p2.png";
import p3 from "../assets/img/p3.png";
import p4 from "../assets/img/p4.png";
import p5 from "../assets/img/p5.png";
import p6 from "../assets/img/p6.png";
import p7 from "../assets/img/p7.png";
import p8 from "../assets/img/p8.png";
import p9 from "../assets/img/p9.png";
import p10 from "../assets/img/p10.png";
import p11 from "../assets/img/p11.png";
import p12 from "../assets/img/p12.png";
import p13 from "../assets/img/p13.png";
import p14 from "../assets/img/p14.png";
import p15 from "../assets/img/p15.png";

const HeroData = {
  Slides: [
    {
      id: 1,
      title: "آیفون 14 پرومکس",
      text: "می‌توانید گزینه پرداختی را انتخاب کنید که برای شما مناسب است، با یک معامله کمتر پرداخت کنید، آیفون جدید خود را به شرکت مخابراتی خود متصل کنید و سریع راه‌اندازی کنید.",
      image: hero1,
      gradient:
        "linear-gradient(280deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)",
    },
    {
      id: 2,
      title: "آیفون 14 پرومکس",
      text: "می‌توانید گزینه پرداختی را انتخاب کنید که برای شما مناسب است، با یک معامله کمتر پرداخت کنید، آیفون جدید خود را به شرکت مخابراتی خود متصل کنید و سریع راه‌اندازی کنید.",
      image: hero2,
      gradient: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    },
    {
      id: 3,
      title: "آیفون 14 پرومکس",
      text: "می‌توانید گزینه پرداختی را انتخاب کنید که برای شما مناسب است، با یک معامله کمتر پرداخت کنید، آیفون جدید خود را به شرکت مخابراتی خود متصل کنید و سریع راه‌اندازی کنید.",
      image: hero3,
      gradient:
        " linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%)",
    },
  ],
};

const ProductsData = {
  Products: [
    {
      id: 1,
      title: "آیفون 14",
      ram: 128,
      image: p1,
      rate: 4,
      description: "this is text",
      kind: "گوشی همراه",
      price: 42100000,
    },
    {
      id: 2,
      title: "آیفون 14 پرو",
      ram: 128 ,
      image: p2,
      rate: 5,
      description: "this is text",
      kind: "گوشی همراه",
      price: 60300000,
    },
    {
      id: 3,
      title: "آیفون 14 پرو",
      ram: 256,
      image: p3,
      rate: 3,
      description: "this is text",
      kind: "گوشی همراه",
      price: 63200000,
    },
    {
      id: 4,
      title: "آیفون 14 پرومکس",
      ram: 512 ,
      image: p4,
      rate: 4,
      description: "this is text",
      kind: "گوشی همراه",
      price: 84500000,
    },
    {
      id: 5,
      title: "آیفون 14 پلاس",
      ram: 128,
      image: p5,
      rate: 5,
      description: "this is text",
      kind: "گوشی همراه",
      price: 64500000,
    },
    {
      id: 6,
      title: "آیفون 14 پرومکس",
      ram: 256 ,
      image: p6,
      rate: 4,
      description: "this is text",
      kind: "گوشی همراه",
      price: 69050000,
    },
  ],
  Watch: [
    {
      id: 1,
      title: "اپل واچ",
      image: p10,
      rate: 4,
      description: "this is text",
      kind: "گوشی همراه",
      price: 40000000,
    },
    {
      id: 2,
      title: "اپل واچ",
      image: p11,
      rate: 3,
      description: "this is text",
      kind: "گوشی همراه",
      price: 40000000,
    },
    {
      id: 3,
      title: "اپل واچ",
      image: p12,
      rate: 4,
      description: "this is text",
      kind: "گوشی همراه",
      price: 40000000,
    },
    {
      id: 3,
      title: "اپل واچ",
      image: p13,
      rate: 4,
      description: "this is text",
      kind: "گوشی همراه",
      price: 40000000,
    },
    {
      id: 3,
      title: "اپل واچ",
      image: p14,
      rate: 4,
      description: "this is text",
      kind: "گوشی همراه",
      price: 40000000,
    },
    {
      id: 3,
      title: "اپل واچ",
      image: p15,
      rate: 4,
      description: "this is text",
      kind: "گوشی همراه",
      price: 40000000,
    },
  ]
};

export { HeroData, ProductsData };
