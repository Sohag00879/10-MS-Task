// "use client"

// import type React from "react" // Added import
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"

// interface AnimatedButtonProps extends ButtonProps {
//   children: React.ReactNode
// }

// export function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//       whileTap={{ scale: 0.98 }}
//       className="inline-block" // Ensure motion.div doesn't break layout
//     >
//       <Button {...props}>{children}</Button>
//     </motion.div>
//   )
// }


"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/button";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  );
}
