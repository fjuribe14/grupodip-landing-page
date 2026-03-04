import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo } from "react";
import { Button } from "../ui/button";

type THeaderNavbarTriggerProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function HeaderNavbarTrigger({
  isOpen,
  setIsOpen,
}: THeaderNavbarTriggerProps) {
  const ActiveIcon = useMemo(() => (isOpen ? X : Menu), [isOpen]);

  return (
    <div className="relative size-9">
      <Button
        size={"icon-sm"}
        variant={"ghost"}
        className="absolute inset-0 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence>
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveIcon className="size-6" />
          </motion.div>
        </AnimatePresence>
      </Button>
    </div>
  );
}
