"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useLanguageStore } from "@/app/store/use-language";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { translations } from "@/config/translations";
import { useModalStore } from "@/hooks/use-modal-store";

export function ContactForm() {
  const storeModal = useModalStore();
  const { language } = useLanguageStore();
  const t = translations[language].contact.form;

  const formSchema = z.object({
    name: z.string().min(3, { message: t.validation.nameMin }),
    email: z.string().email(t.validation.emailInvalid),
    message: z.string().min(10, { message: t.validation.messageMin }),
    social: z
      .string()
      .url(t.validation.socialInvalid)
      .optional()
      .or(z.literal("")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        form.reset();
        storeModal.onOpen({
          title: t.successTitle,
          description: t.successDesc,
          icon: Icons.successAnimated,
        });
        return;
      }

      storeModal.onOpen({
        title: t.errorTitle,
        description: t.errorDesc,
        icon: Icons.warning,
      });
    } catch (err) {
      console.error("Contact form submission failed:", err);
      storeModal.onOpen({
        title: t.errorTitle,
        description: t.errorDesc,
        icon: Icons.warning,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.name}</FormLabel>
              <FormControl>
                <Input placeholder={t.namePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.email}</FormLabel>
              <FormControl>
                <Input placeholder={t.emailPlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.message}</FormLabel>
              <FormControl>
                <Textarea placeholder={t.messagePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.social}</FormLabel>
              <FormControl>
                <Input placeholder={t.socialPlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          {isSubmitting ? t.submitting : t.submit}
        </Button>
      </form>
    </Form>
  );
}
