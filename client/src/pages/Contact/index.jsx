import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { validateEmail } from "../../utils/helpers";
import "../../assets/css/contact.css";

function Contact() {
  const [formState, setFormState] = useState({ topic: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const containerRef = useRef();
  const { topic, email, message } = formState;

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        ".contact-scroll",
        { opacity: 0, y: 32, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 }
      )
        .fromTo(
          ".contact-title",
          { opacity: 0, y: -18 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.3"
        )
        .fromTo(
          ".contact-subtitle",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 },
          "-=0.2"
        )
        .fromTo(
          ".field-group",
          { opacity: 0, x: -28 },
          { opacity: 1, x: 0, stagger: 0.12, duration: 0.45 },
          "-=0.2"
        )
        .fromTo(
          "#contact-submit",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" },
          "-=0.1"
        );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Shake on error
  useEffect(() => {
    if (errorMessage) {
      gsap.fromTo(
        ".error-text",
        { x: 0 },
        { x: 7, yoyo: true, repeat: 5, duration: 0.055, ease: "power2.inOut", clearProps: "x" }
      );
    }
  }, [errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errorMessage && topic && email && message) {
      setSending(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/contact`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ topic, email, message }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          gsap.fromTo(
            "#contact-submit",
            { scale: 1 },
            {
              scale: 1.1,
              yoyo: true,
              repeat: 1,
              duration: 0.18,
              ease: "power2.inOut",
              onComplete: () => setSubmitted(true),
            }
          );
          setFormState({ topic: "", email: "", message: "" });
        } else {
          setErrorMessage(data.error || "Something went wrong.");
        }
      } catch (err) {
        setErrorMessage("The raven got lost at sea. Try again later.");
      } finally {
        setSending(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (submitted) setSubmitted(false);
    if (name === "email") {
      setErrorMessage(validateEmail(value) ? "" : "That address doesn't look seaworthy.");
    } else {
      const labels = { topic: "Yer name", message: "A message" };
      setErrorMessage(!value.length ? `${labels[name] || name} is required.` : "");
    }
    setFormState({ ...formState, [name]: value });
  };

  return (
    <section ref={containerRef} id="contact-cont">
      <div className="contact-scroll">

        {/* ── Header ── */}
        <div className="contact-header">
          <h2 className="contact-title">Send a Raven</h2>
          <p className="contact-subtitle">
            Leave word below and I'll find ye on the tide.
          </p>
          <div className="contact-rope" />
        </div>

        {/* ── Form ── */}
        <form id="contact-form" onSubmit={handleSubmit} noValidate>

          <div className="field-group">
            <label className="field-label" htmlFor="contact-topic">
              Yer Name
            </label>
            <input
              id="contact-topic"
              className="field-input"
              name="topic"
              type="text"
              placeholder="Captain..."
              value={topic}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="contact-email">
              Correspondence Address
            </label>
            <input
              id="contact-email"
              className="field-input"
              name="email"
              type="email"
              placeholder="where.to.reply@seas.com"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="contact-message">
              What say ye?
            </label>
            <textarea
              id="contact-message"
              className="field-input field-textarea"
              name="message"
              placeholder="Speak yer piece, sailor..."
              rows={5}
              value={message}
              onChange={handleChange}
              required
            />
          </div>

          {errorMessage && (
            <p className="error-text">{errorMessage}</p>
          )}

          {submitted && (
            <p className="success-text">
              Yer raven has been dispatched. Fair winds!
            </p>
          )}

          <div className="contact-submit-row">
            <button type="submit" id="contact-submit" disabled={sending}>
              {sending ? "Dispatching Raven..." : "Cast to Sea"}
            </button>
          </div>

        </form>

        {/* ── Wax seal footer ── */}
        <div className="contact-seal-row">
          <div className="contact-rope contact-rope--bottom" />
          <div className="contact-wax-seal">ME</div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
