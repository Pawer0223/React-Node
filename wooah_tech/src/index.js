const list = [
  { title : "React에 대해 알아봅시다."},
  { title : "Redux에 대해 알아봅시다."},
  { title : "TypeScript에 대해 알아봅시다."}
];

const rootElement = document.getElementById("root");

function app(items) {
  rootElement.innerHTML = `
    <ul>
      ${items.map((item) => `<li>${item.title}</li>`).join("")}
    </ul>
  `;
}

app(list);
