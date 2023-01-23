import { useEffect } from "react";

export default function HeadConfig(prop) {
  useEffect(() => {
    document.title = prop.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", prop.description);
  }, [prop]);
  return <></>;
}
