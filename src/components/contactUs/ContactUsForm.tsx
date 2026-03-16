import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import ContactUsFormContent from "@/components/contactUs/ContactUsFormContent";
import {
  contactUsFormSchema,
  type TContactUsFormSchema,
} from "@/components/contactUs/utils/contactUsForm.schema";
import { Button } from "@/components/ui/button";
import useActions from "@/hooks/useActions";
import useI18n from "@/hooks/useI18n";

export default function ContactUsForm() {
  const { t } = useI18n();
  const { goToMail } = useActions();
  const form = useForm<TContactUsFormSchema>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: { fullName: "", phone: "", message: "" },
  });

  const onSubmit = (data: TContactUsFormSchema) => {
    goToMail(data);
  };

  return (
    <div className="group min-w-[320px] md:min-w-[380px] bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-silver dark:border-slate-700 ">
      <FormProvider {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <ContactUsFormContent />
          <div className="col-span-full flex">
            <Button
              type="submit"
              onClick={() => form.handleSubmit(onSubmit)}
              size={"lg"}
              className="w-full"
            >
              {t("contact.form.submit")}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
