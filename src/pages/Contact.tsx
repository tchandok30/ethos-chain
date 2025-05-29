
import React, { useState } from 'react';
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import { Mail, MessageSquare, Phone, MapPin, Send, AtSign, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you shortly.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background hex-grid transition-colors duration-300">
      <Navigation />
      
      <main className="container mx-auto pt-24 pb-10 px-4 page-transition-enter">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="typing-animation text-4xl md:text-5xl font-bold bg-gradient-to-r from-ethos-blue via-ethos-teal to-ethos-aqua bg-clip-text text-transparent mb-4">
              Contact Us
            </h1>
            <p className="typing-animation-subtitle text-xl text-foreground dark:text-gray-300 mb-6">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </section>
        
        {/* Contact Form and Info */}
        <section className="mb-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="h-full border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 text-ethos-dark dark:text-white">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-ethos-teal/10 p-3 rounded-lg">
                        <Mail className="w-5 h-5 text-ethos-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ethos-dark dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">modywiz23@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-ethos-teal/10 p-3 rounded-lg">
                        <MessageSquare className="w-5 h-5 text-ethos-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ethos-dark dark:text-white">Discord</h3>
                        <p className="text-gray-600 dark:text-gray-300">discord.gg/ethoschain</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-ethos-teal/10 p-3 rounded-lg">
                        <AtSign className="w-5 h-5 text-ethos-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ethos-dark dark:text-white">Twitter</h3>
                        <p className="text-gray-600 dark:text-gray-300">@EthosChain</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-ethos-teal/10 p-3 rounded-lg">
                        <MapPin className="w-5 h-5 text-ethos-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ethos-dark dark:text-white">Headquarters</h3>
                        <p className="text-gray-600 dark:text-gray-300">Hamirpur</p>
                        <p className="text-gray-600 dark:text-gray-300">Himachal Pradesh</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6 text-ethos-dark dark:text-white">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4" />
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="pl-10"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            className="pl-10"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Message subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-ethos-teal to-ethos-aqua hover:opacity-90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="mb-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-ethos-dark dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How can I join the EthosChain DAO?",
                answer: "To join the EthosChain DAO, you need to acquire ETHOS tokens, connect your wallet to our platform, and stake a minimum of 100 tokens. Visit our DAO page for detailed instructions."
              },
              {
                question: "Where can I purchase ETHOS tokens?",
                answer: "ETHOS tokens are available on several decentralized exchanges including Uniswap, SushiSwap, and our partner exchanges. Check our documentation for the official contract address."
              },
              {
                question: "How do I become an auditor?",
                answer: "To become an auditor, you must apply through our Auditor DAO page, demonstrate relevant expertise in AI ethics or related fields, and complete our certification program."
              },
              {
                question: "Is EthosChain open-source?",
                answer: "Yes, EthosChain is an open-source project. You can find our repositories on GitHub and contribute to the development of the platform."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md dark:bg-gray-800/50 dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-ethos-dark dark:text-white">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
