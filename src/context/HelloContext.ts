import { createContext } from "react";

const HelloContext = createContext({
  hello: false,
  toggleHello() {},
});

export default HelloContext;
