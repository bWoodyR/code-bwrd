import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type MessageDataType = {
  name: string;
  email: string;
  titleOfMessage: string;
  textOfMessage: string;
};

export const useSendEmail = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: MessageDataType) => {
      const response = await axios.post("http://localhost:4000/api/v1/contact_me", data);
      return response.data;
    },
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });
  return { mutate, isPending };
};
