/**
 * Guided Editorial Journey: an asymmetric, print-inspired sales page using the live toolkit's
 * authentic route language, pale blue paper fields, serif hierarchy, amber reassurance cues,
 * real product imagery, and restrained interaction. Clarity and product evidence lead every section.
 */
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Hand,
  HelpCircle,
  Image as ImageIcon,
  Lightbulb,
  MessageCircle,
  MoveRight,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CONVERSATION_TOOLKIT_CHECKOUT_URL } from "@/config";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";

const ASSET_BASE = import.meta.env.BASE_URL;
const ASSETS = {
  logo: `${ASSET_BASE}assets/ai-doable-horizontal.png`,
  routeMark: `${ASSET_BASE}assets/conversation-toolkit-icon.png`,
  productLockup: `${ASSET_BASE}assets/conversation-toolkit-lockup.png`,
  desktop: `${ASSET_BASE}assets/toolkit-desktop.png`,
  tablet: `${ASSET_BASE}assets/toolkit-tablet.png`,
  mobile: `${ASSET_BASE}assets/toolkit-mobile.png`,
  conversationPaths: `${ASSET_BASE}assets/conversation-paths-hero.png`,
  exploreLive: `${ASSET_BASE}assets/explore-live.webp`,
  practiceLive: `${ASSET_BASE}assets/practice-live.webp`,
  heroPaper: `${ASSET_BASE}assets/ai-doable-hero-paper.png`,
  pathMotif: `${ASSET_BASE}assets/ai-doable-path-motif.png`,
  warmPaper: `${ASSET_BASE}assets/ai-doable-warm-paper.png`,
};

const paperAssetVariables = {
  "--hero-paper": `url(${ASSETS.heroPaper})`,
  "--path-motif": `url(${ASSETS.pathMotif})`,
  "--warm-paper": `url(${ASSETS.warmPaper})`,
} as CSSProperties & Record<"--hero-paper" | "--path-motif" | "--warm-paper", string>;

const routes: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}> = [
  {
    title: "Talk it out",
    description: "Think aloud, explore a situation or organise your thoughts.",
    icon: MessageCircle,
    accent: "route-blue",
  },
  {
    title: "Show it something",
    description: "Use a photo, screenshot, document, object or image.",
    icon: ImageIcon,
    accent: "route-cobalt",
  },
  {
    title: "Make a decision",
    description: "Compare options and think through a choice.",
    icon: Scale,
    accent: "route-amber",
  },
  {
    title: "Work through an idea",
    description: "Start with something vague or unfinished.",
    icon: Lightbulb,
    accent: "route-lime",
  },
  {
    title: "Help me while I’m doing something",
    description: "Use ChatGPT alongside a real task, step by step.",
    icon: Hand,
    accent: "route-cobalt",
  },
  {
    title: "I don’t know what to ask",
    description: "Get a small handful of useful ideas for right now.",
    icon: HelpCircle,
    accent: "route-blue",
  },
];

const questions = [
  "What should I ask?",
  "How much should I explain?",
  "Where do I begin?",
  "What else could it help me with?",
];

const returnMoments = [
  "when you don’t know where to begin",
  "when you want a useful next question",
  "when the conversation gets stuck",
  "when you want to try another direction",
];

function SectionLabel({ children, warm = false }: { children: string; warm?: boolean }) {
  return (
    <p className={`section-label ${warm ? "section-label-warm" : ""}`}>
      <span className="label-dot" aria-hidden="true" />
      {children}
    </p>
  );
}

