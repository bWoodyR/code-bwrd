import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { MessageDataType } from "../types/MessageDataTypes";

const server = import.meta.env.VITE_BWRD_SERVER_ADDRESS;

export const useSendEmail = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: MessageDataType) => {
      const response = await axios.post(`${server}/contact_me`, data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Message successfully send!");
    },
    onError: () => {
      toast.error("Unable to send message!");
    },
  });
  return { mutate, isPending };
};
