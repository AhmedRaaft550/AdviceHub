"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../../validation/signupSchema";
import { TSignupSchema } from "../../../validation/signupSchema";
import UserSignFormUi from "./UserSignFormUi";

const UserSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: TSignupSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Validated Data:", data);
  };

  return (
    <UserSignFormUi
      formState={{ register, handleSubmit, errors, isSubmitting, onSubmit }}
    />
  );
};

export default UserSignupForm;
