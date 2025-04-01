<<<<<<< HEAD
'use client'

import { z } from 'zod'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'sonner'
import { auth } from '@/firebase/client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
=======
"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { auth } from "@/firebase/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
>>>>>>> daa1ba2 (Add your descriptive commit message here)

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
<<<<<<< HEAD
} from 'firebase/auth'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'

import { signIn, signUp } from '@/lib/actions/auth.action'
import FormField from './FormField'

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter()

  const formSchema = authFormSchema(type)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (type === 'sign-up') {
        const { name, email, password } = data
=======
} from "firebase/auth";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { signIn, signUp } from "@/lib/actions/auth.action";
import FormField from "./FormField";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (type === "sign-up") {
        const { name, email, password } = data;
>>>>>>> daa1ba2 (Add your descriptive commit message here)

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
<<<<<<< HEAD
        )
=======
        );
>>>>>>> daa1ba2 (Add your descriptive commit message here)

        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
<<<<<<< HEAD
        })

        if (!result.success) {
          toast.error(result.message)
          return
        }

        toast.success('Account created successfully. Please sign in.')
        router.push('/sign-in')
      } else {
        const { email, password } = data
=======
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success("Account created successfully. Please sign in.");
        router.push("/sign-in");
      } else {
        const { email, password } = data;
>>>>>>> daa1ba2 (Add your descriptive commit message here)

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
<<<<<<< HEAD
        )

        const idToken = await userCredential.user.getIdToken()
        if (!idToken) {
          toast.error('Sign in Failed. Please try again.')
          return
=======
        );

        const idToken = await userCredential.user.getIdToken();
        if (!idToken) {
          toast.error("Sign in Failed. Please try again.");
          return;
>>>>>>> daa1ba2 (Add your descriptive commit message here)
        }

        await signIn({
          email,
          idToken,
<<<<<<< HEAD
        })

        toast.success('Signed in successfully.')
        router.push('/')
      }
    } catch (error) {
      console.log(error)
      toast.error(`There was an error: ${error}`)
    }
  }

  const isSignIn = type === 'sign-in'

  return (
    <div className='card-border lg:min-w-[566px]'>
      <div className='flex flex-col gap-6 card py-14 px-10'>
        <div className='flex flex-row gap-2 justify-center'>
          <Image src='/logo.svg' alt='logo' height={32} width={38} />
          <h2 className='text-primary-100'>PrepWise</h2>
=======
        });

        toast.success("Signed in successfully.");
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  };

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PrepWise</h2>
>>>>>>> daa1ba2 (Add your descriptive commit message here)
        </div>

        <h3>Practice job interviews with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
<<<<<<< HEAD
            className='w-full space-y-6 mt-4 form'
=======
            className="w-full space-y-6 mt-4 form"
>>>>>>> daa1ba2 (Add your descriptive commit message here)
          >
            {!isSignIn && (
              <FormField
                control={form.control}
<<<<<<< HEAD
                name='name'
                label='Name'
                placeholder='Your Name'
                type='text'
=======
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
>>>>>>> daa1ba2 (Add your descriptive commit message here)
              />
            )}

            <FormField
              control={form.control}
<<<<<<< HEAD
              name='email'
              label='Email'
              placeholder='Your email address'
              type='email'
=======
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
>>>>>>> daa1ba2 (Add your descriptive commit message here)
            />

            <FormField
              control={form.control}
<<<<<<< HEAD
              name='password'
              label='Password'
              placeholder='Enter your password'
              type='password'
            />

            <Button className='btn' type='submit'>
              {isSignIn ? 'Sign In' : 'Create an Account'}
=======
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button className="btn" type="submit">
              {isSignIn ? "Sign In" : "Create an Account"}
>>>>>>> daa1ba2 (Add your descriptive commit message here)
            </Button>
          </form>
        </Form>

<<<<<<< HEAD
        <p className='text-center'>
          {isSignIn ? 'No account yet?' : 'Have an account already?'}
          <Link
            href={!isSignIn ? '/sign-in' : '/sign-up'}
            className='font-bold text-user-primary ml-1'
          >
            {!isSignIn ? 'Sign In' : 'Sign Up'}
=======
        <p className="text-center">
          {isSignIn ? "No account yet?" : "Have an account already?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign In" : "Sign Up"}
>>>>>>> daa1ba2 (Add your descriptive commit message here)
          </Link>
        </p>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default AuthForm
=======
  );
};

export default AuthForm;
>>>>>>> daa1ba2 (Add your descriptive commit message here)
