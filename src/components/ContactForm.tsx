import { useForm } from '@formspree/react';
import { useEffect } from 'react';
import Swal from 'sweetalert2'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mpwadogj'); 

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
      title: "Message sent successfully!",
      icon: "success"
      });

      const form = document.getElementById('contactForm') as HTMLFormElement;
      if (form) form.reset();
    }
  }, [state.succeeded]);

  return (
    <section className="section section-2">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-[500px]">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>
        <form
          id="contactForm"
          onSubmit={handleSubmit}
          className="space-y-8 w-[300px] sm:w-[500px]"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-form shadow-sm shadow-slate-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-200"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="input-form shadow-sm shadow-slate-300"
              placeholder="Enter your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
