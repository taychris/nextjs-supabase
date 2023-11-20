import { supabase } from "@/lib/supabase/client";
import { convertDurationToMinutes } from "@/lib/utils";
import { Category } from "@/types/types";
import { useMutation } from "@tanstack/react-query";

export const addCategory = async (category: Category) => {
  const user = await supabase.auth.getUser();
  const { data, error } = await supabase.from("categories").insert({
    ...category,
    duration: convertDurationToMinutes(category.duration),
    uid: user.data.user?.id,
  });

  if (error) {
    throw error;
  }

  return data;
};

export const useAddCategory = () => {
  return useMutation({
    mutationFn: (category: Category) => addCategory(category),
  });
};
