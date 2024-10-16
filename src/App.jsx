import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import "./App.css";
import Data from "./components/Data/Data";

function App() {
  const users = [
    {
      name: "Arina Doe",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Software Engineer",
      city: "New York",
      age: 28,
    },
    {
      name: "David Wilson",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Graphic Designer",
      city: "San Francisco",
      age: 32,
    },
    {
      name: "Michael Brown",
      image:
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Data Analyst",
      city: "Chicago",
      age: 25,
    },
    {
      name: "Emily Davis",
      image:
        "https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://unsplash.com/photos/closeup-photo-of-woman-beside-red-painted-wall-g0pb9aXpbgQ",
      profession: "Marketing Specialist",
      city: "Los Angeles",
      age: 30,
    },
    {
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "UX/UI Designer",
      city: "Seattle",
      age: 27,
    },
  ];

  // console.log(users);
  // console.log(users[0].name);

  return (
    <>
      <Navbar />
      <Data/>

      <section className="w-full grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-7 px-4 md:px-7 xl:px-20  py-10">
        {users.map(function (e, ind) {
          return (
            <Card
              key={ind}
              img={e.image}
              userName={e.name}
              profession={e.profession}
              city={e.city}
              age={e.age}
            />
          );
        })}
      </section>
      <Form />
      <Footer />
    </>
  );
}

export default App;
