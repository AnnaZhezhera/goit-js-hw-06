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

const gallery = document.querySelector(".gallery");
// const templateForImage = images
//   .map((image) => {
//     // const itemEl = document.createElement("li");
//     // const imageEl = document.createElement("image");
//     // imageEl.setAttribute("url", image.url);
//     // imageEl.setAttribute("alt", image.alt);
//     return `<li style="list-style: none"><img width=80% src='${image.url}' alt='${image.alt}'></img></li>`;
//   })
//   .join("");

// gallery.insertAdjacentHTML("afterbegin", templateForImage);

/////////////////////////////////

const lis = images.map((image) => {
  const itemEl = document.createElement("li");
  const imageEl = document.createElement("img");
  imageEl.setAttribute("src", image.url);
  imageEl.setAttribute("alt", image.alt);
  itemEl.appendChild(imageEl);
  imageEl.style.width = "80%";
  itemEl.style.listStyle = "none";
  return itemEl;
});

gallery.append(...lis);

// console.log(templateForImage);
// console.log(templateForImage.join(""));
