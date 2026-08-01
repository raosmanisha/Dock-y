"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  preferredModel: string;
  preferredDate: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  preferredModel: "Dock-Y X1",
  preferredDate: "",
};

export function BookTestRide() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/test-ride", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed");
      }

      setStatus({ type: "success", message: data.message });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to submit your booking right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book-test-ride" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[36px] border border-[#262F3A] bg-gradient-to-br from-[#111827] via-[#0D1420] to-[#060B11] p-8 shadow-2xl shadow-black/30 sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#84E436]">Book a test ride</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Experience the future of commuting</h2>
          <p className="mt-4 text-lg leading-8 text-[#A3A3A3]">
            Reserve a personal demo and our team will help you choose the perfect scooter for your lifestyle.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 rounded-[28px] border border-[#262F3A] bg-[#060B11]/80 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-[#A3A3A3]">
              <span className="mb-2 block">Full name</span>
              <input
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="w-full rounded-full border border-[#262F3A] bg-[#0D1420] px-4 py-3 text-white outline-none placeholder:text-[#6B7280]"
                placeholder="Alex Morgan"
              />
            </label>
            <label className="text-sm text-[#A3A3A3]">
              <span className="mb-2 block">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full rounded-full border border-[#262F3A] bg-[#0D1420] px-4 py-3 text-white outline-none placeholder:text-[#6B7280]"
                placeholder="alex@email.com"
              />
            </label>
            <label className="text-sm text-[#A3A3A3]">
              <span className="mb-2 block">Phone</span>
              <input
                required
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                className="w-full rounded-full border border-[#262F3A] bg-[#0D1420] px-4 py-3 text-white outline-none placeholder:text-[#6B7280]"
                placeholder="+1 555 123 4567"
              />
            </label>
            <label className="text-sm text-[#A3A3A3]">
              <span className="mb-2 block">Preferred model</span>
              <select
                value={form.preferredModel}
                onChange={(event) => setForm({ ...form, preferredModel: event.target.value })}
                className="w-full rounded-full border border-[#262F3A] bg-[#0D1420] px-4 py-3 text-white outline-none"
              >
                <option>Dock-Y X1</option>
                <option>Dock-Y X2</option>
                <option>Dock-Y Pro</option>
              </select>
            </label>
            <label className="text-sm text-[#A3A3A3] sm:col-span-2">
              <span className="mb-2 block">Preferred date</span>
              <input
                required
                type="date"
                value={form.preferredDate}
                onChange={(event) => setForm({ ...form, preferredDate: event.target.value })}
                className="w-full rounded-full border border-[#262F3A] bg-[#0D1420] px-4 py-3 text-white outline-none"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-[#84E436] px-6 py-3 text-sm font-semibold text-[#060B11] transition hover:bg-[#72CC2F] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Book now"}
            </button>
            <p className="text-sm text-[#A3A3A3]">No charge. Just a quick reservation.</p>
          </div>

          {status.message ? (
            <p className={`mt-4 text-sm ${status.type === "success" ? "text-[#84E436]" : "text-red-400"}`}>
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
