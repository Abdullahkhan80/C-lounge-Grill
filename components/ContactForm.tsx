"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  Users, 
  Calendar 
} from "lucide-react";
import { COURSES_DATA, VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";
import { useLanguage } from "./LanguageContext";

export function ContactForm() {
  const { isSpanish } = useLanguage();

  const [selectedCourse, setSelectedCourse] = useState("servsafe-manager");
  const [participants, setParticipants] = useState(1);
  const [locationType, setLocationType] = useState<"on-site" | "classroom">("on-site");
  const [language, setLanguage] = useState<"english" | "spanish">("english");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Dynamic pricing
  let unitPrice = 150;
  if (selectedCourse === "servsafe-manager") {
    unitPrice = participants >= 5 ? 125 : 150;
  } else if (selectedCourse === "group-manager") {
    unitPrice = 125;
  } else if (selectedCourse === "food-handler") {
    unitPrice = 49;
  }
  const estTotal = unitPrice * participants;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = isSpanish ? "Nombre es requerido" : "Full name is required";
    if (!phone.trim()) errs.phone = isSpanish ? "Teléfono es requerido" : "Phone number is required";
    if (!email.trim() || !email.includes("@")) errs.email = isSpanish ? "Correo válido requerido" : "Valid email is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Directory & Verified Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                <span>{isSpanish ? "Contacto Directo" : "Direct Class Scheduling"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {isSpanish
                  ? "Consulte o Reserve su Clase Hoy Mismo"
                  : "Inquire or Schedule Your Class Today"}
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {isSpanish
                  ? "Atendemos llamadas los 7 días de la semana de 9:00 AM a 3:00 PM. Coordine clases presenciales en nuestro centro de Los Ángeles o solicite capacitación privada en su propio restaurante."
                  : "We are available 7 days a week from 9:00 AM to 3:00 PM. Schedule central classroom sessions or arrange private on-site instruction at your restaurant facility."}
              </p>
            </div>

            {/* Direct Phone Cards */}
            <div className="space-y-4">
              {/* English Hotline Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600 block mb-1">
                      {isSpanish ? "Coordinación en Inglés" : "English Inquiries & Scheduling"}
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-base">
                      {VERIFIED_BUSINESS_INFO.contacts.english.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {isSpanish ? "Instructor Principal • 7 días a la semana" : "Lead Instructor • 7 Days a Week (9am - 3pm)"}
                    </p>
                  </div>
                  <a
                    href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                    className="px-3.5 py-2 bg-[#0a192f] hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>{VERIFIED_BUSINESS_INFO.contacts.english.phone}</span>
                  </a>
                </div>
              </div>

              {/* Spanish Hotline Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0d9488] block mb-1">
                      {isSpanish ? "Coordinación en Español" : "Spanish Inquiries & Scheduling"}
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-base">
                      {VERIFIED_BUSINESS_INFO.contacts.spanish.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {isSpanish ? "Instructora en Español • 7 días a la semana" : "Spanish Instructor • 7 Days a Week (9am - 3pm)"}
                    </p>
                  </div>
                  <a
                    href={`tel:${VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw}`}
                    className="px-3.5 py-2 bg-[#0d9488] hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    <span>{VERIFIED_BUSINESS_INFO.contacts.spanish.phone}</span>
                  </a>
                </div>

                {/* Important verification alert required by prompt */}
                <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[11px] text-amber-900 bg-amber-50/80 p-2 rounded-lg flex items-start gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>{isSpanish ? "Nota de Verificación:" : "Verification Callout:"}</strong>{" "}
                    {isSpanish
                      ? "El número principal de Susana es (818) 422-8854. Un registro alternativo indica (818) 422-8834; marcado para confirmación telefónica."
                      : "Susana's primary listed phone is (818) 422-8854. An alternate number (818) 422-8834 was recorded in contact records and is preserved for client verification."}
                  </span>
                </div>
              </div>

              {/* Email & Location */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-3">
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <a href={`mailto:${VERIFIED_BUSINESS_INFO.contacts.email}`} className="font-medium hover:text-[#0d9488] underline">
                    {VERIFIED_BUSINESS_INFO.contacts.email}
                  </a>
                </div>

                <div className="flex items-start gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Classroom Training Facility</span>
                    <span>{VERIFIED_BUSINESS_INFO.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Operating Hours</span>
                    <span>Open 7 Days a Week, 9:00 AM – 3:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Functional Inquiry & Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md">
              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {isSpanish ? "¡Solicitud Enviada con Éxito!" : "Inquiry Submitted Successfully!"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {isSpanish
                      ? `Gracias ${name}. Su cotización estimada es de $${estTotal.toLocaleString()} para ${participants} participante(s). Nuestro equipo le llamará al ${phone} para confirmar su fecha.`
                      : `Thank you, ${name}. Your estimated rate is $${estTotal.toLocaleString()} for ${participants} participant(s). Richard or Susana will call you shortly at ${phone} to confirm scheduling.`}
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                    <a
                      href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                      className="px-4 py-2.5 bg-[#0a192f] text-white rounded-xl text-xs font-bold hover:bg-slate-800"
                    >
                      Call Richard: {VERIFIED_BUSINESS_INFO.contacts.english.phone}
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100"
                    >
                      {isSpanish ? "Nueva Consulta" : "Submit Another Inquiry"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">
                      {isSpanish ? "Calculadora de Cotización y Reserva" : "Live Quote & Enrollment Request"}
                    </span>
                    <h3 className="text-lg font-black text-slate-900">
                      {isSpanish ? "Detalles de su Clase" : "Class Configuration"}
                    </h3>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      {isSpanish ? "Curso Deseado" : "Course Selection"}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {COURSES_DATA.map((c) => (
                        <button
                          type="button"
                          key={c.id}
                          onClick={() => {
                            setSelectedCourse(c.id);
                            if (c.minParticipants && participants < c.minParticipants) {
                              setParticipants(c.minParticipants);
                            }
                          }}
                          className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                            selectedCourse === c.id
                              ? "border-[#0d9488] bg-teal-50 text-slate-900 ring-2 ring-[#0d9488]/20"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <div className="font-bold">{isSpanish ? c.titleEs : c.title}</div>
                          <div className="text-[#0d9488] font-black mt-1">${c.price} / person</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Number of participants + Live Price */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        {isSpanish ? "Número de Participantes" : "Number of Participants"}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {selectedCourse === "servsafe-manager" && "5+ managers automatically qualify for $125 rate!"}
                        {selectedCourse === "food-handler" && "Requires 5-person minimum."}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setParticipants(Math.max(1, participants - 1))}
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="font-black text-sm text-slate-900 w-8 text-center">{participants}</span>
                      <button
                        type="button"
                        onClick={() => setParticipants(participants + 1)}
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right border-t sm:border-t-0 sm:border-l border-slate-100 pt-2 sm:pt-0 sm:pl-4">
                      <span className="text-[11px] text-slate-500 block">{isSpanish ? "Cotización:" : "Estimated Total:"}</span>
                      <span className="text-lg font-black text-emerald-700">${estTotal} USD</span>
                    </div>
                  </div>

                  {/* Location & Language selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        {isSpanish ? "Ubicación" : "Training Location"}
                      </label>
                      <select
                        value={locationType}
                        onChange={(e) => setLocationType(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300"
                      >
                        <option value="on-site">On-Site at Our Facility (Free Travel 2+ Mgrs)</option>
                        <option value="classroom">Classroom in Los Angeles (3171 Los Feliz Blvd)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        {isSpanish ? "Idioma Preferido" : "Instruction Language"}
                      </label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300"
                      >
                        <option value="english">English (Richard)</option>
                        <option value="spanish">Español (Susana)</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <input
                        type="text"
                        placeholder={isSpanish ? "Nombre Completo *" : "Your Name *"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300"
                      />
                      {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder={isSpanish ? "Restaurante / Empresa" : "Restaurant / Company"}
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder={isSpanish ? "Teléfono *" : "Phone Number *"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300"
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder={isSpanish ? "Correo Electrónico *" : "Email Address *"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300"
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder={isSpanish ? "Fecha Deseada u Horario de Preferencia" : "Requested Date or Prep Shift Preference"}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={2}
                      placeholder={isSpanish ? "Notas adicionales o preguntas..." : "Additional notes or special kitchen scheduling requests..."}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-slate-300"
                    />
                  </div>

                  {/* Submission note & submit */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-500 text-center sm:text-left">
                      {isSpanish
                        ? "Confirmación por teléfono sin pagos sorpresa en línea."
                        : "Direct phone verification. No unexpected online card charges."}
                    </span>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-[#0a192f] via-[#0f274a] to-[#0d9488] hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-emerald-300" />
                      <span>{isSpanish ? "Enviar y Solicitar Fecha" : "Submit & Request Date"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
