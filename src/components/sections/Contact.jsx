import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck, FiLoader } from 'react-icons/fi';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import { slideIn } from '../../utils/animations';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success state after 3s
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const shakeAnimation = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Animated Dot Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'float 20s linear infinite',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          
          {/* Left Side: Copy */}
          <motion.div 
            variants={slideIn('left', 'tween', 0, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <h2 className="text-5xl md:text-7xl font-syne font-bold mb-6 text-glow leading-tight">
              Let's build <br/> something <span className="text-primary">extraordinary.</span>
            </h2>
            <p className="text-secondary font-sans text-xl mb-12 max-w-md">
              Whether you have a vision for a groundbreaking AI product or need a robust full-stack architecture, I'm here to engineer it.
            </p>

            <div className="flex gap-6">
              {[
                { icon: FiGithub, href: "https://github.com/rannesh" },
                { icon: FiLinkedin, href: "https://linkedin.com/in/rannesh" },
                { icon: FiTwitter, href: "https://twitter.com/rannesh" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-card border border-border rounded-full hover:bg-primary hover:text-white hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            variants={slideIn('right', 'tween', 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 w-full max-w-xl mx-auto lg:mx-0"
          >
            <Card className="p-8 md:p-10 backdrop-blur-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <motion.div variants={shakeAnimation} animate={errors.name ? "shake" : ""}>
                  <label htmlFor="name" className="block text-sm font-sans font-bold mb-2">Name</label>
                  <input 
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className={cn(
                      "w-full bg-background border rounded-lg px-4 py-3 font-sans focus:outline-none focus:ring-2 transition-all",
                      errors.name ? "border-red-500 focus:ring-red-500/50" : "border-border focus:border-primary focus:ring-primary/50"
                    )}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                </motion.div>

                <motion.div variants={shakeAnimation} animate={errors.email ? "shake" : ""}>
                  <label htmlFor="email" className="block text-sm font-sans font-bold mb-2">Email</label>
                  <input 
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                    })}
                    className={cn(
                      "w-full bg-background border rounded-lg px-4 py-3 font-sans focus:outline-none focus:ring-2 transition-all",
                      errors.email ? "border-red-500 focus:ring-red-500/50" : "border-border focus:border-primary focus:ring-primary/50"
                    )}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                </motion.div>

                <motion.div variants={shakeAnimation} animate={errors.subject ? "shake" : ""}>
                  <label htmlFor="subject" className="block text-sm font-sans font-bold mb-2">Subject</label>
                  <div className="relative">
                    <select 
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                      className={cn(
                        "w-full bg-background border rounded-lg px-4 py-3 font-sans focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer",
                        errors.subject ? "border-red-500 focus:ring-red-500/50" : "border-border focus:border-primary focus:ring-primary/50"
                      )}
                    >
                      <option value="">Select a subject...</option>
                      <option value="freelance">Freelance Project</option>
                      <option value="employment">Full-time Opportunity</option>
                      <option value="networking">Networking / Chat</option>
                    </select>
                  </div>
                  {errors.subject && <span className="text-red-500 text-xs mt-1 block">{errors.subject.message}</span>}
                </motion.div>

                <motion.div variants={shakeAnimation} animate={errors.message ? "shake" : ""}>
                  <label htmlFor="message" className="block text-sm font-sans font-bold mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows="4"
                    {...register("message", { required: "Message is required" })}
                    className={cn(
                      "w-full bg-background border rounded-lg px-4 py-3 font-sans focus:outline-none focus:ring-2 transition-all resize-none",
                      errors.message ? "border-red-500 focus:ring-red-500/50" : "border-border focus:border-primary focus:ring-primary/50"
                    )}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                </motion.div>

                <Button 
                  type="submit" 
                  variant={isSuccess ? "ghost" : "filled"}
                  className={cn("w-full py-4", isSuccess && "bg-green-500/10 text-green-500 border-green-500 hover:bg-green-500/20 hover:shadow-green-500/30")}
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <FiLoader className="animate-spin" size={20} />
                  ) : isSuccess ? (
                    <>
                      <FiCheck size={20} /> Sent Successfully
                    </>
                  ) : (
                    <>
                      Send Message <FiSend size={18} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
