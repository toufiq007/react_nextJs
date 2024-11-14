import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

const LoginForm = () => {
  return (
    <form>
      <FieldSet label="Enter login details">
        <Field label="Email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter email.."
            className="p-2 border box-border w-[300px] rounded-md border-gray-300"
          />
        </Field>

        <Field label="Password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter password.."
            className="p-2 border box-border w-[300px] rounded-md border-gray-300"
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
