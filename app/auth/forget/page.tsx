"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/app/components/common/Input";
import Button from "@/app/components/common/Button";
import Card from "@/app/components/cards/Card";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/common/Loading";

interface IForgetPassword {
  email: string;
}

const ForgetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<IForgetPassword>({
    reValidateMode: "onChange",
    mode: "onBlur",
    defaultValues: { email: "" },
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const onSubmit = async (data: IForgetPassword) => {
    setLoading(true);
    setMessage("");
    setError("");
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage("Password reset link has been sent to your email.");
      reset(); 
    } catch (err) {
      setError("Failed to send password reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title={`${loading ? "" : "FORGOT PASSWORD"}`}
      className="uppercase p-8 bg-white rounded-xl"
    >
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 space-y-4"
        >
          <Input
            type="email"
            label="Email"
            placeholder="Enter your registered email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address format",
              },
            })}
            error={errors.email?.message}
          />

          <Button type="submit" disabled={!isDirty || !isValid || loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      )}
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Card>
  );
};

export default ForgetPassword;
