import bcryptjs from "bcryptjs";

const initialUsers = [
  {
    name: "Nicolas Sierra",
    email: "nico.sierra13@gmail.com",
    password: bcryptjs.hashSync("Nscmcq9911**", 10),
    role: "admin" as const,
  },
  {
    name: "Gabriela Chauta",
    email: "gchauta@gmail.com",
    password: bcryptjs.hashSync("Pecas123**", 10),
    role: "user" as const,
  },
];

export default initialUsers;
