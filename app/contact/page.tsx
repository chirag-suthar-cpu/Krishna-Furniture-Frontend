'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Phone, MapPin, Clock, Mail, User } from "lucide-react";
import Link from "next/link";

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
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form) // Send entire form object
      // });

      const res = await fetch('http://localhost:5001/api/contact', {
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

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Info Cards */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">Contact Mohanlal Suthar, founder and senior carpenter.</p>
              <div className="space-y-4">
                <Card><CardContent className="p-6 flex gap-4"><Phone className="h-6 w-6"/>+91 6377624560 / +91 9783175728</CardContent></Card>
                <Card><CardContent className="p-6 flex gap-4"><MapPin className="h-6 w-6"/>VPO Gamdi Devki, Sagwara, Dungarpur, Rajasthan - 314024</CardContent></Card>
                <Card><CardContent className="p-6 flex gap-4"><User className="h-6 w-6"/>Skilled team of 10-20 workers specializing in woodwork, ceiling & aluminum.</CardContent></Card>
                <Card><CardContent className="p-6 flex gap-4"><Clock className="h-6 w-6"/>Monday-Sunday: 8 AM - 9 PM (Emergency available)</CardContent></Card>
              </div>
            </div>

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
