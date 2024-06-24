import image from "./braude.jpg"

const tempStr =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam voluptatem officia quisquam vero incidunt necessitatibus! Voluptatem saepe quaerat mollitia, nesciunt nihil vero minus fuga quod iste. Placeat repudiandae corporis quae?"

export const model = [
  { type: "title", value: "Hello Nomi from JS" },
  { type: "text", value: tempStr },
  { type: "columns", value: [tempStr, tempStr, tempStr] },
  { type: "image", value: image }
]

const row = (content) => `<div class="row">${content}</div>`
const col = (content) => `<div class="col-sm">${content}</div>`

const Block = (type, value) => {
  switch (type) {
    case "title":
      return row(col(`<h1>${value}</h1>`))    
    case "text":
      return row(col(`<p>${value}</p>`))    
    case "columns":      
      return row(value.map((item) => col(item)).join(""))
    case "image":
      return row(col(`<img src="${value}" />`))      
    default:
      return ""
  }
}
export const html = model.map((block) => Block(block.type, block.value)).join("")

document.querySelector(".container").innerHTML = html
