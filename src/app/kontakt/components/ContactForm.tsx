"use client";

import {
  faCheckCircle,
  faExclamationCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/app/components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "@mantine/form";
import { useState } from "react";

type FormType = {
  name: string;
  email: string;
  message: string;
};

type formState = "success" | "error" | "submitting" | "idle";

export function ContactForm() {
  const [formState, setFormState] = useState<formState>("idle");

  const form = useForm<FormType>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      email: (value) =>
        value.trim().length == 0
          ? "Bitte E-Mail eingeben"
          : /^\S+@\S+$/.test(value)
          ? null
          : "Ungültige E-Mail Adresse",
      name: (value) => (value.trim().length > 0 ? null : "Bitte Name eingeben"),
      message: (value) =>
        value.trim().length > 0 ? null : "Bitte Nachricht eingeben",
    },
  });

  async function onSubmitForm(values: FormType) {
    if (form.isValid()) {
      setFormState("submitting");

      const res = await fetch(`api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.status === 200) {
        form.reset();
        setFormState("success");
        setTimeout(() => setFormState("idle"), 3000);
      } else {
        setFormState("error");
      }
    }
  }

  return (
    <form onSubmit={form.onSubmit(onSubmitForm)}>
      <div className="flex flex-wrap">
        <div className="w-full my-1 md:w-1/2 md:pr-1">
          <Input
            id="name"
            type="text"
            name="Name"
            {...form.getInputProps("name")}
          />
        </div>
        <div className="w-full my-1 md:w-1/2 md:pl-1">
          <Input
            id="email"
            type="email"
            name="E-Mail"
            {...form.getInputProps("email")}
          />
        </div>
      </div>

      <div className="my-1 md:my-2">
        <Input
          id="message"
          type="textarea"
          name="Nachricht"
          {...form.getInputProps("message")}
        />
      </div>

      <div className="flex flex-row items-center justify-end gap-5 mt-3">
        {formState == "error" && (
          <div className="text-red-600 ">
            <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
            <span>
              Es ist ein Fehler aufgetreten. Die Nachricht konnte nicht
              versendet werden.
            </span>
          </div>
        )}

        {formState == "success" && (
          <div className="text-green-600 ">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            <span>Die Nachricht wurde erfolgreich versendet.</span>
          </div>
        )}

        <Button
          type="submit"
          icon={faPaperPlane}
          loading={formState == "submitting"}
        >
          Nachricht senden
        </Button>
      </div>
    </form>
  );
}

export function Input({
  type,
  id,
  name,
  onChange,
  value,
  error,
}: {
  type: "text" | "email" | "textarea";
  id: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  error?: string;
}) {
  const inputClassNames =
    "block px-2.5 pb-2.5 pt-4 w-full bg-transparent rounded-lg border appearance-none border-gray-500 focus:outline-none focus:ring-0 peer";

  return (
    <>
      <div className="relative">
        {type == "textarea" ? (
          <textarea
            id={id}
            className={inputClassNames}
            placeholder=" "
            onChange={onChange}
            value={value}
          />
        ) : (
          <input
            type={type}
            id={id}
            className={inputClassNames}
            placeholder=" "
            onChange={onChange}
            value={value}
          />
        )}

        <label
          htmlFor={id}
          className="absolute cursor-text duration-300 bg-white rounded-md transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          {name}
        </label>
      </div>
      <span className="mt-2 text-sm text-red-600">{error}</span>
    </>
  );
}
