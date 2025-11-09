"use client";

import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  fullName: z.string().min(1, "Por favor, ingresa tu nombre.").min(3, "El nombre debe tener al menos 3 caracteres.").max(100, "El nombre es demasiado largo.").regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras y espacios."),
  email: z.string().min(1, "Por favor, ingresa tu correo electrónico.").email("Ingresa un correo electrónico válido.").toLowerCase(),
  phone: z.string().min(1, "Por favor, ingresa tu número de teléfono.").regex(/^9\d{8}$/, "Debe ser un número válido de 9 dígitos que empiece con 9.").length(9, "El número debe tener exactamente 9 dígitos."),
  address: z.string().min(1, "Por favor, ingresa tu dirección.").min(10, "La dirección debe ser más específica.").max(200, "La dirección es demasiado larga."),
  city: z.string().min(1, "Por favor, ingresa tu ciudad.").min(3, "El nombre de la ciudad es demasiado corto.").max(50, "El nombre de la ciudad es demasiado largo."),
});

const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "John Doe",
      email: "john.doe@gmail.com",
      phone: "924141969",
      address: "Av. Ciudad 123",
      city: "Lima",
    },
  });
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className = "mb-4">Editar usuario</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form className = "space-y-8">
              <FormField control = {form.control} name = "fullName" render = {({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Este es tu nombre público.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField control = {form.control} name = "email" render = {({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Solo los administradores pueden ver tu correo electrónico.
                  </FormDescription>
                  <FormMessage />
                </FormItem> )} />
              <FormField control = {form.control} name = "phone" render = {({ field }) => (
                  <FormItem>
                    <FormLabel>Celular</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Solo los administradores pueden ver tu número de teléfono.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField control = {form.control} name = "address" render = {({ field }) => (
                  <FormItem>
                    <FormLabel>Dirección</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Esta es tu ubicación pública.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField control = {form.control} name = "city" render = {({ field }) => (
                  <FormItem>
                    <FormLabel>Ciudad</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Esta es tu ubicación pública.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type = "submit">
                Guardar cambios
              </Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default EditUser;