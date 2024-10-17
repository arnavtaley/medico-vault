"use client";
import { useForm } from "react-hook-form";
import Input from "@/app/components/common/Input";
import Button from "@/app/components/common/Button";
import { useState, useEffect } from "react";
import Card from "@/app/components/cards/Card";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/common/Loading";

interface IUserRegister {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IUserRegister>({
    reValidateMode: "onChange",
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    console.log("Form state changed: ", { isDirty, isValid });
  }, [isDirty, isValid]);

  const handleSubmitForm = async (data: IUserRegister) => {
    setLoading(true);
    try {
      console.log("data: " + JSON.stringify(data));
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 5000));
      // Handle success (e.g., redirect or show a success message)
      router.push("?success=true");
      <Loading />;
      router.push("/dashboard"); // Redirect to dashboard
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title={`${loading ? "" : "LOGIN FORM"}`}
      className="uppercase p-8 bg-white rounded-xl"
    >
      {loading ? ( 
        <Loading />
      ) : (
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-5 space-y-4"
        >
          <Input
            type="email"
            label="Email"
            placeholder="ratan@tata.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address format",
              },
            })}
            error={errors.email?.message}
          />

          <Input
            type="password"
            label="Password"
            placeholder="*****"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            error={errors.password?.message}
          />

          <Button type="submit" disabled={!isDirty || !isValid || loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      )}
    </Card>
  );
};

export default Register;
