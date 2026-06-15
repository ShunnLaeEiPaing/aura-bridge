import React from "react";
import Beliefs from "./components/Beliefs";
import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import Purpose from "./components/Purpose";

export default function About() {
    return (
        <>
        <Hero />
      <Purpose />
      <Beliefs />
      <MissionVision/>
        </>
    )
}