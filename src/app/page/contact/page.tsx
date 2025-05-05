import { ContactForm } from "@/components/parts/contact-form";

const page = () => {
  return (
    <div className="max-w-xl px-4 pt-6 2xl:pt-0 pb-16 space-y-9 2xl:space-y-12">
       <div className="text-center space-y-4 2xl:space-y-6">
        <h1 className="onest text-3xl 2xl:text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-sm 2xl:text-[15px] leading-6">Have a question, suggestion, or just want to say hello? Fill out the form below and I&#39;ll get back to you as soon as possible.</p>
      </div>
      <ContactForm/>
    </div>
  )
}

export default page