function JourneyLine() {
  return (
    <div className="journey-line" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

function PurchaseCta({ children, dark = false }: { children: string; dark?: boolean }) {
  const className = `cta-button ${dark ? "cta-button-dark" : ""}`;

  if (!CONVERSATION_TOOLKIT_CHECKOUT_URL) {
    return (
      <button className={className} type="button" data-checkout-configured="false">
        <span>{children}</span>
        <ArrowRight size={19} strokeWidth={2} aria-hidden="true" />
      </button>
    );
  }

  return (
    <a
      className={className}
      href={CONVERSATION_TOOLKIT_CHECKOUT_URL}
      data-checkout-configured="true"
    >
      <span>{children}</span>
      <ArrowRight size={19} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}

function DeviceFrame({
  className,
  label,
  src,
  alt,
  eager = false,
}: {
  className: string;
  label: string;
  src: string;
  alt: string;
  eager?: boolean;
}) {
  return (
    <figure className={`device-frame ${className}`}>
      <figcaption className="device-label">
        <span className="device-dot" aria-hidden="true" />
        {label}
      </figcaption>
      <div className="device-screen">
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
      </div>
    </figure>
  );
}

function RouteCard({
  title,
  description,
  icon: Icon,
  accent,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}) {
  return (
    <article className={`route-card ${accent}`}>
      <div className="route-icon" aria-hidden="true">
        <Icon size={23} strokeWidth={1.8} />
      </div>
      <div>
        <p className="route-kicker">A practical way in</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <MoveRight className="route-arrow" size={21} aria-hidden="true" />
    </article>
  );
}

export default function Home() {
  return (
    <div className="site-shell" style={paperAssetVariables}>
      <main>
        <section className="hero-section hero-paper" aria-labelledby="hero-title">
          <header className="minimal-header section-width">
            <a className="brand-lockup" href="#top" aria-label="AI Doable home">
              <img className="ai-doable-logo" src={ASSETS.logo} alt="AI Doable" />
            </a>
            <span className="header-brand-divider" aria-hidden="true" />
            <div className="product-lockup" aria-label="What Can I Ask ChatGPT? Conversation Toolkit">
              <img
                className="product-lockup-image"
                src={ASSETS.productLockup}
                alt="What Can I Ask ChatGPT? Conversation Toolkit"
              />
            </div>
          </header>

          <div id="top" className="hero-grid section-width">
            <div className="hero-copy">
              <SectionLabel>A practical conversation toolkit</SectionLabel>
              <h1 id="hero-title">
                What Can I Ask <span>ChatGPT?</span>
              </h1>
              <p className="product-descriptor">
                Conversation Toolkit <span>by AI Doable</span>
              </p>
              <p className="hero-intro">
                Open ChatGPT and your mind goes blank? This gives you practical ways to start,
                keep going and discover what AI can actually help you with.
              </p>

              <div className="hero-offer-row">
                <a className="cta-button" href="#product-preview">
                  <span>See What You Can Ask</span>
                  <ArrowRight size={19} strokeWidth={2} aria-hidden="true" />
                </a>
                <div className="price-note" aria-label="Introductory soft-launch price, 27 Australian dollars">
                  <span>Introductory soft-launch price</span>
                  <strong>$27 AUD</strong>
                  <small>One-time digital purchase. No subscription.</small>
                </div>
              </div>
            </div>

            <div className="device-stage" aria-label="The real Conversation Toolkit shown on desktop, tablet and mobile">
              <div className="path-orbit" aria-hidden="true" />
              <DeviceFrame
                className="device-desktop"
                label="Desktop"
                src={ASSETS.desktop}
                alt="Desktop view of the real What Can I Ask ChatGPT? Conversation Toolkit"
                eager
              />
              <DeviceFrame
                className="device-tablet"
                label="Tablet"
                src={ASSETS.tablet}
                alt="Tablet view of the real Conversation Toolkit"
                eager
              />
              <DeviceFrame
                className="device-mobile"
                label="Mobile"
                src={ASSETS.mobile}
                alt="Mobile view of the real Conversation Toolkit"
                eager
              />
            </div>
          </div>
        </section>

        <section className="familiar-section path-paper" aria-labelledby="familiar-title">
          <JourneyLine />
          <div className="section-width familiar-grid">
            <div className="familiar-copy">
              <SectionLabel>The familiar moment</SectionLabel>
              <h2 id="familiar-title">You open ChatGPT… and then what?</h2>
              <p>
                Knowing something can be useful is not the same as knowing where to begin. Most
                people need a starting point, not a perfect prompt.
              </p>
            </div>
            <div className="question-stack" aria-label="Common questions people have when opening ChatGPT">
              {questions.map((question) => (
                <div className="question-row" key={question}>
                  <span className="question-mark" aria-hidden="true">?</span>
                  <span>{question}</span>
                </div>
              ))}
              <div className="normalise-note">
                <CheckCircle2 size={20} aria-hidden="true" />
                <p>That is a normal place to be. The toolkit simply gives you somewhere useful to start.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="product-preview" className="routes-section" aria-labelledby="routes-title">
          <JourneyLine />
          <div className="section-width">
            <div className="routes-heading">
              <div>
                <SectionLabel>Six practical ways in</SectionLabel>
                <h2 id="routes-title">What would you like ChatGPT to help you do?</h2>
              </div>
              <p>
                Choose the closest fit. You can change direction at any time, just as you would in a
                real conversation.
              </p>
            </div>

            <div className="routes-grid">
              {routes.map((route) => (
                <RouteCard key={route.title} {...route} />
              ))}
            </div>

            <div className="routes-cta">
              <PurchaseCta>Get the Conversation Toolkit – $27 AUD</PurchaseCta>
              <p>A one-time digital purchase. No subscription.</p>
            </div>
          </div>
        </section>

        <section className="inside-section warm-paper" aria-labelledby="inside-title">
          <JourneyLine />
          <div className="section-width inside-grid">
            <div className="inside-visual">
              <div className="evidence-brand">
                <img src={ASSETS.routeMark} alt="" aria-hidden="true" />
                <span><small>AI Doable</small><strong>Real toolkit screen</strong></span>
              </div>
              <div className="visual-caption">
                <span>Inside the real toolkit</span>
                <span>Choose. Try. Talk. Keep going.</span>
              </div>
              <div className="product-visual-card">
                <img
                  src={ASSETS.exploreLive}
                  alt="The real Explore screen in the Conversation Toolkit, showing a Talk something through route"
                  loading="lazy"
                />
                <div className="product-visual-note">
                  <img src={ASSETS.routeMark} alt="" aria-hidden="true" />
                  <span>You stay in charge of where the conversation goes.</span>
                </div>
              </div>
            </div>

            <div className="inside-copy">
              <SectionLabel warm>What else is inside</SectionLabel>
              <h2 id="inside-title">What if the conversation gets stuck?</h2>
              <p className="inside-intro">
                The toolkit helps when the conversation is already underway, when the answer is not
                quite right, or when you simply want something useful to try.
              </p>

              <div className="feature-list">
                <article>
                  <RefreshCw size={22} aria-hidden="true" />
                  <div>
                    <h3>Conversation Rescue Kit</h3>
                    <p>Simple lines to clarify, simplify, correct, check or start again.</p>
                  </div>
                </article>
                <article>
                  <Sparkles size={22} aria-hidden="true" />
                  <div>
                    <h3>Practice challenges</h3>
                    <p>Small 5-minute, 10-minute or surprise experiments to build familiarity.</p>
                  </div>
                </article>
                <article>
                  <Copy size={22} aria-hidden="true" />
                  <div>
                    <h3>Your Action Dock</h3>
                    <p>Useful next lines you can copy, try and continue in your own words.</p>
                  </div>
                </article>
                <article>
                  <MessageCircle size={22} aria-hidden="true" />
                  <div>
                    <h3>Help to keep going</h3>
                    <p>Support for the next question, including when you are unsure what to ask.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="real-life-section" aria-labelledby="real-life-title">
          <JourneyLine />
          <div className="section-width real-life-grid">
            <div className="real-life-copy">
              <SectionLabel>Useful in real life</SectionLabel>
              <h2 id="real-life-title">Simple on a screen. Useful in real life.</h2>
              <p>
                Return whenever you need a place to begin, a useful next question, or a different
                way forward.
              </p>
              <blockquote>
                “You don’t need the perfect prompt. You need a useful place to begin.”
              </blockquote>
            </div>

            <div className="real-life-board">
              <div className="evidence-brand board-evidence-brand">
                <img src={ASSETS.routeMark} alt="" aria-hidden="true" />
                <span><small>AI Doable</small><strong>Practice in the real toolkit</strong></span>
              </div>
              <img
                className="practice-visual"
                src={ASSETS.practiceLive}
                alt="The real Give me something to practice screen in the Conversation Toolkit"
                loading="lazy"
              />
              <div className="return-list">
                {returnMoments.map((moment) => (
                  <div key={moment}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{moment}</span>
                  </div>
                ))}
              </div>
              <img className="conversation-paths" src={ASSETS.conversationPaths} alt="" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="voice-section" aria-labelledby="voice-title">
          <JourneyLine />
          <div className="section-width voice-panel">
            <div className="voice-heading">
              <SectionLabel>Part of your AI Doable journey</SectionLabel>
              <h2 id="voice-title">Already tried Find Your Voice With AI?</h2>
            </div>
            <div className="voice-copy">
              <p>
                Find Your Voice helps you start one useful conversation with something already on
                your mind. What Can I Ask ChatGPT? Conversation Toolkit takes you a step further,
                with more ways to explore what ChatGPT can help you with and practical support
                whenever you get stuck.
              </p>
              <div className="voice-pathways" aria-label="Free starting experience and paid next step">
                <article className="voice-path voice-path-free">
                  <span>Free starting experience</span>
                  <h3>Haven’t tried it yet?</h3>
                  <p>Start one useful conversation with something already on your mind.</p>
                  <a className="voice-free-cta" href="https://voice.aidoable.com/">
                    <span>Try Find Your Voice With AI Free</span>
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </article>
                <article className="voice-path voice-path-paid">
                  <span>Paid next step</span>
                  <h3>Ready for the next step?</h3>
                  <p>Explore more ways to ask, continue and recover a conversation.</p>
                  <PurchaseCta>Get the Conversation Toolkit – $27 AUD</PurchaseCta>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="offer" className="offer-section warm-paper" aria-labelledby="offer-title">
          <JourneyLine />
          <div className="section-width offer-panel">
            <div className="offer-icon" aria-hidden="true">
              <img src={ASSETS.routeMark} alt="" />
            </div>
            <div className="offer-copy">
              <div className="offer-brand-signature">
                <img src={ASSETS.logo} alt="AI Doable" />
                <span>Official Conversation Toolkit</span>
              </div>
              <SectionLabel warm>The practical next step</SectionLabel>
              <h2 id="offer-title">What Can I Ask ChatGPT?</h2>
              <p className="offer-descriptor">Conversation Toolkit</p>
              <p>
                A practical toolkit you can return to whenever you’re wondering what to ask, where
                to begin or how to keep the conversation going.
              </p>
            </div>
            <div className="offer-price">
              <span>Introductory soft-launch price</span>
              <strong>$27 AUD</strong>
              <small>One-time digital purchase. No subscription.</small>
              <PurchaseCta dark>Get What Can I Ask ChatGPT – $27 AUD</PurchaseCta>
            </div>
          </div>

        </section>
      </main>
      <footer className="site-footer">
        <div className="section-width footer-grid">
          <div className="footer-brand">
            <img src={ASSETS.logo} alt="AI Doable" />
            <p>Making AI practical, understandable and doable.</p>
            <a href="mailto:info@aidoable.com">info@aidoable.com</a>
          </div>
          <nav className="footer-column" aria-label="Connect with AI Doable">
            <h2>Connect</h2>
            <a href="https://hub.aidoable.com/communities/groups/welcome-to-ai-confidence-for-w/about">
              AI Confidence for Women 55+ community
            </a>
            <a href="https://www.linkedin.com/in/barbara-hamilton-ai-doable/">LinkedIn</a>
            <a href="http://facebook.com/people/AI-Doable/61591927290972/">Facebook</a>
          </nav>
          <nav className="footer-column" aria-label="Information">
            <h2>Information</h2>
            <a href="https://ai-doable-privacy.vibepreview.com/">Privacy Policy</a>
            <a href="https://ai-doable-terms.vibepreview.com/">Terms &amp; Conditions</a>
          </nav>
        </div>
        <div className="section-width footer-copyright">© 2026 AI Doable. All rights reserved.</div>
      </footer>
    </div>
  );
}
