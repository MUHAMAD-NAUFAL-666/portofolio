import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return(
    <>
      <div className="bg-slate-900 h-screen sm:h-full pb-28">
        <Navbar/>
        <ContactForm/>
      </div>
    </>
  )
}