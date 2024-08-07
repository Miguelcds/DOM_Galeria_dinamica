const products = [
  {
    name: 'Acer Aspire 3 A315-59 Intel Core i5-1235U/16GB/512GB SSD/15.6"',
    price: 559,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1081/10818641/1238-acer-aspire-3-a315-59-intel-core-i5-1235u-8gb-512gb-ssd-156.jpg",
  },
  {
    name: "Alurin Go Start Intel Celeron N4020/8GB/256GB SSD/14",
    price: 210,
    stars: 4,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1066/10663373/1374-alurin-go-start-intel-pentium-n4020-8gb-256gb-ssd-14-comprar.jpg",
  },
  {
    name: 'LG Gram 17ZD90S-G.AX75B Intel Evo Core Ultra 7 155H/16GB/512GB SSD/17"',
    price: 1349,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1082/10820866/1642-lg-gram-17zd90s-gax75b-intel-evo-core-ultra-7-155h-16gb-512gb-ssd-17.jpg",
  },
  {
    name: 'ASUS Vivobook 15 F1504ZA-NJ702 Intel Core i5-1235U/16GB/512GB SSD/15.6"',
    price: 439,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1081/10811719/1406-asus-vivobook-15-f1504za-nj702-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg",
  },
  {
    name: 'Lenovo V15 G4 IRU Intel Core i5-13420H/16GB/512GB SSD/15.6"',
    price: 599,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1081/10811256/1634-lenovo-v15-g4-iru-intel-core-i5-13420h-16gb-512gb-ssd-156.jpg",
  },
  {
    name: 'HP 15S-FQ5085NS Intel Core i5-1235U/16GB/512GB SSD/15.6"',
    price: 459,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1042/10428540/1794-hp-15s-fq5085ns-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg",
  },
  {
    name: 'HP Victus Gaming 16-r0036ns Intel Core i7-13620H/32GB/1TB SSD/RTX 4060/16.1"',
    price: 1189,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1082/10828807/1363-hp-victus-gaming-16-r0036ns-intel-core-i7-13620h-32gb-1tb-ssd-rtx-4060-161-30d96809-76dd-4c80-9557-320067220314.jpg",
  },
  {
    name: 'Portátil ASUS TUF Gaming A15 FA506NC-HN012 AMD Ryzen 5 7535HS/16GB/512GB SSD/RTX 3050/15.6"',
    price: 739,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1081/10817650/1412-asus-tuf-gaming-a15-fa506nc-hn012-amd-ryzen-5-7535h-16gb-512gb-ssd-rtx-3050-156.jpg",
  },
  {
    name: 'ASUS VivoBook 15 F1504VA-NJ766W Intel Core i7-1355U/16GB/1TB SSD/15.6"',
    price: 799,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1081/10811721/1389-asus-vivobook-15-f1504va-nj766w-intel-core-i7-1355u-16gb-1tb-ssd-156.jpg",
  },
  {
    name: 'HP Victus 16-s0011ns AMD Ryzen 7 7840HS/32GB/1TB SSD/RTX 4060/16.1"',
    price: 1149,
    seller: "PcComponentes",
    image:
      "https://thumb.pccomponentes.com/w-530-530/articles/1073/10733294/1394-hp-victus-16-s0011ns-amd-ryzen-7-7840hs-32gb-1tb-ssd-rtx-4060-161.jpg",
  },

  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
];

// Creacion del encabezado

const header = document.createElement("header");

const h1 = document.createElement("h1");

h1.innerText = "Digital Components";

header.appendChild(h1);

document.body.appendChild(header);

// Creacion del Main

const main = document.createElement("main");

document.body.appendChild(main);

// Section contenido Filtrador

const sectionFilter = document.createElement("section");

sectionFilter.className = "filter";

const sectionInput = document.createElement("input");

sectionInput.type = "text";

sectionInput.placeholder = "Que Buscas...";

const sectionButton = document.createElement("button");

sectionButton.textContent = "Buscar";

sectionButton.className = "";

sectionFilter.appendChild(sectionInput);

sectionFilter.appendChild(sectionButton);

const marcasDePC = [
  "Dell",
  "HP",
  "Lenovo",
  "Asus",
  "Acer",
  "Apple",
  "MSI",
  "Samsung",
  "Toshiba",
  "Sony",
];

const ul = document.createElement("ul");

ul.innerText = "Filtrar por marca:";

ul.className = "branName";

for (const item of marcasDePC) {
  const li = document.createElement("li");

  const p = document.createElement("p")

  p.innerText = item;

  const label = document.createElement("label");

  const inputFilter = document.createElement("input");

  inputFilter.type = "checkbox";

  const span = document.createElement("span");

  li.append(label);

  li.appendChild(p)

  label.appendChild(inputFilter);

  label.appendChild(span);

  ul.appendChild(li);
}

sectionFilter.appendChild(ul);

main.appendChild(sectionFilter);

// Section contenido Productos

const sectionProduct = document.createElement("section");

sectionProduct.className = "products";

products.forEach((item) => {
  const div = document.createElement("div");

  const name = document.createElement("p");

  const price = document.createElement("p");

  const seller = document.createElement("p");

  const img = document.createElement("img");

  name.innerText = item.name;

  price.textContent = "Precio: " + item.price + " €";

  seller.innerText = item.seller;

  img.src = item.image;

  div.appendChild(name);

  div.appendChild(price);

  div.appendChild(seller);

  div.appendChild(img);

  sectionProduct.appendChild(div);
});

main.appendChild(sectionProduct);

// Creacion del Footer

const footer = document.createElement("footer");

const date = new Date().getFullYear();

footer.innerHTML = "Todos los derechos Reservados a Digital Components " + date;

document.body.appendChild(footer);
