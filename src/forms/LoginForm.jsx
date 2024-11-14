import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

const LoginForm = () => {
  const { register, handleSubmit,formState:{errors} } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldSet label="Enter login details">
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "email is required" })}
            type="email"
            name="email"
            id="email"
            placeholder="enter email.."
            className={`p-2 border box-border w-[300px] rounded-md border-gray-300 ${errors.email && 'border-3 border-red-500'}`}
          />
        </Field>

        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "your password must be 8 characters",
              },
            })}
            type="password"
            name="password"
            id="password"
            placeholder="enter password.."
            className={`p-2 border box-border w-[300px] rounded-md border-gray-300 ${errors.password && 'border-3 border-red-500'}`}
          />
        </Field>
        <Field>
          <button className="text-md text-white text-md cursor-pointer p-1 border rounded-lg hover:bg-purple-600 bg-purple-400  px-5">
            Login
          </button>
        </Field>
      </FieldSet>
    </form>
  );
};

export default LoginForm;
