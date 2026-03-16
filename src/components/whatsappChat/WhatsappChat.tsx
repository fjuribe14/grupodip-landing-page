import { motion } from "motion/react";
import { WhatsappIcon } from "@/assets/icons";
import Imagotype from "@/components/Imagotype";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyP, TypographySmall } from "@/components/ui/typography";
import {
  ACTIONS_TEXT,
  COMPANY_NAME_FULL,
  PHONE_NUMBERS_WHATSAPP,
} from "@/constants";
import useActions from "@/hooks/useActions";

export default function WhatsappChat() {
  const { goToWhatsapp } = useActions();
  return (
    <div className="fixed bottom-4 right-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="bg-background transition-colors rounded-full"
          >
            <WhatsappIcon className="size-10" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="flex flex-col p-0 overflow-hidden"
          sideOffset={10}
          align="end"
        >
          <PopoverHeader className="bg-whatsapp text-whatsapp-foreground">
            <div className="flex items-center p-2 gap-2">
              <Imagotype size={"lg"} showName={false} />
              <div className="flex flex-col h-full gap-1">
                <TypographyP className="font-bold leading-3">
                  {COMPANY_NAME_FULL}
                </TypographyP>
                <TypographySmall className="leading-3">Online</TypographySmall>
              </div>
            </div>
          </PopoverHeader>
          <div className="flex-1 flex flex-col gap-2 p-2">
            <motion.div
              className="bg-whatsapp/20 p-2 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TypographySmall>
                Hola, te gustaría más información ? puedes escribirnos por
                whatsapp a los siguientes números.
              </TypographySmall>
            </motion.div>
            <div className="flex items-center flex-wrap gap-2">
              {PHONE_NUMBERS_WHATSAPP.map((number, index) => (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    onClick={() => goToWhatsapp(ACTIONS_TEXT.contact, number)}
                    className="bg-whatsapp hover:bg-whatsapp/80 shadow-whatsapp/30"
                  >
                    Whatsapp {index + 1}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
