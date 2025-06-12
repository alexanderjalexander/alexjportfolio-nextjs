"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypewriterWrapper({ text }: { text: string }) {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        text,
      ]}
      wrapper="span"
      speed={60}
    />
  );
}
