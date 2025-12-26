import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "87c96a4a-1bff-4ef6-8d8c-cab5e8fca1e3"); // <-- Add key here

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      toast.success("Message sent successfully 🚀");
      e.target.reset();
    } else {
      toast.error("Failed to send message ❌");
    }
  };

  return (
    <div className="py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7">Get in touch</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Contact Me
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold">First name</label>
              <input
                type="text"
                required
                name="firstName"
                className="mt-2.5 block bg-transparent w-full rounded-md border-0 px-3.5 py-2 ring-1 ring-base-content focus:ring-current"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Last name</label>
              <input
                type="text"
                required
                name="lastName"
                className="mt-2.5 block bg-transparent w-full rounded-md border-0 px-3.5 py-2 ring-1 ring-base-content focus:ring-current"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                required
                name="email"
                className="mt-2.5 block bg-transparent w-full rounded-md border-0 px-3.5 py-2 ring-1 ring-base-content focus:ring-current"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2.5 block bg-transparent w-full rounded-md border-0 px-3.5 py-2 ring-1 ring-base-content focus:ring-current"
              />
            </div>
          </div>

          <div className="mt-10">
            <button type="submit" className="btn btn-outline w-full" disabled={loading}>
              {loading ? "Sending..." : "Send it"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
