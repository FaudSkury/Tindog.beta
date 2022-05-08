import Input from "../../../shared/components/UI-components/Input";

const Login = () => {
  return (
    <form>
      <Input name="Email" type="text" placeholder="Email" />
      <Input name="Password" type="text" placeholder="Password" />
    </form>
  );
};

export default Login;
