export interface CourseInfo {
  id: string;
  title: string;
  titleEs: string;
  badge?: string;
  badgeEs?: string;
  price: number;
  priceNote: string;
  priceNoteEs: string;
  duration: string;
  durationEs: string;
  format: string;
  formatEs: string;
  validity: string;
  validityEs: string;
  targetAudience: string;
  targetAudienceEs: string;
  description: string;
  descriptionEs: string;
  highlights: string[];
  highlightsEs: string[];
  minParticipants?: number;
}

export const VERIFIED_BUSINESS_INFO = {
  name: "AAA Food Safety Certification",
  legalName: "AAA SAFE FOODS.COM",
  domain: "www.AAASAFEFOODS.COM",
  experienceYears: 40,
  tagline: "Get Food Safety Certified with Confidence",
  taglineEs: "Obtenga su Certificación de Seguridad Alimentaria con Confianza",
  address: {
    street: "3171 Los Feliz Blvd.",
    suite: "Suite 314",
    city: "Los Angeles",
    state: "CA",
    zip: "90039",
    full: "3171 Los Feliz Blvd. Suite 314, Los Angeles, CA 90039",
  },
  contacts: {
    english: {
      name: "Richard",
      phone: "(818) 339-3477",
      phoneRaw: "18183393477",
      role: "Lead Instructor & English Scheduling",
      roleEs: "Instructor Principal y Coordinación en Inglés",
      availability: "7 Days a Week, 9:00 AM - 3:00 PM",
      availabilityEs: "7 Días a la Semana, 9:00 AM - 3:00 PM",
    },
    spanish: {
      name: "Susana",
      phone: "(818) 422-8854",
      phoneRaw: "18184228854",
      phoneAlt: "(818) 422-8834",
      phoneAltRaw: "18184228834",
      hasConflictNotice: true,
      conflictNote: "Primary contact listed as (818) 422-8854. Alternate number (818) 422-8834 noted in footer directory for client verification.",
      conflictNoteEs: "Contacto principal indicado como (818) 422-8854. Número alternativo (818) 422-8834 registrado para verificación del cliente.",
      role: "Spanish Instruction Coordinator",
      roleEs: "Coordinadora de Instrucción en Español",
      availability: "7 Days a Week, 9:00 AM - 3:00 PM",
      availabilityEs: "7 Días a la Semana, 9:00 AM - 3:00 PM",
    },
    email: "Rdeione@AAAsafefoods.com",
    facebook: "https://www.facebook.com/266525780118776",
    yelp: "https://www.yelp.com/biz/Gatt_jhKb0OqZtBNBg4F0w",
  },
  accreditations: [
    {
      title: "ANSI National Accreditation Board Accredited",
      titleEs: "Acreditado Nacionalmente por ANSI",
      desc: "ServSafe certifications comply with strict ANSI / Conference for Food Protection (CFP) standards across the United States.",
      descEs: "Las certificaciones ServSafe cumplen con los estrictos estándares ANSI / Conferencia de Protección de Alimentos (CFP) en todo EE.UU.",
    },
    {
      title: "Meets & Exceeds CA Health & Safety Code 113947.3",
      titleEs: "Cumple y Supera el Código de Salud y Seguridad de CA 113947.3",
      desc: "Mandatory California food safety manager certification requirement satisfied with authorized in-person examination.",
      descEs: "Requisito obligatorio de certificación de gerente de alimentos en California satisfecho con examen presencial autorizado.",
    },
    {
      title: "L.A. County Health Department Preferred Provider",
      titleEs: "Proveedor Preferido del Departamento de Salud del Condado de L.A.",
      desc: "Officially listed with the Los Angeles County Department of Public Health as an authorized training and testing provider.",
      descEs: "Listado oficialmente por el Departamento de Salud Pública del Condado de Los Ángeles como proveedor autorizado de capacitación y exámenes.",
    },
    {
      title: "Immediate Same-Day Results",
      titleEs: "Resultados Inmediatos el Mismo Día",
      desc: "Walk away knowing your exam outcome on test day without waiting weeks for administrative scoring.",
      descEs: "Conozca el resultado de su examen el mismo día sin tener que esperar semanas para la calificación administrativa.",
    },
  ],
  serviceCounties: [
    {
      name: "Los Angeles County",
      nameEs: "Condado de Los Ángeles",
      tagline: "Classroom Center & On-Site Service",
      taglineEs: "Centro de Clases y Servicio en Su Local",
      popularAreas: ["Downtown LA", "Glendale", "Pasadena", "Long Beach", "Burbank", "Santa Monica", "Torrance", "San Fernando Valley"],
    },
    {
      name: "Orange County",
      nameEs: "Condado de Orange",
      tagline: "Free On-Site Travel for 2+ Managers",
      taglineEs: "Viaje a su Local sin Costo para 2+ Gerentes",
      popularAreas: ["Anaheim", "Santa Ana", "Irvine", "Huntington Beach", "Orange", "Fullerton", "Costa Mesa", "Garden Grove"],
    },
    {
      name: "Ventura County",
      nameEs: "Condado de Ventura",
      tagline: "On-Site Restaurant & Facility Training",
      taglineEs: "Capacitación en Instalaciones y Restaurantes",
      popularAreas: ["Ventura", "Oxnard", "Thousand Oaks", "Simi Valley", "Camarillo", "Moorpark"],
    },
  ],
  curriculumTopics: [
    {
      id: "importance",
      title: "The Importance of Food Safety",
      titleEs: "La Importancia de la Inocuidad de los Alimentos",
      summary: "Understanding foodborne illness transmission, legal liability, health inspection compliance, and the critical role of management oversight.",
      summaryEs: "Comprensión de la transmisión de enfermedades transmitidas por alimentos, responsabilidad legal, inspecciones de salud y supervisión gerencial.",
    },
    {
      id: "hygiene",
      title: "Good Personal Hygiene",
      titleEs: "Buena Higiene Personal",
      summary: "Proper handwashing protocols, glove usage, employee health reporting rules, dress code, and preventing employee-carried pathogens.",
      summaryEs: "Protocolos adecuados de lavado de manos, uso de guantes, reporte de salud de empleados, código de vestimenta y prevención de patógenos.",
    },
    {
      id: "prep",
      title: "Safe Food Preparation",
      titleEs: "Preparación Segura de Alimentos",
      summary: "Time-temperature control for safety (TCS), safe thawing procedures, precise minimum internal cooking temperatures, and rapid hot holding.",
      summaryEs: "Control de tiempo y temperatura para seguridad (TCS), descongelación segura, temperaturas mínimas de cocción interna y mantenimiento en caliente.",
    },
    {
      id: "cross-contamination",
      title: "Preventing Cross Contamination",
      titleEs: "Prevención de la Contaminación Cruzada",
      summary: "Color-coded equipment standards, flow of food organization, separation of raw meats and ready-to-eat foods in prep and storage.",
      summaryEs: "Estándares de equipo codificado por colores, flujo de alimentos y separación rigurosa de carnes crudas y alimentos listos para el consumo.",
    },
    {
      id: "cleaning",
      title: "Cleaning and Sanitizing",
      titleEs: "Limpieza y Sanitización",
      summary: "Chemical concentration testing, 3-compartment sink setup, mechanical dishwasher maintenance, clean-in-place procedures, and master schedules.",
      summaryEs: "Pruebas de concentración química, configuración de fregadero de 3 compartimentos, lavavajillas mecánico y programas maestros de limpieza.",
    },
    {
      id: "storage",
      title: "Receiving and Storing Food",
      titleEs: "Recepción y Almacenamiento de Alimentos",
      summary: "Delivery inspection criteria, rejection protocols, FIFO stock rotation, walk-in shelf arrangement, and cold holding temperature logs.",
      summaryEs: "Criterios de inspección de entregas, protocolos de rechazo, rotación FIFO, organización en refrigeradores y bitácoras de temperatura.",
    },
    {
      id: "fat-tom",
      title: "FAT TOM Conditions for Growth",
      titleEs: "Condiciones FAT TOM para el Crecimiento",
      summary: "Mastering the six conditions microorganisms need to multiply: Food, Acidity, Time, Temperature, Oxygen, and Moisture.",
      summaryEs: "Dominio de las 6 condiciones que los microorganismos necesitan para multiplicarse: Comida, Acidez, Tiempo, Temperatura, Oxígeno y Humedad.",
    },
    {
      id: "alert",
      title: "A.L.E.R.T. Food Defense Program",
      titleEs: "Programa de Defensa de Alimentos A.L.E.R.T.",
      summary: "FDA security framework protecting against intentional food contamination: Assure, Look, Employees, Reports, and Threat response.",
      summaryEs: "Marco de seguridad de la FDA para proteger contra la contaminación intencional de alimentos: Asegurar, Mirar, Empleados, Reportes y Amenaza.",
    },
    {
      id: "allergens",
      title: "The 9 Most Common Allergens",
      titleEs: "Los 9 Alérgenos Más Comunes",
      summary: "Identifying FDA Big 9 (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soybeans, sesame), recognizing symptoms, and allergic emergency actions.",
      summaryEs: "Identificación de los 9 alérgenos reconocidos por la FDA, reconocimiento de síntomas de choque anafiláctico y respuesta ante emergencias.",
    },
    {
      id: "cross-contact",
      title: "Preventing Cross-Contact",
      titleEs: "Prevención del Contacto Cruzado",
      summary: "Dedicated allergen prep equipment, thorough wash protocols, allergen notification systems, and clear kitchen-to-server communication.",
      summaryEs: "Equipo dedicado para alérgenos, protocolos de lavado a fondo, sistemas de notificación de alérgenos y comunicación cocina-sala.",
    },
    {
      id: "haccp",
      title: "HACCP Systems",
      titleEs: "Sistemas HACCP (Análisis de Peligros)",
      summary: "Hazard Analysis Critical Control Points: establishing critical limits, active monitoring routines, corrective actions, and verification logs.",
      summaryEs: "Análisis de Peligros y Puntos Críticos de Control: límites críticos, rutinas de monitoreo activo, acciones correctivas y registros de verificación.",
    },
    {
      id: "covid",
      title: "Health & Virus Prevention Protocols",
      titleEs: "Protocolos de Salud y Prevención de Virus",
      summary: "Facility sanitization, hand hygiene stations, surface disinfection guidelines, and airborne contamination mitigation for modern operations.",
      summaryEs: "Sanitización de instalaciones, estaciones de higiene de manos, desinfección de superficies y mitigación de contaminantes en operaciones modernas.",
    },
  ],
};

