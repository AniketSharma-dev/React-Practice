import React, { useContext } from "react";
import Data from "../components/Data/Data";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";
import { DataContext } from "../context/UserContext";

const Home = () => {
  


  const users = useContext(DataContext)
  console.log(users);
  return (
    <>
      <Data />
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
};

export default Home;
