"use client"

import Typewriter from 'typewriter-effect';

export default function TypewriterWrapper({text}:{text:string}) {
    return(
        <Typewriter 
				onInit={(typewriter) => { 
				typewriter.typeString(text) 
					.callFunction(() => {console.log('String typed out!');})
					.start(); 
				}}
                options={{
                    delay: 50,
                }}
			/>
    )
};