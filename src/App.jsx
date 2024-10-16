import Form from "./components/Form/Form";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

function App() {


  const people = [
    {
      name: "Arina Doe",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Software Engineer",
      city: "New York",
      age: 28,
    },
    {
      name: "David Wilson",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Graphic Designer",
      city: "San Francisco",
      age: 32,
    },
    {
      name: "Michael Brown",
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Data Analyst",
      city: "Chicago",
      age: 25,
    },
    {
      name: "Emily Davis",
      image: "https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://unsplash.com/photos/closeup-photo-of-woman-beside-red-painted-wall-g0pb9aXpbgQ",
      profession: "Marketing Specialist",
      city: "Los Angeles",
      age: 30,
    },
    {
      name: "Jane Smith",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "UX/UI Designer",
      city: "Seattle",
      age: 27,
    },
  ];


  people.forEach((e)=>{
    console.log(e);
    
  })


  // console.log(people);
  // console.log(people[0].name);
  


  return (
    <>
      <Navbar />

      
      <Card img={people[0].image} userName={people[0].name} profession={people[0].profession} city={people[0].city} age={people[0].age}   />

  
      
      <Form />
      <Footer />
    </>
  );
}

export default App;
