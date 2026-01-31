import Form from "./components/form";
import UserData from "./components/users/users";
export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <Form />
      <UserData />
    </div>
  );
}
