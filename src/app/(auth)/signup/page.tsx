// @/app/signup/page.tsx
import UserSignupForm from "@/components/forms/userSignForm/UserSignupForm";
import ExpertSignupForm from "@/components/forms/expertSignForm/ExpertSignupForm";
import { redirect } from "next/navigation";

const Signup = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { role } = await searchParams;

  if (role !== "user" && role !== "expert") redirect("/getStarted");

  return (
    <main className=" mt-10 md:mt-0 min-h-screen relative flex items-center justify-center p-4 md:p-6 bg-[#030507] overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-2xl relative z-10 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight bg-linear-to-b from-white to-white/40 bg-clip-text ">
            Create Account
          </h1>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/5 border border-sky-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <p className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em]">
              Joining as {role}
            </p>
          </div>
        </div>

        {role === "user" ? <UserSignupForm /> : <ExpertSignupForm />}
      </div>
    </main>
  );
};

export default Signup;