export const COURSES_DATA: CourseInfo[] = [
  {
    id: "servsafe-manager",
    title: "ServSafe Food Protection Manager",
    titleEs: "Gerente de Protección de Alimentos ServSafe",
    badge: "State-Mandated Manager Certification",
    badgeEs: "Certificación de Gerente Obligatoria por Ley",
    price: 150,
    priceNote: "per participant (Class & Official Exam Included)",
    priceNoteEs: "por participante (Clase y Examen Oficial Incluidos)",
    duration: "Full-day training (9:00 AM – 3:00 PM)",
    durationEs: "Capacitación de día completo (9:00 AM – 3:00 PM)",
    format: "In-Person Classroom or On-Site for 2+ Managers",
    formatEs: "Presencial en Aula o en su Local para 2+ Gerentes",
    validity: "5 Years Nationwide (ANSI Accredited)",
    validityEs: "5 Años a Nivel Nacional (Acreditado por ANSI)",
    targetAudience: "Restaurant owners, General Managers, Kitchen Managers, Executive Chefs, and Food Safety Compliance Leads.",
    targetAudienceEs: "Propietarios de restaurantes, Gerentes Generales, Gerentes de Cocina, Chefs Ejecutivos y Encargados de Cumplimiento.",
    description: "The gold standard certification fulfilling California Health and Safety Code 113947.3. Includes comprehensive interactive instruction with DVD & PowerPoint visual modules, textbook review, and the official proctored examination with immediate same-day scoring.",
    descriptionEs: "El estándar de oro que cumple con el Código de Salud y Seguridad de California 113947.3. Incluye instrucción interactiva completa con módulos en DVD y PowerPoint, repaso guiado y examen oficial con calificación el mismo día.",
    highlights: [
      "Official ServSafe Manager Proctored Exam included ($150 total)",
      "Immediate Same-Day Exam Results — no waiting weeks",
      "Valid for 5 years across all California jurisdictions and nationwide",
      "Available 7 days a week in English or Spanish",
      "Meets Los Angeles County Health Department requirements",
      "Free travel to your facility when you have 2 or more managers",
    ],
    highlightsEs: [
      "Examen oficial supervisado de ServSafe Manager incluido ($150 total)",
      "Resultados inmediatos el mismo día — sin esperas de semanas",
      "Válido por 5 años en todas las jurisdicciones de California y EE.UU.",
      "Disponible los 7 días de la semana en inglés o español",
      "Cumple con todos los requisitos del Departamento de Salud del Condado de Los Ángeles",
      "Viajamos gratis a su local si tiene 2 o más gerentes",
    ],
  },
  {
    id: "group-manager",
    title: "Group Manager On-Site Training",
    titleEs: "Capacitación Grupal de Gerentes en su Local",
    badge: "Best Value for Multi-Manager Teams",
    badgeEs: "Mejor Valor para Equipos de Gerentes",
    price: 125,
    priceNote: "per manager for 5+ participants (Save $25/person)",
    priceNoteEs: "por gerente para 5+ participantes (Ahorre $25/persona)",
    duration: "Customized schedule (9:00 AM – 3:00 PM or custom)",
    durationEs: "Horario personalizado (9:00 AM – 3:00 PM o a convenir)",
    format: "Private On-Site at Your Restaurant or Facility",
    formatEs: "Privado en su Restaurante o Centro de Operaciones",
    validity: "5 Years Nationwide per Certified Manager",
    validityEs: "5 Años a Nivel Nacional por Gerente Certificado",
    targetAudience: "Multi-unit operators, hotel F&B teams, catering companies, restaurant chains, and culinary commissary kitchens.",
    targetAudienceEs: "Operadores multi-unidad, hoteles, empresas de catering, cadenas de restaurantes y cocinas centrales.",
    description: "We bring our expert instructor, projection equipment, course materials, and official exams directly to your restaurant dining room, kitchen, or corporate office anywhere in Los Angeles, Orange, or Ventura County free of charge.",
    descriptionEs: "Llevamos a nuestro instructor experto, equipo de proyección, manuales y exámenes oficiales directamente a su restaurante, cocina o sala de juntas en Los Ángeles, Orange o Ventura sin costo de viaje.",
    highlights: [
      "Reduced rate of $125 per manager for groups of 5 or more",
      "We travel directly to your location free of charge",
      "Private session customized to your team's schedule and shift needs",
      "Taught in your preferred language (English or Spanish)",
      "Immediate proctored exam grading for the entire leadership cohort",
      "Full compliance documentation for your health inspector binders",
    ],
    highlightsEs: [
      "Tarifa reducida de $125 por gerente para grupos de 5 o más",
      "Viajamos directamente a su ubicación sin costo de desplazamiento",
      "Sesión privada adaptada a los turnos y horarios de su personal",
      "Impartida en su idioma de preferencia (inglés o español)",
      "Calificación inmediata del examen supervisado para todo su equipo",
      "Documentación completa de cumplimiento para las carpetas de inspección sanitaria",
    ],
    minParticipants: 5,
  },
  {
    id: "food-handler",
    title: "ServSafe Food Handler Training",
    titleEs: "Certificación de Manipulador de Alimentos ServSafe",
    badge: "California Food Handler Card Compliance",
    badgeEs: "Cumplimiento del Carnet de Manipulador de California",
    price: 49,
    priceNote: "per person (5-person minimum for on-site class)",
    priceNoteEs: "por persona (mínimo de 5 personas para clase presencial)",
    duration: "2.5 – 3 Hours comprehensive in-person workshop",
    durationEs: "Taller presencial completo de 2.5 a 3 horas",
    format: "In-Person Classroom or On-Site Training",
    formatEs: "Presencial en Aula o en su Local",
    validity: "3 Years in California",
    validityEs: "3 Años en California",
    targetAudience: "Line cooks, prep cooks, dishwashers, servers, bartenders, bussers, baristas, and back-of-house culinary staff.",
    targetAudienceEs: "Cocineros de línea, ayudantes de cocina, lavaplatos, meseros, cantineros, ayudantes de mesero y baristas.",
    description: "Ensure 100% of your food prep and service crew hold legal California Food Handler cards. Taught in an engaging, visual, easy-to-understand format with hands-on examples, followed immediately by the required exam.",
    descriptionEs: "Asegure que el 100% de su personal de preparación y servicio cuente con su tarjeta legal de manipulador de alimentos de California. Impartido de forma dinámica, visual y fácil de asimilar.",
    highlights: [
      "Affordable flat $49 per employee including official certificate",
      "Mandatory for all California restaurant and hospitality staff",
      "In-person instruction ensures high pass rates and real understanding",
      "Available in English and Spanish with bilingual instructor options",
      "Immediate results and official certificates provided upon passing",
      "Ideal for onboarding whole kitchen teams in a single afternoon",
    ],
    highlightsEs: [
      "Tarifa plana accesible de $49 por empleado con certificado oficial incluido",
      "Obligatorio para todo el personal de restaurantes y hotelería en California",
      "La instrucción presencial garantiza altos índices de aprobación y comprensión real",
      "Disponible en inglés y español con opciones de instrucción bilingüe",
      "Resultados inmediatos y certificados oficiales entregados al aprobar",
      "Ideal para capacitar a todo su equipo de cocina en una sola tarde",
    ],
    minParticipants: 5,
  },
];

