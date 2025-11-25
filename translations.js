/* translations.js
   Single-file translation dictionary + helpers
   Languages: en, ha (Hausa), yo (Yoruba), ig (Igbo), fr (French)
   Usage: add data-i18n="key" attributes to HTML elements, then call changeLanguage('ha') etc.
*/

const translations = {
  en: {
    /* Header / Nav */
    achrams: "ACHRAMS",
    official_airport_car_hire: "Official Airport Car Hire",
    home: "Home",
    features: "Features",
    how_it_works: "How It Works",
    airports: "Airports",
    faqs: "FAQs",
    accessibility: "Accessibility",
    book_now: "Book Now",
    scan_and_book_now: "Scan & Book Now",
    contact_support: "Contact Support",

    /* Hero */
    faan_approved_service: "Official FAAN-Approved Service",
    hero_heading_primary: "Your Safe, Reliable",
    hero_heading_secondary: "Airport Car Hire Service",
    hero_sub: "Official FAAN-approved car hire service with transparent pricing.",
    happy_passengers: "Happy Passengers",
    verified_drivers: "Verified Drivers",
    major_airports: "Major Airports",
    average_rating: "Average Rating",

    /* Features */
    why_choose: "Why Choose ACHRAMS?",
    official_service: "Official service with guaranteed safety",
    faan_safety: "FAAN Safety",
    faan_safety_desc: "All drivers vetted by FAAN.",
    clear_pricing: "Clear Pricing",
    clear_pricing_desc: "No hidden fees.",
    zero_wait: "Zero Wait",
    zero_wait_desc: "Driver ready when you land.",
    scan_and_book: "Scan & Book",
    scan_and_book_desc: "No app needed.",
    multilingual: "Multilingual",
    multilingual_desc: "5 languages available.",
    secure_pay: "Secure Pay",
    secure_pay_desc: "Cards and mobile money.",

    /* How It Works */
    how_to_book_title: "How to Book Your Ride",
    how_to_book_sub: "Get your car hire in 4 simple steps",
    step_01: "01",
    step_01_title: "Scan QR",
    step_01_desc: "Find QR codes at airport.",
    step_02_title: "Enter Destination",
    step_02_desc: "Get instant pricing.",
    step_03_title: "Get Driver",
    step_03_desc: "Real-time tracking.",
    step_04_title: "Enjoy Ride",
    step_04_desc: "Pay securely.",
    need_help: "Need Help?",
    need_help_sub: "We are available 24/7.",
    call_phone: "Call: +234 800 ACHRAMS",

    /* Airports */
    available_at_major_airports: "Available at Major Airports",
    professional_service: "Professional service",
    available: "Available",
    coming_soon: "Coming Soon",

    /* Pricing */
    transparent_pricing: "Transparent Pricing",
    no_hidden_charges: "No hidden charges",
    airport_to_city_center: "Airport to City Center",
    airport_to_city_center_price: "₦2,500 - ₦4,500",
    airport_to_suburbs: "Airport to Suburbs",
    airport_to_suburbs_price: "₦4,500 - ₦8,000",
    airport_to_express: "Airport to Express",
    airport_to_express_price: "₦8,000 - ₦15,000",
    price_guarantee_title: "Price Guarantee",
    price_guarantee_desc: "No surge pricing. All fares in Naira (₦).",

    /* Testimonials */
    trusted_by_thousands: "Trusted by Thousands",
    join_satisfied_passengers: "Join satisfied passengers",
    testimonial_most_reliable: "Most reliable service in Nigeria.",
    testimonial_qr_brilliant: "The QR system is brilliant.",
    testimonial_safe_transparent: "Safe and transparent.",

    /* CTA */
    ready_for_better_experience: "Ready for Better Experience?",
    book_your_next_ride: "Book your next ride today.",

    /* FAQ */
    frequently_asked_questions: "Frequently Asked Questions",
    find_answers: "Find answers to common questions about ACHRAMS",
    getting_started: "Getting Started",
    getting_started_q1: "What is ACHRAMS?",
    getting_started_a1: "ACHRAMS is Nigeria's official FAAN-approved airport car hire service. We connect you with verified, licensed drivers at major Nigerian airports through our secure booking platform.",
    getting_started_q2: "Which airports do you serve?",
    getting_started_a2: "We currently operate at: Murtala Muhammed Airport (Lagos), Nnamdi Azikiwe Airport (Abuja), Mallam Aminu Kano Airport (Kano), and Port Harcourt International Airport.",
    getting_started_q3: "Is ACHRAMS safe?",
    getting_started_a3: "Yes! All our drivers are FAAN-verified, background-checked, and licensed. Every trip includes real-time tracking and 24/7 emergency support.",
    booking_title: "Booking",
    booking_q1: "How do I book a ride?",
    booking_a1: "Three easy ways: 1) Scan QR codes at airport baggage claim areas, 2) Visit www.achrams.com.ng, 3) Call +234 800 ACHRAMS",
    booking_q2: "Do I need an account to book?",
    booking_a2: "No, you can book as a guest using QR codes. However, creating an account gives you faster checkout, trip history, and exclusive offers.",
    booking_q3: "Can I book for someone else?",
    booking_a3: "Yes! Just provide their name, phone number, and flight details when booking.",

    /* Privacy */
    privacy_policy_title: "ACHRAMS Privacy Policy",
    privacy_policy_effective: "Effective Date: November 3, 2024 | Last Updated: November 3, 2024",
    privacy_intro: "ACHRAMS (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy and personal data in accordance with the Nigeria Data Protection Regulation (NDPR) 2019 and other applicable data protection laws in Nigeria.",
    company_name: "<strong>Company Name:</strong> ACHRAMS Nigeria Limited",
    technology_provider: "Technology Provider: Excellian Technologies",
    privacy_email: "Email: privacy@achrams.com.ng",
    privacy_phone: "Phone: +234 800 ACHRAMS",
    info_we_collect_title: "Information We Collect",
    personal_info_you_provide: "Personal Information You Provide",
    contact_info_desc: "Contact Information: Name, phone number, email address",
    travel_info_desc: "Travel Information: Flight details, pickup/drop-off locations, booking preferences",
    payment_info_desc: "Payment Information: Payment method details (processed securely through our payment partners)",
    identification_desc: "Identification: Government-issued ID (for verification purposes when required)",
    info_collected_automatically: "Information Collected Automatically",
    location_data_desc: "Location Data: GPS coordinates for pickup and drop-off (with your consent)",
    device_info_desc: "Device Information: Device type, operating system, browser type, IP address",
    usage_data_desc: "Usage Data: Booking history, service preferences, app interactions",
    how_we_use_title: "How We Use Your Information",
    service_delivery_desc: "<li>Process and manage your car hire bookings</li>, <li>connect you with verified drivers</li>, <li>provide real-time tracking and updates</li>, send booking confirmations and receipts.",
    safety_security_desc: "Verify driver credentials with FAAN, monitor service quality and safety standards, investigate incidents or complaints, prevent fraud and unauthorized access.",
    service_delivery: "Service Delivery",
    process_bookings: "Process and manage your car hire bookings",
    connect_drivers: "Connect you with verified drivers",
    real_time_tracking: "Provide real-time tracking and updates",
    send_confirmations: "Send booking confirmations and receipts",
    verify_drivers: "Verify driver credentials with FAAN",
    monitor_safety: "Monitor service quality and safety standards",
    investigate_incidents: "Investigate incidents or complaints",
    prevent_fraud: "Prevent fraud and unauthorized access",
    consent: "By using ACHRAMS services, you acknowledge that you have read, understood, and agree to this Privacy Policy.",
    data_sharing_title: "4. Data Sharing and Disclosure",
    data_sharing_desc: "We only share your personal information in the following circumstances:",
    service_providers: "Service Providers: Drivers, payment processors, and technology partners (Excellian Technologies)",
    regulatory_authorities: "Regulatory Authorities: FAAN, NITDA, and law enforcement when legally required",
    business_transfers: "Business Transfers: In the event of a merger, acquisition, or sale of assets",
    data_security: "5. Data Security",
    data_security_desc: "We implement industry-standard security measures:",
    encryption: "Encryption: Data transmitted using SSL/TLS encryption",
    access_controls: "Access Controls: Limited access to authorized personnel only",
    secure_storage: "Secure Storage: Data stored on secure servers with regular backups",
    regular_audits: "Regular Audits: Periodic security assessments conducted by Excellian Technologies",
    staff_training: "Staff Training: All employees trained on data protection best practices",
    rights_under_ndpr: "6. Your Rights Under NDPR",
    rights_desc: "As a data subject in Nigeria, you have the following rights:",
    right_to_access: "Right to Access: Request a copy of the personal data we hold about you",
    right_to_rectification: "Right to Rectification: Request correction of inaccurate or incomplete personal data",
    right_to_erasure: "Right to Erasure: Request deletion of your personal data",
    right_to_data_portability: "Right to Data Portability: Receive your data in a structured, commonly used format",
    right_to_object: "Right to Object: Object to processing based on legitimate interests",
    right_to_withdraw_consent: "Right to Withdraw Consent: Withdraw consent at any time",
    right_to_lodge_complaint: "Right to Lodge a Complaint: File a complaint if your rights have been violated",
    data_retention: "7. Data Retention",
    data_retention_desc: "We retain your personal data for the following periods:",
    active_account_data: "Active Account Data: Retained while your account is active",
    booking_records: "Booking Records: Retained for 2 years for legal and accounting purposes",
    payment_information: "Payment Information: Retained per financial regulations (minimum 2 years)",
    communication_records: "Communication Records: Retained for 1 year for quality assurance",
    marketing_consent: "Marketing Consent: Until you withdraw consent or after 1 year of inactivity",
    contact_information: "8. Contact Information",
    dpo: "Data Protection Officer",
    dpo_email: "Email: dpo@achrams.com.ng",
    dpo_phone: "Phone: +234 800 ACHRAMS",
    general_privacy_inquiries: "General Privacy Inquiries",
    general_privacy_email: "Email: privacy@achrams.com.ng",
    consent_title: "Consent",
    consent_text: "By using ACHRAMS services, you acknowledge that you have read, understood, and agree to this Privacy Policy.",
    

    /* Terms */
    terms_title: "Terms and Conditions",
    terms_effective: "Effective Date: November 3, 2024 | Last Updated: November 3, 2024",
    terms_intro_title: "1. Introduction and Acceptance",
    terms_intro_desc: "By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you must not use our Services.",
    legal_capacity: "Legal Capacity",
    legal_capacity_desc: "You must be at least 18 years of age to use our Services.",
    service_description_title: "2. Service Description",
    service_description_desc: "ACHRAMS operates as an intermediary platform connecting passengers with FAAN-verified, licensed drivers at Nigerian airports. We facilitate car hire bookings but do not provide transportation services directly.",
    user_registration_title: "3. User Registration and Account",
    account_creation: "Account Creation",
    account_creation_desc: [
      "You may create an account or book as a guest using our QR code system",
      "You must provide accurate, current, and complete information",
      "You are responsible for maintaining the confidentiality of your account credentials",
      "You must notify us immediately of any unauthorized access"
    ],
    account_responsibilities: "Account Responsibilities",
    account_responsibilities_desc: [
      "You are solely responsible for all activities under your account",
      "You must not share your account with others",
      "You must not create multiple accounts to abuse promotions or services"
    ],
    booking_payment_title: "4. Booking and Payment",
    booking_process: "Booking Process",
    booking_process_desc: [
      "Bookings can be made via QR codes at airports, our website, or mobile app",
      "You will receive upfront pricing before confirming your booking",
      "All bookings are subject to driver availability"
    ],
    pricing: "Pricing",
    pricing_desc: [
      "All prices are displayed in Nigerian Naira (₦)",
      "Prices are fixed and transparent with no surge pricing",
      "Additional charges may apply for waiting time exceeding 15 minutes, tolls, parking fees, excessive luggage, detours, or cleaning fees"
    ],
    accept_text: "We accept:",
    payment_methods: "Payment Methods",
    payment_methods_desc: [
      "Credit/Debit Cards (Visa, Mastercard, Verve)",
      "Mobile Money (from approved Nigerian providers)",
      "Bank Transfers",
      "Cash (subject to driver availability)"
    ],
    cancellation_refund_title: "5. Cancellation and Refund Policy",
    passenger_cancellations: "Passenger Cancellations",
    passenger_cancellations_desc: [
      "Free Cancellation: Up to 5 minutes after booking confirmation",
      "Cancellation Fee: ₦500 if cancelled 5‑15 minutes after booking",
      "Full Charge: Cancellations after driver arrival or beyond 15 minutes",
      "No‑Show: Full fare charged if passenger does not appear within 10 minutes of driver arrival"
    ],
    refund_processing: "Refund Processing",
    refund_processing_desc: "Refunds are processed within 5‑7 business days for valid cancellations and 7‑14 business days for service issue refunds.",
    user_conduct_title: "6. User Conduct and Prohibited Activities",
    user_must_not: "You Must Not:",
    user_must_not_desc: [
      "Use the Services for illegal purposes",
      "Harass, threaten, or abuse drivers",
      "Transport illegal goods, weapons, or hazardous materials",
      "Exceed vehicle passenger capacity",
      "Smoke in vehicles (unless explicitly permitted)",
      "Manipulate or abuse the booking system",
      "Attempt to bypass payment systems"
    ],
    consequences_of_violation: "Consequences of Violations",
    consequences_desc: "Violations may result in immediate trip termination, account suspension or permanent ban, legal action, and referral to law enforcement authorities.",
    safety_security_title: "7. Safety and Security",
    safety_security_desc_list: [
      "We partner only with FAAN‑verified drivers",
      "All drivers undergo background checks",
      "Real‑time tracking available for all trips",
      "Emergency support line: +234 800 ACHRAMS"
    ],
    report_safety_immediately: "Report Safety Issues Immediately",
    emergency_line: "Emergency Line: +234 800 ACHRAMS (Option 1)",
    emergency_email: "Email: safety@achrams.com.ng",
    limitation_of_liability_title: "8. Limitation of Liability",
    limitation_of_liability_desc: "ACHRAMS provides a platform connecting passengers with independent drivers. We are not:",
    limitation_of_liability_list: [
      "A transportation carrier",
      "Responsible for driver actions or omissions",
      "Liable for accidents, injuries, or damages during trips",
      "Guaranteeing service availability at all times"
    ],
    disclaimer: "Services are provided \"AS IS\" and \"AS AVAILABLE\" without warranties of any kind.",
    intellectual_property_title: "9. Intellectual Property",
    intellectual_property_desc: "All intellectual property rights in the Platform, including trademarks, logos, software, and content, are owned by ACHRAMS, Excellian Technologies, or our licensors. The ACHRAMS platform is developed and maintained by Excellian Technologies. All technology rights are the property of Excellian Technologies.",
    dispute_resolution_title: "10. Dispute Resolution",
    dispute_resolution_desc: [
      "Before initiating formal proceedings, you agree to contact us at legal@achrams.com.ng to attempt informal resolution.",
      "Any disputes not resolved informally shall be settled by arbitration in accordance with the Arbitration and Conciliation Act (Cap A18) Laws of the Federation of Nigeria 2004.",
      "These Terms are governed by the laws of the Federal Republic of Nigeria."
    ],
    terms_contact_title: "11. Contact Information",
    terms_contact_desc: {
      company: "ACHRAMS Nigeria Limited",
      tech_partner: "Technology Partner: Excellian Technologies",
      general_inquiries: {
        label: "General Inquiries",
        email: "Email: support@achrams.com.ng",
        phone: "Phone: +234 800 ACHRAMS"
      },
      legal_department: {
        label: "Legal Department",
        email: "Email: legal@achrams.com.ng"
      },
      safety_emergency: {
        label: "Safety and Emergency",
        hotline: "24/7 Hotline: +234 800 ACHRAMS (Option 1)",
        email: "Email: safety@achrams.com.ng"
      }
    },
    acknowledgment_title: "Acknowledgment",
    acknowledgment_desc: "BY CLICKING \"I AGREE,\" SCANNING A QR CODE TO BOOK, OR USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.",
    available_in_languages: "Available in 5+ languages",

    /* Footer */
    contact_us: "Contact Us",
    available_in_languages: "Available in 5+ languages",
    general_inquiries: "General Inquiries",
    phone_contact: "+234 800 ACHRAMS",
    email_support: "Email: support@achrams.com.ng",
    safety_hotline: "24/7 Hotline: +234 800 ACHRAMS (Option 1)",

    /* Small UI bits */
    ready: "Ready",
    scan_book: "Scan & Book",
    terms_acknowledgment_button: 'I AGREE',
  },

  /* -------------------------
     Hausa translations (ha)
     ------------------------- */
  ha: {
    achrams: "ACHRAMS",
    official_airport_car_hire: "Hukumar Hayar Mota ta Filin Jirgin Sama",
    home: "Gida",
    features: "Fasali",
    how_it_works: "Yadda Ake Aiki",
    airports: "Filayen Jirgin Sama",
    faqs: "Tambayoyi",
    accessibility: "Dacewa",
    book_now: "Yi Ajiyar Yanzu",
    scan_and_book_now: "Duba & Yi Ajiyar Yanzu",
    contact_support: "Tuntuɓi Tallafi",

    faan_approved_service: "Ayyuka Masu Amincewa daga FAAN",
    hero_heading_primary: "Lafiya, Amintacce",
    hero_heading_secondary: "Ayyukan Hayar Mota na Filin Jirgin Sama",
    hero_sub: "Hanyar hayar mota mai izini daga FAAN tare da farashi masu gaskiya.",
    happy_passengers: "Fasinjoji Masu Farin Ciki",
    verified_drivers: "Direbobin da aka Tantance",
    major_airports: "Manyan Filayen Jirgin Sama",
    average_rating: "Matsakaicin Kimantawa",

    why_choose: "Me Yasa Za a Zaɓi ACHRAMS?",
    official_service: "Ayyuka na hukuma tare da tabbacin tsaro",
    faan_safety: "Tsaron FAAN",
    faan_safety_desc: "Duk direbobi an tantance su ta FAAN.",
    clear_pricing: "Farashi Mai Gaskiya",
    clear_pricing_desc: "Babu kudin ɓoyewa.",
    zero_wait: "Babu Jinkiri",
    zero_wait_desc: "Direba yana shirye lokacin da ka sauka.",
    scan_and_book: "Duba & Yi Ajiyar",
    scan_and_book_desc: "Ba kwa buƙatar app.",
    multilingual: "Yare da yawa",
    multilingual_desc: "Ana samun harsuna 5.",
    secure_pay: "Biya Mai Tsaro",
    secure_pay_desc: "Katin kuɗi da mobile money.",

    how_to_book_title: "Yadda Ake Yin Ajiyar Mota",
    how_to_book_sub: "Samu hayar motarka cikin matakai 4 masu sauƙi",
    step_01: "01",
    step_01_title: "Duba QR",
    step_01_desc: "Nemo lambobin QR a filin jirgin sama.",
    step_02_title: "Shigar da Wuri",
    step_02_desc: "Sami farashi nan take.",
    step_03_title: "Samu Direba",
    step_03_desc: "Bin lokaci-lokaci.",
    step_04_title: "Ji Dadin Tafiya",
    step_04_desc: "Biya lafiya.",
    need_help: "Kana Bukatar Taimako?",
    need_help_sub: "Muna nan 24/7.",
    call_phone: "Kira: +234 800 ACHRAMS",

    available_at_major_airports: "Akwai a Manyan Filayen Jirgin Sama",
    professional_service: "Ayyuka na ƙwararru",
    available: "Akwai",
    coming_soon: "Zai Zo Nan Ba da Daɗewa ba",

    transparent_pricing: "Farashin Bayyane",
    no_hidden_charges: "Babu caji ɓoye",
    airport_to_city_center: "Filin Jirgin Sama zuwa Cibiyar Birni",
    airport_to_city_center_price: "₦2,500 - ₦4,500",
    airport_to_suburbs: "Filin Jirgin Sama zuwa Unguwa",
    airport_to_suburbs_price: "₦4,500 - ₦8,000",
    airport_to_express: "Filin Jirgin Sama zuwa Express",
    airport_to_express_price: "₦8,000 - ₦15,000",
    price_guarantee_title: "Garanti na Farashi",
    price_guarantee_desc: "Babu farashin hauhawa. Duk fare a Naira (₦).",

    trusted_by_thousands: "An Yarda da Mu da Dubu-dubu",
    join_satisfied_passengers: "Kasance cikin fasinjojin da suka gamsu",
    testimonial_most_reliable: "Mafi amintaccen sabis a Najeriya.",
    testimonial_qr_brilliant: "Tsarin QR yana da ban mamaki.",
    testimonial_safe_transparent: "Lafiya kuma bayyananne.",

    ready_for_better_experience: "Shirye don Ƙwarewa Mai Kyau?",
    book_your_next_ride: "Yi ajiyar tafiyarka na gaba a yau.",

    frequently_asked_questions: "Tambayoyi Akai-Akai",
    find_answers: "Samo amsoshin tambayoyin game da ACHRAMS",
    getting_started: "Farawa",
    getting_started_q1: "Menene ACHRAMS?",
    getting_started_a1: "ACHRAMS sabis ne na hayar mota na filin jirgin sama da FAAN ta amince a Najeriya. Muna haɗa ku da direbobin da aka tantance, masu lasisi a manyan filayen jirgin sama ta hanyar dandamalinmu na tsaro.",
    getting_started_q2: "Wadanne filayen jirgin sama kuke yi?",
    getting_started_a2: "A halin yanzu muna aiki a: Murtala Muhammed (Lagos), Nnamdi Azikiwe (Abuja), Mallam Aminu Kano (Kano), da Port Harcourt International.",
    getting_started_q3: "Shin ACHRAMS lafiya ne?",
    getting_started_a3: "Ee! Duk direbobinmu an tantance su ta FAAN, an yi musu binciken baya, kuma suna da lasisi. Kowace tafiya tana zuwa da bin lokaci-lokaci da tallafin gaggawa 24/7.",
    booking_title: "Ajiyar Wuri",
    booking_q1: "Ta yaya zan yi ajiyar mota?",
    booking_a1: "Hanyoyi guda uku: 1) Duba lambobin QR a wuraren karbar kaya, 2) Ziyarci www.achrams.com.ng, 3) Kira +234 800 ACHRAMS",
    booking_q2: "Shin ina buƙatar asusu?",
    booking_a2: "A'a, za ka iya yin ajiyar ba tare da asusu ba ta QR. Amma ƙirƙirar asusu yana ba da saurin biya, tarihin tafiya, da tayin musamman.",
    booking_q3: "Zan iya yin ajiyar wani?",
    booking_a3: "Iya! Ka ba da sunansa, lambar waya, da bayanin jirgi lokacin yin ajiyar.",

    privacy_policy_title: "Dokar Sirri na ACHRAMS",
    privacy_policy_effective: "Rana mai aiki: 3 Nuwamba, 2024 | An sabunta: 3 Nuwamba, 2024",
    privacy_intro: "ACHRAMS (\"mu,\" \"namu\") na aiki don kare sirrinka da bayanan ka in dai bisa ka'idojin NDPR 2019 na Najeriya da dokoki masu dacewa.",
    company_name: "Sunan Kamfani: ACHRAMS Nigeria Limited",
    technology_provider: "Mai Bayar da Fasaha: Excellian Technologies",
    privacy_email: "Imel: privacy@achrams.com.ng",
    privacy_phone: "Waya: +234 800 ACHRAMS",
    info_we_collect_title: "Bayanan da Muke Tara",
    personal_info_you_provide: "Bayanan Kai da Kake Bayarwa",
    contact_info_desc: "Bayanan Tuntuɓa: Suna, lambar waya, adireshin imel",
    travel_info_desc: "Bayanan Tafiya: Bayanai jirgi, wuraren ɗauka/ saukewa, zaɓuɓɓukan ajiyar",
    payment_info_desc: "Bayanan Biyan Kuɗi: Bayanai na hanyar biyan kuɗi (ana sarrafa su cikin tsaro)",
    identification_desc: "Shaida: Takardar shaidar gwamnati (idan an buƙata)",
    info_collected_automatically: "Bayanan da aka tattara ta atomatik",
    location_data_desc: "Bayanan Wuri: GPS don ɗauka da saukewa (da izini)",
    device_info_desc: "Bayanan Na'ura: Nau'in na'ura, tsarin aiki, burauza, IP address",
    usage_data_desc: "Bayanan Amfani: Tarihin ajiyar, zaɓuɓɓukan sabis, hulɗa da app",
    how_we_use_title: "Yadda Muke Amfani da Bayananka",
    service_delivery_desc: "Gudanar da ajiyarku, haɗa ku da direbobin da aka tantance, samar da bin lokaci-lokaci da sabuntawa, aika tabbaci da takardun karɓa.",
    safety_security_desc: "Tabbatar da bayanan direba da FAAN, kula da inganci, binciken matsaloli, da hana zamba.",
    service_delivery: "Bayar da Sabis",
    process_bookings: "Sarrafa da gudanar da ajiyar motarku",
    connect_drivers: "Haɗa ku da direbobin da aka tabbatar",
    real_time_tracking: "Bayar da bin diddigin lokaci-lokaci da sabuntawa",
    send_confirmations: "Aika tabbatarwar ajiyar da risiti",

    safety_security_desc: "Tsaro da Aminci",
    verify_drivers: "Tabbatar da ƙwarar direba tare da FAAN",
    monitor_safety: "Kulawa da ingancin sabis da ƙa’idodin aminci",
    investigate_incidents: "Bincikar lamurra ko korafe‑korafe",
    prevent_fraud: "Hanawa zamba da samun izinin ba bisa ka’idar ba",

    consent_title: "Yarda",
    consent_desc: "Ta amfani da ayyukan ACHRAMS, ka amince cewa ka karanta, ka fahimta, kuma ka yarda da wannan Manufar Sirri.",

    data_sharing_title: "4. Raba Bayanai da Bayyanawa",
    data_sharing_desc: "Muna raba bayananka na sirri ne kawai a cikin waɗannan yanayoyi:",
    service_providers: "Masu ba da Sabis: Direbobi, masu sarrafa biyan kuɗi, da abokan hulɗar fasaha (Excellian Technologies)",
    regulatory_authorities: "Hukumar Kula: FAAN, NITDA, da jami’an doka idan ya zama tilas",
    business_transfers: "Canja Harkokin Kasuwanci: A lokacin haɗin gwiwa, saye, ko sayar da dukiya",

    data_security: "5. Tsaron Bayanai",
    data_security_desc: "Muna aiwatar da matakan tsaro na masana’antu:",
    encryption: "Rufewa: Ana aika bayanai ta amfani da SSL/TLS",
    access_controls: "Kuntatawar Samun: Iya samun bayanai ne kawai ga waɗanda aka izini",
    secure_storage: "Ajiya Mai Tsaro: Ana adana bayanai a kan sabobin tsaro tare da ajiyar madadin akai-akai",
    regular_audits: "Bincike na Al'ada: Ana yin tantance tsaro lokaci-lokaci ta Excellian Technologies",
    staff_training: "Horon Ma’aikata: Dukkan ma’aikata an horar da su kan mafi kyawun hanyoyin kiyaye bayanai",

    rights_under_ndpr: "6. Hakkin ku Bisa NDPR",
    rights_desc: "A matsayin mai bayanai a Najeriya, kuna da waɗannan hakkoki:",
    right_to_access: "Haƙƙin Samun: Nemi kwafin bayanan sirri da muke riƙe game da ku",
    right_to_rectification: "Haƙƙin Gyara: Nemi gyara bayanai masu kuskure ko marasa cikawa",
    right_to_erasure: "Haƙƙin Goge: Nemi a goge bayananku na sirri",
    right_to_data_portability: "Haƙƙin Canja Bayanai: Karɓi bayananku a cikin tsari mai tsari da ake amfani da shi sosai",
    right_to_object: "Haƙƙin Yin adawa: Yin adawa da sarrafa bayanai bisa abubuwan da suka dace",
    right_to_withdraw_consent: "Haƙƙin Ja Bayar da Yarda: Ja yarda a kowane lokaci",
    right_to_lodge_complaint: "Haƙƙin Kai Kotu: Gabatar da ƙorafi idan an saba haƙƙinku",

    data_retention: "7. Riƙewar Bayanai",
    data_retention_desc: "Muna riƙe bayananku na sirri na tsawon waɗannan lokaci:",
    active_account_data: "Bayanan Asusun Mai Aiki: Ana riƙe su yayin da asusunka ke aiki",
    booking_records: "Tarihin Ajiye: Ana riƙe na shekaru 2 don dalilai na doka da lissafi",
    payment_information: "Bayanin Biyan Kuɗi: Ana riƙe bisa ƙa’idodin kuɗi (ƙanana ƙasa da shekaru 2)",
    communication_records: "Tarihin Sadarwa: Ana riƙe na shekara 1 don tabbatar da inganci",
    marketing_consent: "Yarda da Talla: Har sai ka ja yarda ko bayan shekara 1 na rashin aiki",

    contact_information: "8. Bayanan Tuntuɓa",
    dpo: "Jami’in Kariya Bayanai",
    dpo_email: "Imel: dpo@achrams.com.ng",
    dpo_phone: "Waya: +234 800 ACHRAMS",
    general_privacy_inquiries: "Tambayoyi Gabaɗaya Kan Sirri",
    general_privacy_email: "Imel: privacy@achrams.com.ng",
    consent_title: "Yarda",
    consent_text: "Ta amfani da ayyukan ACHRAMS, kun yarda cewa kun karanta, kun fahimta, kuma kun amince da wannan Manufofin Sirri.",


    terms_title: "Sharuɗɗa da Ka'idoji",
    terms_effective: "Rana mai aiki: 3 Nuwamba, 2024 | An sabunta: 3 Nuwamba, 2024",
    terms_intro_title: "1. Gabatarwa da Karɓa",
    terms_intro_desc: "Ta hanyar amfani da sabis ɗinmu, kun yarda da waɗannan Sharuɗɗan. Idan ba ku yarda ba, kada ku yi amfani da sabis ɗinmu.",
    legal_capacity: "Ikon Shari'a",
    legal_capacity_desc: "Dole ne ku kai aƙalla shekaru 18 don amfani da sabis ɗinmu.",
    service_description_title: "2. Bayanin Sabis",
    service_description_desc: "ACHRAMS dandamali ne dake haɗa fasinjoji da direbobin FAAN-verified a filayen Najeriya. Muna taimakawa wajen ajiyar mota amma ba mu samar da sufuri kai tsaye ba.",
    user_registration_title: "3. Rijistar Mai Amfani da Asusun",
    account_creation: "Ƙirƙirar Asusun",
    account_creation_desc: [
      "Zaka iya ƙirƙirar asusu ko yin ajiyar baƙo ta amfani da tsarin lambar QR ɗinmu",
      "Dole ne ka bayar da bayanai na gaskiya, na yanzu, kuma cikakke",
      "Kai ne ke da alhakin kiyaye asirin bayanan asusunka",
      "Dole ne ka sanar da mu nan da nan idan an samu shiga ba bisa ka’ida ba"
    ],
    account_responsibilities: "Nauyin Asusun",
    account_responsibilities_desc: [
      "Kai kaɗai ne ke da alhakin duk ayyukan da ke ƙarƙashin asusunka",
      "Ba za ka raba asusunka da wasu ba",
      "Ba za ka ƙirƙiri asusu da yawa don yin amfani da tayin ko sabis ba"
    ],
    booking_payment_title: "4. Ajiyar da Biyan Kuɗi",
    booking_process: "Tsarin Ajiyar",
    booking_process_desc: [
      "Ana iya yin ajiyar ta QR code a filayen jirgin sama, rukunin yanar gizonmu, ko app ɗin mu",
      "Za ku karɓi farashi kafin tabbatar da ajiyarku",
      "Dukkan ajiyoyi suna ƙarƙashin samuwar direba"
    ],
    pricing: "Farashi",
    pricing_desc: [
      "Dukkan farashin ana nuna su a Naira (₦)",
      "Farashin sun kasance tsayayye kuma bayyanannu ba tare da haɓakar farashi ba",
      "Ƙarin caji na iya ƙara don lokacin jiran da ya zarce minti 15, kuɗin titi, kuɗin ajiye mota, kaya mai yawa, sauyi, ko caji don tsaftacewa"
    ],
     accept_text: "Muna karɓa:",
    payment_methods: "Hanyoyin Biyan Kuɗi",
    payment_methods_desc: [
      "Katin Bashi/Katin Debiti (Visa, Mastercard, Verve)",
      "Kudin Mota na Wayar Salula (daga masu ba da izini a Najeriya)",
      "Canja wurin Banki",
      "Kuɗi (dangane da samuwar direba)"
    ],
    cancellation_refund_title: "5. Manufar Sokewa da Maidowa",
    passenger_cancellations: "Sokewar Fasinja",
    passenger_cancellations_desc: [
      "Soke Kyauta: Har zuwa minti 5 bayan tabbatar da ajiyar",
      "Cajin Sokewa: ₦500 idan an soke bayan minti 5–15 bayan ajiyar",
      "Cikakken Caji: Sokewa bayan isowar direba ko bayan minti 15",
      "No-Show: Za a caje cikakken farashin idan fasinja bai bayyana ba cikin mintuna 10 bayan isowar direba"
    ],
    refund_processing: "Tsarin Maidowa",
    refund_processing_desc: "Ana sarrafa maidowa cikin kwanaki 5–7 na kasuwanci don soke masu inganci da kwanaki 7–14 don maidowa saboda matsalar sabis.",
    user_conduct_title: "6. Hanyar Amfani da Mai Amfani da Ayyuka da Ayyukan da Aka Haramta",
    user_must_not: "Ba Dole ne Ka Yi:",
    user_must_not_desc: [
      "Amfani da Sabis ɗin don ayyukan haram",
      "Cin zarafi, barazana, ko wulakanci direbobi",
      "Jigil ɗin kaya haramtattu, makamai, ko kayan haɗari",
      "Wuce yawan fasinja na abin hawa",
      "Shan taba a cikin motoci (sai idan an yarda a fili)",
      "Girgiza ko amfani da tsarin ajiyar ta hanyar da ba daidai ba",
      "Ƙoƙarin kauce wa tsarin biyan kuɗi"
    ],
    consequences_of_violation: "Sakamakon Take Ka’ida",
    consequences_desc: "Take ka’ida na iya samun sakamako kamar dakatar da tafiya nan take, dakatar da asusu ko har abada, matakin doka, da kai rahoto ga hukumomin tsaro.",
    safety_security_title: "7. Tsaro da Aminci",
    safety_security_desc_list: [
      "Muna haɗin gwiwa ne kawai da direbobin da FAAN ta tabbatar da su",
      "Dukkan direbobi suna ƙarƙashin binciken baya",
      "Bi diddigin lokaci‑lokaci don duk tafiye-tafiye",
      "Layin goyon bayan gaggawa: +234 800 ACHRAMS"
    ],
    report_safety_immediately: "Rapor Tsaro Nan da Nan",
    emergency_line: "Layin Gaggawa: +234 800 ACHRAMS (Zaɓi 1)",
    emergency_email: "Imel: safety@achrams.com.ng",
    limitation_of_liability_title: "8. Iyaka na Alhaki",
    limitation_of_liability_desc: "ACHRAMS yana samar da dandamali wanda ke haɗa fasinjoji da direbobi masu zaman kansu. Ba mu ne:",
    limitation_of_liability_list: [
      "Kamfanin sufuri ba",
      "Mai alhakin ayyukan direba ko kuskuren su ba",
      "Mai ɗaukar nauyi ga haɗarurruka, rauni, ko barnar da ta faru yayin tafiye‑tafiye ba",
      "Mai tabbatar da samun sabis kowane lokaci ba"
    ],
    disclaimer: "Sabis ɗin ana bayar da su “KAMAR YADDA SUKA KE” da “KAMAR YADDA SU AKE SAMU” ba tare da tabbacin kowane irin ba.",
    intellectual_property_title: "9. Kadarorin Haƙƙin Ƙirƙira",
    intellectual_property_desc: "Dukkan haƙƙin haƙƙin mallaka a kan Dandalin, ciki har da alamun kasuwanci, tambura, software, da abun ciki, mallakar ACHRAMS ne, Excellian Technologies, ko masu lasisi na mu. Dandalin ACHRAMS an haɓaka kuma Excellian Technologies ke kula da shi. Duk haƙƙin fasaha mallakar Excellian Technologies ne.",
    dispute_resolution_title: "10. Warware Rigima",
    dispute_resolution_desc: [
      "Kafin fara matakai na hukuma, kun yarda ku tuntube mu a legal@achrams.com.ng don ƙoƙarin sasanta ba tare da shari’a ba.",
      "Duk rigima da ba a warware su ta hanya ba za a warware su ta sulhu bisa ga Dokar Sulhu da Sulhu (Cap A18) Dokokin Tarayyar Najeriya 2004.",
      "Waɗannan Sharuɗɗa ana ƙarƙashin dokokin Tarayyar Najeriya."
    ],
    terms_contact_title: "11. Bayanan Tuntuɓa",
    terms_contact_desc: {
      company: "ACHRAMS Nigeria Limited",
      tech_partner: "Abokin Fasaha: Excellian Technologies",
      general_inquiries: {
        label: "Tambayoyi Gabaɗaya",
        email: "Email: support@achrams.com.ng",
        phone: "Lambar waya: +234 800 ACHRAMS"
      },
      legal_department: {
        label: "Sashen Shari’a",
        email: "Email: legal@achrams.com.ng"
      },
      safety_emergency: {
        label: "Tsaro da Gaggawa",
        hotline: "Layin Gaggawa 24/7: +234 800 ACHRAMS (Zaɓi 1)",
        email: "Email: safety@achrams.com.ng"
      }
    },
    acknowledgment_title: "Yarda / Amincewa",
    acknowledgment_desc: "TA DANNAN “INA YARDA,” LOKACIN DANNAN QR CODE DON AJIYA, KO YAYIN AMFANI DA SABISIN MU, KA YARDA CEWA KA KARANTA, KA FAHIMTA, KUMA KA YARDA DA WAƘANNAN SHARUƊƊA DA KA’IDOJI.",
    available_in_languages: "Ana samuwa a cikin harsuna 5+",

    contact_us: "Tuntuɓi Mu",
    available_in_languages: "Ana Samu a Harsuna 5+",
    general_inquiries: "Tambayoyi Gabaɗaya",
    phone_contact: "+234 800 ACHRAMS",
    email_support: "Imel: support@achrams.com.ng",
    safety_hotline: "Layi na Gaggawa 24/7: +234 800 ACHRAMS (Zaɓi 1)",
    ready: "Shirye",
    scan_book: "Duba & Yi Ajiyar",
    terms_acknowledgment_button: 'NA YARDA',
  },

  /* -------------------------
     Yoruba translations (yo)
     ------------------------- */
  yo: {
    achrams: "ACHRAMS",
    official_airport_car_hire: "Iṣẹ́ Iyá ọkọ Ofurufu ti Ofin fọwọsi",
    home: "Ojúlé",
    features: "Àwọn ànfààní",
    how_it_works: "Bí Ó Ṣe N ṣiṣẹ́",
    airports: "Papa Ofurufu",
    faqs: "Àwọn ìbéèrè",
    accessibility: "Irọrun",
    book_now: "Ìwé ìpèsè Bayi",
    scan_and_book_now: "Ṣàyẹ̀wò & Ìwé Bayi",
    contact_support: "Kan si Atilẹyin",

    faan_approved_service: "Iṣẹ́ ti FAAN fọwọ́sowọ́pọ̀",
    hero_heading_primary: "Abo, Ti o Gbẹ́kẹ̀lé",
    hero_heading_secondary: "Iṣẹ́ Iyá ọkọ Ofurufu",
    hero_sub: "Iṣẹ́ ìyá ọkọ ofurufu ti FAAN fọwọsi pẹ̀lú iye owó tó ṣòro.",
    happy_passengers: "Àwọn arìnrìn-ajo ayọ̀",
    verified_drivers: "Awakó tó jẹ́risi",
    major_airports: "Àwọn papa ofurufu pàtàkì",
    average_rating: "Ìyí iye apapọ",

    why_choose: "Kí nìdí tí ó fi yẹ kí o yan ACHRAMS?",
    official_service: "Iṣẹ́ ìjọba pẹ̀lú ìdánilẹ́kọ̀ọ́ ààbò",
    faan_safety: "Aabo FAAN",
    faan_safety_desc: "Gbogbo awakó ni FAAN ti fọwọ́si.",
    clear_pricing: "Owo tí kò ní ìkólukú",
    clear_pricing_desc: "Kò sí àwọn owó tí a fi pamọ́.",
    zero_wait: "Kò sí ìdákẹ́jẹ",
    zero_wait_desc: "Awakó setan nígbà tí o bá dé.",
    scan_and_book: "Ṣàyẹ̀wò & Ìwé",
    scan_and_book_desc: "Kò sí ìmọ̀rọ̀-èrọ tó yẹ.",
    multilingual: "Ọ̀pọ̀ èdè",
    multilingual_desc: "Èdè marun-ún wa.",
    secure_pay: "Sanwo Lailewu",
    secure_pay_desc: "Kárùkúrù àti mobile money.",

    how_to_book_title: "Bí a ṣe lè ṣe ìwé ìrìn",
    how_to_book_sub: "Gba iyá ọkọ rẹ ní ìgbésẹ 4 tó rọrùn",
    step_01: "01",
    step_01_title: "Ṣàyẹ̀wò QR",
    step_01_desc: "Wa kóòdù QR ní papa ofurufu.",
    step_02_title: "Tẹ ibi",
    step_02_desc: "Gba owo lẹ́sẹkẹsẹ.",
    step_03_title: "Gba awakó",
    step_03_desc: "Títọpa ní ìgbà gidi.",
    step_04_title: "Gbádùn ìrìn",
    step_04_desc: "Sanwo lailewu.",
    need_help: "Ṣe o nilo iranlowo?",
    need_help_sub: "A wa 24/7.",
    call_phone: "Pe: +234 800 ACHRAMS",

    available_at_major_airports: "Wa ní àwọn papa ofurufu pàtàkì",
    professional_service: "Iṣẹ́ onímọ̀",
    available: "Wa",
    coming_soon: "Ma a dé laipẹ",

    transparent_pricing: "Ọya tó ṣí",
    no_hidden_charges: "Kò sí owó tí a tìpamọwọ",
    airport_to_city_center: "Papa Ofurufu si Ariwa Ilu",
    airport_to_city_center_price: "₦2,500 - ₦4,500",
    airport_to_suburbs: "Papa Ofurufu si Agbegbe",
    airport_to_suburbs_price: "₦4,500 - ₦8,000",
    airport_to_express: "Papa Ofurufu si Express",
    airport_to_express_price: "₦8,000 - ₦15,000",
    price_guarantee_title: "Ìdánáà-ẹri Owo",
    price_guarantee_desc: "Kò sí surge pricing. Gbogbo owo ni Naira (₦).",

    trusted_by_thousands: "A gbẹ́kẹ̀lé wa lọ́pọ̀",
    join_satisfied_passengers: "Darapọ̀ mọ́ àwọn arìnrìn-ajo to níyọ",
    testimonial_most_reliable: "Iṣẹ́ tó gbẹ́kẹ̀lé jùlọ ní Nàìjíríà.",
    testimonial_qr_brilliant: "Ẹ̀rọ QR jẹ́ amọ̀ràn.",
    testimonial_safe_transparent: "Aabo ati ṣíṣe.",

    ready_for_better_experience: "Ṣetan fun ìrírí tó dára ju?",
    book_your_next_ride: "Ìwé ìrìn rẹ tó nbọ loni.",

    frequently_asked_questions: "Àwọn ìbéèrè tí a ń bi nígbà gbogbo",
    find_answers: "Wa ìdáhùn sí ìbéèrè nípa ACHRAMS",
    getting_started: "Bibẹrẹ",
    getting_started_q1: "Kí ni ACHRAMS?",
    getting_started_a1: "ACHRAMS jẹ́ iṣẹ́ ìyá ọkọ ofurufu ti FAAN fọwọ́si ní Nàìjíríà. A so ọ pọ̀ mọ́ awakó tó jẹ́risi, tí ó ní ìjẹwọ̀ ní àwọn papa ofurufu pátá.",
    getting_started_q2: "Àwọn papa wo ni ẹ ń sin?",
    getting_started_a2: "A ń ṣiṣẹ́ ní: Murtala Muhammed (Lagos), Nnamdi Azikiwe (Abuja), Mallam Aminu Kano (Kano), ati Port Harcourt International.",
    getting_started_q3: "Ṣe ACHRAMS lailewu?",
    getting_started_a3: "Bẹ́ẹ̀ni! Gbogbo awakó wa ni ìjẹ́risi FAAN, ìṣàlẹ̀ àyẹ̀wò, ati ìwọ̀n ìṣẹ́. Gbogbo ìrìn ni títọpa ní gidi ati atilẹyin pajawiri 24/7.",
    booking_title: "Ìwé ìrìn",
    booking_q1: "Báwo ni mo ṣe le ṣe ìwé ìrìn?",
    booking_a1: "Ọna mẹ́ta: 1) Ṣàyẹ̀wò QR ní ibi agbèjáde, 2) Ìbẹ̀ wẹẹbù wa www.achrams.com.ng, 3) Pe +234 800 ACHRAMS",
    booking_q2: "Ṣe mo nilo àkọọlẹ?",
    booking_a2: "Rara, o lè ṣe ìwé gẹ́gẹ́ bí alejo pẹ̀lú QR. Ṣùgbọ́n àkọọlẹ yóò fun ọ ni ìsanwo yarayara, itan ìrìn, àti ẹbun pàtàkì.",
    booking_q3: "Ṣe mo le ṣe ìwé fún ẹlòmíràn?",
    booking_a3: "Bẹẹni! Fún wọn ni orukọ, foonu, ati alaye ọkọ ofurufu nigba ìwé.",

    privacy_policy_title: "Ilana Asiri ACHRAMS",
    privacy_policy_effective: "Ọjọ́ tí ó wulo: 3 Oṣù kọkànlá, 2024 | Ti ṣe àtúnṣe: 3 Oṣù kọkànlá, 2024",
    privacy_intro: "ACHRAMS (\"a\",\"wa\") jẹ́ ọkan tí ó ní ifẹ́ láti daabo bo aṣiri rẹ̀ àti data rẹ̀ gẹ́gẹ́ bí NDPR 2019 ti Nàìjíríà.",
    company_name: "Orukọ Ile-iṣẹ: ACHRAMS Nigeria Limited",
    technology_provider: "Alábòójútó Imọ-ẹrọ: Excellian Technologies",
    privacy_email: "Imeeli: privacy@achrams.com.ng",
    privacy_phone: "Foonu: +234 800 ACHRAMS",
    info_we_collect_title: "Alaye tí a ń kó",
    personal_info_you_provide: "Alaye Ti O Fun",
    contact_info_desc: "Alaye Olubasọrọ: Orukọ, nomba foonu, imeeli",
    travel_info_desc: "Alaye Irin-ajo: Awọn alaye ọkọ ofurufu, ibi gbigba/ibi idasilẹ",
    payment_info_desc: "Alaye sisan: Awọn alaye ọna isanwo (ti a ṣe ni aabo)",
    identification_desc: "Idanimọ: Iwe-aṣẹ ijọba (ti a ba nilo)",
    info_collected_automatically: "Alaye tí a kó laifọwọyi",
    location_data_desc: "Alaye Ipo: GPS fun gbigba ati isalẹ (pẹlu igbanilaaye)",
    device_info_desc: "Alaye Ẹrọ: Iru ẹrọ, OS, aṣawakiri, IP",
    usage_data_desc: "Alaye Lilo: Itan ìwé, aṣayan iṣẹ, ibaraenisepo app",
    how_we_use_title: "Bí A Ṣe N Lo Alaye Rẹ",
    service_delivery_desc: "Ṣiṣe ati ṣakoso ìwé rẹ, so ọ pọ̀ mọ́ awakó tó jẹ́risi, pese títọpa akoko gidi, ati firanṣẹ ìmúdájú.",
    safety_security_desc: "Ṣayẹwo awakó pẹ̀lú FAAN, tọpinpin didara iṣẹ, ṣawari awọn iṣoro, ati dena jibiti.",
    consent_title: "Ìfọwọ́sowọpọ̀",
    consent_text: "Ní lílo àwọn iṣẹ́ ACHRAMS, o jẹ́wọ̀ pé o ti ka, o ti lóye, o sì fọwọ́si Ilana Àṣírí yìí.",

    terms_title: "Awọn ofin ati ipo",
    terms_effective: "Ọjọ́ tí ó wulo: 3 Oṣù kọkànlá, 2024 | Ti ṣe àtúnṣe: 3 Oṣù kọkànlá, 2024",
    terms_intro_title: "1. Ifaṣepọ àti Gba",
    terms_intro_desc: "Nipa lilo iṣẹ wa, o gba Awọn ofin wọnyi. Ti o ko ba gba, maṣe lo iṣẹ wa.",
    legal_capacity: "Agbara Òfin",
    legal_capacity_desc: "O gbọdọ jẹ o kere ju ọdun 18 lati lo iṣẹ wa.",
    service_description_title: "2. Apejuwe Iṣẹ",
    service_description_desc: "ACHRAMS jẹ pẹpẹ ti o so awọn arinrin ajo pọ pẹlu awọn awakọ FAAN-verified ni awọn papa ofurufu Naijiria. A ṣe iranlọwọ fun awọn ìwé, ṣugbọn a ko pese gbigbe taara.",
    service_delivery: "Ìpèsè Sè́vìsì",
    process_bookings: "Ṣètò àti ṣakoso ìfipamọ́ ọkọ ayárí rẹ",
    connect_drivers: "Sọ̀rẹ́ pẹ̀lú awakọ tó jẹ́wọ́",
    real_time_tracking: "Pèsè ìtẹ̀sí àkókò gidi àti ìmúdájú",
    send_confirmations: "Firanṣẹ ìfọwọ́si ìfipamọ́ àti rísití",
    verify_drivers: "Ṣayẹwo ìmẹ̀ràn awakọ pẹ̀lú FAAN",
    monitor_safety: "Ṣọ́ra fún didara iṣẹ́ ati ìṣètò ààbò",
    investigate_incidents: "Ṣewádìí iṣẹlẹ́ tàbí ẹ̀dun",
    prevent_fraud: "Dínà gbígbé ègbògi àti ìwọlé laì gba ìyẹn ni àṣẹ",

    consent_title: "Ifọwọ́si",
    consent_desc: "Nipa lílo iṣẹ́ ACHRAMS, o jẹ́wọ́ pé o ti ka, o ye, ati pe o gba Ilana Asiri yii.",

    data_sharing_title: "4. Pípín Aláyè àti Ifilọlẹ́",
    data_sharing_desc: "A pín aláyè tirẹ̀ nípa àìmọ́kan nípa ìpinnu wọ̀lú nìyí:",
    service_providers: "Awọn Olùpèsè Sè́vìsì: Awako, olùṣàkóso ìsanwó, ati awọn alábàáṣepọ́ imọ-ẹrọ (Excellian Technologies)",
    regulatory_authorities: "Àṣẹ Ìṣàkóso: FAAN, NITDA, ati agbofinro nígbà tí ofin bá nilo rẹ",
    business_transfers: "Ìyípadà Ìṣowo: Ní ìṣẹ̀lẹ̀ ìdarapọ̀, rira, tàbí tita dukia",

    data_security: "5. Ààbò Aláyè",
    data_security_desc: "A ṣe imuse awọn igbese aabo ile-iṣẹ-nla:",
    encryption: "Ìkàmúlérò: Aláyè ti gbe lọ́wọ́ nípa SSL/TLS ìkàmúlérò",
    access_controls: "Àwọn ìṣàkóso wiwọlé: Àìmọ́ ni ẹgbẹ́ nikan ni a fun ni ìméràn",
    secure_storage: "Ipamọ̀ Ààbò: Aláyè ti wa ni ipamọ́ lori awọn olupin ti o ni aabo pẹlu awọn afẹyinti deede",
    regular_audits: "Ayẹwo Ti o Wọ́pọ̀: Àyẹ̀wò ìṣètò ààbò ni àkókò jẹ́ ti Excellian Technologies",
    staff_training: "Ikẹ́kọ̀ Ọ́gbọ́n: Gbogbo oṣiṣẹ ni a kọ́ lori àṣeyọrí ìdábòbo aláyè",

    rights_under_ndpr: "6. Ọ̀pọ̀ndà rẹ Labẹ NDPR",
    rights_desc: "Gẹ́gẹ́ bi ẹni ti data rẹ jẹ́ nipa rẹ ni Naijiria, o ní ọ̀pọ̀ndà wọnyi:",
    right_to_access: "Ọ̀pọ̀ndà Láti Wọ́le: Béèrè ẹ̀da aláyè ti a ni nipa rẹ",
    right_to_rectification: "Ọ̀pọ̀ndà Lati Ṣètò: Béèrè ìtọ́sí ti o tọ́ sí aláyè ti ko pé tàbí ti ko tọ́",
    right_to_erasure: "Ọ̀pọ̀ndà Lati Pa: Béèrè ìparẹ gbogbo aláyè rẹ",
    right_to_data_portability: "Ọ̀pọ̀ndà Irinna Data: Gba data rẹ ni apẹrẹ ti eto-ṣiṣe ti o wọpọ julọ",
    right_to_object: "Ọ̀pọ̀ndà Lati Kà Lodi: Kà lodi si iṣakoso data da lori àníyàn to pejọ",
    right_to_withdraw_consent: "Ọ̀pọ̀ndà Lati Yọ Ifọwọ́si: Yọ ifọwọ́si rẹ ni eyikeyi akoko",
    right_to_lodge_complaint: "Ọ̀pọ̀ndà Lati Fi Ẹjọ́ Sókè: Fi ẹjọ́ sókè ti a ba kọ́ ọ̀rọ̀ rẹ",

    data_retention: "7. Idaduro Data",
    data_retention_desc: "A ń pa aláyè tirẹ̀ fún àkókò wọnyi:",
    active_account_data: "Aláyè iroyin ti n ṣiṣẹ: A ń pa ni bí iroyin rẹ ṣe wa",
    booking_records: "Ìtàn Ìfipamọ́: A ń pa fún ọdún 2 fún ìdí ìlànà ofin ati ìṣírò",
    payment_information: "Aláyè Ìsanwó: A ń pa gẹ́gẹ́ bi ìlànà iṣuna (o kere ju ọdún 2)",
    communication_records: "Ìtàn ìbánisọ̀rọ̀: A ń pa fun ọdun kan fun ìdánilójú didara",
    marketing_consent: "Ifọwọ́si Tita: Títí iwọ yóò fi yọ ifọwọ́si tàbí lẹhin ọdun kan ti àìníṣere",

    contact_information: "8. Aláyè Ibi Tó Le Kan Wa",
    dpo: "Oṣiṣẹ Idaabobo Data",
    dpo_email: "Imeélì: dpo@achrams.com.ng",
    dpo_phone: "Fóònù: +234 800 ACHRAMS",
    general_privacy_inquiries: "Ìbéèrè Gbogbogbo Nípa Asiri",
    general_privacy_email: "Imeélì: privacy@achrams.com.ng",

    /* Terms and Conditions */
    terms_title: "Àwọn Ofin àti Ipinnu",
    terms_effective: "Ọjọ́ tí ó wúlò: Oṣù kọkànlá 3, 2024 | Imudojuiwọn tó kẹhin: Oṣù kọkànlá 3, 2024",
    terms_intro_title: "1. Ifihan ati Gbigba",
    terms_intro: "Kaabo sí ACHRAMS, iṣẹ́ ìyàrí ọkọ́ ofurufu ti FAAN fọwọ́ si. Àwọn Ofin àti Ipinnu (“Ofin”) jẹ́ ìpinnu òfin tó ní ìlànà láàárin rẹ (“Olumulo,” “Arinrin-ajo,” tàbí “ìwọ”) àti ACHRAMS Nigeria Limited. Nípa ìwọlé tàbí lílo Sè́vìsì wa, o gba lati tẹ̀lé àwọn Ofin yìí. Bí o kò bá gba, o kò gbọdọ̀ lo Sè́vìsì wa.",
    legal_capacity: "Agbara Ofin",
    legal_capacity_desc: "O gbọdọ̀ jẹ́ o kere ju ọjọ́ ori 18 láti lo Sè́vìsì wa.",
    service_description_title: "2. Apejuwe Sè́vìsì",
    service_description_desc: "ACHRAMS n ṣiṣẹ́ gẹ́gẹ́ bi pẹpẹ alákọsopọ ti n so awọn arinrin-ajo pọ̀ mọ́ àwọn awakọ ti FAAN ti jẹ́wọ́ ni papa ofurufu Naijiria. A rànṣẹ́ ìfipamọ́ ọkọ́ ayárí ṣugbọn a kò fúnni ní iṣẹ́ ìrìn‑ajo taara. Pẹpẹ ACHRAMS ti Excellian Technologies ṣe, wọ́n si ń ṣiṣẹ́ lori rẹ.",
    user_registration_title: "3. Ìforúkọsílẹ̀ Oníṣe ati Àkọọ́lẹ̀",
    account_creation: "Ṣẹda Àkọọ́lẹ̀",
    account_creation_desc: [
      "O lè ṣẹda àkọọ́lẹ̀ tàbí ṣe ìfipamọ́ gẹ́gẹ́ bí alejo nípa ìmúlò QR code wa",
      "O gbọdọ̀ fi ìtọ́kasí aláyè tó peye, lọwọlọwọ, ati kikun",
      "Ìwọ ni ojuse lati ṣetọju ìpamọ́ ìjẹ́wọ́ àkọọ́lẹ rẹ",
      "O gbọdọ̀ jẹ́ ki a mọ́ lẹ́sẹ̀kẹsẹ́ bí a ba wọlé lai aṣẹ"
    ],
    account_responsibilities: "Ojuse Àkọọ́lẹ̀",
    account_responsibilities_desc: [
      "Ìwọ nikan ló jẹ́ ojuse fun gbogbo ìṣe tó wà labẹ àkọọ́lẹ rẹ",
      "O ko gbọdọ̀ pín àkọọ́lẹ rẹ pẹ̀lú ẹlòmíràn",
      "O ko gbọdọ̀ ṣẹda ọ̀pọ̀ àkọọ́lẹ̀ láti lo ipese tàbí iṣẹ́ láìtọ́"
    ],
    booking_payment_title: "4. Ìfipamọ́ ati Ìsanwó",
    booking_process: "Ilana Ìfipamọ́",
    booking_process_desc: [
      "Àwọn ìfipamọ́ lè ṣe nípa QR code ní papa ofurufu, oju opo wẹẹbu wa, tàbí app wa",
      "Ìwọ yóò gba ìtẹ̀sí owo ṣáájú ìmúlò ìfipamọ́ rẹ",
      "Gbogbo ìfipamọ́ wa ní labẹ wiwa awakọ"
    ],
    pricing: "Owo",
    pricing_desc: [
      "Gbogbo owo ni a ṣe afihan ni Naira Naijiria (₦)",
      "Awọn owo wa ni iduroṣinṣin ati kedere laisi ìyí pọ̀ǹ",
      "Awọn idiyele afikun le waye fun akoko idaduro ju iṣẹju 15 lọ, owo toll, owo ibi iduro, ẹru pupọ, ìyí irin-ajo, tàbí idiyele mimọ"
    ],
    accept_text: "A gba:",
    payment_methods: "Awọn Ọna Ọsanwo",
    payment_methods_desc: [
      "Kárà ọmọ́-kárà (Visa, Mastercard, Verve)",
      "Owo Foonu Alábọ́ọ́rọ̀ (láti ọdọ àwọn olupese ti a fọwọ́si ni Naijiria)",
      "Gbigbe Banki",
      "Owo̩ (da lori wiwa awakọ)"
    ],
    cancellation_refund_title: "5. Ilana Ìfagile ati Ìpadabọ́ Owo",
    passenger_cancellations: "Ìfagile Arinrin-ajo",
    passenger_cancellations_desc: [
      "Ìfagile Ọfẹ́: Títí di iṣẹjú 5 lẹ́yìn ìmúlò ìfipamọ́",
      "Owo Ìfagile: ₦500 bí a bá fagilee lẹ́yìn iṣẹjú 5–15",
      "Ìsanwó Patapata: Ìfagile lẹ́yìn ibẹwo awakọ tàbí ju iṣẹju 15 lọ",
      "No-Show: Gbogbo ìye owo ni a gba bí arinrin-ajo kò bá farahan laarin iṣẹjú 10 lẹ́yìn ibẹwo awakọ"
    ],
    refund_processing: "Ìṣètò Ìpadabọ́",
    refund_processing_desc: "A ṣe ìpadabọ́ laarin ọjọ́ iṣẹ́ 5–7 fun ìfagile tó wulo ati ọjọ́ 7–14 fun ìpadabọ́ nitori iṣoro iṣẹ́.",
    user_conduct_title: "6. Ìwà Oníṣe ati Àwọn Ìwa Ti a Kì Í Fọwọ́sí",
    user_must_not: "O Kì Í Ṣe:",
    user_must_not_desc: [
      "Lo Awọn Sè́vìsì fun ìdí arufin",
      "Korò, ìbànújẹ̀, tàbí gbìyànjù awakọ́",
      "Gbe àwọn ohun èlò arufin, ọ̀fà, tàbí ohun eewu",
      "Ṣíjú iye arinrin-ajo ju ti ọkọ lọ",
      "Má ṣe jẹ́ àtẹ́lẹ̀ ninu ọkọ́ (ayafi tí a bá gba)",
      "Ìtùpalẹ̀ tàbí ìmisì ti eto ìfipamọ́",
      "Ìṣàkóso ẹlẹ́gbẹ́ tàbí ìfojúsùn ọna ìsanwó"
    ],
    consequences_of_violation: "Ìtẹ̀sí Àbájáde Ìjabọ́",
    consequences_desc: "Ìjabọ́ lè yọrí sí ìparí ìrìn‑ajo lẹ́sẹ̀kẹsẹ, ìdajọ́ àkọọ́lẹ̀ tàbí ìdákóṣe pẹ̀lú ìlànà ofin, ìgbéjọ́, àti ipe sí àwọn ọrọ̀ ọlọ́pàá.",
    safety_security_title: "7. Ààbò ati Aabo",
    safety_security_desc_list: [
      "A kan bá awọn awakọ́ tí FAAN ti fọwọ́si pọ̀",
      "Gbogbo awakọ́ ni a ṣe àyẹ̀wò ìtàn ìbáṣẹ́sẹ́",
      "Ìtẹ̀sí akoko‑gidi fún gbogbo ìrìn-ajo",
      "Líne ìtìlẹ́yìn pajawiri: +234 800 ACHRAMS"
    ],
    report_safety_immediately: "Jọ̀wọ́ Jẹ́wọ́ Ìṣòro Ààbò Ní Kìákìá",
    emergency_line: "Líne Pajawiri: +234 800 ACHRAMS (Aṣayan 1)",
    emergency_email: "Imeélì: safety@achrams.com.ng",
    limitation_of_liability_title: "8. Ìdínà Ojuse",
    limitation_of_liability_desc: "ACHRAMS n pese pẹpẹ tí ń darapọ̀ arinrin-ajo pọ̀ mọ́ awakọ́ alákọ̀sopọ. A kì í jẹ́:",
    limitation_of_liability_list: [
      "Ẹgbẹ́ ọkọ́ gbigbe",
      "Ojuse fun ìṣe awakọ́ tàbí aṣiṣe wọn",
      "Ojuse fun ìjàmbá, ìfarapa, tàbí ibajẹ tó ṣẹlẹ̀ nípasẹ̀ ìrìn-ajo",
      "Ìdánilójú wiwa iṣẹ́ ní gbogbo àkókò"
    ],
    disclaimer: "A pèsè Sè́vìsì “BÍ WỌ́n ṢẸ” àti “BÍ WỌ́n ṢÍ WA” láìsí ìdánilójú kankan.",
    intellectual_property_title: "9. Ohun-ini Ìmọ̀ Ọgbọn",
    intellectual_property_desc: "Gbogbo ẹ̀tọ́ ohun‑ini ìmọ̀ ọgbọn lori Pẹpẹ, pẹlu àwọn àmì-ìtajà, àami, sọ́fitiwia, àti akoonu, jẹ́ ti ACHRAMS, Excellian Technologies, tàbí àwọn aláṣẹ́ wa. Pẹpẹ ACHRAMS ni Excellian Technologies ṣe, wọ́n sì ń tọju rẹ. Gbogbo ẹ̀tọ́ imọ-ẹrọ jẹ́ ti Excellian Technologies.",
    dispute_resolution_title: "10. Ìpinnu àríyá",
    dispute_resolution_desc: [
      "Ṣáájú kí o ṣe ìgbésẹ́ òfin, o gba láti kan si wa ní legal@achrams.com.ng láti gbìyànjú ìtanràn-ọrọ́ láìléṣin.",
      "Gbogbo ariyá tí kò ba jẹ́ kí a yanju ní ìbáṣepọ̀ ni a ó yanju ní ìgbìmọ̀ ṣọọ̀rọ̀ níbamu pẹ̀lú Ìjọba Àjọṣe ati Àdaríyá (Cap A18) Òfin Ìjọba Orílẹ̀-Èdè Naijiria 2004.",
      "Àwọn Ofin wọ̀nyí jẹ́ labẹ òfin Orílẹ̀-Èdè Naijiria."
    ],
    terms_contact_title: "11. Aláyè Ìbánisọ̀rọ̀",
    terms_contact_desc: {
      company: "ACHRAMS Nigeria Limited",
      tech_partner: "Alábàáṣepọ́ Imọ̀ Ẹ̀rọ: Excellian Technologies",
      general_inquiries: {
        label: "Ìbéèrè Gbogbogbo",
        email: "Imeélì: support@achrams.com.ng",
        phone: "Fóònù: +234 800 ACHRAMS"
      },
      legal_department: {
        label: "Ẹ̀ka Ofin",
        email: "Imeélì: legal@achrams.com.ng"
      },
      safety_emergency: {
        label: "Ààbò ati Pajawiri",
        hotline: "Líne Pajawiri 24/7: +234 800 ACHRAMS (Aṣayan 1)",
        email: "Imeélì: safety@achrams.com.ng"
      }
    },
    acknowledgment_title: "Ìmúrasílẹ̀",
    acknowledgment_desc: "NÍPA TÍTẸ “MO GBA PẸ̀LÚ,” TÌTẸ KÓÒDÙ QR LÁTI ṢE ÌFIPAMỌ́, TÀBÍ LÍLO SÈ́VÌSÌ WA, O JẸ́WỌ́ PÉ O TI KA, O YE, ATI PE O GBA LATI DÁ ÀWỌN OFIN YÌÍ MULẸ̀.",
    available_in_languages: "Wà ní èdè 5+",
    
    contact_us: "Kan si wa",
    available_in_languages: "Wa ni awọn ede 5+",
    general_inquiries: "Awọn ibeere Gbogbogbo",
    phone_contact: "+234 800 ACHRAMS",
    email_support: "Imeeli: support@achrams.com.ng",
    safety_hotline: "Laini pajawiri 24/7: +234 800 ACHRAMS (Aṣayan 1)",
    ready: "Setan",
    scan_book: "Ṣàyẹ̀wò & Ìwé",
    terms_acknowledgment_button: 'MO GBA',
  },

  /* -------------------------
     Igbo translations (ig)
     ------------------------- */
  ig: {
    achrams: "ACHRAMS",
    official_airport_car_hire: "Ọrụ Ịkụ ụgbọ ala n'Ọgbọ elu nke Iwu kwadoro",
    home: "N'ile",
    features: "Atụmatụ",
    how_it_works: "Otu Ọ Si Arụ Ọrụ",
    airports: "Ọgbọ elu",
    faqs: "Ajụjụ a na-ajụkarị",
    accessibility: "Nchekwa",
    book_now: "Zụọ Ugbu a",
    scan_and_book_now: "Lelee & Zụta Ugbu a",
    contact_support: "Kpọtụrụ Nkwado",

    faan_approved_service: "Ọrụ FAAN kwadoro",
    hero_heading_primary: "Nchekwa, Ezi",
    hero_heading_secondary: "Ọrụ Ịkụ ụgbọ ala n'Ọgbọ elu",
    hero_sub: "Ọrụ ịkụ ụgbọ ala FAAN kwadoro nwere ọnụahịa doro anya.",
    happy_passengers: "Ndị njem nwere afọ ojuju",
    verified_drivers: "Ụgbọala ndị e nyochachara",
    major_airports: "Ụgbọ elu buru ibu",
    average_rating: "Ogozizizizizi",

    why_choose: "Gịnị Mere I Ji Họrọ ACHRAMS?",
    official_service: "Ọrụ gọọmenti nwere nchebe a kwadoro",
    faan_safety: "Nchedo FAAN",
    faan_safety_desc: "A nyochaa ndị ọkwọ ụgbọala niile site n'aka FAAN.",
    clear_pricing: "Ọnụahịa doro anya",
    clear_pricing_desc: "Enweghị ụgwọ zoro ezo.",
    zero_wait: "Enweghị nchere",
    zero_wait_desc: "Onye ọkwọ dị njikere mgbe ị rutere.",
    scan_and_book: "Lelee & Zụta",
    scan_and_book_desc: "Enweghị ngwa achọrọ.",
    multilingual: "Asụsụ dị iche iche",
    multilingual_desc: "Asụsụ 5 dị.",
    secure_pay: "Nkwụnye ego echekwara",
    secure_pay_desc: "Kaatị na mobile money.",

    how_to_book_title: "Otu esi zụta ụgbọ ala gị",
    how_to_book_sub: "Nweta ịrụ ụgbọ ala gị n'ime nzọụkwụ 4 dị mfe",
    step_01: "01",
    step_01_title: "Lelee QR",
    step_01_desc: "Chọta koodu QR na ọdụ ụgbọ elu.",
    step_02_title: "Tinye Ebumnobi",
    step_02_desc: "Nweta ọnụahịa ozugbo.",
    step_03_title: "Nweta Onye ọkwọ",
    step_03_desc: "Nlekota n'oge eziokwu.",
    step_04_title: "Nwee njem",
    step_04_desc: "Kwụrụ ụgwọ n'ụzọ nchebe.",
    need_help: "Chọrọ enyemaka?",
    need_help_sub: "Anyị dị 24/7.",
    call_phone: "Kpọọ: +234 800 ACHRAMS",

    available_at_major_airports: "Ndị dị na ọdụ ụgbọ elu dị mkpa",
    professional_service: "Ọrụ ọkachamara",
    available: "Dị",
    coming_soon: "Bịara Emee",

    transparent_pricing: "Ọnụahịa doro anya",
    no_hidden_charges: "Enweghị ụgwọ zoro ezo",
    airport_to_city_center: "Ọdụ ụgbọ elu ruo Etiti Obodo",
    airport_to_city_center_price: "₦2,500 - ₦4,500",
    airport_to_suburbs: "Ọdụ ụgbọ elu ruo Mpụga Obodo",
    airport_to_suburbs_price: "₦4,500 - ₦8,000",
    airport_to_express: "Ọdụ ụgbọ elu ruo Express",
    airport_to_express_price: "₦8,000 - ₦15,000",
    price_guarantee_title: "Nkwenye Ọnụahịa",
    price_guarantee_desc: "Enweghị surge pricing. Akwụ ụgwọ niile na Naira (₦).",

    trusted_by_thousands: "A tụkwasịrị anyị obi site n'ọnụ puku",
    join_satisfied_passengers: "Sonye na ndị njem nwere afọ ojuju",
    testimonial_most_reliable: "Ọrụ kacha tụkwasịrị obi na Naịjiria.",
    testimonial_qr_brilliant: "Usoro QR mara ezigbo mma.",
    testimonial_safe_transparent: "Nchebe na ịdị n'ìhè.",

    ready_for_better_experience: "Kwadebe maka ahụmịhe ka mma?",
    book_your_next_ride: "Zụọ ụgbọ ala gị na-esote taa.",

    frequently_asked_questions: "Ajụjụ a na-ajụkarị",
    find_answers: "Chọta azịza maka ajụjụ gbasara ACHRAMS",
    getting_started: "Malite",
    getting_started_q1: "Gịnị bụ ACHRAMS?",
    getting_started_a1: "ACHRAMS bụ ọrụ ịkụ ụgbọ ala nke FAAN kwadoro na Naịjiria. Anyị na-ejikọ gị na ndị ọkwọ ụgbọ ala e nyochachara na ọdụ ụgbọ elu buru ibu site na ikpo okwu anyị.",
    getting_started_q2: "Kedu ọdụ ụgbọ elu ị na-eje ozi?",
    getting_started_a2: "Ugbu a anyị na-arụ ọrụ na: Murtala Muhammed (Lagos), Nnamdi Azikiwe (Abuja), Mallam Aminu Kano (Kano), na Port Harcourt International.",
    getting_started_q3: "ACHRAMS dị nchebe?",
    getting_started_a3: "Ee! A nyochaa ndị ọkwọ ụgbọ ala anyị niile site n'aka FAAN, a nyochachara ha, ma nwee ikike. Onye njem ọ bụla nwere nlekota oge na nkwado mberede 24/7.",
    booking_title: "Ịrụ Ụgbọ",
    booking_q1: "Olee otu m ga - esi zụta ụgbọ ala?",
    booking_a1: "Ụzọ atọ dị mfe: 1) Lelee koodu QR na ebe a na-eweta ngwongwo, 2) Gaa www.achrams.com.ng, 3) Kpọọ +234 800 ACHRAMS",
    booking_q2: "Achọrọ m akaụntụ?",
    booking_a2: "Mba, ị nwere ike zụta dị ka ọbịa site na QR. Ma ịmepụta akaụntụ na-enye gị ịkwụ ụgwọ ngwa ngwa, akụkọ njem, na onyinye pụrụ iche.",
    booking_q3: "Enwere m ike ịzụta maka onye ọzọ?",
    booking_a3: "Ee! Nye aha ha, ekwentị, na nkọwa ụgbọ elu mgbe ị na-azụta.",

    privacy_policy_title: "Iwu Nzuzo ACHRAMS",
    privacy_policy_effective: "Ụbọchị Ebute: 3 Novemba, 2024 | Emelitere: 3 Novemba, 2024",
    privacy_intro: "ACHRAMS (\"anyị\") kwere nkwa ịchekwa nzuzo gị na data gị n'ịbụ ndị NDPR 2019 nke Naịjirịa na iwu ndị ọzọ metụtara.",
    company_name: "Aha Ụlọ Ọrụ: ACHRAMS Nigeria Limited",
    technology_provider: "Onye Nchekwa Teknụzụ: Excellian Technologies",
    privacy_email: "Email: privacy@achrams.com.ng",
    privacy_phone: "Ekwentị: +234 800 ACHRAMS",
    info_we_collect_title: "Ozi Anyị Na-anakọta",
    personal_info_you_provide: "Ozi Onwe Gị I Nye",
    contact_info_desc: "Ozi Kpọtụrụ: Aha, nọmba ekwentị, adreesị email",
    travel_info_desc: "Ozi njem: nkọwa ụgbọ elu, ebe a na-ebuli / ebe a na-ewepụ",
    payment_info_desc: "Ozi ịkwụ ụgwọ: nkọwa ụzọ ịkwụ ụgwọ (echere nke ọma)",
    identification_desc: "Njirimara: Akwụkwọ njirimara gọọmenti (ma ọ bụrụ na achọrọ)",
    info_collected_automatically: "Ozi a na-anakọta akpaghị aka",
    location_data_desc: "Ozi Ebe: GPS maka iwepụ na mbugharị (na nkwekọrịta)",
    device_info_desc: "Ozi Ngwa: ụdị ngwaọrụ, usoro arụmọrụ, nchọgharị, IP",
    usage_data_desc: "Ozi iji: akụkọ ịzụ, mmasị ọrụ, mmekorita ngwa",
    how_we_use_title: "Otu Anyị Si eji Ozi Gị",
    service_delivery_desc: "Nhazi na ijikwa ịzụta gị, ijikọ gị na ndị ọkwọ gara n'aka ndị a nabatara, inye nlekota oge, zitere nkwenye na ntinye.",
    safety_security_desc: "Nyocha ikike ndị ọkwọ ụgbọ ala na FAAN, nyochaa àgwà ọrụ, chọpụta esemokwu, gbochie aghụghọ.",
    consent_title: "Nkwenye",
    consent_text: "Site n'iji ọrụ ACHRAMS, ị na-ekweta na ị gụọla, ghọtara, ma kwe ka Iwu Nzuzo a.",

    terms_title: "Okwu na Usoro",
    terms_effective: "Ụbọchị Ebute: 3 Novemba, 2024 | Emelitere: 3 Novemba, 2024",
    terms_intro_title: "1. Mmalite na Nnabata",
    terms_intro_desc: "Tupu ị jiri ọ bụla nye, ị ga-akpọtụrụ anyị na legal@achrams.com.ng iji gbalịa dozie okwu ahụ n'ụzọ ezighi ezi.",
    legal_capacity: "Akwụkwọ ikike iwu",
    legal_capacity_desc: "Ị ga-aba afọ 18 ma ọ dịkarịa ala iji jiri ọrụ anyị.",
    service_description_title: "2. Nkọwa Ọrụ",
    service_description_desc: "ACHRAMS bụ platform jikọtara ndị njem na ndị ọkwọ FAAN-verified na ọdụ ụgbọ elu Naijiria. Anyị na enyere n'ịzụta ụgbọ ala mana anyị adịghị enye njem ozugbo.",
    service_delivery: "Ibu Ọrụ",
    process_bookings: "Ime na ijikwa ajụjụ gị maka ịkpọ Ụgbọala",
    connect_drivers: "Ijikọta gị na ndị ọkwọ ụgbọala a kwadoro",
    real_time_tracking: "Inye nlele oge‑ezigbo na mmelite",
    send_confirmations: "Iziga nkwenye ajụjụ na risiti",

    safety_security_desc: "Nchebe na Nchekwa",
    verify_drivers: "Lelee ikike ọkwọ ụgbọala na FAAN",
    monitor_safety: "Nlekọta ogo ọrụ na ụkpụrụ nchebe",
    investigate_incidents: "Nyocha ihe merenụ ma ọ bụ mkpesa",
    prevent_fraud: "Gbochie aghụghọ na ịnweta ikike n’enweghị ikike",

    consent_title: "Ikwe",
    consent_desc: "Ị site na iji ọrụ ACHRAMS na-ekweta na ị gụrụ, ghọtara, ma kweta Atụmatụ Nzuzo a.",

    data_sharing_title: "4. Ịkekọrịta Ozi na Mkpughe",
    data_sharing_desc: "Anyị na-ekekọrịta ozi gị nke onwe naanị na ọnọdụ ndị a:",
    service_providers: "Ndị Na-enye Ọrụ: Ndị ọkwọ ụgbọala, ndị na-arụ ọrụ ịkwụ ụgwọ, na ndị mmekọ teknụzụ (Excellian Technologies)",
    regulatory_authorities: "Iwu Onye Nchịkwa: FAAN, NITDA, na ikike iwu mgbe achọrọ",
    business_transfers: "Mbupu Ahịa: N’oge njikọ, inweta, ma ọ bụ ire akụ",

    data_security: "5. Nchebe Ozi",
    data_security_desc: "Anyị na-eme atụmatụ nchekwa ụlọ ọrụ-nke ọkwa:",
    encryption: "Mkpuchi: Ozi na-ebufe na-eji SSL/TLS mkpuchi",
    access_controls: "Nchịkwa Nweta: Nweta achere nanị nye ndị ikike",
    secure_storage: "Nchekwa Nchekwa: Ozi edobere na sava nwere nchebe yana backups mgbe niile",
    regular_audits: "Nyocha ugboro ugboro: Nnyocha nchekwa oge niile site na Excellian Technologies",
    staff_training: "Mmemme Ọzụzụ Ọrụ: A na-akụzi ọrụ niile usoro kacha mma na nchekwa data",

    rights_under_ndpr: "6. Iwu Gị Dị Ka Nwa Data Ní NDPR",
    rights_desc: "Dị ka onye data gị metụtara na Naịjirịa, ịnwere ikike ndị a:",
    right_to_access: "Iwu Inweta: Chọọ otu nlele dataonụ nkeonwe anyị nwere gbasara gị",
    right_to_rectification: "Iwu Imelite: Chọọ ka agbakwunye maọbụ melite data ezighi ezi maọbụ enweghị ike",
    right_to_erasure: "Iwu Iwepụ: Chọọ ka ehichapụ data onwe gị",
    right_to_data_portability: "Iwu Ibugharị Data: Nweta data gị n'ụdị a haziri nke a na-ejikarị",
    right_to_object: "Iwu Ikwu Ime Ihe: Kwuo megide nhazi data dabere na mmasị ziri ezi",
    right_to_withdraw_consent: "Iwu Iwepụ Ikwe: Weghara nkwenye gị n'oge ọ bụla",
    right_to_lodge_complaint: "Iwu Ikwu Ikpuchi Mkpesa: Weta mkpesa ma ọ bụrụ na e mebiri ikike gị",

    data_retention: "7. Idebe Ozi",
    data_retention_desc: "Anyị na-edobe data gị nkeonwe maka oge ndị a:",
    active_account_data: "Data Akaụntụ Na-arụ Ọrụ: Na-anọgide na-eche mgbe akaụntụ gị ka na-arụ ọrụ",
    booking_records: "Ndekọ Ajụjụ: Na-anọgide maka afọ 2 maka ebumnobi iwu na akwụkwọ akụ",
    payment_information: "Ozi Ịkwụ Ụgwọ: Na-anọgide dabeere na ụkpụrụ akụ (ọ dịkarịa ala afọ 2)",
    communication_records: "Ndekọ Nkwurịta Ozi: Na-anọgide maka afọ 1 maka ijide àgwà",
    marketing_consent: "Ikwe Maka Tita: Rue mgbe ị wepụrụ nkwenye gị ma ọ bụ mgbe afọ 1 gachara nke enweghị ọrụ",

    contact_information: "8. Ozi Kpọtụrụ",
    dpo: "Onye Nchekwa Data",
    dpo_email: "E-mail: dpo@achrams.com.ng",
    dpo_phone: "Ekwenti: +234 800 ACHRAMS",
    general_privacy_inquiries: "Ajụjụ Nzuzo Nnakịtị",
    general_privacy_email: "E-mail: privacy@achrams.com.ng",

    terms_title: "Ọ̀nọ̀ Okwu na Ụkpụrụ",
    terms_effective: "Ụbọchị Mmalite: Novemba 3, 2024 | Emelitere: Novemba 3, 2024",
    terms_intro_title: "1. Ịntrodukshọn na Nnabata",
    terms_intro: "Nnọọ na ACHRAMS, ọrụ ịkpọ ụgbọala ọdụ ụgbọelu nke FAAN kwadoro. Okwu na ụkpụrụ („Ụkpụrụ“) a bụ nkwekọrịta iwu n’etiti gị („Onye Ọrụ,“ „Fasinja,“ ma ọ bụ „gị“) na ACHRAMS Nigeria Limited. Site na ịnweta ma ọ bụ iji ọrụ anyị, ịnakwere ụkpụrụ ndị a. Ọ bụrụ na ị naghị ekwenye, ị gaghị eji ọrụ anyị.",
    legal_capacity: "Ike Iwu",
    legal_capacity_desc: "Ị ga-adịkarị afọ 18 ma ọ dịkarịa ala iji jiri Ọrụ anyị.",
    service_description_title: "2. Nkọwa Ọrụ",
    service_description_desc: "ACHRAMS na-arụ ọrụ dị ka ikpo okwu nke jikọtara ndị fasinja na ndị ọkwọ ụgbọala nwere akwụkwọ ikike na FAAN na ọdụ ụgbọ elu Naijiria. Anyị na-eme ka itinye ajụjụ ụgbọ ala dị mfe, ma anyị anaghị enye ọrụ njem ozugbo. Ikpo ACHRAMS mepụtara ma na-elekọta ya Excellian Technologies.",
    user_registration_title: "3. Deba Ama Onye Ọrụ na Akaụntụ",
    account_creation: "Ịmepụta Akaụntụ",
    account_creation_desc: [
      "Ị nwere ike mepụta akaụntụ ma ọ bụ debe dị ka ọbịa site n’iji usoro QR code anyị",
      "Dị gị mkpa inye ozi ziri ezi, ugbu a, na zuru ezu",
      "Ị na-ahụ maka ichekwa nzuzo okwuntughe akaụntụ gị",
      "Ị ga-agwa anyị ozugbo ma ọ bụrụ na e nwere nnweta na-enweghị ikike"
    ],
    account_responsibilities: "Ọrụ Akaụntụ",
    account_responsibilities_desc: [
      "Ị bụ naanị onye na-ahụ maka ọrụ niile dị n’akaụntụ gị",
      "Ị ekwesịghị kesaa akaụntụ gị na ndị ọzọ",
      "Ị ekwesịghị mepụta ọtụtụ akaụntụ iji mee nnukwu ọrụ ma ọ bụ iji ngwa ahịa"
    ],
    booking_payment_title: "4. Ajụjụ na Ịkwụ Ụgwọ",
    booking_process: "Usoro Ịdebanye",
    booking_process_desc: [
      "A na-eme ajụjụ site na QR codes na ọdụ ụgbọelu, weebụsaịtị anyị, ma ọ bụ ngwa mkpanaaka",
      "Ị ga-enweta ọnụ ahịa ni mgba òké tupu ikwenye ajụjụ gị",
      "Ajụjụ niile dabere na nnweta ọkwọ ụgbọala"
    ],
    pricing: "Ọnụ Ahịa",
    pricing_desc: [
      "A na-egosi ọnụahịa niile na Naira Naịjirịa (₦)",
      "Ọnụ ahịa ahụ kwụsie ike ma bụrụ ebe a hụrụ n’anya, enweghị ìhè-pọ́ọ́si",
      "A ga-eji ụgwọ ọzọ gba maka oge ichere ju nkeji 15, toll, ụgwọ nkwụsị, ibu ọtụtụ akpa, njem ọzọ, ma ọ bụ ụgwọ ncha"
    ],
    accept_text: "Anyị na-anabata:",
    payment_methods: "Usoro Ịkwụ Ụgwọ",
    payment_methods_desc: [
      "Kaadị Kirẹditi / Debit (Visa, Mastercard, Verve)",
      "Ego Foonu Mọbaili (lati ọdọ awọn olupese Naijiria ti a fọwọsi)",
      "Mgbanwe Banki",
      "Ego (dabere na nnweta ọkwọ ụgbọala)"
    ],
    cancellation_refund_title: "5. Ilana Ịkwụpụ na Iweghachite Ụgwọ",
    passenger_cancellations: "Ịkwụpụ Onye Ọdụ",
    passenger_cancellations_desc: [
      "Ịkwụpụ N'efu: Ruo mgbe nkeji 5 mgbe ikwenye ajụjụ gị",
      "Ụgwọ Ịkwụpụ: ₦500 ma ọ bụrụ na a kwụsịrị n’etiti nkeji 5‑15 mgbe ajụjụ",
      "Ụgwọ zuru ezu: Ịkwụpụ mgbe ọkwọ ụgbọala ruru ma ọ bụ mgbe nkeji 15 gafere",
      "No‑Show: E bufee ọnụahịa zuru ezu ma ọ bụrụ na fasinja ejighi aka n’ime nkeji 10 mgbe ọkwọ ụgbọ kọwara"
    ],
    refund_processing: "Usoro Iweghachite",
    refund_processing_desc: "A na-eme iweghachite n'ime ụbọchị ọrụ 5‑7 maka ịkwụpụ dị irè na 7‑14 maka iweghachite n'ihi nsogbu ọrụ.",
    user_conduct_title: "6. Iwu Omume Onye Ọrụ na Ihe A gaghị Eme",
    user_must_not: "Ị Kwesịghị:",
    user_must_not_desc: [
      "Jiri Sè́vìsì maka ebumnuche iwu ọjọọ",
      "Igbu onye ọkwọ ụgbọala, iyi egwu, ma ọ bụ mmerụ ha",
      "Bụrụ onye na-ebufe ihe ọjọọ, ngwa agha, ma ọ bụ ihe ize ndụ",
      "Gafe oke ọnụ ọgụgụ ndị njem n’ime ụgbọala",
      "Sụkụ sịga n’ime ụgbọ ala (ma ọ bụrụ na a kọrọ kpọmkwem yiya)",
      "Mee ka usoro ajụjụ daa ma ọ bụ jiri ya n'ụzọ na-adịghị ọcha",
      "Gbiyanju ịgafe usoro ịkwụ ụgwọ"
    ],
    consequences_of_violation: "Ụzọ Mmejọ ga-esi gosi",
    consequences_desc: "Mmejọ nwere ike bute nkwụsị njem ozugbo, ngwụcha akaụntụ ma ọ bụ igbochi ya ruo mgbe ebighị ebi, mmepe iwu, na iziga okwu ahụ na ndị ọrụ iwu.",
    safety_security_title: "7. Nchebe na Nchekwa",
    safety_security_desc_list: [
      "Anyị na-ejikọ naanị na ndị ọkwọ ụgbọala FAAN kwadoro",
      "A na-enyocha ndị ọkwọ ụgbọala niile maka ihe omimi",
      "A na-enye nlele oge‑ntụrụndụ maka njem niile",
      "Laini nkwado mberede: +234 800 ACHRAMS"
    ],
    report_safety_immediately: "Kpọtụrụ Nchebe Ozugbo",
    emergency_line: "Laini Mberede: +234 800 ACHRAMS (Ụzọ 1)",
    emergency_email: "E‑mail: safety@achrams.com.ng",
    limitation_of_liability_title: "8. Mkpọrọchị Ọrụ",
    limitation_of_liability_desc: "ACHRAMS na‑enye ikpo okwu na‑ekekọrịta fasinja na ndị ọkwọ ụgbọala onwe ha. Anyị abụghị:",
    limitation_of_liability_list: [
      "Ụgbọ njem",
      "Onye na‑ebu ọrụ ihe ọkpụkpọ nke ọkwọ ụgbọala ma ọ bụ mmejọ ha",
      "Onye kachasị ibu maka mberede, mmerụ, ma ọ bụ mmebi na njem",
      "Onye na-ekwe nkwa na ọrụ ga-adị mgbe niile"
    ],
    disclaimer: "A na-enye ọrụ “DỊ KA O SI DI” na “DỊ KA E SI ENWETA” na-enweghị nkwa ụdị ọ bụla.",
    intellectual_property_title: "9. Ihe Ọhụrụ Ụlọọrụ Mmụta",
    intellectual_property_desc: "Dịka ikike niile nke ihe ọmụma na pẹpẹ, gụnyere akara, lojọ, sọftụwia, na ọdịnaya, bụ nke ACHRAMS, Excellian Technologies, ma ọ bụ ndị nyere ha ikike. Pẹpụ ACHRAMS mepụtara ma na-eduzi ya Excellian Technologies. Ikike teknụzụ niile na‑adịrị Excellian Technologies.",
    dispute_resolution_title: "10. Idozi Mkparịta Ụjọ",
    dispute_resolution_desc: [
      "Tupu ịmalite usoro iwu, ị kwenyere ịkpọtụrụ anyị na legal@achrams.com.ng iji wụpụta mkparịta ụka na-enweghị ụlọikpe.",
      "Ọ bụrụ na enweghị mkparịta ụka ezụlitere, a ga-eji atụgharị mkparịta ụka ahụ site n’Ịgba ọchịchọ n’usoro iwu nke Arbitration and Conciliation Act (Cap A18) nke Iwu Naịjirịa 2004.",
      "A na-atụ ụkpụrụ ndị a site na iwu Naịjirịa."
    ],
    terms_contact_title: "11. Ozi Kpọtụrụ",
    terms_contact_desc: {
      company: "ACHRAMS Nigeria Limited",
      tech_partner: "Onye Mmasị Teknụzụ: Excellian Technologies",
      general_inquiries: {
        label: "Ajụjụ Ọ̀tụ̀tụ̀",
        email: "Email: support@achrams.com.ng",
        phone: "Ekwenti: +234 800 ACHRAMS"
      },
      legal_department: {
        label: "Ụlọ Ọrụ Iwu",
        email: "Email: legal@achrams.com.ng"
      },
      safety_emergency: {
        label: "Nchebe na Mberede",
        hotline: "Laini 24/7: +234 800 ACHRAMS (Ụzọ 1)",
        email: "E‑mail: safety@achrams.com.ng"
      }
    },
    acknowledgment_title: "Nkwenye / Ikwe",
    acknowledgment_desc: "SITE NA PỊA “AMACHI,” ṢÀWỌ́DÙ QR LÁTI ṢE ÌFIPAMỌ́, TẠ́BÍ LÍLO SÈ́VÌSÌ WA, Ị NA-EKWETA NA Ị GỤRỤ, GHỌTARA, MA KWETA ITI OFIN & ÌWA YI NA Ọ̀NỌ̀.",  
    available_in_languages: "Ndị dị na asụsụ 5+",
    contact_us: "Kpọtụrụ Anyị",
    available_in_languages: "Ndị dị na asụsụ 5+",
    general_inquiries: "Ajụjụ Okwu",
    phone_contact: "+234 800 ACHRAMS",
    email_support: "Email: support@achrams.com.ng",
    safety_hotline: "Ọnụ ụzọ mberede 24/7: +234 800 ACHRAMS (Nhọrọ 1)",
    ready: "Kwadebe",
    scan_book: "Lelee & Zụta",
    terms_acknowledgment_button: 'EMERịrị',
  },

  /* -------------------------
     French translations (fr)
     ------------------------- */
  fr: {
    achrams: "ACHRAMS",
    official_airport_car_hire: "Location officielle de voitures à l'aéroport",
    home: "Accueil",
    features: "Fonctionnalités",
    how_it_works: "Comment ça marche",
    airports: "Aéroports",
    // faqs: "FAQ",
    accessibility: "Accessibilité",
    book_now: "Réserver",
    scan_and_book_now: "Scanner et réserver",
    contact_support: "Contacter le support",

    faan_approved_service: "Service approuvé par la FAAN",
    hero_heading_primary: "Sûr, Fiable",
    hero_heading_secondary: "Service de location de voiture à l'aéroport",
    hero_sub: "Service de location de voiture approuvé par la FAAN avec des tarifs transparents.",
    happy_passengers: "Passagers satisfaits",
    verified_drivers: "Chauffeurs vérifiés",
    major_airports: "Principaux aéroports",
    average_rating: "Note moyenne",

    why_choose: "Pourquoi choisir ACHRAMS ?",
    official_service: "Service officiel avec sécurité garantie",
    faan_safety: "Sécurité FAAN",
    faan_safety_desc: "Tous les chauffeurs sont vérifiés par la FAAN.",
    clear_pricing: "Tarification claire",
    clear_pricing_desc: "Aucun frais caché.",
    zero_wait: "Aucune attente",
    zero_wait_desc: "Chauffeur prêt à votre arrivée.",
    scan_and_book: "Scanner & Réserver",
    scan_and_book_desc: "Pas d'application requise.",
    multilingual: "Multilingue",
    multilingual_desc: "5 langues disponibles.",
    secure_pay: "Paiement sécurisé",
    secure_pay_desc: "Cartes et mobile money.",

    how_to_book_title: "Comment réserver votre course",
    how_to_book_sub: "Obtenez votre location en 4 étapes simples",
    step_01: "01",
    step_01_title: "Scanner le QR",
    step_01_desc: "Trouvez les codes QR à l'aéroport.",
    step_02_title: "Entrer la destination",
    step_02_desc: "Obtenez le prix instantanément.",
    step_03_title: "Obtenir le chauffeur",
    step_03_desc: "Suivi en temps réel.",
    step_04_title: "Profiter du trajet",
    step_04_desc: "Payer en toute sécurité.",
    need_help: "Besoin d'aide ?",
    need_help_sub: "Nous sommes disponibles 24/7.",
    call_phone: "Appeler : +234 800 ACHRAMS",

    available_at_major_airports: "Disponible dans les principaux aéroports",
    professional_service: "Service professionnel",
    available: "Disponible",
    coming_soon: "Bientôt disponible",

    transparent_pricing: "Prix Transparente",
    no_hidden_charges: "Aucun frais caché",
    airport_to_city_center: "Aéroport au centre-ville",
    airport_to_city_center_price: "₦2,500 - ₦4,500",
    airport_to_suburbs: "Aéroport vers banlieues",
    airport_to_suburbs_price: "₦4,500 - ₦8,000",
    airport_to_express: "Aéroport vers Express",
    airport_to_express_price: "₦8,000 - ₦15,000",
    price_guarantee_title: "Garantie de prix",
    price_guarantee_desc: "Pas de tarification dynamique. Tous les tarifs en Naira (₦).",

    trusted_by_thousands: "Approuvé par des milliers",
    join_satisfied_passengers: "Rejoignez les passagers satisfaits",
    testimonial_most_reliable: "Service le plus fiable au Nigéria.",
    testimonial_qr_brilliant: "Le système QR est brillant.",
    testimonial_safe_transparent: "Sûr et transparent.",

    ready_for_better_experience: "Prêt pour une meilleure expérience ?",
    book_your_next_ride: "Réservez votre prochain trajet aujourd'hui.",

    frequently_asked_questions: "Questions fréquemment posées",
    find_answers: "Trouvez des réponses aux questions sur ACHRAMS",
    getting_started: "Commencer",
    getting_started_q1: "Qu'est-ce que ACHRAMS ?",
    getting_started_a1: "ACHRAMS est le service officiel de location de voiture d'aéroport approuvé par la FAAN au Nigéria. Nous vous mettons en relation avec des chauffeurs vérifiés et licenciés dans les principaux aéroports nigérians via notre plateforme sécurisée.",
    getting_started_q2: "Quels aéroports desservez-vous ?",
    getting_started_a2: "Nous opérons actuellement à : Murtala Muhammed (Lagos), Nnamdi Azikiwe (Abuja), Mallam Aminu Kano (Kano), et Port Harcourt International.",
    getting_started_q3: "ACHRAMS est-il sûr ?",
    getting_started_a3: "Oui ! Tous nos chauffeurs sont vérifiés par la FAAN, soumis à des contrôles d'antécédents et titulaires d'une licence. Chaque trajet inclut le suivi en temps réel et un support d'urgence 24/7.",
    booking_title: "Réservation",
    booking_q1: "Comment réserver une course ?",
    booking_a1: "Trois façons faciles : 1) Scanner les codes QR à la zone de récupération des bagages, 2) Visiter www.achrams.com.ng, 3) Appeler +234 800 ACHRAMS",
    booking_q2: "Ai-je besoin d'un compte pour réserver ?",
    booking_a2: "Non, vous pouvez réserver en tant qu'invité en utilisant des QR. Cependant, créer un compte vous donne un paiement plus rapide, l'historique des trajets et des offres exclusives.",
    booking_q3: "Puis-je réserver pour quelqu'un d'autre ?",
    booking_a3: "Oui ! Fournissez simplement leur nom, numéro de téléphone et détails du vol lors de la réservation.",

    privacy_policy_title: "Politique de confidentialité ACHRAMS",
    privacy_policy_effective: "Date d'entrée en vigueur : 3 novembre 2024 | Dernière mise à jour : 3 novembre 2024",
    privacy_intro: "ACHRAMS (\"nous\") s'engage à protéger votre vie privée et vos données conformément au Nigeria Data Protection Regulation (NDPR) 2019 et autres lois applicables.",
    company_name: "Nom de l'entreprise : ACHRAMS Nigeria Limited",
    technology_provider: "Fournisseur technologique : Excellian Technologies",
    privacy_email: "E-mail : privacy@achrams.com.ng",
    privacy_phone: "Téléphone : +234 800 ACHRAMS",
    info_we_collect_title: "Informations que nous collectons",
    personal_info_you_provide: "Informations personnelles fournies",
    contact_info_desc: "Coordonnées : Nom, numéro de téléphone, adresse e-mail",
    travel_info_desc: "Informations de voyage : détails du vol, lieux de prise en charge/dépose, préférences de réservation",
    payment_info_desc: "Informations de paiement : détails du mode de paiement (traités en toute sécurité)",
    identification_desc: "Identification : pièce d'identité émise par le gouvernement (si requis)",
    info_collected_automatically: "Informations collectées automatiquement",
    location_data_desc: "Données de localisation : coordonnées GPS pour la prise en charge et la dépose (avec votre consentement)",
    device_info_desc: "Informations sur l'appareil : type d'appareil, système d'exploitation, navigateur, adresse IP",
    usage_data_desc: "Données d'utilisation : historique des réservations, préférences de service, interactions avec l'application",
    how_we_use_title: "Comment nous utilisons vos informations",
    service_delivery_desc: "Traiter et gérer vos réservations, vous connecter aux chauffeurs vérifiés, fournir le suivi en temps réel et envoyer confirmations et reçus.",
    safety_security_desc: "Vérifier les identifiants des chauffeurs avec la FAAN, surveiller la qualité et les normes de sécurité, enquêter sur les incidents et prévenir la fraude.",
    consent_title: "Consentement",
    consent_text: "En utilisant les services d’ACHRAMS, vous reconnaissez avoir lu, compris et accepté cette Politique de Confidentialité.",

    terms_title: "Conditions générales",
    terms_effective: "Date d'entrée en vigueur : 3 novembre 2024 | Dernière mise à jour : 3 novembre 2024",
    terms_intro_title: "1. Introduction et Acceptation",
    terms_intro_desc: "En accédant ou en utilisant nos services, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas, vous ne devez pas utiliser nos services.",
    legal_capacity: "Capacité légale",
    legal_capacity_desc: "Vous devez avoir au moins 18 ans pour utiliser nos services.",
    service_description_title: "2. Description du service",
    service_description_desc: "ACHRAMS fonctionne comme une plateforme mettant en relation les passagers avec des chauffeurs vérifiés par la FAAN dans les aéroports nigérians. Nous facilitons les réservations de voitures mais ne fournissons pas le transport directement.",
    service_delivery: "Fourniture du Service",
    process_bookings: "Traiter et gérer vos réservations de voiture",
    connect_drivers: "Vous connecter à des conducteurs vérifiés",
    real_time_tracking: "Fournir un suivi en temps réel et des mises à jour",
    send_confirmations: "Envoyer les confirmations de réservation et les reçus",

    safety_security_desc: "Sécurité",
    verify_drivers: "Vérifier les références du conducteur auprès de la FAAN",
    monitor_safety: "Surveiller la qualité du service et les normes de sécurité",
    investigate_incidents: "Examiner les incidents ou plaintes",
    prevent_fraud: "Prévenir la fraude et l’accès non autorisé",

    consent_title: "Consentement",
    consent_desc: "En utilisant les services ACHRAMS, vous reconnaissez avoir lu, compris et accepté cette Politique de Confidentialité.",

    data_sharing_title: "4. Partage et Divulgation des Données",
    data_sharing_desc: "Nous partageons vos informations personnelles uniquement dans les cas suivants :",
    service_providers: "Fournisseurs de Services : Conducteurs, processeurs de paiement et partenaires technologiques (Excellian Technologies)",
    regulatory_authorities: "Autorités Réglementaires : FAAN, NITDA et forces de l’ordre lorsque la loi l’exige",
    business_transfers: "Transferts d’Entreprise : En cas de fusion, d'acquisition ou de vente d'actifs",

    data_security: "5. Sécurité des Données",
    data_security_desc: "Nous mettons en place des mesures de sécurité conformes aux normes de l’industrie :",
    encryption: "Chiffrement : Données transmises via SSL/TLS",
    access_controls: "Contrôles d’Accès : Accès limité au personnel autorisé uniquement",
    secure_storage: "Stockage Sécurisé : Données stockées sur des serveurs sécurisés avec des sauvegardes régulières",
    regular_audits: "Audits Réguliers : Évaluations périodiques de sécurité effectuées par Excellian Technologies",
    staff_training: "Formation du Personnel : Tous les employés formés aux meilleures pratiques de protection des données",

    rights_under_ndpr: "6. Vos Droits selon le NDPR",
    rights_desc: "En tant que sujet de données au Nigeria, vous disposez des droits suivants :",
    right_to_access: "Droit d’Accès : Demander une copie des données personnelles que nous détenons à votre sujet",
    right_to_rectification: "Droit de Rectification : Demander la correction de vos données inexactes ou incomplètes",
    right_to_erasure: "Droit à l’Effacement : Demander la suppression de vos données personnelles",
    right_to_data_portability: "Droit à la Portabilité des Données : Recevoir vos données dans un format structuré, couramment utilisé",
    right_to_object: "Droit d’Opposer : S’opposer au traitement sur la base d’intérêts légitimes",
    right_to_withdraw_consent: "Droit de Retirer le Consentement : Retirer votre consentement à tout moment",
    right_to_lodge_complaint: "Droit de Porter Plainte : Déposer une plainte si vos droits ont été violés",

    data_retention: "7. Conservation des Données",
    data_retention_desc: "Nous conservons vos données personnelles pendant les périodes suivantes :",
    active_account_data: "Données de Compte Actif : Conservées tant que votre compte est actif",
    booking_records: "Enregistrements de Réservation : Conservés pendant 2 ans à des fins légales et comptables",
    payment_information: "Informations de Paiement : Conservées selon les régulations financières (minimum 2 ans)",
    communication_records: "Enregistrements de Communication : Conservés pendant 1 an pour l’assurance qualité",
    marketing_consent: "Consentement Marketing : Tant que vous ne retirez pas votre consentement ou après 1 an d’inactivité",

    contact_information: "8. Coordonnées",
    dpo: "Responsable de la Protection des Données",
    dpo_email: "E‑mail : dpo@achrams.com.ng",
    dpo_phone: "Téléphone : +234 800 ACHRAMS",
    general_privacy_inquiries: "Demandes Générales sur la Confidentialité",
    general_privacy_email: "E‑mail : privacy@achrams.com.ng",

    /* Terms and Conditions */
    terms_title: "Termes et Conditions",
    terms_effective: "Date d’entrée en vigueur : 3 novembre 2024 | Dernière mise à jour : 3 novembre 2024",
    terms_intro_title: "1. Introduction et Acceptation",
    terms_intro: "Bienvenue chez ACHRAMS, le service officiel de location de voiture d’aéroport approuvé par la FAAN. Ces Termes et Conditions (« Termes ») constituent un accord juridiquement contraignant entre vous (« Utilisateur, » « Passager, » ou « vous ») et ACHRAMS Nigeria Limited. En accédant à nos Services ou en les utilisant, vous acceptez d’être lié par ces Termes. Si vous n’êtes pas d’accord, vous ne devez pas utiliser nos Services.",
    legal_capacity: "Capacité Juridique",
    legal_capacity_desc: "Vous devez avoir au moins 18 ans pour utiliser nos Services.",
    service_description_title: "2. Description du Service",
    service_description_desc: "ACHRAMS fonctionne comme une plateforme intermédiaire reliant des passagers à des conducteurs licenciés et vérifiés par la FAAN dans les aéroports nigérians. Nous facilitons les réservations de voiture, mais ne fournissons pas de service de transport directement. La plateforme ACHRAMS est développée et maintenue par Excellian Technologies.",
    user_registration_title: "3. Inscription et Compte Utilisateur",
    account_creation: "Création de Compte",
    account_creation_desc: [
      "Vous pouvez créer un compte ou réserver en tant qu’invité via notre système de code QR",
      "Vous devez fournir des informations précises, à jour et complètes",
      "Vous êtes responsable de la confidentialité de vos identifiants de compte",
      "Vous devez nous informer immédiatement de tout accès non autorisé"
    ],
    account_responsibilities: "Responsabilités du Compte",
    account_responsibilities_desc: [
      "Vous êtes seul responsable de toutes les activités liées à votre compte",
      "Vous ne devez pas partager votre compte avec d’autres",
      "Vous ne devez pas créer plusieurs comptes pour abuser des promotions ou des services"
    ],
    booking_payment_title: "4. Réservation et Paiement",
    booking_process: "Processus de Réservation",
    booking_process_desc: [
      "Les réservations peuvent être faites via les codes QR à l’aéroport, notre site web ou notre application mobile",
      "Vous recevrez le prix à l’avance avant de confirmer votre réservation",
      "Toutes les réservations sont sujettes à la disponibilité des conducteurs"
    ],
    pricing: "Tarification",
    pricing_desc: [
      "Tous les prix sont affichés en Naira nigérianes (₦)",
      "Les prix sont fixes et transparents sans tarification dynamique",
      "Des frais supplémentaires peuvent s’appliquer pour l’attente dépassant 15 minutes, les péages, les frais de parking, les bagages excessifs, les détours ou les frais de nettoyage"
    ],
    accept_text: "Nous acceptons :",
    payment_methods: "Moyens de Paiement",
    payment_methods_desc: [
      "Cartes de crédit/débit (Visa, Mastercard, Verve)",
      "Mobile Money (provenant de fournisseurs nigérians agréés)",
      "Virements bancaires",
      "Espèces (sous réserve de disponibilité du conducteur)"
    ],
    cancellation_refund_title: "5. Politique d’Annulation et de Remboursement",
    passenger_cancellations: "Annulations Passager",
    passenger_cancellations_desc: [
      "Annulation gratuite : jusqu’à 5 minutes après la confirmation de réservation",
      "Frais d’annulation : ₦500 si annulé 5‑15 minutes après la réservation",
      "Débit complet : annulations après l’arrivée du conducteur ou au-delà de 15 minutes",
      "No‑Show : tarif plein facturé si le passager n’apparaît pas dans les 10 minutes suivant l’arrivée du conducteur"
    ],
    refund_processing: "Traitement des Remboursements",
    refund_processing_desc: "Les remboursements sont traités sous 5‑7 jours ouvrables pour les annulations valides et 7‑14 jours ouvrables pour les remboursements liés aux problèmes de service.",
    user_conduct_title: "6. Conduite de l’Utilisateur et Activités Interdites",
    user_must_not: "Vous ne devez pas :",
    user_must_not_desc: [
      "Utiliser les Services à des fins illégales",
      "Harceler, menacer ou abuser des conducteurs",
      "Transporter des marchandises illégales, des armes ou des matériaux dangereux",
      "Dépasser la capacité passager du véhicule",
      "Fumer dans les véhicules (sauf autorisation explicite)",
      "Manipuler ou abuser du système de réservation",
      "Tenter de contourner les systèmes de paiement"
    ],
    consequences_of_violation: "Conséquences des Violations",
    consequences_desc: "Les violations peuvent entraîner l’annulation immédiate du trajet, la suspension ou l’interdiction permanente du compte, des poursuites légales et une orientation vers les autorités compétentes.",
    safety_security_title: "7. Sécurité",
    safety_security_desc_list: [
      "Nous ne travaillons qu’avec des conducteurs vérifiés par la FAAN",
      "Tous les conducteurs subissent des vérifications d’antécédents",
      "Suivi en temps réel disponible pour tous les trajets",
      "Ligne d’assistance d’urgence : +234 800 ACHRAMS"
    ],
    report_safety_immediately: "Signaler Immédiatement les Problèmes de Sécurité",
    emergency_line: "Ligne d’urgence : +234 800 ACHRAMS (Option 1)",
    emergency_email: "E‑mail : safety@achrams.com.ng",
    limitation_of_liability_title: "8. Limitation de Responsabilité",
    limitation_of_liability_desc: "ACHRAMS fournit une plateforme reliant des passagers à des conducteurs indépendants. Nous ne sommes pas :",
    limitation_of_liability_list: [
      "Un transporteur",
      "Responsable des actes ou omissions des conducteurs",
      "Responsable des accidents, blessures ou dommages pendant les trajets",
      "Garant de la disponibilité du service à tout moment"
    ],
    disclaimer: "Les services sont fournis « TELS QUELS » et « SELON DISPONIBILITÉ » sans aucune garantie.",
    intellectual_property_title: "9. Propriété Intellectuelle",
    intellectual_property_desc: "Tous les droits de propriété intellectuelle sur la Plateforme, y compris les marques, logos, logiciels et contenus, appartiennent à ACHRAMS, Excellian Technologies ou à nos concédants. La plateforme ACHRAMS est développée et maintenue par Excellian Technologies. Tous les droits technologiques appartiennent à Excellian Technologies.",
    dispute_resolution_title: "10. Résolution des Litiges",
    dispute_resolution_desc: [
      "Avant d’engager de procédures formelles, vous acceptez de nous contacter à legal@achrams.com.ng pour tenter une résolution informelle.",
      "Les litiges non résolus informellement seront réglés par arbitrage conformément à la loi sur l’arbitrage et la conciliation (Cap A18) des lois de la Fédération du Nigeria 2004.",
      "Ces Termes sont régis par les lois de la République fédérale du Nigeria."
    ],
    terms_contact_title: "11. Coordonnées",
    terms_contact_desc: {
      company: "ACHRAMS Nigeria Limited",
      tech_partner: "Partenaire Technologique : Excellian Technologies",
      general_inquiries: {
        label: "Demandes Générales",
        email: "E‑mail : support@achrams.com.ng",
        phone: "Téléphone : +234 800 ACHRAMS"
      },
      legal_department: {
        label: "Département Juridique",
        email: "E‑mail : legal@achrams.com.ng"
      },
      safety_emergency: {
        label: "Sécurité et Urgence",
        hotline: "Ligne 24/7 : +234 800 ACHRAMS (Option 1)",
        email: "E‑mail : safety@achrams.com.ng"
      }
    },
    acknowledgment_title: "Reconnaissance",
    acknowledgment_desc: "EN CLIQUANT « J’ACCEPTE », EN SCANNANT UN CODE QR POUR RÉSERVER OU EN UTILISANT NOS SERVICES, VOUS RECONNAISSEZ AVOIR LU, COMPRIS ET ACCEPTÉ CES TERMES ET CONDITIONS.",
    available_in_languages: "Disponible en 5+ langues"
  },

    contact_us: "Contactez-nous",
    available_in_languages: "Disponible en 5+ langues",
    general_inquiries: "Demandes générales",
    phone_contact: "+234 800 ACHRAMS",
    email_support: "Courriel : support@achrams.com.ng",
    safety_hotline: "Ligne d'urgence 24/7 : +234 800 ACHRAMS (Option 1)",
    ready: "Prêt",
    scan_book: "Scanner & Réserver",
    terms_acknowledgment_button: 'J\'ACCEPTE',
  
};

