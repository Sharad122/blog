import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-[800px] px-4 py-6 space-y-3 mx-auto">
      <h1 className="pb-3 upercase text-[29px] onest font-bold tracking-wide">
        Terms and Conditions
      </h1>
      <p className="text-[15px]">
        Last Updated: <b>April 27, 2025</b>
      </p>
      <article className="space-y-8 article">
        <p>
          Welcome to Webhelp! By accessing or using our app (referred to as
          &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound by the following Terms
          and Conditions. Please read them carefully.
        </p>
        <section>
          <h3>Acceptance of Terms</h3>
          <p>
            By accessing and using our website, you accept and agree to be bound by
            these Terms and Conditions and our Privacy Policy. If you do not
            agree with any part, you must not use this app.
          </p>
        </section>
        <section>
          <h3>Use of Content</h3>
          <ul>
            <li>
              All content published on this app is for informational purposes
              only.
            </li>
            <li>
              You may read and share content for personal, non-commercial use.
            </li>
            <li>
              Republishing or modifying our content without permission is
              prohibited.
            </li>
          </ul>
        </section>
        <section>
          <h3>Disclaimer</h3>
          <p>Free videos are provided &quot;as is&quot; for educational purposes. While we strive to ensure accuracy, we make no guarantees about outcomes or results of applying the information.</p>
        </section>
        <section>
          <h3>Intellectual Property</h3>
          <ul>
            <li>
              All content (text, images, logos) is the property of <b>Webhelp</b> unless otherwise stated.
            </li>
            <li>
              You may not use any of our intellectual property without written
              permission.
            </li>
          </ul>
        </section>
        <section>
          <h3>Third-Party Links</h3>
          <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of these websites and encourage you to review their terms and policies.</p>
        </section>
        <section>
          <h3>Limitation of Liability</h3>
          <p>We are not liable for any direct, indirect, or consequential damages resulting from the use of our website or reliance on any information provided.</p>
        </section>
        <section>
          <h3>Changes to Terms</h3>
          <p>We reserve the right to update or change these Terms at any time. Continued use of the website means you accept any new or modified Terms.</p>
        </section>
        <section>
          <h3>Contact Us</h3>
          <p>If you have any questions about these Terms, feel free to <Link href="/page/contact" className="px-1 underline font-semibold">Contact Us</Link></p>
        </section>
      </article>
    </div>
  );
};

export default page;
