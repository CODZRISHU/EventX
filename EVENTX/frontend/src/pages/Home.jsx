import React from "react";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import dummyEventImage from "../assets/dummy-event.jpg";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <section className="grid-interactive p-10">
        <Card title="Event 1" image={dummyEventImage} />
        <Card title="Event 2" image={dummyEventImage} />
        <Card title="Event 3" image={dummyEventImage} />
        <Card title="Event 4" image={dummyEventImage} />
      </section>
    </div>
  );
}

export default Home;
