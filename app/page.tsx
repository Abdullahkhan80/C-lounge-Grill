"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MenuSection from "@/components/MenuSection";
import EventsSection from "@/components/EventsSection";
import GoodwillSection from "@/components/GoodwillSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import EventInquiryModal from "@/components/EventInquiryModal";
import MobileReserveBar from "@/components/MobileReserveBar";

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isEventInquiryOpen, setIsEventInquiryOpen] = useState(false);
  const [selectedEventSpace, setSelectedEventSpace] = useState<string | undefined>();
  const [reservationDetails, setReservationDetails] = useState<{
    guests: number;
    date: string;
    time: string;
  }>({
    guests: 2,
    date: "2026-10-15",
    time: "7:00 PM",
  });

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setReservationDetails((prev) => ({ ...prev, date: today }));
  }, []);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleOpenReservationWithDetails = (details: {
    guests: number;
    date: string;
    time: string;
  }) => {
    setReservationDetails(details);
    setIsReservationOpen(true);
  };

  const handleOpenEventInquiry = (spaceTitle?: string) => {
    setSelectedEventSpace(spaceTitle);
    setIsEventInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0A09] text-[#FBF9F5] flex flex-col selection:bg-[#C0635A] selection:text-white pb-16 sm:pb-0">
      {/* Sticky Navigation */}
      <Header onOpenReservation={handleOpenReservation} />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        {/* Hero with Atmospheric Cinema & Quick Booking Bar */}
        <Hero onOpenReservationWithDetails={handleOpenReservationWithDetails} />

        {/* Philosophy, Townhouse Story & Accolades */}
        <Story />

        {/* Interactive Dining Menu with Seasonal Tabs */}
        <MenuSection onOpenReservation={handleOpenReservation} />

        {/* The Roof Garden & Private Dining Spaces */}
        <EventsSection onOpenEventInquiry={handleOpenEventInquiry} />

        {/* Community Commitment: Goodwill Initiative */}
        <GoodwillSection />

        {/* Hours, Capitol Hill Neighborhood Guide & Stylized Map */}
        <LocationSection />
      </main>

      {/* Footer with Newsletter & Sister Restaurant Nods */}
      <Footer />

      {/* Interactive Reservation Simulator Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        initialDetails={reservationDetails}
      />

      {/* Private Events Inquiry Modal */}
      <EventInquiryModal
        isOpen={isEventInquiryOpen}
        onClose={() => setIsEventInquiryOpen(false)}
        preselectedSpace={selectedEventSpace}
      />

      {/* Mobile Sticky Booking Bar */}
      <MobileReserveBar onOpenReservation={handleOpenReservation} />
    </div>
  );
}
