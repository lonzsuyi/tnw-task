import Link from "next/link";

export default function Index() {

  return (
    <div className="h-screen">
      <div className="text-center text-2xl font-bold pt-10">Welcome the the Transport Info</div>
      <div className="text-center mt-10"><Link className="text-primary-500 underline underline-offset-8" href={'/bus_operator'}>Check The Bus Operator</Link></div>
    </div>
  );
}
