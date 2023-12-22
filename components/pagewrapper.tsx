"use client"

import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react"
import classNames from "classnames";

export function PageWrapper({children, className,}: 
{ children: React.ReactNode; className?: string;}) {
    return (
        <div>
            {/* <motion.div
            initial={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            animate={{ opacity: 0 }}
               exit={{ opacity: 1 }}>
                <Spinner className="fixed left-0 top-0 bottom-0 right-0" color={"white"} size="lg"/>
            </motion.div> */}
            <motion.div key={0}
            initial={{ opacity: 0, y: -100 }}
            // transition={{ delay: 0.25 }}
            animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -100 }}
            className={classNames("min-h-screenHeightWithoutHeader", className)}>
                {children}
            </motion.div>
        </div>
    );
}