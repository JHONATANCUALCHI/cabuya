// src/data/products.js

export const products = [
  {
    id: "cab-001",
    name: "Alpargata Imbabura",
    slug: "alpargata-imbabura",
    price: 45.00,
    currency: "USD",
    category: "artesanal",         // 'women' | 'men' | 'kids'
    badge: "Nuevo",            // null si no aplica
    isAvailable: true,
    images: [
      "/assets/images/products/ansestral/ans_01/ans01_001.jpeg",
      "/assets/images/products/ansestral/ans_01/ans01_002.jpeg",
    ],
    video: "/assets/videos/baseCabuya.mp4",
    description: "Diseño clásico de Otavalo con materiales naturales y tejidos tradicionales. Comodidad y estilo con herencia andina.",
    materials: ["Yute natural", "Suela de caucho", "Hilos de algodón"],
    sizes: [35, 36, 37, 38, 39, 40, 41],
    featured: true
  },
  {
    id: "cab-002",
    name: "Mocasín Otavalo",
    slug: "mocasin-otavalo",
    price: 52.00,
    currency: "USD",
    category: "artesanal",
    badge: "Popular",
    isAvailable: true,
    images: [
      "/assets/images/products/ansestral/ans_02/ans02_003.jpeg",
      "/assets/images/products/ansestral/ans_02/ans02_002.jpeg",
      "/assets/images/products/ansestral/ans_02/ans02_001.jpeg",
    ],
    description: "Elegancia artesanal para el día a día. Cuero de alta calidad procesado por artesanos locales.",
    materials: ["Cuero vacuno", "Tejido artesanal", "Suela flexible"],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    featured: true
  },
  {
    id: "cab-003",
    name: "Sandalia Peguche",
    slug: "sandalia-peguche",
    price: 38.00,
    currency: "USD",
    category: "artesanal",
    badge: null,
    isAvailable: true,
    images: [
      "/assets/images/products/ansestral/ans_04/ans04_002.jpeg",
      "/assets/images/products/ansestral/ans_04/ans04_001.jpeg",
      "/assets/images/products/ansestral/ans_04/ans04_002.jpeg",
    ],
    description: "Frescura y tradición en cada paso. Inspirada en las cascadas de Peguche.",
    materials: ["Fibras naturales", "Suela anatómica"],
    sizes: [35, 36, 37, 38, 39, 40],
    featured: false
  },
  {
    id: "cab-004",
    name: "Botín Cotacachi",
    slug: "botin-cotacachi",
    price: 65.00,
    currency: "USD",
    category: "cotidiana",
    badge: "Edición Limitada",
    isAvailable: true,
    images: [
      "/assets/images/products/ansestral/ans_03/ans03_003.jpeg",
      "/assets/images/products/ansestral/ans_03/ans03_001.jpeg",
      "/assets/images/products/ansestral/ans_03/ans03_002.jpeg",
    ],
    description: "Resistencia y diseño. Un homenaje a la tierra del cuero.",
    materials: ["Cuero premium", "Forro térmico", "Suela track"],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    featured: true
  },
  {
    id: "cab-005",
    name: "Botín Cotacachi",
    slug: "botin-cotacachi",
    price: 65.00,
    currency: "USD",
    category: "cotidiana",
    badge: "Edición Limitada",
    isAvailable: true,
    images: [
      "/assets/images/products/cotidiana/cot_01/cot01_002.jpeg",
      "/assets/images/products/cotidiana/cot_01/cot01_001.jpeg",
      "/assets/images/products/cotidiana/cot_01/cot01_003.jpeg",
      "/assets/images/products/cotidiana/cot_01/cot01_004.jpeg",
    ],
    description: "Resistencia y diseño. Un homenaje a la tierra del cuero.",
    materials: ["Cuero premium", "Forro térmico", "Suela track"],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    featured: true
  },
  {
    id: "cab-006",
    name: "Cotacachi",
    slug: "botin-cotacachi",
    price: 65.00,
    currency: "USD",
    category: "moderna",
    badge: "Edición Limitada",
    isAvailable: true,
    images: [
      "/assets/images/products/moderna/mod_01/mod01_002.jpeg",
      "/assets/images/products/moderna/mod_01/mod01_001.jpeg"
    ],
    description: "Resistencia y diseño. Un homenaje a la tierra del cuero.",
    materials: ["Cuero premium", "Forro térmico", "Suela track"],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    featured: true
  },
  {
    id: "cab-007",
    name: "Botín Cotacachi",
    slug: "botin-cotacachi",
    price: 65.00,
    currency: "USD",
    category: "moderna",
    badge: "Edición Limitada",
    isAvailable: true,
    images: [
      "/assets/images/products/moderna/mod_02/mod02_001.jpeg",
      "/assets/images/products/moderna/mod_02/mod02_002.jpeg",
      "/assets/images/products/moderna/mod_02/mod02_003.jpeg"
    ],
    description: "Resistencia y diseño. Un homenaje a la tierra del cuero.",
    materials: ["Cuero premium", "Forro térmico", "Suela track"],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    featured: true
  },
  {
    id: "cab-008",
    name: "Botín Cotacachi",
    slug: "botin-cotacachi",
    price: 65.00,
    currency: "USD",
    category: "moderna",
    badge: "Edición Limitada",
    isAvailable: true,
    images: [
      "/assets/images/products/cotidiana/cot_01/cot01_002.jpeg",
      "/assets/images/products/cotidiana/cot_01/cot01_001.jpeg",
      "/assets/images/products/cotidiana/cot_01/cot01_003.jpeg",
      "/assets/images/products/cotidiana/cot_01/cot01_004.jpeg",
    ],
    description: "Resistencia y diseño. Un homenaje a la tierra del cuero.",
    materials: ["Cuero premium", "Forro térmico", "Suela track"],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    featured: true
  },
];
