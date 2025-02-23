"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 lg:text-lg">
        I am a CS undergraduate at{" "}
        <span className="font-medium">FAST-NUCES</span>, and a full-stack
        developer with 1 year of experience. My passion lies in{" "}
        <span className="font-medium">backend development,</span>{" "}
        <span className="italic">
          {" "}
          where I enjoy creating scalable and high-performance software.
        </span>{" "}
        Currently, I am expanding my expertise by learning{" "}
        <span className="underline">MicroServices</span> and exploring protocols
        like <span className="underline">GraphQL </span> and{" "}
        <span className="underline">gRPC</span>. I am particularly interested in
        backend development roles working with{" "}
        <span className="font-medium">Node.js, SpringBoor, or .Net</span> and I
        am equally enthusiastic about opportunities in DevOps. I am currently
        looking for a <span className="font-medium">full-time position</span> as
        a software engineer.
      </p>

      {/* <p className="lg:text-lg">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
