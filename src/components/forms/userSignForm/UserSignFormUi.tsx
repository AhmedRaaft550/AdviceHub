"use client";
import { motion } from "framer-motion";
import { USER_SIGNUP_FIELDS } from "@/constants/userInputs";
import ISO6391 from "iso-639-1";
import AnimatedBtn from "../../customUi/AnimatedBtn";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  SubmitHandler,
} from "react-hook-form";
import { TSignupSchema } from "@/validation/signupSchema";

const inputStyles =
  "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all duration-300 hover:bg-white/[0.05]";

const labelStyles = "block text-sm font-medium text-gray-400 mb-1.5 ml-1";

const allLanguages = ISO6391.getAllNames().sort();

interface FormStateProps {
  register: UseFormRegister<TSignupSchema>;
  handleSubmit: UseFormHandleSubmit<TSignupSchema>;
  errors: FieldErrors<TSignupSchema>;
  isSubmitting: boolean;
  onSubmit: SubmitHandler<TSignupSchema>;
}

const UserSignFormUi = ({ formState }: { formState: FormStateProps }) => {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = formState;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-8 rounded-3xl bg-white/2 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-sky-500/20 transition-colors duration-700"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 relative z-10"
      >
        {USER_SIGNUP_FIELDS.map((field) => (
          <div key={field.id} className="col-span-2 md:col-span-1">
            <label htmlFor={field.id} className={labelStyles}>
              {field.label}
            </label>

            {field.type === "select" ? (
              <div className="relative">
                <select
                  id={field.id}
                  {...register(field.id as keyof TSignupSchema)}
                  className={`${inputStyles} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-[#05070A]">
                    Select {field.label}
                  </option>

                  {/* handle the options based on lang or gender */}
                  {field.id === "gender"
                    ? field.options?.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#05070A]">
                          {opt}
                        </option>
                      ))
                    : allLanguages.map((lang) => (
                        <option
                          key={lang}
                          value={lang.toLowerCase()}
                          className="bg-[#05070A]"
                        >
                          {lang}
                        </option>
                      ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <input
                type={field.type}
                {...register(field.id as keyof TSignupSchema)}
                id={field.id}
                placeholder={
                  field.id === "secondLang" ? "(optional)" : field.placeholder
                }
                className={`${inputStyles} ${errors[field.id as keyof TSignupSchema] ? "border-red-500/50" : ""}`}
              />
            )}

            {errors[field.id as keyof TSignupSchema] && (
              <p className="text-red-400 text-sm mt-1 ml-1 animate-pulse">
                {errors[field.id as keyof TSignupSchema]?.message}
              </p>
            )}
          </div>
        ))}

        <div className="col-span-2 mt-4">
          <AnimatedBtn
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(2,132,199,0.2)] transition-all flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Processing...
              </>
            ) : (
              "Create Account"
            )}
          </AnimatedBtn>
        </div>
      </form>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-sky-500/50 to-transparent"></div>
    </motion.div>
  );
};

export default UserSignFormUi;
