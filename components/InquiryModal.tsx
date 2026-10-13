"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Phone, Calendar, Users, MapPin, Sparkles, AlertCircle, Building2, Mail, User } from "lucide-react";
import { COURSES_DATA, VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";
import { useLanguage } from "./LanguageContext";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export function InquiryModal({ isOpen, onClose, defaultCourseId }: InquiryModalProps) {
  const { isSpanish } = useLanguage();

  const [selectedCourse, setSelectedCourse] = useState(defaultCourseId || "servSafe-manager");
  const [participants, setParticipants] = useState(1);
  const [locationType, setLocationType] = useState<"on-site" | "classroom">("on-site");
  const [preferredLanguage, setPreferredLanguage] = useState<"english" | "spanish" | "bilingual">("english");
  const [preferredDate, setPreferredDate] = useState("");
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (defaultCourseId) {
      setSelectedCourse(defaultCourseId);
      if (defaultCourseId === "group-manager" || defaultCourseId === "food-handler") {
        setParticipants(5);
        setLocationType("on-site");
      }
    }
  }, [defaultCourseId]);

  if (!isOpen) return null;

  // Calculate pricing dynamically
  let unitPrice = 150;
  let savingsPerPerson = 0;

  if (selectedCourse === "servsafe-manager") {
    if (participants >= 5) {
      unitPrice = 125;
      savingsPerPerson = 25;
    } else {
      unitPrice = 150;
    }
  } else if (selectedCourse === "group-manager") {
    unitPrice = 125;
    savingsPerPerson = 25;
  } else if (selectedCourse === "food-handler") {
    unitPrice = 49;
  }

  const totalPrice = unitPrice * participants;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = isSpanish ? "Nombre es requerido" : "Full name is required";
    if (!phone.trim()) errs.phone = isSpanish ? "Teléfono es requerido" : "Phone number is required";
    if (!email.trim() || !email.includes("@")) errs.email = isSpanish ? "Correo válido requerido" : "Valid email is required";
    if (selectedCourse === "food-handler" && participants < 5) {
      errs.participants = isSpanish ? "Mínimo 5 participantes para manipuladores" : "Minimum 5 participants for food handler class";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0a192f] via-[#0f274a] to-[#0d9488] px-6 py-4 text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-emerald-300 uppercase block">
              {isSpanish ? "Consulta de Clase y Cotización" : "Official Class Inquiry & Quote"}
            </span>
            <h3 className="text-lg font-bold text-white leading-tight">
              {isSpanish ? "Programe su Certificación ServSafe" : "Schedule Your ServSafe Certification"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Success Screen */
          <div className="p-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-slate-900">
                {isSpanish ? "¡Solicitud Recibida con Éxito!" : "Inquiry Received Successfully!"}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {isSpanish
                  ? `Gracias ${fullName}. Hemos generado su cotización estimada de $${totalPrice.toLocaleString()} para ${participants} participante(s).`
                  : `Thank you, ${fullName}. We have calculated your estimated quote of $${totalPrice.toLocaleString()} for ${participants} participant(s).`}
              </p>
            </div>

            {/* Quote Summary Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 max-w-md mx-auto space-y-2">
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">{isSpanish ? "Curso Seleccionado:" : "Course Selected:"}</span>
                <span className="font-bold text-slate-900">
                  {selectedCourse === "food-handler" ? "Food Handler ($49)" : "ServSafe Manager"}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">{isSpanish ? "Participantes:" : "Participants:"}</span>
                <span className="font-bold text-slate-900">{participants}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">{isSpanish ? "Ubicación:" : "Format / Location:"}</span>
                <span className="font-bold text-slate-900">
                  {locationType === "on-site" ? "On-Site (At Your Facility)" : "Classroom (Los Angeles)"}
                </span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-black text-emerald-700">
                <span>{isSpanish ? "Total Estimado:" : "Total Estimated Rate:"}</span>
                <span>${totalPrice} USD</span>
              </div>
            </div>

            {/* Direct Call Recommendation */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs text-amber-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>{isSpanish ? "¿Desea Confirmar de Inmediato?" : "Want to Confirm Right Now?"}</span>
              </div>
              <p className="text-[11px] text-amber-800">
                {isSpanish
                  ? "Para asignación rápida de fecha, comuníquese directamente con nuestros coordinadores:"
                  : "Call our scheduling directors directly to lock in your requested date:"}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <a
                  href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                  className="flex-1 px-3 py-2 bg-white rounded-lg border border-amber-300 font-bold text-slate-800 text-center hover:bg-amber-100/50"
                >
                  English: {VERIFIED_BUSINESS_INFO.contacts.english.phone}
                </a>
                <a
                  href={`tel:${VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw}`}
                  className="flex-1 px-3 py-2 bg-white rounded-lg border border-amber-300 font-bold text-slate-800 text-center hover:bg-amber-100/50"
                >
                  Español: {VERIFIED_BUSINESS_INFO.contacts.spanish.phone}
                </a>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#0a192f] text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors"
            >
              {isSpanish ? "Cerrar Ventana" : "Close Window"}
            </button>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Step 1: Course Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                1. {isSpanish ? "Seleccione el Curso" : "Select Certification Course"}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
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
                    className={`p-3 rounded-xl border text-left transition-all relative ${
                      selectedCourse === c.id
                        ? "border-[#0d9488] bg-teal-50/50 ring-2 ring-[#0d9488]/20"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="font-bold text-xs text-slate-900 leading-tight mb-1">
                      {isSpanish ? c.titleEs : c.title}
                    </div>
                    <div className="text-sm font-extrabold text-[#0d9488]">
                      ${c.price}{" "}
                      <span className="text-[10px] font-normal text-slate-500">
                        {c.id === "food-handler" ? "/person" : "/mgr"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Participants & Live Price Calculation */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800">
                    2. {isSpanish ? "¿Cuántas personas asistirán?" : "How many participants?"}
                  </label>
                  <span className="text-[11px] text-slate-500">
                    {selectedCourse === "servsafe-manager" && "5+ managers qualify for $125 group rate!"}
                    {selectedCourse === "food-handler" && "Requires 5-person minimum."}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setParticipants(Math.max(1, participants - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center text-sm shadow-sm"
                  >
                    -
                  </button>
                  <span className="font-black text-base text-slate-900 w-8 text-center">
                    {participants}
                  </span>
                  <button
                    type="button"
                    onClick={() => setParticipants(participants + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100 flex items-center justify-center text-sm shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {errors.participants && (
                <div className="text-xs text-red-600 font-medium">{errors.participants}</div>
              )}

              {/* Dynamic Instant Calculation Banner */}
              <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div>
                  <span className="text-slate-600">{isSpanish ? "Tarifa aplicada:" : "Applied Rate:"} </span>
                  <span className="font-bold text-slate-900">${unitPrice} / {isSpanish ? "persona" : "person"}</span>
                  {savingsPerPerson > 0 && (
                    <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      Save ${savingsPerPerson * participants} ($125/ea)!
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-slate-500 mr-2">{isSpanish ? "Total Estimado:" : "Est. Total:"}</span>
                  <span className="text-base font-black text-[#0a192f]">${totalPrice} USD</span>
                </div>
              </div>
            </div>

            {/* Step 3: Location & Language Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  3. {isSpanish ? "Formato de Clase" : "Training Location"}
                </label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white cursor-pointer hover:bg-slate-50 text-xs">
                    <input
                      type="radio"
                      name="location"
                      checked={locationType === "on-site"}
                      onChange={() => setLocationType("on-site")}
                      className="text-[#0d9488]"
                    />
                    <div>
                      <span className="font-bold text-slate-800 block">
                        {isSpanish ? "En su Restaurante / Local" : "On-Site (At Your Facility)"}
                      </span>
                      <span className="text-[10px] text-emerald-700">
                        {isSpanish ? "Viaje gratis para 2+ gerentes" : "Free travel for 2+ managers (LA, OC, Ventura)"}
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white cursor-pointer hover:bg-slate-50 text-xs">
                    <input
                      type="radio"
                      name="location"
                      checked={locationType === "classroom"}
                      onChange={() => setLocationType("classroom")}
                      className="text-[#0d9488]"
                    />
                    <div>
                      <span className="font-bold text-slate-800 block">
                        {isSpanish ? "Aula en Los Ángeles" : "Classroom (Los Angeles)"}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        3171 Los Feliz Blvd Suite 314
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  4. {isSpanish ? "Idioma de Instrucción" : "Instruction Language"}
                </label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white cursor-pointer hover:bg-slate-50 text-xs">
                    <input
                      type="radio"
                      name="language"
                      checked={preferredLanguage === "english"}
                      onChange={() => setPreferredLanguage("english")}
                      className="text-[#0d9488]"
                    />
                    <div>
                      <span className="font-bold text-slate-800 block">English</span>
                      <span className="text-[10px] text-slate-500">Instructor: Richard</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white cursor-pointer hover:bg-slate-50 text-xs">
                    <input
                      type="radio"
                      name="language"
                      checked={preferredLanguage === "spanish"}
                      onChange={() => setPreferredLanguage("spanish")}
                      className="text-[#0d9488]"
                    />
                    <div>
                      <span className="font-bold text-slate-800 block">Español</span>
                      <span className="text-[10px] text-slate-500">Instructora: Susana</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                5. {isSpanish ? "Información de Contacto" : "Your Contact Details"}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    placeholder={isSpanish ? "Nombre Completo *" : "Your Full Name *"}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] bg-white"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={isSpanish ? "Restaurante o Empresa" : "Restaurant / Business Name"}
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] bg-white"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder={isSpanish ? "Número de Teléfono *" : "Direct Phone Number *"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] bg-white"
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder={isSpanish ? "Correo Electrónico *" : "Email Address *"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] bg-white"
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={isSpanish ? "Ciudad o Condado (LA / Orange / Ventura)" : "City or County (LA / OC / Ventura)"}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] bg-white"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder={isSpanish ? "Fecha Deseada (Clases 7 días)" : "Requested Date (Classes 7 Days)"}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Note & CTA */}
            <div className="pt-2">
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 mb-4">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>
                  {isSpanish
                    ? "Nota de confirmación: Este formulario envía su solicitud a nuestros directores para coordinar horarios y materiales. No se cobra nada en línea."
                    : "Scheduling Confirmation: Submitting generates an official quote and dispatches your inquiry to our directors. No charges occur online."}
                </span>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  {isSpanish ? "Cancelar" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#0a192f] to-[#0d9488] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
                >
                  {isSpanish ? "Enviar Consulta y Obtener Cotización" : "Submit Inquiry & Get Quote"}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
