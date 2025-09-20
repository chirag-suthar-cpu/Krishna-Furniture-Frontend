'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Phone, MapPin, Clock, Mail, User } from "lucide-react";
import Link from "next/link";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg('Message sent successfully!');
        setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
      } else {
        setErrorMsg(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" size="sm" asChild>
              <Link href="/"><ArrowLeft className="h-4 w-4 mr-2" />Back to Home</Link>
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Get in touch with Krishna Furniture for all your woodworking, ceiling, and aluminum work needs.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {successMsg && <p className="text-green-600 text-center">{successMsg}</p>}
                  {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><Label htmlFor="firstName">First Name</Label><Input id="firstName" value={form.firstName} onChange={handleChange} /></div>
                    <div><Label htmlFor="lastName">Last Name</Label><Input id="lastName" value={form.lastName} onChange={handleChange} /></div>
                  </div>
                  <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={form.email} onChange={handleChange} /></div>
                  <div><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" value={form.phone} onChange={handleChange} /></div>
                  <div>
                    <Label htmlFor="service">Service Required</Label>
                    <select id="service" value={form.service} onChange={handleChange} className="w-full p-3 border rounded-md bg-background">
                      <option value="">Select a service</option>
                      <option value="furniture">Custom Wooden Furniture</option>
                      <option value="traditional">Traditional Wooden Work</option>
                      <option value="ceiling">Ceiling Work</option>
                      <option value="aluminum">Aluminum Work</option>
                      <option value="architectural">Architectural Collaboration</option>
                      <option value="maintenance">Maintenance & Repair</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                  <div><Label htmlFor="message">Message</Label><Textarea id="message" value={form.message} onChange={handleChange} className="min-h-[120px]" /></div>

                  <Button onClick={handleSubmit} className="w-full flex items-center justify-center" size="lg" disabled={loading}>
                    <Mail className="h-5 w-5 mr-2" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
