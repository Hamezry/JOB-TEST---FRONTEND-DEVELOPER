import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function BankingLogin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: LoginFormValues) => {
  
    notifications.show({
      title: "Login Successful",
      message: `Welcome back, ${values.email}!`,
      color: "green",
      autoClose: 3000, 
    });

    setTimeout(() => {
      navigate("/transaction-history");
    }, 3000);
  };


  return (
    <Container size={420} my={150}>
      <Title style={{ textAlign: "center" }}>Welcome to Online Banking</Title>

      <Text color="dimmed" size="sm" style={{ textAlign: "center" }} mt={5}>
        Do not have an account yet?{" "}
        <Anchor href="#" size="sm" onClick={(event) => event.preventDefault()}>
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ textAlign: "left" }}>
            <TextInput
              label="Email"
              placeholder="you@example.com"
              {...register("email")}
              required
              error={errors.email?.message}
              styles={{
                label: { textAlign: "left" },
              }}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              {...register("password")}
              required
              mt="md"
              error={errors.password?.message}
              styles={{
                label: { textAlign: "left" },
              }}
            />
          </div>

          <Group mt="md" style={{ justifyContent: "space-between" }}>
            <Checkbox label="Remember me" {...register("rememberMe")} />
            <Anchor
              href="#"
              size="sm"
              onClick={(event) => event.preventDefault()}
            >
              Forgot password?
            </Anchor>
          </Group>

          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default BankingLogin;












