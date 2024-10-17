"use client";
import { useForm } from "react-hook-form";
import Input from "@/app/components/common/Input";
import Button from "@/app/components/common/Button";
import { useState, useEffect } from "react";
import Card from "@/app/components/cards/Card";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/common/Loading";

interface IUserRegister {
  name: string;
  email: string;
  password: string;
  gender: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userRegistration, setUserRegistration] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<IUserRegister>({
    reValidateMode: "onChange",
    mode: "onBlur",
    defaultValues: { name: "", password: "", email: "", gender: "" },
  });

  useEffect(() => {
    console.log("Form state changed: ", { isDirty, isValid });
  }, [isDirty, isValid]);

  const handleSubmitForm = async (data: IUserRegister) => {
    setLoading(true);
    try {
      console.log("data: " + JSON.stringify(data));
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle success
      router.push("?success=true");
      setUserRegistration(true);

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title={
        userRegistration
          ? "REGISTERED USER SUCCESSFULLY"
          : `${loading ? "" : "REGISTER FORM"}`
      }
      className="uppercase p-8 bg-white rounded-xl"
    >
      {loading ? (
        <Loading />
      ) : userRegistration ? (
        <></>
      ) : (
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-5 space-y-4"
        >
          <Input
            type="text"
            label="Full Name"
            placeholder="Eg. Shri Ratan Tata"
            {...register("name", {
              required: "Name is required",
            })}
            error={errors.name?.message}
          />
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
          <Input
            label="Gender"
            type="select"
            options={["Male", "Female", "Other"]}
            error={errors.gender?.message}
            {...register("gender", {
              required: "Gender selection is required",
            })}
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
