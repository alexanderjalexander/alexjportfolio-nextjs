"use client"

import { motion } from "framer-motion";
import classNames from "classnames";

export function FadeInScroll({children, className,}: 
{ children?: React.ReactNode; className?: string;}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some", margin: "-20%" }}
            transition={{ duration: 1, type: 'spring' }}
            className={classNames("min-h-screenHeightWithoutHeader", className)}
            // onViewportEnter={() => (console.log('Object entered viewport.'))}
            // onAnimationStart={() => (console.log('FadeInScroll Animation Started...'))}
            // onAnimationComplete={() => (console.log('FadeInScroll Animation Complete!'))}
        >
            {children}
        </motion.div>
    );
}