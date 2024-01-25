"use client"

import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react"
import classNames from "classnames";

export function PageWrapper({children, className,}: 
{ children: React.ReactNode; className?: string;}) {
    return (
        <div>
            <motion.div key={0}
            initial={{ opacity: 0, y: -100 }}
            // transition={{ delay: 0.25 }}
            animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -100 }}
            className={classNames("min-h-screenHeightWithoutHeader", className)}
            onAnimationStart={() => (console.log('Page Animation Started...'))}
            onAnimationComplete={() => (console.log('Page Animation Complete!'))}>
                {children}
            </motion.div>
        </div>
    );
}