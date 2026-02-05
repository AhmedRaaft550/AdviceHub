import HomePage from "@/components/landing/LandingPage";
import ProblemSolution from "@/components/proplemSolution/ProblemSolution";
// import FinalCTA from "@/components/finalCTA/FinalCTA";
import BookingSteps from "@/components/booking-steps/BookingSteps";

const page = () => {
  return (
    <main className="">
      <HomePage />

      <ProblemSolution />
      <BookingSteps />
    </main>
  );
};

export default page;
