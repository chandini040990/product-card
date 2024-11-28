
import ProductList from "./ProductList";
import './App.css';


function App() {

  const products = [
    {
      id: 1,
      name: "Construction Vehicle",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCYq0OqFx4n49TvEOZMPD1g2CsJCuixDtNg&s",
      alt: "construction",
      price: 20,
      description: "Construction Vehicle toy"
    },
    {
      id: 2,
      name: "Dinosaur",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBO4OlxbjcmIWtMQ2AWq-IARABj_mfkuLGQ&s",
      alt: "dinosaur",
      price: 15,
      description: "Dinosaur Soft Toy"
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FXoIawqWoAAM9_V7QayV1apf2WtS9QNy2w&s",
      alt: "car",
      name: "Ride-on Car",
      price: 50,
      description: "Ride-on Car toy for 1-2 year old"
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cMIWE15IzMXjb_Q28GV2JqciSPpCHSeKcg&s",
      alt: "robot",
      name: "Robot",
      price: 80,
      description: "Robot sings and dances"
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pa3Ncf-U-YD1VMQNdYoX7chHIgKwCrqwWw&s",
      alt: "stacks",
      name: "Wooden Sorting and Stacking toys",
      price: 60,
      description: "Montessori toys for 1-3 year olds"
    },
    {
      id: 6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHiIuyiaQGgIB7Z8rziybVWLt2c9z6yEDkQ&s",
      alt: "cutting toys",
      name: "Fruits Cutting Play set",
      price: 90,
      description: "Fruits Cutting Play set of 10 with board"
    }
  ]

  return (
    <>

      <div className="container">
        <h1 className="header">Toys Shop</h1>
        <ProductList products={products} />
      </div>
    </>
  );
}

export default App;


