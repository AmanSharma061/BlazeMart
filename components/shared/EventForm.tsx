"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const formSchema = z.object({
  title: z.string().min(2).max(50),
})

import React, { useState } from 'react'


function EventForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }

  const [categories, setcategories] = useState([
    { id: 1, name: "Music" },
    { id: 2, name: "Food" },
    { id: 3, name: "Sport" },
    { id: 4, name: "Education" },
  ])
  const [category, setcategory] = useState("")
  return (
    <div className="w-full lg:px-56 py-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" grid lg:grid-cols-2 gap-x-4 gap-y-2">
          <FormField
            control={form.control}
            name="title"

            render={({ field }) => (
              <FormItem >

                <FormControl >
                  <Input placeholder="Event Title" className=" bg-gray-100 rounded-md" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"

            render={({ field }) => (
              <FormItem >

                <FormControl >
                  <Select>
                    <SelectTrigger className="bg-gray-100 rounded-md">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent className="">
                      {categories?.map((category) => (
                        <SelectItem key={category.id} value={category.id.toString()}>
                          {category.name}
                        </SelectItem>
                      ))}

                      <AlertDialog >
                        <AlertDialogTrigger className="text-sm px-8 bg-gray-100 w-full py-2 rounded-md">Add New Category</AlertDialogTrigger>
                        <AlertDialogContent>

                          <Input placeholder="Category Name" className=" bg-gray-100 rounded-md" />
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>mi
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>


                    </SelectContent>
                  </Select>

                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />



          <Button type="submit">Submit</Button>
        </form>
      </Form>

    </div>
  )
}

export default EventForm