export const FAQS_DATA = [
  {
    category: "Certification & Law",
    categoryEs: "Certificación y Ley",
    q: "Does California law require my restaurant to have a certified Food Safety Manager?",
    qEs: "¿La ley de California exige que mi restaurante tenga un Gerente de Inocuidad de Alimentos certificado?",
    a: "Yes. Under California Health and Safety Code Section 113947.3, every food facility that prepares, handles, or dispenses non-prepackaged food must have at least one Certified Food Protection Manager on staff. The certification must be renewed every 5 years.",
    aEs: "Sí. De acuerdo con el Artículo 113947.3 del Código de Salud y Seguridad de California, cada establecimiento de alimentos que prepare, manipule o distribuya alimentos no preenvasados debe contar con al menos un Gerente de Protección de Alimentos Certificado. La certificación debe renovarse cada 5 años.",
  },
  {
    category: "Scheduling & On-Site",
    categoryEs: "Horarios y Servicio en su Local",
    q: "How does the 'We Come To Your Location' service work?",
    qEs: "¿Cómo funciona el servicio de 'Vamos a su Ubicación'?",
    a: "For groups of 2 or more managers, our certified instructors travel directly to your restaurant, commissary, or office anywhere in Los Angeles, Orange, or Ventura County free of charge! For 5 or more managers, your rate automatically drops from $150 to $125 per manager. We bring all presentation materials, workbooks, and official exams.",
    aEs: "Para grupos de 2 o más gerentes, nuestros instructores certificados viajan directamente a su restaurante, comisariato u oficina en los condados de Los Ángeles, Orange o Ventura ¡sin costo de viaje! Para 5 o más gerentes, su tarifa baja automáticamente de $150 a $125 por gerente. Llevamos todo el material didáctico y los exámenes oficiales.",
  },
  {
    category: "Exams & Results",
    categoryEs: "Exámenes y Resultados",
    q: "When will we get our exam results?",
    qEs: "¿Cuándo recibiremos los resultados del examen?",
    a: "We provide IMMEDIATE RESULTS! Because our instructors are certified proctors, exams are graded on-site upon completion. You will know right away whether you passed, avoiding weeks of waiting.",
    aEs: "¡Brindamos RESULTADOS INMEDIATOS! Debido a que nuestros instructores son supervisores certificados, los exámenes se califican en el lugar al finalizar. Sabrá de inmediato si aprobó, sin esperas innecesarias.",
  },
  {
    category: "Languages",
    categoryEs: "Idiomas",
    q: "Are classes and exams offered in Spanish?",
    qEs: "¿Las clases y exámenes se ofrecen en español?",
    a: "Yes! All courses and official exams are fully available in Spanish. For Spanish-language classes and coordination, please contact Susana directly at (818) 422-8854 (alternate: (818) 422-8834). For English classes, contact Richard at (818) 339-3477.",
    aEs: "¡Sí! Todos los cursos y exámenes oficiales están totalmente disponibles en español. Para clases y coordinación en español, comuníquese directamente con Susana al (818) 422-8854 (alternativo: (818) 422-8834). Para clases en inglés, llame a Richard al (818) 339-3477.",
  },
  {
    category: "Scheduling & Location",
    categoryEs: "Ubicación y Clases",
    q: "Where is your main classroom located, and what days are classes held?",
    qEs: "¿Dónde está su aula principal y qué días se imparten clases?",
    a: "Our Los Angeles training facility is located at 3171 Los Feliz Blvd. Suite 314, Los Angeles, CA 90039. We hold classes 7 days a week, typically from 9:00 AM to 3:00 PM. Weekend and weekday scheduling is available to fit restaurant operating schedules.",
    aEs: "Nuestra instalación de capacitación en Los Ángeles está ubicada en 3171 Los Feliz Blvd. Suite 314, Los Ángeles, CA 90039. Tenemos clases los 7 días de la semana, típicamente de 9:00 AM a 3:00 PM. Contamos con horarios de fines de semana y entre semana.",
  },
  {
    category: "Booking & Payment",
    categoryEs: "Reservas y Pagos",
    q: "How do I enroll or book a training date?",
    qEs: "¿Cómo me inscribo o reservo una fecha de capacitación?",
    a: "To ensure proper scheduling and location dispatch, all class bookings are coordinated directly by phone or via our online inquiry form. Please call Richard at (818) 339-3477 for English or Susana at (818) 422-8854 for Spanish. Payment is settled with our staff via verified corporate invoice, card, or check; no unintegrated online payments are taken.",
    aEs: "Para garantizar una programación adecuada y la coordinación del instructor, todas las reservas se coordinan directamente por teléfono o mediante nuestro formulario de consulta. Llame a Richard al (818) 339-3477 (inglés) o a Susana al (818) 422-8854 (español).",
  },
];
