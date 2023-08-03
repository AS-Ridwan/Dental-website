import React, { useState } from "react";
import { Card, Button, Typography } from "@material-tailwind/react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import useToken from "../../hooks/useToken";

function Signup() {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fUser, fLoading, fError] =
    useSignInWithFacebook(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [displayName, setDisplayName] = useState("");
  const [updateProfile, updating, pError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [token] = useToken(fUser || gUser || user);

  const navigate = useNavigate();

  if (token) {
    // console.log(fUser, gUser, user);
    navigate("/appointment");
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  let signInError;
  if (error || gError || fError || pError) {
    signInError = (
      <p>
        {error?.message ||
          gError?.message ||
          fError?.message ||
          pError?.message}
      </p>
    );
  }
  if (loading || gLoading || fLoading || updating) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="transparent" shadow={false} className=" bg-neutral-100 p-5">
        <div className="text-center">
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to SignUp.
          </Typography>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className=" flex flex-col gap-6">
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered w-full max-w-lg"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },

                  minLength: {
                    value: 4,
                    message: "Minimum 4 character", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className=" flex flex-col gap-6">
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                autoComplete="username"
                className="input input-bordered w-full max-w-lg"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },

                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                autoComplete="current-password"
                className="input input-bordered w-full max-w-lg"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is Required",
                  },

                  minLength: {
                    value: 6,
                    message: "Password must be 6 character or longer", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <small className="text-red-500">{signInError}</small>

          <Button type="submit" className="mt-6 bg-gray-800 text-sm" fullWidth>
            Sign Up
          </Button>

          <div className="divider">OR</div>
          <p> {gError?.message}</p>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline w-full mb-4 bg-red-600 hover:bg-red-400 border-none text-white"
          >
            Continue With Google
          </button>
          <p> {fError?.message}</p>
          <button
            onClick={() => signInWithFacebook()}
            className="btn btn-outline w-full bg-blue-600 hover:bg-blue-400 border-none text-white"
          >
            Continue With FaceBook
          </button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary transition-colors hover:text-blue-700"
            >
              LogIn
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Signup;
