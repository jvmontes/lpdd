import { Input, TextArea, Button } from "@/components";
import "./style.css";

export default function Page() {
  return (
    <main id="contact-page" className="flex flex-col p-8 md:pl-32 md:pr-32">
      <div className="title">
        <h1 className="text-4xl font-bold leading-10">
          Let’s talk about your organization
        </h1>
        <h2 className="font-bold">
          We are always looking to add organizations to our directory.
        </h2>
      </div>
      <div className="flex flex-col-reverse md:justify-between lg:flex-row">
        <form className="w-full lg:w-6/12">
          <div className="mt-11 flex flex-col justify-between lg:flex-row">
            <Input label="First Name" className="w-full lg:mr-4" />
            <Input label="Last Name" className="mt-5 w-full lg:ml-4 lg:mt-0" />
          </div>
          <Input label="Email" className="mt-5" />
          <Input label="Organization Name" className="mt-5" />
          <TextArea label="Message" className="mt-5" />
          <Button type="submit" className="mt-8 h-12 w-full">
            Submit
          </Button>
          <p className="mt-8 text-base font-semibold text-white">
            {"By submitting this form, I agree to the "}
            <a href="#" style={{ color: "#4951DB" }}>
              privacy policy.
            </a>
          </p>
        </form>
        <div className="mt-11 flex w-full flex-col items-center lg:w-5/12">
          <h2 className="text-3xl font-semibold">LPDD</h2>
          <p className="mt-10 text-xl font-medium">
            This website was built with the intention to provide useful
            resources to professionals in all industries. The intention is to
            provide a list of organizations that foster the growth and
            development of young Latine professionals, specifically targeted
            within the Chicagoland community. The Latine community is a vibrant
            ecosystem of industry professionals that prioritize community
            connection and resource sharing. Providing a platform for Latine
            professionals to connect, learn, and grow is the mission of the
            CLPDD.
          </p>
        </div>
      </div>
    </main>
  );
}
