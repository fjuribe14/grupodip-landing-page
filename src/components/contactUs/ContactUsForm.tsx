import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  contactUsFormSchema,
  type TContactUsFormSchema,
} from "@/components/contactUs/utils/contactUsForm.schema";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useActions from "@/hooks/useActions";
import useI18n from "@/hooks/useI18n";

export default function ContactUsForm() {
  const { t } = useI18n();
  const { goToMail } = useActions();
  const form = useForm<TContactUsFormSchema>({
    resolver: zodResolver(contactUsFormSchema),
  });

  const onSubmit = (data: TContactUsFormSchema) => {
    goToMail(data);
  };

  return (
    <div className="group min-w-[320px] md:min-w-[380px] bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-silver dark:border-slate-700 ">
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldSet>
          <FieldGroup>
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="fullName">
                    {t("contact.form.fullName")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="fullName"
                    aria-invalid={fieldState.invalid}
                    placeholder={"Ej. Carlos Pérez"}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phone">
                    {t("contact.form.phone")}
                  </FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    aria-invalid={fieldState.invalid}
                    placeholder={"+58 414 1234567"}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="message">
                    {t("contact.form.message")}
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="message"
                    aria-invalid={fieldState.invalid}
                    placeholder={
                      "Describa brevemente los requerimientos de su proyecto..."
                    }
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </FieldSet>
        <div className="col-span-full flex">
          <Button type="submit" size={"lg"} className="w-full">
            {t("contact.form.submit")}
          </Button>
        </div>
      </form>
    </div>
  );
}
