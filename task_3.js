const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const createImagesList = (image) => {
  const imagesListRef = document.createElement("li");
  imagesListRef.classList.add("js-img-list");
  const imagesRef = document.createElement("img");
  imagesRef.src = image.url;
  imagesRef.textContent = image.alt;
  imagesRef.classList.add("js-img");
  imagesListRef.appendChild(imagesRef);
  return imagesListRef;
};
const imagesListCard = images.map((image) => createImagesList(image));
const imagesListRef = document.querySelector(".js-img_gallery");
imagesListRef.append(...imagesListCard);