/* -------------------------
   Translation application helpers
   ------------------------- */

// function applyTranslations(lang) {
//     // alert('was called')
//   const dict = translations[lang] || translations.en;
//   // For elements that use innerText
//   document.querySelectorAll("[data-i18n]").forEach(el => {
//     const key = el.getAttribute("data-i18n");
//     if (!key) return;
//     // Prefer attribute 'data-i18n-attr' for non-text attributes (e.g., placeholder, aria-label)
//     const attr = el.getAttribute("data-i18n-attr"); // optional, format: "placeholder" or "aria-label"
//     const val = dict[key];
//     if (val !== undefined) {
//       if (attr) {
//         el.setAttribute(attr, val);
//       } else {
//         // Preserve HTML if element contains HTML by using innerHTML only when data-i18n-html is set
//         if (el.hasAttribute("data-i18n-html")) {
//           el.innerHTML = val;
//         } else {
//           el.innerText = val;
//         }
//       }
//     }
//   });

//   // Some dynamic text nodes that might not have data-i18n attributes:
//   // Update document title if key provided
//   if (dict.page_title) document.title = dict.page_title;
// }

function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (!key) return;

        const attr = el.getAttribute("data-i18n-attr"); // e.g., placeholder, aria-label

        // Split key by dot for nested objects
        const keys = key.split('.');
        let val = dict;
        for (let k of keys) {
            if (val[k] !== undefined) {
                val = val[k];
            } else {
                val = null;
                break;
            }
        }

        if (val !== null) {
            if (attr) {
                el.setAttribute(attr, val);
            } else {
                if (el.hasAttribute("data-i18n-html")) {
                    el.innerHTML = val;
                } else {
                    el.innerText = val;
                }
            }
        }
    });
    // Some dynamic text nodes that might not have data-i18n attributes:
  // Update document title if key provided
  if (dict.page_title) document.title = dict.page_title;
}


function changeLanguage(lang) {
  if (!translations[lang]) {
    console.warn("Language not found:", lang);
    lang = "en";
  }
  applyTranslations(lang);
  localStorage.setItem("achrams_lang", lang);

  // If you want to also update the <select> value (if language selector uses data-i18n)
  const sel = document.querySelector("select.language-select");
  if (sel) sel.value = lang;
}

// Load saved language on startup
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("achrams_lang") || "en";
  // set select if exists
  const sel = document.querySelector("select.language-select");
  if (sel) sel.value = savedLang;
  applyTranslations(savedLang);
});

/* Optional: Expose to global for manual calls */
window.translations = translations;
window.changeLanguage = changeLanguage;
window.applyTranslations = applyTranslations;
