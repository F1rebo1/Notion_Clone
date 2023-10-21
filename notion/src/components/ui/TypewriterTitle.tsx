"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';

const phrases = ["Keep your notes together", "Increase Productivity", "Accelerate your writing", "In-built AI assistance"];

type Props = {}

const TypewriterTitle = (props: Props) => {
    return (
        <Typewriter
            options={{
                loop: true
            }}
            onInit={(typewriter) => {
                // typewriter.typeString().start();
                typewriter.typeString(phrases[0]).pauseFor(1000).deleteAll()
                .typeString(phrases[1]).pauseFor(1000).deleteAll()
                .typeString(phrases[2]).pauseFor(1000).deleteAll()
                .typeString(phrases[3]).pauseFor(1000).deleteAll().start();
            }}
        />
    );
}

export default TypewriterTitle;