const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");

galleryEl.setAttribute(
  "style",
  "list-style: none; display: flex; flex-direction: row-reverse; justify-content: center; aling-items: center; gap: 30px"
);

// const imgItems = images.forEach(({ url, alt }) => {
//   galleryEl.insertAdjacentHTML(
//     "beforeend",
//     `<li><img src ="${url}", alt="${alt}", width = 400px height = 300></li>`
//   );
// });

const imgItems = images
  .map(
    (image) =>
      `<li><img src ="${image.url}", alt="${image.alt}", width = 400px height = 300></li>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", imgItems);
