"use client";

import { Category } from "@/types/types";
import { categorySchema } from "@/lib/validations/categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAddCategory } from "@/hooks/useAddCategory";

const AddCategoryForm = () => {
  const { mutate, isSuccess, isPending, error } = useAddCategory();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Category>({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit = () => {
    mutate(getValues());
  };

  if (isSuccess) reset();

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="category_title">Name</Label>
        <Input
          type="text"
          placeholder="Name.."
          {...register("category_title")}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          type="text"
          placeholder="Description.."
          {...register("description")}
        />
      </div>
      <div>
        <Label htmlFor="duration">Duration</Label>
        <Input
          type="time"
          {...register("duration")}
          defaultValue={"00:15"}
          required
        />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input type="price" placeholder="10$" {...register("price")} />
      </div>
      <Button
        type="submit"
        className="disabled:animate-pulse"
        disabled={isPending}
      >
        Add
      </Button>
    </form>
  );
};
export default AddCategoryForm;
