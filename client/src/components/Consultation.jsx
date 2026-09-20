import { motion } from 'framer-motion';
import './Consultation.css';

function Consultation() {
  return (
    <section className="consultation" id="contact">
      <div className="consultation__glow" />

      <div className="container">
        <div className="consultation__header">
          <div>
            <p className="section-label">Start a Conversation</p>
            <div className="gold-line consultation__line" />
          </div>

          <span className="consultation__number">
            09 / CONTACT
          </span>
        </div>

        <div className="consultation__content">
          <motion.div
            className="consultation__intro"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              Let's create
              <span>something timeless.</span>
            </h2>

            <p>
              Tell us about your space, your vision and what
              you want it to become. Our studio will be in
              touch to begin the conversation.
            </p>

            <div className="consultation__details">
              <div>
                <span>Studio</span>
                <p>Patna · India</p>
              </div>

              <div>
                <span>Email</span>
                <p>hello@ellora.in</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="consultation__form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="consultation__field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="consultation__field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="consultation__field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="consultation__field">
              <label htmlFor="project">Project Type</label>

              <select id="project" defaultValue="">
                <option value="" disabled>
                  Select project type
                </option>
                <option value="residential">
                  Residential Interior
                </option>
                <option value="commercial">
                  Commercial Interior
                </option>
                <option value="luxury">
                  Luxury Custom Space
                </option>
              </select>
            </div>

            <div className="consultation__field consultation__field--message">
              <label htmlFor="message">Tell Us About Your Project</label>

              <textarea
                id="message"
                rows="4"
                placeholder="Share a little about your space..."
              />
            </div>

            <button
              type="submit"
              className="consultation__submit"
            >
              <span>Request a Consultation</span>
              <span>↗</span>
            </button>
          </motion.form>
        </div>

        <div className="consultation__footer">
          <span>Every space begins with a conversation.</span>
          <span>ELLORA · EST. 2026</span>
        </div>
      </div>
    </section>
  );
}

export default Consultation;