// --- PRODUCTION: Language Data and Management ---
// Define the language content using JavaScript objects
// const LANGUAGES = {

// en: {
//   // Header & Navigation
//   officialAirportCarHire: 'ACHRAMS',
//   home: 'Home',
//   features: 'Features',
//   howItWorks: 'How It Works',
//   airports: 'Airports',
//   faqs: 'FAQs',
//   accessibility: 'Accessibility',
// //   bookNow: 'Book Now',
//   privacy: 'Privacy',
//   terms: 'Terms',

//   // Accessibility Controls
//   textSize: 'Text Size',
//   language: 'Language',
//   english: 'English',
//   hausa: 'Hausa',
//   yoruba: 'Yoruba',
//   igbo: 'Igbo',
//   french: 'Français',

//   // Hero Section
//   officialFAANApprovedService: 'Official FAAN-Approved Service',
//   heroTitle: 'Your Safe, Reliable',
//   heroTitleLine2: 'Airport Car Hire Service',
//   heroSubtitle: 'Official FAAN-approved car hire service with transparent pricing.',
//   scanBookNow: 'Scan & Book Now',
//   contactSupport: 'Contact Support',

//   // Hero Stats
//   happyPassengers: 'Happy Passengers',
//   verifiedDrivers: 'Verified Drivers',
//   majorAirports: 'Major Airports',
//   averageRating: 'Average Rating',
//   stat1Value: '50K+',
//   stat2Value: '1,200+',
//   stat3Value: '5',
//   stat4Value: '4.9',

//   // Features Section
//   whyChooseTitle: 'Why Choose ACHRAMS?',
//   whyChooseSubtitle: 'Official service with guaranteed safety',

//   feature1Title: 'FAAN Safety',
//   feature1Description: 'All drivers vetted by FAAN.',

//   feature2Title: 'Clear Pricing',
//   feature2Description: 'No hidden fees.',

//   feature3Title: 'Zero Wait',
//   feature3Description: 'Driver ready when you land.',

//   feature4Title: 'Scan & Book',
//   feature4Description: 'No app needed.',

//   feature5Title: 'Multilingual',
//   feature5Description: '5 languages available.',

//   feature6Title: 'Secure Pay',
//   feature6Description: 'Cards and mobile money.',

//   // How It Works Section
//   howToBookTitle: 'How to Book Your Ride',
//   howToBookSubtitle: 'Get your car hire in 4 simple steps',

//   step1Number: '01',
//   step1Title: 'Scan QR',
//   step1Description: 'Find QR codes at airport.',

//   step2Number: '02',
//   step2Title: 'Enter Destination',
//   step2Description: 'Get instant pricing.',

//   step3Number: '03',
//   step3Title: 'Get Driver',
//   step3Description: 'Real-time tracking.',

//   step4Number: '04',
//   step4Title: 'Enjoy Ride',
//   step4Description: 'Pay securely.',

//   needHelpTitle: 'Need Help?',
//   needHelpDescription: 'We are available 24/7.',
//   callNumber: 'Call: +234 800 ACHRAMS',

//   // Airports Section
//   availableAirportsTitle: 'Available at Major Airports',
//   availableAirportsSubtitle: 'Professional service',
//   statusAvailable: 'Available',
//   statusComingSoon: 'Coming Soon',

//   airport1Code: 'Lagos (LOS)',
//   airport1Name: 'Murtala Muhammed',

//   airport2Code: 'Abuja (ABV)',
//   airport2Name: 'Nnamdi Azikiwe',

//   airport3Code: 'Kano (KAN)',
//   airport3Name: 'Mallam Aminu Kano',

//   airport4Code: 'Port Harcourt',
//   airport4Name: 'PHC Airport',

//   airport5Code: 'Enugu (ENU)',
//   airport5Name: 'Akanu Ibiam',

//   airport6Code: 'Benin (BNI)',
//   airport6Name: 'Benin Airport',

//   // Pricing Section
//   transparentPricingTitle: 'Transparent Pricing',
//   transparentPricingSubtitle: 'No hidden charges',

//   pricing1Title: 'Airport to City Center',
//   pricing1Price: '₦2,500 - ₦4,500',
//   pricing1Duration: 'Approx. 20-35 mins',

//   pricing2Title: 'Airport to Suburbs',
//   pricing2Price: '₦4,500 - ₦8,000',
//   pricing2Duration: 'Approx. 35-50 mins',

//   pricing3Title: 'Airport to Express',
//   pricing3Price: '₦8,000 - ₦15,000',
//   pricing3Duration: 'Approx. 50-90 mins',

//   priceGuaranteeTitle: 'Price Guarantee',
//   priceGuaranteeDescription: 'No surge pricing. All fares in Naira (₦).',

//   // Testimonials Section
//   trustedByThousandsTitle: 'Trusted by Thousands',
//   trustedByThousandsSubtitle: 'Join satisfied passengers',

//   testimonial1Text: 'Most reliable service in Nigeria.',
//   testimonial1Name: 'Sarah Johnson',
//   testimonial1Role: 'Business Traveller',
//   testimonial1Initials: 'SJ',

//   testimonial2Text: 'The QR system is brilliant.',
//   testimonial2Name: 'Chinedu Okafor',
//   testimonial2Role: 'Frequent Flyer',
//   testimonial2Initials: 'CO',

//   testimonial3Text: 'Safe and transparent.',
//   testimonial3Name: 'Amina Hassan',
//   testimonial3Role: 'International Visitor',
//   testimonial3Initials: 'AH',

//   // CTA Section
//   ctaTitle: 'Ready for Better Experience?',
//   ctaSubtitle: 'Book your next ride today.',
//   ctaButtonText: 'Scan & Book Now',

//   // FAQ Page
//   faqPageTitle: 'Frequently Asked Questions',
//   faqPageSubtitle: 'Find answers to common questions about ACHRAMS',

//   faqSection1Title: 'Getting Started',

//   faq1Question: 'What is ACHRAMS?',
//   faq1Answer: 'ACHRAMS is Nigeria\'s official FAAN-approved airport car hire service. We connect you with verified, licensed drivers at major Nigerian airports through our secure booking platform.',

//   faq2Question: 'Which airports do you serve?',
//   faq2Answer: 'We currently operate at: Murtala Muhammed Airport (Lagos), Nnamdi Azikiwe Airport (Abuja), Mallam Aminu Kano Airport (Kano), and Port Harcourt International Airport.',

//   faq3Question: 'Is ACHRAMS safe?',
//   faq3Answer: 'Yes! All our drivers are FAAN-verified, background-checked, and licensed. Every trip includes real-time tracking and 24/7 emergency support.',

//   faqSection2Title: 'Booking',

//   faq4Question: 'How do I book a ride?',
//   faq4Answer: 'Three easy ways: 1) Scan QR codes at airport baggage claim areas, 2) Visit www.achrams.com.ng, 3) Call +234 800 ACHRAMS',

//   faq5Question: 'Do I need an account to book?',
//   faq5Answer: 'No, you can book as a guest using QR codes. However, creating an account gives you faster checkout, trip history, and exclusive offers.',

//   faq6Question: 'Can I book for someone else?',
//   faq6Answer: 'Yes! Just provide their name, phone number, and flight details when booking.',

//   stillHaveQuestionsTitle: 'Still Have Questions?',
//   stillHaveQuestionsSubtitle: 'We\'re here to help 24/7!',
//   emailSupportButton: 'Email Support',

//   // Privacy Page
//   privacyPageTitle: 'ACHRAMS Privacy Policy',
//   privacyEffectiveDate: 'Effective Date: November 3, 2024 | Last Updated: November 3, 2024',

//   privacy1Title: '1. Introduction',
//   privacy1Text: 'ACHRAMS ("we," "our," or "us") is committed to protecting your privacy and personal data in accordance with the Nigeria Data Protection Regulation (NDPR) 2019 and other applicable data protection laws in Nigeria.',
//   privacyCompanyName: 'Company Name:',
//   privacyCompanyValue: 'ACHRAMS Nigeria Limited',
//   privacyTechProvider: 'Technology Provider:',
//   privacyTechValue: 'Excellian Technologies',
//   privacyEmail: 'Email:',
//   privacyEmailValue: 'privacy@achrams.com.ng',
//   privacyPhone: 'Phone:',
//   privacyPhoneValue: '+234 800 ACHRAMS',

//   privacy2Title: '2. Information We Collect',
//   privacy2Subtitle1: 'Personal Information You Provide',
//   privacy2Item1: 'Contact Information:',
//   privacy2Item1Desc: 'Name, phone number, email address',
//   privacy2Item2: 'Travel Information:',
//   privacy2Item2Desc: 'Flight details, pickup/drop-off locations, booking preferences',
//   privacy2Item3: 'Payment Information:',
//   privacy2Item3Desc: 'Payment method details (processed securely through our payment partners)',
//   privacy2Item4: 'Identification:',
//   privacy2Item4Desc: 'Government-issued ID (for verification purposes when required)',

//   privacy2Subtitle2: 'Information Collected Automatically',
//   privacy2Item5: 'Location Data:',
//   privacy2Item5Desc: 'GPS coordinates for pickup and drop-off (with your consent)',
//   privacy2Item6: 'Device Information:',
//   privacy2Item6Desc: 'Device type, operating system, browser type, IP address',
//   privacy2Item7: 'Usage Data:',
//   privacy2Item7Desc: 'Booking history, service preferences, app interactions',
//   privacy2Item8: 'Communication Records:',
//   privacy2Item8Desc: 'Customer support conversations, feedback, and ratings',

//   privacy3Title: '3. How We Use Your Information',
//   privacy3Subtitle1: 'Service Delivery',
//   privacy3Service1: 'Process and manage your car hire bookings',
//   privacy3Service2: 'Connect you with verified drivers',
//   privacy3Service3: 'Provide real-time tracking and updates',
//   privacy3Service4: 'Send booking confirmations and receipts',

//   privacy3Subtitle2: 'Safety and Security',
//   privacy3Safety1: 'Verify driver credentials with FAAN',
//   privacy3Safety2: 'Monitor service quality and safety standards',
//   privacy3Safety3: 'Investigate incidents or complaints',
//   privacy3Safety4: 'Prevent fraud and unauthorized access',

//   privacy4Title: '4. Data Sharing and Disclosure',
//   privacy4Intro: 'We only share your personal information in the following circumstances:',
//   privacy4Item1: 'Service Providers:',
//   privacy4Item1Desc: 'Drivers, payment processors, and technology partners (Excellian Technologies)',
//   privacy4Item2: 'Regulatory Authorities:',
//   privacy4Item2Desc: 'FAAN, NITDA, and law enforcement when legally required',
//   privacy4Item3: 'Business Transfers:',
//   privacy4Item3Desc: 'In the event of a merger, acquisition, or sale of assets',
//   privacy4Note: 'We do NOT sell your personal data to third parties.',

//   privacy5Title: '5. Data Security',
//   privacy5Intro: 'We implement industry-standard security measures:',
//   privacy5Item1: 'Encryption: Data transmitted using SSL/TLS encryption',
//   privacy5Item2: 'Access Controls: Limited access to authorized personnel only',
//   privacy5Item3: 'Secure Storage: Data stored on secure servers with regular backups',
//   privacy5Item4: 'Regular Audits: Periodic security assessments conducted by Excellian Technologies',
//   privacy5Item5: 'Staff Training: All employees trained on data protection best practices',

//   privacy6Title: '6. Your Rights Under NDPR',
//   privacy6Intro: 'As a data subject in Nigeria, you have the following rights:',
//   privacy6Right1: 'Right to Access:',
//   privacy6Right1Desc: 'Request a copy of the personal data we hold about you',
//   privacy6Right2: 'Right to Rectification:',
//   privacy6Right2Desc: 'Request correction of inaccurate or incomplete personal data',
//   privacy6Right3: 'Right to Erasure:',
//   privacy6Right3Desc: 'Request deletion of your personal data',
//   privacy6Right4: 'Right to Data Portability:',
//   privacy6Right4Desc: 'Receive your data in a structured, commonly used format',
//   privacy6Right5: 'Right to Object:',
//   privacy6Right5Desc: 'Object to processing based on legitimate interests',
//   privacy6Right6: 'Right to Withdraw Consent:',
//   privacy6Right6Desc: 'Withdraw consent at any time',
//   privacy6Right7: 'Right to Lodge a Complaint:',
//   privacy6Right7Desc: 'File a complaint if your rights have been violated',
//   privacy6Contact: 'To exercise your rights, contact us at:',
//   privacy6ContactEmail: 'privacy@achrams.com.ng',

//   privacy7Title: '7. Data Retention',
//   privacy7Item1: 'Active Account Data:',
//   privacy7Item1Desc: 'Retained while your account is active',
//   privacy7Item2: 'Booking Records:',
//   privacy7Item2Desc: 'Retained for 2 years for legal and accounting purposes',
//   privacy7Item3: 'Payment Information:',
//   privacy7Item3Desc: 'Retained per financial regulations (minimum 2 years)',
//   privacy7Item4: 'Communication Records:',
//   privacy7Item4Desc: 'Retained for 1 year for quality assurance',
//   privacy7Item5: 'Marketing Consent:',
//   privacy7Item5Desc: 'Until you withdraw consent or after 1 year of inactivity',

//   privacy8Title: '8. Contact Information',
//   privacy8DPOTitle: 'Data Protection Officer',
//   privacy8DPOEmail: 'Email: dpo@achrams.com.ng',
//   privacy8DPOPhone: 'Phone: +234 800 ACHRAMS',
//   privacy8GeneralTitle: 'General Privacy Inquiries',
//   privacy8GeneralEmail: 'Email: privacy@achrams.com.ng',

//   privacyConsentTitle: 'Consent',
//   privacyConsentText: 'By using ACHRAMS services, you acknowledge that you have read, understood, and agree to this Privacy Policy.',

//   // Terms Page
//   termsPageTitle: 'Terms and Conditions',
//   termsEffectiveDate: 'Effective Date: November 3, 2024 | Last Updated: November 3, 2024',

//   terms1Title: '1. Introduction and Acceptance',
//   terms1Para1: 'Welcome to ACHRAMS, the official FAAN-approved airport car hire service. These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "Passenger," or "you") and ACHRAMS Nigeria Limited.',
//   terms1Para2: 'By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you must not use our Services.',
//   terms1NoteTitle: 'Legal Capacity',
//   terms1NoteText: 'You must be at least 18 years of age to use our Services.',

//   terms2Title: '2. Service Description',
//   terms2Text: 'ACHRAMS operates as an intermediary platform connecting passengers with FAAN-verified, licensed drivers at Nigerian airports. We facilitate car hire bookings but do not provide transportation services directly. The ACHRAMS platform is developed and maintained by Excellian Technologies.',

//   terms3Title: '3. User Registration and Account',
//   terms3Subtitle1: 'Account Creation',
//   terms3Account1: 'You may create an account or book as a guest using our QR code system',
//   terms3Account2: 'You must provide accurate, current, and complete information',
//   terms3Account3: 'You are responsible for maintaining the confidentiality of your account credentials',
//   terms3Account4: 'You must notify us immediately of any unauthorized access',

//   terms3Subtitle2: 'Account Responsibilities',
//   terms3Resp1: 'You are solely responsible for all activities under your account',
//   terms3Resp2: 'You must not share your account with others',
//   terms3Resp3: 'You must not create multiple accounts to abuse promotions or services',

//   terms4Title: '4. Booking and Payment',
//   terms4Subtitle1: 'Booking Process',
//   terms4Booking1: 'Bookings can be made via QR codes at airports, our website, or mobile app',
//   terms4Booking2: 'You will receive upfront pricing before confirming your booking',
//   terms4Booking3: 'All bookings are subject to driver availability',

//   terms4Subtitle2: 'Pricing',
//   terms4Pricing1: 'All prices are displayed in Nigerian Naira (₦)',
//   terms4Pricing2: 'Prices are fixed and transparent with no surge pricing',
//   terms4Pricing3: 'Additional charges may apply for waiting time exceeding 15 minutes, tolls, parking fees, excessive luggage, detours, or cleaning fees',

//   terms4Subtitle3: 'Payment Methods',
//   terms4PaymentIntro: 'We accept:',
//   terms4Payment1: 'Credit/Debit Cards (Visa, Mastercard, Verve)',
//   terms4Payment2: 'Mobile Money (from approved Nigerian providers)',
//   terms4Payment3: 'Bank Transfers',
//   terms4Payment4: 'Cash (subject to driver availability)',

//   terms5Title: '5. Cancellation and Refund Policy',
//   terms5Subtitle1: 'Passenger Cancellations',
//   terms5Cancel1: 'Free Cancellation:',
//   terms5Cancel1Desc: 'Up to 5 minutes after booking confirmation',
//   terms5Cancel2: 'Cancellation Fee:',
//   terms5Cancel2Desc: '₦500 if cancelled 5-15 minutes after booking',
//   terms5Cancel3: 'Full Charge:',
//   terms5Cancel3Desc: 'Cancellations after driver arrival or beyond 15 minutes',
//   terms5Cancel4: 'No-Show:',
//   terms5Cancel4Desc: 'Full fare charged if passenger does not appear within 10 minutes of driver arrival',

//   terms5Subtitle2: 'Refund Processing',
//   terms5Refund: 'Refunds are processed within 5-7 business days for valid cancellations and 7-14 business days for service issue refunds.',

//   terms6Title: '6. User Conduct and Prohibited Activities',
//   terms6Subtitle: 'You Must Not:',
//   terms6Prohibited1: 'Use the Services for illegal purposes',
//   terms6Prohibited2: 'Harass, threaten, or abuse drivers',
//   terms6Prohibited3: 'Transport illegal goods, weapons, or hazardous materials',
//   terms6Prohibited4: 'Exceed vehicle passenger capacity',
//   terms6Prohibited5: 'Smoke in vehicles (unless explicitly permitted)',
//   terms6Prohibited6: 'Manipulate or abuse the booking system',
//   terms6Prohibited7: 'Attempt to bypass payment systems',

//   terms6ConsequencesTitle: 'Consequences of Violations',
//   terms6ConsequencesText: 'Violations may result in immediate trip termination, account suspension or permanent ban, legal action, and referral to law enforcement authorities.',

//   terms7Title: '7. Safety and Security',
//   terms7Item1: 'We partner only with FAAN-verified drivers',
//   terms7Item2: 'All drivers undergo background checks',
//   terms7Item3: 'Real-time tracking available for all trips',
//   terms7Item4: 'Emergency support line: +234 800 ACHRAMS',
//   terms7NoteTitle: 'Report Safety Issues Immediately',
//   terms7NoteLine1: 'Emergency Line: +234 800 ACHRAMS (Option 1)',
//   terms7NoteLine2: 'Email: safety@achrams.com.ng',

//   terms8Title: '8. Limitation of Liability',
//   terms8Intro: 'ACHRAMS provides a platform connecting passengers with independent drivers. We are not:',
//   terms8Item1: 'A transportation carrier',
//   terms8Item2: 'Responsible for driver actions or omissions',
//   terms8Item3: 'Liable for accidents, injuries, or damages during trips',
//   terms8Item4: 'Guaranteeing service availability at all times',
//   terms8Note: 'Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind.',

//   terms9Title: '9. Intellectual Property',
//   terms9Para1: 'All intellectual property rights in the Platform, including trademarks, logos, software, and content, are owned by ACHRAMS, Excellian Technologies, or our licensors.',
//   terms9Para2: 'The ACHRAMS platform is developed and maintained by Excellian Technologies. All technology rights are the property of Excellian Technologies.',

//   terms10Title: '10. Dispute Resolution',
//   terms10Para1: 'Before initiating formal proceedings, you agree to contact us at legal@achrams.com.ng to attempt informal resolution.',
//   terms10Para2: 'Any disputes not resolved informally shall be settled by arbitration in accordance with the Arbitration and Conciliation Act (Cap A18) Laws of the Federation of Nigeria 2004.',
//   terms10Para3: 'These Terms are governed by the laws of the Federal Republic of Nigeria.',

//   terms11Title: '11. Contact Information',
//   terms11CompanyName: 'ACHRAMS Nigeria Limited',
//   terms11TechPartner: 'Technology Partner: Excellian Technologies',
//   terms11GeneralTitle: 'General Inquiries:',
//   terms11GeneralEmail: 'Email: support@achrams.com.ng',
//   terms11GeneralPhone: 'Phone: +234 800 ACHRAMS',
//   terms11LegalTitle: 'Legal Department:',
//   terms11LegalEmail: 'Email: legal@achrams.com.ng',
//   terms11SafetyTitle: 'Safety and Emergency:',
//   terms11SafetyHotline: '24/7 Hotline: +234 800 ACHRAMS (Option 1)',
//   terms11SafetyEmail: 'Email: safety@achrams.com.ng',

//   termsAcknowledgmentTitle: 'Acknowledgment',
//   termsAcknowledgmentText: 'BY CLICKING "I AGREE," SCANNING A QR CODE TO BOOK, OR USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.',

//   // Footer
//   footerDescription: 'FAAN-approved car hire service.',
//   //footerLanguagesAvailable: 'Available in 5+ languages',
//   quickLinks: 'Quick Links',
//   contactUs: 'Contact Us',
//   copyright: '© 2024 ACHRAMS. All rights reserved.',
//   privacyPolicy: 'Privacy Policy',
//   termsOfService: 'Terms of Service',

//   // Common/Misc
//   officialAirportCarHireTagline: 'Official Airport Car Hire'
// },
//   ha: {
//     // Header
//     home: 'Gida',
//     features: 'Fayiloli',
//     howItWorks: 'Yadda Ake Aiki',
//     airports: 'Bandar',
//     faqs: 'Tambaya',
//     bookNow: 'Shiga Yanzu',
//     // Hero Section
//     officialService: 'ACHRAMS',
//     heroTitle: 'Sabis Ƙarƙashin Kar da Aiki Mai Sauƙi',
//     heroSubtitle: 'Sabis ƙarƙashin kar da aiki mai dacewa da ƙarƙashin daidaitawa.',
//     scanBook: 'Duba & Shiga Yanzu',
//     contactSupport: 'Tuntube Taimako',
//     happyPassengers: 'Masu Shiga Masu Farin Ciki',
//     verifiedDrivers: 'Masu Kar da Aiki Masu Tabbatarwa',
//     majorAirports: 'Bandarai Babba',
//     averageRating: 'Matsayin Gaba',
//     // Features Section
//     whyChoose: 'Me Zaka Zaɓi ACHRAMS?',
//     whyChooseSub: 'Sabis ƙarƙashin da amincewar daidaitawa',
//     faanSafety: 'Tsayayyen FAAN',
//     faanSafetyDesc: 'Dukkan maza kar da aiki sun goge da FAAN.',
//     clearPricing: 'Farashin Daidai',
//     clearPricingDesc: 'Babu farashi masu zuwa.',
//     zeroWait: 'Rashin Jira',
//     zeroWaitDesc: 'Maza kar da aiki suna shi wajen zuwa ka.',
//     scanAndBook: 'Duba & Shiga',
//     scanAndBookDesc: 'Babu buƙatar app.',
//     multilingual: 'Harshen Dari',
//     multilingualDesc: '5 harshi an samu su.',
//     securePay: 'Biya Mai Sauƙi',
//     securePayDesc: 'Kaduna da kaya na hannu.',
//     // How It Works Section
//     howToBook: 'Yadda Zaka Shiga Safarinka',
//     howToBookSub: 'Shiga kar da aikin ka da 4 hanya masu sauƙi',
//     scanQR: 'Duba QR',
//     scanQRDesc: 'Nemo lambobi na QR a bandar.',
//     enterDestination: 'Shigar da Mahadar Hulɗa',
//     enterDestinationDesc: 'Samu farashin kai tsaye.',
//     getDriver: 'Samu Maza Kar da Aiki',
//     getDriverDesc: 'Duba wurin kai tsaye.',
//     enjoyRide: 'Jin Safarinka',
//     enjoyRideDesc: 'Biya mai sauƙi.',
//     needHelp: 'Ana Bukatar Taimako?',
//     needHelpSub: 'Muna samu wajen 24/7.',
//     callNow: 'Kira: +234 800 ACHRAMS',
//     // Airports Section
//     availableAirports: 'An Samu Shiga da Bandarai Babba',
//     availableAirportsSub: 'Sabis na kwarara',
//     statusAvailable: 'An Samu',
//     statusSoon: 'Ana Zo',
//     lagos: 'Lagos (LOS)',
//     lagosDesc: 'Murtala Muhammed',
//     abuja: 'Abuja (ABV)',
//     abujaDesc: 'Nnamdi Azikiwe',
//     kano: 'Kano (KAN)',
//     kanoDesc: 'Mallam Aminu Kano',
//     portharcourt: 'Port Harcourt',
//     portharcourtDesc: 'PHC Airport',
//     enugu: 'Enugu (ENU)',
//     enuguDesc: 'Akanu Ibiam',
//     benin: 'Benin (BNI)',
//     beninDesc: 'Benin Airport',
//     // Pricing Section
//     transparentPricing: 'Farashin Daidai',
//     transparentPricingSub: 'Babu farashi masu zuwa',
//     airportToCity: 'Bandar zuwa Birnin Gari',
//     airportToSuburbs: 'Bandar zuwa Ƙarƙashin Birni',
//     airportToExpress: 'Bandar zuwa Express',
//     priceGuarantee: 'Tabbacin Farashi',
//     priceGuaranteeDesc: 'Babu farashi na ƙanƙantar da kai. Dukkan farashi ne da Naira (₦).',
//     // Testimonials Section
//     trustedByThousands: 'An Kwantawa da Kurakurai',
//     joinSatisfied: 'Haɗa da masu farin ciki',
//     businessTraveller: 'Mai Safarar Kasuwanci',
//     frequentFlyer: 'Mai Safarar Kauri',
//     internationalVisitor: 'Mai Ziyartawa Duniya',
//     testimonial1: 'Sabis na kwarara a Najeriya.',
//     testimonial2: 'Tsarin QR mai sauƙi.',
//     testimonial3: 'Mai sauƙi da dacewa.',
//     // CTA Section
//     readyForBetter: 'Shin Ka Ready Don Abubuwan Bala?',
//     readySub: 'Shiga safarinka na gaba yanzu.',
//     // FAQ Page
//     faqsTitle: 'Tambayoyi da Ake Yi',
//     faqsSub: 'Nemo amsoshi na tambayoyin da ake yi game da ACHRAMS',
//     faqSection1: 'Fara',
//     faqSection2: 'Shiga',
//     faq1Q: 'Menene ACHRAMS?',
//     faq1A: 'ACHRAMS shine sabis ƙarƙashin kar da aiki na dacewa da FAAN a Najeriya. Muna haɗa ka da maza kar da aiki masu tabbatarwa a bandarai babba na Najeriya ta hanyar tsarin shiga mai sauƙi.',
//     faq2Q: 'Wadanne bandarai muke sabis?',
//     faq2A: 'Yanzu muna aiki a: Bandar Murtala Muhammed (Lagos), Bandar Nnamdi Azikiwe (Abuja), Bandar Mallam Aminu Kano (Kano), da Bandar Port Harcourt International.',
//     faq3Q: 'Shin ACHRAMS mai sauƙi ne?',
//     faq3A: 'Eh! Dukkan maza kar da aikin muna tabbatar da su da FAAN, duba asali, da lura. Dukkan safarai sun haɗa da duba wurin kai tsaye da taimako na 24/7.',
//     faq4Q: 'Yadda zan shiga kar da aiki?',
//     faq4A: '3 hanya masu sauƙi: 1) Duba lambobin QR a wurin kar da aikin bandar, 2) Ziyar www.achrams.com.ng, 3) Kira +234 800 ACHRAMS',
//     faq5Q: 'Ana bukatar shigar da asali don shiga?',
//     faq5A: 'A\'a, zaka iya shiga a matsayin abokin gida ta hanyar lambobin QR. Amma, ƙirƙiran asali zai baka shiga mai sauƙi, tarihin safarinka, da bayanai masu tsayi.',
//     faq6Q: 'Zan iya shiga don wani abu?',
//     faq6A: 'Eh! Kawai shigar da sunansa, lamba na waya, da bayanai na shiga wajen.',
//     stillHaveQuestions: 'Har Har Zuwa Tambayoyi?',
//     help247: 'Muna taimako maku 24/7!',
//     emailSupport: 'Imel Taimako',
//     // Privacy Page
//     privacyTitle: 'Ka\'idin Kariyar ACHRAMS',
//     // Terms Page
//     termsTitle: 'Sharuɗɗan da Shari\'a',
//     // Footer
//     quickLinks: 'Matakan Sauri',
//     contactUs: 'Tuntuba Mu',
//     copyright: '© 2024 ACHRAMS. Dukkan haƙƙoni suna da shi.',
//     // Accessibility Controls
//     accessibilityTextSize: 'Girman Harfi',
//     accessibilityLanguage: 'Harshe',
//     accessibilityToggle: 'Saitunan Sauƙin Amfani',
//     // Common Button Text
//     close: 'Rufe',
//   },
//   yo: {
//     // Header
//     home: 'Ile',
//     features: 'Awọn Ohun Ina',
//     howItWorks: 'Bawo Mo Ṣiṣẹ',
//     airports: 'Awọn Ẹlẹyin',
//     faqs: 'Alọmọdọlọmọ',
//     bookNow: 'Ṣe Iwe Aṣẹ Bayi',
//     // Hero Section
//     officialService: 'ACHRAMS',
//     heroTitle: 'Iṣẹ-Ẹjẹ Ririn Oju-Opọlọ Oju-Oluwa',
//     heroSubtitle: 'Iṣẹ-ẹjẹ ririn oju-opọlọ oju-oluwa to niforiji fun ṣiṣe idanwo nipa owo.',
//     scanBook: 'Ṣayẹwo & Ṣe Iwe Aṣẹ Bayi',
//     contactSupport: 'Kan Ọmọtara',
//     happyPassengers: 'Awọn Oloṣelọ Aladun',
//     verifiedDrivers: 'Awọn Olorin Tọwọpọ',
//     majorAirports: 'Awọn Ẹlẹyin Nla',
//     averageRating: 'Iye Ira',
//     // Features Section
//     whyChoose: 'Kini O Ṣe Aṣayan ACHRAMS?',
//     whyChooseSub: 'Iṣẹ-ẹjẹ to niforiji fun idanwo nipa owo',
//     faanSafety: 'Aabo FAAN',
//     faanSafetyDesc: 'Gbogbo awọn olorin wọpọ lọ si FAAN.',
//     clearPricing: 'Idanwo Nipa Owo Tọ',
//     clearPricingDesc: 'Ko si awọn owo afikun.',
//     zeroWait: 'Ko Si Idanwo',
//     zeroWaitDesc: 'Olorin nipa ready nigbati o ba de.',
//     scanAndBook: 'Ṣayẹwo & Ṣe Iwe Aṣẹ',
//     scanAndBookDesc: 'Ko si beere fun app.',
//     multilingual: 'Ise Apapo',
//     multilingualDesc: 'Awọn ede 5 wa.',
//     securePay: 'Owo-Ọfẹ Tọ',
//     securePayDesc: 'Kadu na ati awọn owo-ọfẹ.',
//     // How It Works Section
//     howToBook: 'Bawo O Ṣe Ṣe Iwe Aṣẹ Fun Oju-Opọlọ Re',
//     howToBookSub: 'Ṣe iwe aṣẹ fun oju-opọlọ re nipasẹ awọn igbesẹ mẹta',
//     scanQR: 'Ṣayẹwo QR',
//     scanQRDesc: 'Wá awọn QR code ni ẹlẹyin.',
//     enterDestination: 'Ṣe Aṣepo Ibi',
//     enterDestinationDesc: 'Gba idanwo nipa owo laifọwọyi.',
//     getDriver: 'Gba Olorin',
//     getDriverDesc: 'Ibi ti o wa laifọwọyi.',
//     enjoyRide: 'Jẹ Iwun Oju-Opọlọ Re',
//     enjoyRideDesc: 'San owo-ọfẹ tọ.',
//     needHelp: 'O Nilo Inu?',
//     needHelpSub: 'A wa nibi fun 24/7.',
//     callNow: 'Pe: +234 800 ACHRAMS',
//     // Airports Section
//     availableAirports: 'Wa ni Awọn Ẹlẹyin Nla',
//     availableAirportsSub: 'Iṣẹ-ẹjẹ to niforiji',
//     statusAvailable: 'Wa',
//     statusSoon: 'Nba Soon',
//     lagos: 'Lagos (LOS)',
//     lagosDesc: 'Murtala Muhammed',
//     abuja: 'Abuja (ABV)',
//     abujaDesc: 'Nnamdi Azikiwe',
//     kano: 'Kano (KAN)',
//     kanoDesc: 'Mallam Aminu Kano',
//     portharcourt: 'Port Harcourt',
//     portharcourtDesc: 'PHC Airport',
//     enugu: 'Enugu (ENU)',
//     enuguDesc: 'Akanu Ibiam',
//     benin: 'Benin (BNI)',
//     beninDesc: 'Benin Airport',
//     // Pricing Section
//     transparentPricing: 'Idanwo Nipa Owo Tọ',
//     transparentPricingSub: 'Ko si awọn owo afikun',
//     airportToCity: 'Ẹlẹyin si Ile Ijoko',
//     airportToSuburbs: 'Ẹlẹyin si Awọn Agbegbe',
//     airportToExpress: 'Ẹlẹyin si Express',
//     priceGuarantee: 'Iforiji Idanwo Nipa Owo',
//     priceGuaranteeDesc: 'Ko si idanwo nipa owo gigun. Gbogbo awọn owo ni Naira (₦).',
//     // Testimonials Section
//     trustedByThousands: 'Tọwọpọ Lati Awọn Irin',
//     joinSatisfied: 'Dàgbàbò sí awọn aladun',
//     businessTraveller: 'Oluselọ Iṣowo',
//     frequentFlyer: 'Oluselọ Ti Oju',
//     internationalVisitor: 'Oluselọ Agbaye',
//     testimonial1: 'Iṣẹ-ẹjẹ to niforiji julọ ni Naijiria.',
//     testimonial2: 'Ṣiṣe QR jẹ didara.',
//     testimonial3: 'Tọ ati tọwọpọ.',
//     // CTA Section
//     readyForBetter: 'Ṣe O Ti Ready Fun Ohun Tobi?',
//     readySub: 'Ṣe iwe aṣẹ fun oju-opọlọ re ti o ba.',
//     // FAQ Page
//     faqsTitle: 'Awọn Alọmọdọlọmọ Meji',
//     faqsSub: 'Wá awọn itumọ fun awọn alọmọdọlọmọ to nkan bi ACHRAMS',
//     faqSection1: 'Fẹsẹmulẹ',
//     faqSection2: 'Iwe Aṣẹ',
//     faq1Q: 'Kini ACHRAMS?',
//     faq1A: 'ACHRAMS jẹ iṣẹ-ẹjẹ ririn oju-opọlọ oju-oluwa to niforiji fun FAAN ni Naijiria. A nse asopọ fun ọ pẹlu awọn olorin to wọpọ ati ti o niforiji ni awọn ẹlẹyin nla Naijiria nipasẹ aṣàpọ rẹ to niforiji.',
//     faq2Q: 'Awọn ẹlẹyin wo ni a ṣe iṣẹ-ẹjẹ?',
//     faq2A: 'A nṣiṣẹ bayi ni: Ẹlẹyin Murtala Muhammed (Lagos), Ẹlẹyin Nnamdi Azikiwe (Abuja), Ẹlẹyin Mallam Aminu Kano (Kano), ati Ẹlẹyin Port Harcourt International.',
//     faq3Q: 'Ṣe ACHRAMS jẹ iṣẹ-ẹjẹ to niforiji?',
//     faq3A: 'Bẹẹ! Gbogbo awọn olorin wa ni wọpọ si FAAN, ṣayẹwo awọn ipinlẹ, ati lura. Gbogbo awọn oju-opọlọ nikan asopọ pẹlu ibi ti o wa laifọwọyi ati inu 24/7.',
//     faq4Q: 'Bawo mo ṣe ṣe iwe aṣẹ fun oju-opọlọ?',
//     faq4A: 'Awọn ọna mẹta to nira: 1) Ṣayẹwo awọn QR code ni awọn ibi oju-opọlọ ẹlẹyin, 2) Lọ si www.achrams.com.ng, 3) Pe +234 800 ACHRAMS',
//     faq5Q: 'Ṣe o nilo asiri lati ṣe iwe aṣẹ?',
//     faq5A: 'Rara, o le ṣe iwe aṣẹ gẹgẹ bi aládùúgbọ́ nipa QR code. Sibẹsibẹ, ṣiṣẹda asiri yoo fun ọ lọwọ si ṣe iwe aṣẹ rẹ rọrun, tarihin oju-opọlọ, ati awọn ohun ina to niforiji.',
//     faq6Q: 'Ṣe mo le ṣe iwe aṣẹ fun eni miiran?',
//     faq6A: 'Bẹẹ! Nikan ṣe aṣepo orukọ rẹ, nọmba wọọle, ati awọn alaye iwe aṣẹ nigbamiran.',
//     stillHaveQuestions: 'Ṣe O Ti Ní Alọmọdọlọmọ?',
//     help247: 'A wa nibi fun ọ fun 24/7!',
//     emailSupport: 'Imeeli Inu',
//     // Privacy Page
//     privacyTitle: 'Ofin Asiri ACHRAMS',
//     // Terms Page
//     termsTitle: 'Awọn Ofin Ati Akori',
//     // Footer
//     quickLinks: 'Awọn Asopọ Ti Oju',
//     contactUs: 'Kan Un',
//     copyright: '© 2024 ACHRAMS. Gbogbo awọn ẹtọ wọnyi.',
//     // Accessibility Controls
//     accessibilityTextSize: 'Giga Harifa',
//     accessibilityLanguage: 'Ede',
//     accessibilityToggle: 'Àwọn Ìṣàtòjú Ìmúdájú',
//     // Common Button Text
//     close: 'Ti',
//   },
//   ig: {
//     // Header
//     home: 'Ụlọ',
//     features: 'Ngụọdụ',
//     howItWorks: 'Ozi Kpọrọ Ọrụ',
//     airports: 'Ụlọ Ọrụ',
//     faqs: 'Ajụjụ',
//     bookNow: 'Debe Ugbu A',
//     // Hero Section
//     officialService: 'ACHRAMS',
//     heroTitle: 'Ịrụ Ụgbọ Ọrụ Na-Enu Eze',
//     heroSubtitle: 'Ịrụ ụgbọ ọrụ na-enu eze dị mma na nghụta ozi.',
//     scanBook: 'Lee & Debe Ugbu A',
//     contactSupport: 'Kpọtụrụ Nkwado',
//     happyPassengers: 'Ndị Nọrọ Nwere Mmetụta',
//     verifiedDrivers: 'Ndị Ụgbọ Mmekọ',
//     majorAirports: 'Ụlọ Ọrụ Kachasị',
//     averageRating: 'Nhazi Nkeji',
//     // Features Section
//     whyChoose: 'Kedu Ihe Mga Chọọ ACHRAMS?',
//     whyChooseSub: 'Ịrụ na-enu eze dị mma',
//     faanSafety: 'Nche FAAN',
//     faanSafetyDesc: 'Ndị ụgbọ mmekọ ni FAAN họpụtara.',
//     clearPricing: 'Nghụta Ozi',
//     clearPricingDesc: 'Enweghị oghụghụ dị.',
//     zeroWait: 'Ịkpụghị',
//     zeroWaitDesc: 'Onye ụgbọ mmekọ dị mma mgbe ị nọrọ.',
//     scanAndBook: 'Lee & Debe',
//     scanAndBookDesc: 'Enweghị iji app.',
//     multilingual: 'Asụsụ Ijikọ',
//     multilingualDesc: 'Asụsụ ise dị.',
//     securePay: 'Nkwụcha Nkeoma',
//     securePayDesc: 'Kad na oghụghụ.',
//     // How It Works Section
//     howToBook: 'Ozi Kpọrọ Debe Ụgbọ Gị',
//     howToBookSub: 'Debe ụgbọ gị site na igwe atọ',
//     scanQR: 'Lee QR',
//     scanQRDesc: 'Nụta QR code na ụlọ ọrụ.',
//     enterDestination: 'Tinye Ebe',
//     enterDestinationDesc: 'Nụta nghụta ozi.',
//     getDriver: 'Nụta Onye Ụgbọ',
//     getDriverDesc: 'Ịhazi ebe.',
//     enjoyRide: 'Nwee Mmetụta',
//     enjoyRideDesc: 'Kwụcha nkeoma.',
//     needHelp: 'Ịchọrọ Enyemaka?',
//     needHelpSub: 'Anyị dị mma fun 24/7.',
//     callNow: 'Kpọ: +234 800 ACHRAMS',
//     // Airports Section
//     availableAirports: 'Dị na Ụlọ Ọrụ Kachasị',
//     availableAirportsSub: 'Ịrụ dị mma',
//     statusAvailable: 'Dị',
//     statusSoon: 'Ọbụla',
//     lagos: 'Lagos (LOS)',
//     lagosDesc: 'Murtala Muhammed',
//     abuja: 'Abuja (ABV)',
//     abujaDesc: 'Nnamdi Azikiwe',
//     kano: 'Kano (KAN)',
//     kanoDesc: 'Mallam Aminu Kano',
//     portharcourt: 'Port Harcourt',
//     portharcourtDesc: 'PHC Airport',
//     enugu: 'Enugu (ENU)',
//     enuguDesc: 'Akanu Ibiam',
//     benin: 'Benin (BNI)',
//     beninDesc: 'Benin Airport',
//     // Pricing Section
//     transparentPricing: 'Nghụta Ozi',
//     transparentPricingSub: 'Enweghị oghụghụ dị',
//     airportToCity: 'Ụlọ Ọrụ zuo Obodo',
//     airportToSuburbs: 'Ụlọ Ọrụ zuo Agbata',
//     airportToExpress: 'Ụlọ Ọrụ zuo Express',
//     priceGuarantee: 'Nhazi Nkeji',
//     priceGuaranteeDesc: 'Enweghị nghụta ozi. Ndị ọkụ ni Naira (₦).',
//     // Testimonials Section
//     trustedByThousands: 'Nnwere Mmetụta Nke Ijeri',
//     joinSatisfied: 'Banye na ndị nwere mmetụta',
//     businessTraveller: 'Onye Ozi Ogbụ',
//     frequentFlyer: 'Onye Ozi Karia',
//     internationalVisitor: 'Onye Ozi Mba',
//     testimonial1: 'Ịrụ kachasị dị mma na Naijiria.',
//     testimonial2: 'Sistemu QR dị mma.',
//     testimonial3: 'Dị mma na nche.',
//     // CTA Section
//     readyForBetter: 'Ịga Eziwere Mmetụta?',
//     readySub: 'Debe ụgbọ gị nke gara aga.',
//     // FAQ Page
//     faqsTitle: 'Ajụjụ Mga Yị',
//     faqsSub: 'Nụta ajụjụ maka ACHRAMS',
//     faqSection1: 'Fọrọ',
//     faqSection2: 'Ịdebe',
//     faq1Q: 'Kedu ACHRAMS?',
//     faq1A: 'ACHRAMS bụ ịrụ ụgbọ ọrụ na-enu eze dị mma na FAAN na Naijiria. Anyị na-eme ka ị kpọtụrụ ndị ụgbọ mmekọ dị mma na ụlọ ọrụ kachasị Naijiria site na sistemu dị mma anyị.',
//     faq2Q: 'Ụlọ ọrụ ozo ka anyị na-eme?',
//     faq2A: 'Anyị na-emekọrịta ugbu a na: Murtala Muhammed Airport (Lagos), Nnamdi Azikiwe Airport (Abuja), Mallam Aminu Kano Airport (Kano), na Port Harcourt International Airport.',
//     faq3Q: 'Shi ACHRAMS dị mma?',
//     faq3A: 'Ee! Ndị ụgbọ mmekọ anyị ni FAAN họpụtara, họpụta ike, na nche. Ndị ọkụ dị mma nile nwere ịhazi ebe na nkwado 24/7.',
//     faq4Q: 'Ozi kpọrọ idebe ụgbọ?',
//     faq4A: 'Igwe atọ dị mma: 1) Lee QR code na ụlọ ọrụ, 2) Gaa www.achrams.com.ng, 3) Kpọ +234 800 ACHRAMS',
//     faq5Q: 'Ịchọrọ akwụkwọ idebe?',
//     faq5A: 'Ọ dịghị, ị nwere ike idebe dị ka onye ọzọ site na QR code. Mana, ime akwụkwọ ziri gị ike idebe rịa, ịhazi ọkụ, na ihe dị mma.',
//     faq6Q: 'Ị nwere ike idebe maka onye ọzọ?',
//     faq6A: 'Ee! Tinye aha ya, nọmba ụkwụ, na ajụjụ idebe mgbe ị ga.',
//     stillHaveQuestions: 'Ị nwere ajụjụ?',
//     help247: 'Anyị dị mma fun gị 24/7!',
//     emailSupport: 'Imeeli Enyemaka',
//     // Privacy Page
//     privacyTitle: 'Ikike Nke ACHRAMS',
//     // Terms Page
//     termsTitle: 'Iwu na Iji',
//     // Footer
//     quickLinks: 'Nsopụta Ozi',
//     contactUs: 'Kpọtụrụ Anyị',
//     copyright: '© 2024 ACHRAMS. Ikike niile dị.',
//     // Accessibility Controls
//     accessibilityTextSize: 'Nha Akara',
//     accessibilityLanguage: 'Asụsụ',
//     accessibilityToggle: 'Nhazi Mmetụta',
//     // Common Button Text
//     close: 'Mechie',
//   },
// fr: {
//   // Header & Navigation
//   officialAirportCarHire: 'ACHRAMS',
//   home: 'Accueil',
//   features: 'Fonctionnalités',
//   howItWorks: 'Comment ça Marche',
//   airports: 'Aéroports',
//   faqs: 'FAQ',
//   accessibility: 'Accessibilité',
// //   bookNow: 'Réserver Maintenant',
//   privacy: 'Confidentialité',
//   terms: 'Conditions Générales',

//   // Accessibility Controls
//   textSize: 'Taille du Texte',
//   language: 'Langue',
//   english: 'Anglais',
//   hausa: 'Hausa',
//   yoruba: 'Yoruba',
//   igbo: 'Igbo',
//   french: 'Français',

//   // Hero Section
//   officialFAANApprovedService: 'Service Officiel Approuvé par la FAAN',
//   heroTitle: 'Votre Service Sûr et Fiable',
//   heroTitleLine2: 'de Location de Voiture d\'Aéroport',
//   heroSubtitle: 'Service de location de voiture approuvé par la FAAN avec des prix transparents.',
//   scanBookNow: 'Scanner & Réserver Maintenant',
//   contactSupport: 'Contacter le Support',

//   // Hero Stats
//   happyPassengers: 'Passagers Satisfaits',
//   verifiedDrivers: 'Chauffeurs Vérifiés',
//   majorAirports: 'Aéroports Majeurs',
//   averageRating: 'Note Moyenne',
//   stat1Value: '50K+',
//   stat2Value: '1 200+',
//   stat3Value: '5',
//   stat4Value: '4,9',

//   // Features Section
//   whyChooseTitle: 'Pourquoi Choisir ACHRAMS ?',
//   whyChooseSubtitle: 'Service officiel avec sécurité garantie',

//   feature1Title: 'Sécurité FAAN',
//   feature1Description: 'Tous les chauffeurs sont vérifiés par la FAAN.',

//   feature2Title: 'Prix Clairs',
//   feature2Description: 'Pas de frais cachés.',

//   feature3Title: 'Aucune Attente',
//   feature3Description: 'Le chauffeur est prêt à votre arrivée.',

//   feature4Title: 'Scanner & Réserver',
//   feature4Description: 'Aucune application nécessaire.',

//   feature5Title: 'Multilingue',
//   feature5Description: '5 langues disponibles.',

//   feature6Title: 'Paiement Sécurisé',
//   feature6Description: 'Cartes et paiement mobile.',

//   // How It Works Section
//   howToBookTitle: 'Comment Réserver Votre Trajet',
//   howToBookSubtitle: 'Réservez votre location de voiture en 4 étapes simples',

//   step1Number: '01',
//   step1Title: 'Scanner QR',
//   step1Description: 'Trouvez les codes QR à l\'aéroport.',

//   step2Number: '02',
//   step2Title: 'Saisir la Destination',
//   step2Description: 'Obtenez des prix instantanés.',

//   step3Number: '03',
//   step3Title: 'Obtenir le Chauffeur',
//   step3Description: 'Suivi en temps réel.',

//   step4Number: '04',
//   step4Title: 'Profitez du Trajet',
//   step4Description: 'Payer en toute sécurité.',

//   needHelpTitle: 'Besoin d\'Aide ?',
//   needHelpDescription: 'Nous sommes disponibles 24/7.',
//   callNumber: 'Appeler : +234 800 ACHRAMS',

//   // Airports Section
//   availableAirportsTitle: 'Disponible dans les Grands Aéroports',
//   availableAirportsSubtitle: 'Service professionnel',
//   statusAvailable: 'Disponible',
//   statusComingSoon: 'Prochainement',

//   airport1Code: 'Lagos (LOS)',
//   airport1Name: 'Murtala Muhammed',

//   airport2Code: 'Abuja (ABV)',
//   airport2Name: 'Nnamdi Azikiwe',

//   airport3Code: 'Kano (KAN)',
//   airport3Name: 'Mallam Aminu Kano',

//   airport4Code: 'Port Harcourt',
//   airport4Name: 'Aéroport PHC',

//   airport5Code: 'Enugu (ENU)',
//   airport5Name: 'Akanu Ibiam',

//   airport6Code: 'Bénin (BNI)',
//   airport6Name: 'Aéroport de Bénin',

//   // Pricing Section
//   transparentPricingTitle: 'Prix Transparent',
//   transparentPricingSubtitle: 'Pas de frais cachés',

//   pricing1Title: 'Aéroport vers Centre-Ville',
//   pricing1Price: '₦2 500 - ₦4 500',
//   pricing1Duration: 'Env. 20-35 min',

//   pricing2Title: 'Aéroport vers Banlieue',
//   pricing2Price: '₦4 500 - ₦8 000',
//   pricing2Duration: 'Env. 35-50 min',

//   pricing3Title: 'Aéroport vers Autoroute',
//   pricing3Price: '₦8 000 - ₦15 000',
//   pricing3Duration: 'Env. 50-90 min',

//   priceGuaranteeTitle: 'Garantie de Prix',
//   priceGuaranteeDescription: 'Pas de prix dynamique. Tous les tarifs en Naira (₦).',

//   // Testimonials Section
//   trustedByThousandsTitle: 'Fait Confiance par Des Milliers',
//   trustedByThousandsSubtitle: 'Rejoignez les passagers satisfaits',

//   testimonial1Text: 'Le service le plus fiable au Nigeria.',
//   testimonial1Name: 'Sarah Johnson',
//   testimonial1Role: 'Voyageur d\'Affaires',
//   testimonial1Initials: 'SJ',

//   testimonial2Text: 'Le système QR est excellent.',
//   testimonial2Name: 'Chinedu Okafor',
//   testimonial2Role: 'Voyageur Fréquent',
//   testimonial2Initials: 'CO',

//   testimonial3Text: 'Sûr et transparent.',
//   testimonial3Name: 'Amina Hassan',
//   testimonial3Role: 'Visiteur International',
//   testimonial3Initials: 'AH',

//   // CTA Section
//   ctaTitle: 'Prêt pour une Meilleure Expérience ?',
//   ctaSubtitle: 'Réservez votre prochain trajet aujourd\'hui.',
//   ctaButtonText: 'Scanner & Réserver Maintenant',

//   // FAQ Page
//   faqPageTitle: 'Foire Aux Questions',
//   faqPageSubtitle: 'Trouvez des réponses aux questions courantes sur ACHRAMS',

//   faqSection1Title: 'Commencer',

//   faq1Question: 'Qu\'est-ce qu\'ACHRAMS ?',
//   faq1Answer: 'ACHRAMS est le service officiel approuvé par la FAAN de location de voiture d\'aéroport au Nigeria. Nous vous connectons avec des chauffeurs vérifiés et licenciés dans les principaux aéroports nigérians via notre plateforme de réservation sécurisée.',

//   faq2Question: 'Quels aéroports desservons-nous ?',
//   faq2Answer: 'Nous opérons actuellement à : Aéroport International de Murtala Muhammed (Lagos), Aéroport International Nnamdi Azikiwe (Abuja), Aéroport International de Mallam Aminu Kano (Kano) et Aéroport International de Port Harcourt.',

//   faq3Question: 'ACHRAMS est-il sûr ?',
//   faq3Answer: 'Oui ! Tous nos chauffeurs sont vérifiés par la FAAN, contrôlés et licenciés. Chaque trajet inclut un suivi en temps réel et un support d\'urgence 24/7.',

//   faqSection2Title: 'Réservation',

//   faq4Question: 'Comment réserver un trajet ?',
//   faq4Answer: 'Trois façons faciles : 1) Scanner les codes QR dans les zones de récupération des bagages de l\'aéroport, 2) Visiter www.achrams.com.ng, 3) Appeler +234 800 ACHRAMS',

//   faq5Question: 'Ai-je besoin d\'un compte pour réserver ?',
//   faq5Answer: 'Non, vous pouvez réserver en tant qu\'invité en utilisant les codes QR. Cependant, créer un compte vous permet un paiement plus rapide, un historique des trajets et des offres exclusives.',

//   faq6Question: 'Puis-je réserver pour quelqu\'un d\'autre ?',
//   faq6Answer: 'Oui ! Fournissez simplement son nom, son numéro de téléphone et les détails de vol lors de la réservation.',

//   stillHaveQuestionsTitle: 'Vous Avez Toujours Des Questions ?',
//   stillHaveQuestionsSubtitle: 'Nous sommes là pour vous aider 24/7 !',
//   emailSupportButton: 'Assistance par Email',

//   // Privacy Page
//   privacyPageTitle: 'Politique de Confidentialité d\'ACHRAMS',
//   privacyEffectiveDate: 'Date d\'effet : 3 novembre 2024 | Dernière mise à jour : 3 novembre 2024',

//   privacy1Title: '1. Introduction',
//   privacy1Text: 'ACHRAMS (« nous », « notre » ou « nos ») s\'engage à protéger votre vie privée et vos données personnelles conformément au Règlement Nigérian sur la Protection des Données (NDPR) 2019 et aux autres lois applicables de protection des données au Nigeria.',
//   privacyCompanyName: 'Nom de l\'entreprise :',
//   privacyCompanyValue: 'ACHRAMS Nigeria Limited',
//   privacyTechProvider: 'Fournisseur de technologie :',
//   privacyTechValue: 'Excellian Technologies',
//   privacyEmail: 'Email :',
//   privacyEmailValue: 'privacy@achrams.com.ng',
//   privacyPhone: 'Téléphone :',
//   privacyPhoneValue: '+234 800 ACHRAMS',

//   privacy2Title: '2. Informations que nous collectons',
//   privacy2Subtitle1: 'Informations personnelles que vous fournissez',
//   privacy2Item1: 'Coordonnées :',
//   privacy2Item1Desc: 'Nom, numéro de téléphone, adresse e-mail',
//   privacy2Item2: 'Informations de voyage :',
//   privacy2Item2Desc: 'Détails du vol, lieux de prise en charge et de dépose, préférences de réservation',
//   privacy2Item3: 'Informations de paiement :',
//   privacy2Item3Desc: 'Détails du mode de paiement (traités en toute sécurité via nos partenaires de paiement)',
//   privacy2Item4: 'Identification :',
//   privacy2Item4Desc: 'Pièce d\'identité délivrée par l\'État (pour vérification si nécessaire)',

//   privacy2Subtitle2: 'Informations collectées automatiquement',
//   privacy2Item5: 'Données de localisation :',
//   privacy2Item5Desc: 'Coordonnées GPS pour la prise en charge et la dépose (avec votre consentement)',
//   privacy2Item6: 'Informations sur l\'appareil :',
//   privacy2Item6Desc: 'Type d\'appareil, système d\'exploitation, type de navigateur, adresse IP',
//   privacy2Item7: 'Données d\'utilisation :',
//   privacy2Item7Desc: 'Historique des réservations, préférences de service, interactions avec l\'application',
//   privacy2Item8: 'Archives de communication :',
//   privacy2Item8Desc: 'Conversations avec le support client, commentaires et évaluations',

//   privacy3Title: '3. Utilisation de vos informations',
//   privacy3Subtitle1: 'Livraison du service',
//   privacy3Service1: 'Traiter et gérer vos réservations de location de voiture',
//   privacy3Service2: 'Vous connecter avec des chauffeurs vérifiés',
//   privacy3Service3: 'Fournir un suivi en temps réel et des mises à jour',
//   privacy3Service4: 'Envoyer des confirmations et reçus de réservation',

//   privacy3Subtitle2: 'Sécurité et protection',
//   privacy3Safety1: 'Vérifier les références des chauffeurs avec la FAAN',
//   privacy3Safety2: 'Surveiller la qualité du service et les normes de sécurité',
//   privacy3Safety3: 'Investiguer les incidents ou plaintes',
//   privacy3Safety4: 'Prévenir la fraude et l\'accès non autorisé',

//   privacy4Title: '4. Partage et divulgation des données',
//   privacy4Intro: 'Nous ne partageons vos informations personnelles que dans les circonstances suivantes :',
//   privacy4Item1: 'Fournisseurs de services :',
//   privacy4Item1Desc: 'Chauffeurs, processeurs de paiement et partenaires technologiques (Excellian Technologies)',
//   privacy4Item2: 'Autorités de régulation :',
//   privacy4Item2Desc: 'FAAN, NITDA et forces de l\'ordre lorsque cela est légalement requis',
//   privacy4Item3: 'Transferts commerciaux :',
//   privacy4Item3Desc: 'En cas de fusion, acquisition ou vente d\'actifs',
//   privacy4Note: 'Nous ne vendons PAS vos données personnelles à des tiers.',

//   privacy5Title: '5. Sécurité des données',
//   privacy5Intro: 'Nous mettons en œuvre des mesures de sécurité standard de l\'industrie :',
//   privacy5Item1: 'Chiffrement : Les données sont transmises avec un chiffrement SSL/TLS',
//   privacy5Item2: 'Contrôles d\'accès : Accès limité uniquement au personnel autorisé',
//   privacy5Item3: 'Stockage sécurisé : Les données sont stockées sur des serveurs sécurisés avec des sauvegardes régulières',
//   privacy5Item4: 'Audits réguliers : Évaluations de sécurité périodiques effectuées par Excellian Technologies',
//   privacy5Item5: 'Formation du personnel : Tous les employés sont formés aux meilleures pratiques de protection des données',

//   privacy6Title: '6. Vos droits selon le NDPR',
//   privacy6Intro: 'En tant que sujet de données au Nigeria, vous avez les droits suivants :',
//   privacy6Right1: 'Droit d\'accès :',
//   privacy6Right1Desc: 'Demander une copie des données personnelles que nous détenons à votre sujet',
//   privacy6Right2: 'Droit de rectification :',
//   privacy6Right2Desc: 'Demander la correction de données personnelles inexactes ou incomplètes',
//   privacy6Right3: 'Droit à l\'effacement :',
//   privacy6Right3Desc: 'Demander la suppression de vos données personnelles',
//   privacy6Right4: 'Droit à la portabilité des données :',
//   privacy6Right4Desc: 'Recevoir vos données dans un format structuré, couramment utilisé',
//   privacy6Right5: 'Droit d\'opposition :',
//   privacy6Right5Desc: 'S\'opposer au traitement fondé sur des intérêts légitimes',
//   privacy6Right6: 'Droit de retirer le consentement :',
//   privacy6Right6Desc: 'Retirer votre consentement à tout moment',
//   privacy6Right7: 'Droit de déposer une réclamation :',
//   privacy6Right7Desc: 'Déposer une réclamation si vos droits ont été violés',
//   privacy6Contact: 'Pour exercer vos droits, contactez-nous à :',
//   privacy6ContactEmail: 'privacy@achrams.com.ng',

//   privacy7Title: '7. Conservation des données',
//   privacy7Item1: 'Données de compte actif :',
//   privacy7Item1Desc: 'Conservées tant que votre compte est actif',
//   privacy7Item2: 'Registres de réservation :',
//   privacy7Item2Desc: 'Conservées pendant 2 ans pour des raisons légales et comptables',
//   privacy7Item3: 'Informations de paiement :',
//   privacy7Item3Desc: 'Conservées conformément aux réglementations financières (minimum 2 ans)',
//   privacy7Item4: 'Archives de communication :',
//   privacy7Item4Desc: 'Conservées pendant 1 an pour l\'assurance qualité',
//   privacy7Item5: 'Consentement marketing :',
//   privacy7Item5Desc: 'Jusqu\'à ce que vous retiriez votre consentement ou après 1 an d\'inactivité',

//   privacy8Title: '8. Informations de contact',
//   privacy8DPOTitle: 'Délégué à la protection des données',
//   privacy8DPOEmail: 'Email : dpo@achrams.com.ng',
//   privacy8DPOPhone: 'Téléphone : +234 800 ACHRAMS',
//   privacy8GeneralTitle: 'Demandes générales de confidentialité',
//   privacy8GeneralEmail: 'Email : privacy@achrams.com.ng',

//   privacyConsentTitle: 'Consentement',
//   privacyConsentText: 'En utilisant les services ACHRAMS, vous reconnaissez avoir lu, compris et accepté cette Politique de Confidentialité.',

//   // Terms Page
//   termsPageTitle: 'Conditions Générales',
//   termsEffectiveDate: 'Date d\'effet : 3 novembre 2024 | Dernière mise à jour : 3 novembre 2024',

//   terms1Title: '1. Introduction et acceptation',
//   terms1Para1: 'Bienvenue sur ACHRAMS, le service officiel de location de voiture d\'aéroport approuvé par la FAAN. Ces Conditions Générales (« Conditions ») constituent un accord juridiquement contraignant entre vous (« Utilisateur », « Passager » ou « vous ») et ACHRAMS Nigeria Limited.',
//   terms1Para2: 'En accédant ou en utilisant nos Services, vous acceptez d\'être lié par ces Conditions. Si vous ne les acceptez pas, vous ne devez pas utiliser nos Services.',
//   terms1NoteTitle: 'Capacité juridique',
//   terms1NoteText: 'Vous devez avoir au moins 18 ans pour utiliser nos Services.',

//   terms2Title: '2. Description du service',
//   terms2Text: 'ACHRAMS opère comme une plateforme intermédiaire reliant les passagers à des chauffeurs vérifiés et licenciés par la FAAN dans les aéroports nigérians. Nous facilitons les réservations de location de voiture, mais ne fournissons pas directement de services de transport. La plateforme ACHRAMS est développée et maintenue par Excellian Technologies.',

//   terms3Title: '3. Inscription et compte utilisateur',
//   terms3Subtitle1: 'Création de compte',
//   terms3Account1: 'Vous pouvez créer un compte ou réserver en tant qu\'invité en utilisant notre système de code QR',
//   terms3Account2: 'Vous devez fournir des informations exactes, actuelles et complètes',
//   terms3Account3: 'Vous êtes responsable de la confidentialité de vos identifiants de compte',
//   terms3Account4: 'Vous devez nous notifier immédiatement tout accès non autorisé',

//   terms3Subtitle2: 'Responsabilités du compte',
//   terms3Resp1: 'Vous êtes seul responsable de toutes les activités effectuées sous votre compte',
//   terms3Resp2: 'Vous ne devez pas partager votre compte avec d\'autres',
//   terms3Resp3: 'Vous ne devez pas créer plusieurs comptes pour abuser des promotions ou des services',

//   terms4Title: '4. Réservation et paiement',
//   terms4Subtitle1: 'Processus de réservation',
//   terms4Booking1: 'Les réservations peuvent être effectuées via les codes QR aux aéroports, notre site web ou notre application mobile',
//   terms4Booking2: 'Vous recevrez un prix affiché avant de confirmer votre réservation',
//   terms4Booking3: 'Toutes les réservations sont sujettes à la disponibilité des chauffeurs',

//   terms4Subtitle2: 'Prix',
//   terms4Pricing1: 'Tous les prix sont affichés en Naira nigérian (₦)',
//   terms4Pricing2: 'Les prix sont fixes et transparents, sans prix dynamique',
//   terms4Pricing3: 'Des frais supplémentaires peuvent s\'appliquer pour un temps d\'attente dépassant 15 minutes, les péages, les frais de stationnement, les bagages excessifs, les détours ou les frais de nettoyage',

//   terms4Subtitle3: 'Méthodes de paiement',
//   terms4PaymentIntro: 'Nous acceptons :',
//   terms4Payment1: 'Cartes de crédit/débit (Visa, Mastercard, Verve)',
//   terms4Payment2: 'Paiement mobile (via des fournisseurs nigérians agréés)',
//   terms4Payment3: 'Virements bancaires',
//   terms4Payment4: 'Espèces (sous réserve de la disponibilité du chauffeur)',

//   terms5Title: '5. Politique d\'annulation et de remboursement',
//   terms5Subtitle1: 'Annulations par le passager',
//   terms5Cancel1: 'Annulation gratuite :',
//   terms5Cancel1Desc: 'Jusqu\'à 5 minutes après la confirmation de la réservation',
//   terms5Cancel2: 'Frais d\'annulation :',
//   terms5Cancel2Desc: '₦500 si annulé entre 5 et 15 minutes après la réservation',
//   terms5Cancel3: 'Prix complet :',
//   terms5Cancel3Desc: 'Annulations après l\'arrivée du chauffeur ou au-delà de 15 minutes',
//   terms5Cancel4: 'Absence :',
//   terms5Cancel4Desc: 'Prix complet facturé si le passager n\'apparaît pas dans les 10 minutes suivant l\'arrivée du chauffeur',

//   terms5Subtitle2: 'Traitement des remboursements',
//   terms5Refund: 'Les remboursements sont traités dans un délai de 5 à 7 jours ouvrables pour les annulations valides et de 7 à 14 jours ouvrables pour les remboursements liés à des problèmes de service.',

//   terms6Title: '6. Conduite de l\'utilisateur et activités interdites',
//   terms6Subtitle: 'Vous ne devez pas :',
//   terms6Prohibited1: 'Utiliser les services à des fins illégales',
//   terms6Prohibited2: 'Harceler, menacer ou maltraiter les chauffeurs',
//   terms6Prohibited3: 'Transporter des marchandises, armes ou matériaux dangereux illégaux',
//   terms6Prohibited4: 'Dépasser la capacité maximale de passagers du véhicule',
//   terms6Prohibited5: 'Fumer dans les véhicules (sauf autorisation explicite)',
//   terms6Prohibited6: 'Manipuler ou abuser du système de réservation',
//   terms6Prohibited7: 'Tenter de contourner les systèmes de paiement',

//   terms6ConsequencesTitle: 'Conséquences des violations',
//   terms6ConsequencesText: 'Les violations peuvent entraîner la suspension immédiate du trajet, la suspension ou l\'interdiction permanente du compte, des actions légales et une référé aux autorités de l\'ordre.',

//   terms7Title: '7. Sécurité et protection',
//   terms7Item1: 'Nous collaborons uniquement avec des chauffeurs vérifiés par la FAAN',
//   terms7Item2: 'Tous les chauffeurs subissent des vérifications d\'antécédents',
//   terms7Item3: 'Un suivi en temps réel est disponible pour tous les trajets',
//   terms7Item4: 'Ligne d\'assistance d\'urgence : +234 800 ACHRAMS',
//   terms7NoteTitle: 'Signalez immédiatement les problèmes de sécurité',
//   terms7NoteLine1: 'Ligne d\'urgence : +234 800 ACHRAMS (Option 1)',
//   terms7NoteLine2: 'Email : safety@achrams.com.ng',

//   terms8Title: '8. Limitation de responsabilité',
//   terms8Intro: 'ACHRAMS fournit une plateforme reliant les passagers à des chauffeurs indépendants. Nous ne sommes pas :',
//   terms8Item1: 'Un transporteur',
//   terms8Item2: 'Responsable des actions ou omissions des chauffeurs',
//   terms8Item3: 'Responsable des accidents, blessures ou dommages pendant les trajets',
//   terms8Item4: 'Garantissant la disponibilité du service à tout moment',
//   terms8Note: 'Les services sont fournis « TELS QUELS » et « TELS QUE DISPONIBLES », sans garantie d\'aucune sorte.',

//   terms9Title: '9. Propriété intellectuelle',
//   terms9Para1: 'Tous les droits de propriété intellectuelle sur la Plateforme, y compris les marques, logos, logiciels et contenus, sont la propriété d\'ACHRAMS, d\'Excellian Technologies ou de nos concédants.',
//   terms9Para2: 'La plateforme ACHRAMS est développée et maintenue par Excellian Technologies. Tous les droits technologiques sont la propriété d\'Excellian Technologies.',

//   terms10Title: '10. Résolution des litiges',
//   terms10Para1: 'Avant d\'engager des procédures formelles, vous acceptez de nous contacter à legal@achrams.com.ng pour tenter une résolution informelle.',
//   terms10Para2: 'Tout litige non résolu informellement sera régi par l\'arbitrage conformément à la Loi sur l\'arbitrage et la conciliation (Cap A18) des lois de la Fédération du Nigeria 2004.',
//   terms10Para3: 'Ces Conditions sont régies par les lois de la République Fédérale du Nigeria.',

//   terms11Title: '11. Informations de contact',
//   terms11CompanyName: 'ACHRAMS Nigeria Limited',
//   terms11TechPartner: 'Partenaire technologique : Excellian Technologies',
//   terms11GeneralTitle: 'Demandes générales :',
//   terms11GeneralEmail: 'Email : support@achrams.com.ng',
//   terms11GeneralPhone: 'Téléphone : +234 800 ACHRAMS',
//   terms11LegalTitle: 'Département juridique :',
//   terms11LegalEmail: 'Email : legal@achrams.com.ng',
//   terms11SafetyTitle: 'Sécurité et urgence :',
//   terms11SafetyHotline: 'Ligne d\'urgence 24/7 : +234 800 ACHRAMS (Option 1)',
//   terms11SafetyEmail: 'Email : safety@achrams.com.ng',

//   termsAcknowledgmentTitle: 'Reconnaissance',
//   termsAcknowledgmentText: 'EN CLIQUANT SUR « J\'ACCEPTE », EN SCANNANT UN CODE QR POUR RÉSERVER OU EN UTILISANT NOS SERVICES, VOUS RECONNAISSEZ AVOIR LU, COMPRIS ET ACCEPTÉ D\'ÊTRE LIÉ PAR CES CONDITIONS GÉNÉRALES.',

//   // Footer
//   footerDescription: 'Service de location de voiture approuvé par la FAAN.',
//   footerLanguagesAvailable: 'Disponible en 5+ langues',
//   quickLinks: 'Liens Rapides',
//   contactUs: 'Nous Contacter',
//   copyright: '© 2024 ACHRAMS. Tous droits réservés.',
//   privacyPolicy: 'Politique de Confidentialité',
//   termsOfService: 'Conditions Générales',

//   // Common/Misc
//   officialAirportCarHireTagline: 'Location de Voiture d\'Aéroport Officielle'
// }
// };

// Function to translate the page content
// State Management


let currentLanguage = localStorage.getItem("achrams_lang") || "en"; // Default language
let textFontSize = 'text-base'; // Default text size
let currentPage = 'home';
let currentTestimonial = 0;
let scrolled = false;
let activeHeroImage = 0;
let heroImages = [
    'faan_hero.jpg', // Index 0
    'faan_hero3.jpg', // Index 1
    'faan_hero2.jpeg', // Index 2
    'faan_hero4',
];

// Helper function to safely update text content
// function updateElementText(selector, key, translations, index = 0) {
//     try {
//         const elements = document.querySelectorAll(selector);
//         if (elements.length > 0 && translations[key]) {
//             const element = elements[index];
//             if (element) {
//                 element.textContent = translations[key];
//             } else {
//                 console.warn(`Element not found for selector "${selector}" at index ${index} for key "${key}".`);
//             }
//         } else if (elements.length === 0) {
//             console.warn(`No elements found for selector "${selector}" for key "${key}".`);
//         } else if (!translations[key]) {
//             console.warn(`Translation key "${key}" not found for language.`);
//         }
//     } catch (e) {
//         console.error(`Error updating text for key "${key}" with selector "${selector}":`, e);
//     }
// }

// // Helper function to safely update text content within text nodes
// function updateTextNodeText(selector, key, translations) {
//     try {
//         const element = document.querySelector(selector);
//         if (element && translations[key]) {
//             // Find the first text node child and update it
//             for (let node of element.childNodes) {
//                 if (node.nodeType === Node.TEXT_NODE) {
//                     node.textContent = translations[key];
//                     break; // Update only the first text node found
//                 }
//             }
//         } else if (!element) {
//              console.warn(`Element not found for selector "${selector}" for key "${key}".`);
//         } else if (!translations[key]) {
//              console.warn(`Translation key "${key}" not found for language.`);
//         }
//     } catch (e) {
//         console.error(`Error updating text node for key "${key}" with selector "${selector}":`, e);
//     }
// }

// function applyTranslations(lang) {
//     const translations = LANGUAGES[lang];
//     if (!translations) {
//         console.error(`Translations for language ${lang} not found.`);
//         return;
//     }

//     // Update Navigation Links (Inside header nav.lg\:flex)
//     updateElementText('header nav.lg\\:flex button', 'home', translations, 0); // Home button
//     updateElementText('header nav.lg\\:flex a', 'features', translations, 0); // Features link
//     updateElementText('header nav.lg\\:flex a', 'howItWorks', translations, 1); // How It Works link
//     updateElementText('header nav.lg\\:flex a', 'airports', translations, 2); // Airports link
//     updateElementText('header nav.lg\\:flex a.no-decoration', 'faqs', translations); // FAQs link (specific class)
//     updateElementText('header nav.lg\\:flex a', 'bookNow', translations, 3); // Book Now link (adjust index if needed)
//     updateElementText('header nav.lg\\:flex a', 'privacy', translations, 4); // Privacy link (adjust index if needed)
//     updateElementText('header nav.lg\\:flex a', 'terms', translations, 5); // Terms link (adjust index if needed)
//     updateElementText('header nav.lg\\:flex a', 'accessibility', translations, 6); // Accessibility link (adjust index if needed)
//     // Update Accessibility Controls (if present in header navigation)
//     updateElementText('header nav.lg\\:flex .accessibility-controls span.text-xs', 'textSize', translations, 0); // Text Size label (if present in nav)
//     updateElementText('header nav.lg\\:flex .accessibility-controls .language-select', 'language', translations, -1); // Language label (if present in nav, needs specific selector)
//     // Update Hero Section (Inside section#home-page)
//     updateElementText('section#home-page span.text-sm.text-gray-700.font-medium', 'officialFAANApprovedService', translations); // Official FAAN-Approved Service
//     // Hero Title spans are split, need to target them individually or update the structure to have one container
//     // For now, assuming the first part "Your Safe, Reliable" is in the first h1 span
//     updateElementText('section#home-page h1 span:first-child', 'heroTitle', translations); // "Your Safe, Reliable"
//     // The second part "Airport Car Hire Service" is in the second span within the h1
//     updateElementText('section#home-page h1 span.block', 'heroTitleLine2', translations); // "Airport Car Hire Service"
//     updateElementText('section#home-page p.text-xl.text-white', 'heroSubtitle', translations); // Hero subtitle
//     updateElementText('section#home-page button span', 'scanBookNow', translations, 0); // First button span ("Scan & Book Now")
//     updateElementText('section#home-page button span', 'contactSupport', translations, 1); // Second button span ("Contact Support")
//     // Update Hero Stats (Inside section#home-page)
//     updateElementText('section#home-page div.text-center p.text-3xl.font-bold.text-white', 'stat1Value', translations, 0); // 50K+
//     updateElementText('section#home-page div.text-center p.text-3xl.font-bold.text-white', 'stat2Value', translations, 1); // 1,200+
//     updateElementText('section#home-page div.text-center p.text-3xl.font-bold.text-white', 'stat3Value', translations, 2); // 5
//     updateElementText('section#home-page div.text-center p.text-3xl.font-bold.text-white', 'stat4Value', translations, 3); // 4.9
//     updateElementText('section#home-page div.text-center p.text-sm.text-white\\/90.font-medium', 'happyPassengers', translations, 0); // Happy Passengers
//     updateElementText('section#home-page div.text-center p.text-sm.text-white\\/90.font-medium', 'verifiedDrivers', translations, 1); // Verified Drivers
//     updateElementText('section#home-page div.text-center p.text-sm.text-white\\/90.font-medium', 'majorAirports', translations, 2); // Major Airports
//     updateElementText('section#home-page div.text-center p.text-sm.text-white\\/90.font-medium', 'averageRating', translations, 3); // Average Rating
//     // Update Features Section (Inside section#features)
//     updateTextNodeText('section#features h2.text-3xl', 'whyChooseTitle', translations); // Why Choose ACHRAMS?
//     updateElementText('section#features p.text-lg', 'whyChooseSubtitle', translations); // Official service with guaranteed safety
//     // Feature titles and descriptions need specific targeting based on their position or unique classes if available
//     updateElementText('section#features div.feature-card h3.text-xl', 'feature1Title', translations, 0); // FAAN Safety (adjust index if needed)
//     updateElementText('section#features div.feature-card p.text-gray-600', 'feature1Description', translations, 0); // All drivers vetted... (adjust index)
//     updateElementText('section#features div.feature-card h3.text-xl', 'feature2Title', translations, 1); // Clear Pricing (adjust index)
//     updateElementText('section#features div.feature-card p.text-gray-600', 'feature2Description', translations, 1); // No hidden fees. (adjust index)
//     updateElementText('section#features div.feature-card h3.text-xl', 'feature3Title', translations, 2); // Zero Wait (adjust index)
//     updateElementText('section#features div.feature-card p.text-gray-600', 'feature3Description', translations, 2); // Driver ready when... (adjust index)
//     updateElementText('section#features div.feature-card h3.text-xl', 'feature4Title', translations, 3); // Scan & Book (adjust index)
//     updateElementText('section#features div.feature-card p.text-gray-600', 'feature4Description', translations, 3); // No app needed. (adjust index)
//     updateElementText('section#features div.feature-card h3.text-xl', 'feature5Title', translations, 4); // Multilingual (adjust index)
//     updateElementText('section#features div.feature-card p.text-gray-600', 'feature5Description', translations, 4); // 5 languages available. (adjust index)
//     updateElementText('section#features div.feature-card h3.text-xl', 'feature6Title', translations, 5); // Secure Pay (adjust index)
//     updateElementText('section#features div.feature-card p.text-gray-600', 'feature6Description', translations, 5); // Cards and mobile money. (adjust index)
//     // Update How It Works Section (Inside section#how-it-works)
//     updateTextNodeText('section#how-it-works h2.text-3xl', 'howToBookTitle', translations); // How to Book Your Ride
//     updateElementText('section#how-it-works p.text-lg', 'howToBookSubtitle', translations); // Get your car hire in 4 simple steps
//     updateElementText('section#how-it-works h3.text-lg', 'step1Title', translations, 0); // Scan QR
//     updateElementText('section#how-it-works p.text-sm.text-gray-600', 'step1Description', translations, 0); // Find QR codes at airport.
//     updateElementText('section#how-it-works h3.text-lg', 'step2Title', translations, 1); // Enter Destination
//     updateElementText('section#how-it-works p.text-sm.text-gray-600', 'step2Description', translations, 1); // Get instant pricing.
//     updateElementText('section#how-it-works h3.text-lg', 'step3Title', translations, 2); // Get Driver
//     updateElementText('section#how-it-works p.text-sm.text-gray-600', 'step3Description', translations, 2); // Real-time tracking.
//     updateElementText('section#how-it-works h3.text-lg', 'step4Title', translations, 3); // Enjoy Ride
//     updateElementText('section#how-it-works p.text-sm.text-gray-600', 'step4Description', translations, 3); // Pay securely.
//     updateElementText('section#how-it-works div.mt-12 h3.text-xl', 'needHelpTitle', translations); // Need Help?
//     updateElementText('section#how-it-works div.mt-12 p.text-gray-600', 'needHelpDescription', translations); // We are available 24/7.
//     updateElementText('section#how-it-works div.mt-12 button span', 'callNumber', translations); // Call: +234 800 ACHRAMS
//     // Update Airports Section (Inside section#airports)
//     updateTextNodeText('section#airports h2.text-3xl', 'availableAirportsTitle', translations); // Available at Major Airports
//     updateElementText('section#airports p.text-lg', 'availableAirportsSubtitle', translations); // Professional service
//     // Airport status and names need specific targeting
//     updateElementText('section#airports .airport-status-available', 'statusAvailable', translations); // Available (if class exists on element)
//     updateElementText('section#airports .airport-status-soon', 'statusComingSoon', translations); // Coming Soon (if class exists on element)
//     updateElementText('section#airports h3.text-xl', 'airport1Code', translations, 0); // Lagos (LOS) (adjust index based on actual order)
//     updateElementText('section#airports p.text-gray-600', 'airport1Name', translations, 0); // Murtala Muhammed (adjust index)
//     updateElementText('section#airports h3.text-xl', 'airport2Code', translations, 1); // Abuja (ABV) (adjust index)
//     updateElementText('section#airports p.text-gray-600', 'airport2Name', translations, 1); // Nnamdi Azikiwe (adjust index)
//     updateElementText('section#airports h3.text-xl', 'airport3Code', translations, 2); // Kano (KAN) (adjust index)
//     updateElementText('section#airports p.text-gray-600', 'airport3Name', translations, 2); // Mallam Aminu Kano (adjust index)
//     updateElementText('section#airports h3.text-xl', 'airport4Code', translations, 3); // Port Harcourt (adjust index)
//     updateElementText('section#airports p.text-gray-600', 'airport4Name', translations, 3); // PHC Airport (adjust index)
//     updateElementText('section#airports h3.text-xl', 'airport5Code', translations, 4); // Enugu (ENU) (adjust index)
//     updateElementText('section#airports p.text-gray-600', 'airport5Name', translations, 4); // Akanu Ibiam (adjust index)
//     updateElementText('section#airports h3.text-xl', 'airport6Code', translations, 5); // Benin (BNI) (adjust index)
//     updateElementText('section#airports p.text-gray-600', 'airport6Name', translations, 5); // Benin Airport (adjust index)
//     // Update Pricing Section (Inside the pricing section without specific ID/class)
//     updateElementText('section.py-20.px-4 h2.text-3xl', 'transparentPricingTitle', translations, 0); // Transparent Pricing (first h2.text-3xl)
//     updateElementText('section.py-20.px-4 p.text-lg.text-gray-600', 'transparentPricingSubtitle', translations, 0); // No hidden charges (first p.text-lg)
//     updateElementText('section.py-20.px-4 div.pricing-card h3.text-lg', 'pricing1Title', translations, 0); // Airport to City Center
//     updateElementText('section.py-20.px-4 div.pricing-card p.text-2xl.font-bold.text-emerald-600', 'pricing1Price', translations, 0); // ₦2,500 - ₦4,500
//     updateElementText('section.py-20.px-4 div.pricing-card p.text-sm.text-gray-600', 'pricing1Duration', translations, 0); // Approx. 20-35 mins
//     updateElementText('section.py-20.px-4 div.pricing-card h3.text-lg', 'pricing2Title', translations, 1); // Airport to Suburbs
//     updateElementText('section.py-20.px-4 div.pricing-card p.text-2xl.font-bold.text-emerald-600', 'pricing2Price', translations, 1); // ₦4,500 - ₦8,000
//     updateElementText('section.py-20.px-4 div.pricing-card p.text-sm.text-gray-600', 'pricing2Duration', translations, 1); // Approx. 35-50 mins
//     updateElementText('section.py-20.px-4 div.pricing-card h3.text-lg', 'pricing3Title', translations, 2); // Airport to Express
//     updateElementText('section.py-20.px-4 div.pricing-card p.text-2xl.font-bold.text-emerald-600', 'pricing3Price', translations, 2); // ₦8,000 - ₦15,000
//     updateElementText('section.py-20.px-4 div.pricing-card p.text-sm.text-gray-600', 'pricing3Duration', translations, 2); // Approx. 50-90 mins
//     updateElementText('section.py-20.px-4 div.bg-gradient-to-r h4.font-bold', 'priceGuaranteeTitle', translations); // Price Guarantee (inside the bg-gradient div)
//     updateElementText('section.py-20.px-4 div.bg-gradient-to-r p.text-gray-600', 'priceGuaranteeDescription', translations); // No surge pricing...
//     // Update Testimonials Section (Inside the testimonials section without specific ID/class)
//     updateElementText('section.py-20.px-4.bg-white\\/50 h2.text-3xl', 'trustedByThousandsTitle', translations, 0); // Trusted by Thousands (first h2.text-3xl in bg-white/50 section)
//     updateElementText('section.py-20.px-4.bg-white\\/50 p.text-lg.text-gray-600', 'trustedByThousandsSubtitle', translations, 0); // Join satisfied passengers (first p.text-lg in bg-white/50 section)
//     updateElementText('section.py-20.px-4.bg-white\\/50 p.text-xl.text-gray-700', 'testimonial1Text', translations, 0); // Most reliable service... (first testimonial text)
//     updateElementText('section.py-20.px-4.bg-white\\/50 p.font-bold.text-gray-900', 'testimonial1Name', translations, 0); // Sarah Johnson (first name)
//     updateElementText('section.py-20.px-4.bg-white\\/50 p.text-sm.text-gray-600', 'testimonial1Role', translations, 0); // Business Traveller (first role)
//     updateElementText('section.py-20.px-4.bg-white\\/50 p.text-xl.text-gray-700', 'testimonial2Text', translations, 1); // The QR system is brilliant. (second testimonial text)
//     updateElementText('section.py-20.px-4.bg-white\\/50 p.font-bold.text-gray-900', 'testimonial2Name', translations, 1); // Chinedu Okafor (second name)
//     updateElementText('section.py-20.px-4.bg-white\\/50 p.text-sm.text-gray-600', 'testimonial2Role', translations, 1); // Frequent Flyer (second role)
//     updateElementText('section.py-20.px-4.bg-white\\/50 p.text-xl.text-gray-700', 'testimonial3Text', translations, 2); // Safe and transparent. (third testimonial text)
//     updateElementText('section.py-20.px-4.bg-white\\/50 p.font-bold.text-gray-900', 'testimonial3Name', translations, 2); // Amina Hassan (third name)
//     updateElementText('section.py-20.px-4.bg-white\\/50 p.text-sm.text-gray-600', 'testimonial3Role', translations, 2); // International Visitor (third role)
//     // Update CTA Section (Inside the CTA section without specific ID/class)
//     updateElementText('section.py-20.px-4 h2.text-3xl.font-bold.text-white', 'ctaTitle', translations, 1); // Ready for Better Experience? (second h2.text-3xl in document)
//     updateElementText('section.py-20.px-4 p.text-xl.text-emerald-50', 'ctaSubtitle', translations); // Book your next ride today.
//     updateElementText('section.py-20.px-4 button span', 'ctaButtonText', translations, 2); // Scan & Book Now (third button span in document)
//     // Update FAQ Page (Inside section#faq-page) - Assuming this structure exists as per previous files
//     updateTextNodeText('section#faq-page h1.text-4xl', 'faqPageTitle', translations); // Frequently Asked Questions
//     updateElementText('section#faq-page p.text-lg', 'faqPageSubtitle', translations); // Find answers to common questions...
//     updateElementText('section#faq-page .bg-gradient-primary h2', 'faqSection1Title', translations, 0); // Getting Started
//     updateElementText('section#faq-page .bg-gradient-primary h2', 'faqSection2Title', translations, 1); // Booking
//     updateElementText('section#faq-page .faq-item button span', 'faq1Question', translations, 0); // What is ACHRAMS?
//     updateElementText('section#faq-page .faq-item div.bg-white p', 'faq1Answer', translations, 0); // ACHRAMS is Nigeria's official...
//     updateElementText('section#faq-page .faq-item button span', 'faq2Question', translations, 1); // Which airports do you serve?
//     updateElementText('section#faq-page .faq-item div.bg-white p', 'faq2Answer', translations, 1); // We currently operate at...
//     updateElementText('section#faq-page .faq-item button span', 'faq3Question', translations, 2); // Is ACHRAMS safe?
//     updateElementText('section#faq-page .faq-item div.bg-white p', 'faq3Answer', translations, 2); // Yes! All our drivers...
//     updateElementText('section#faq-page .faq-item button span', 'faq4Question', translations, 3); // How do I book a ride?
//     updateElementText('section#faq-page .faq-item div.bg-white p', 'faq4Answer', translations, 3); // Three easy ways...
//     updateElementText('section#faq-page .faq-item button span', 'faq5Question', translations, 4); // Do I need an account to book?
//     updateElementText('section#faq-page .faq-item div.bg-white p', 'faq5Answer', translations, 4); // No, you can book as a guest...
//     updateElementText('section#faq-page .faq-item button span', 'faq6Question', translations, 5); // Can I book for someone else?
//     updateElementText('section#faq-page .faq-item div.bg-white p', 'faq6Answer', translations, 5); // Yes! Just provide their name...
//     updateElementText('section#faq-page div.mt-12.text-center h3', 'stillHaveQuestionsTitle', translations); // Still Have Questions?
//     updateElementText('section#faq-page div.mt-12.text-center p.text-gray-700', 'stillHaveQuestionsSubtitle', translations); // We're here to help 24/7!
//     updateElementText('section#faq-page div.mt-12.text-center a span', 'emailSupportButton', translations); // Email Support
//     // Update Privacy Page (Inside section#privacy-page) - Assuming this structure exists as per previous files
//     updateElementText('section#privacy-page h1.text-4xl', 'privacyPageTitle', translations); // ACHRAMS Privacy Policy
//     updateElementText('section#privacy-page p.text-gray-600', 'privacyEffectiveDate', translations); // Effective Date: ...
//     updateElementText('section#privacy-page h2.text-2xl', 'privacy1Title', translations, 0); // 1. Introduction
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy1Text', translations, 0); // ACHRAMS ("we," "our," or "us") is committed...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacyCompanyName', translations, 0); // Company Name:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacyCompanyValue', translations, 0); // ACHRAMS Nigeria Limited
//     updateElementText('section#privacy-page p.text-gray-700', 'privacyTechProvider', translations, 0); // Technology Provider:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacyTechValue', translations, 0); // Excellian Technologies
//     updateElementText('section#privacy-page p.text-gray-700', 'privacyEmail', translations, 0); // Email:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacyEmailValue', translations, 0); // privacy@achrams.com.ng
//     updateElementText('section#privacy-page p.text-gray-700', 'privacyPhone', translations, 0); // Phone:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacyPhoneValue', translations, 0); // +234 800 ACHRAMS
//     updateElementText('section#privacy-page h2.text-2xl', 'privacy2Title', translations, 1); // 2. Information We Collect
//     updateElementText('section#privacy-page h3.text-xl', 'privacy2Subtitle1', translations, 0); // Personal Information You Provide
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item1', translations, 0); // Contact Information:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item1Desc', translations, 0); // Name, phone number, email address
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item2', translations, 1); // Travel Information:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item2Desc', translations, 1); // Flight details, pickup/drop-off locations...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item3', translations, 2); // Payment Information:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item3Desc', translations, 2); // Payment method details...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item4', translations, 3); // Identification:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item4Desc', translations, 3); // Government-issued ID...
//     updateElementText('section#privacy-page h3.text-xl', 'privacy2Subtitle2', translations, 1); // Information Collected Automatically
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item5', translations, 4); // Location Data:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item5Desc', translations, 4); // GPS coordinates for pickup and drop-off...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item6', translations, 5); // Device Information:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item6Desc', translations, 5); // Device type, operating system...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item7', translations, 6); // Usage Data:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item7Desc', translations, 6); // Booking history, service preferences...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item8', translations, 7); // Communication Records:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy2Item8Desc', translations, 7); // Customer support conversations...
//     updateElementText('section#privacy-page h2.text-2xl', 'privacy3Title', translations, 2); // 3. How We Use Your Information
//     updateElementText('section#privacy-page h3.text-xl', 'privacy3Subtitle1', translations, 0); // Service Delivery
//     updateElementText('section#privacy-page ul li', 'privacy3Service1', translations, 0); // Process and manage your car hire bookings
//     updateElementText('section#privacy-page ul li', 'privacy3Service2', translations, 1); // Connect you with verified drivers
//     updateElementText('section#privacy-page ul li', 'privacy3Service3', translations, 2); // Provide real-time tracking and updates
//     updateElementText('section#privacy-page ul li', 'privacy3Service4', translations, 3); // Send booking confirmations and receipts
//     updateElementText('section#privacy-page h3.text-xl', 'privacy3Subtitle2', translations, 1); // Safety and Security
//     updateElementText('section#privacy-page ul li', 'privacy3Safety1', translations, 4); // Verify driver credentials with FAAN
//     updateElementText('section#privacy-page ul li', 'privacy3Safety2', translations, 5); // Monitor service quality and safety standards
//     updateElementText('section#privacy-page ul li', 'privacy3Safety3', translations, 6); // Investigate incidents or complaints
//     updateElementText('section#privacy-page ul li', 'privacy3Safety4', translations, 7); // Prevent fraud and unauthorized access
//     updateElementText('section#privacy-page h2.text-2xl', 'privacy4Title', translations, 3); // 4. Data Sharing and Disclosure
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy4Intro', translations, 0); // We only share your personal information...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy4Item1', translations, 8); // Service Providers:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy4Item1Desc', translations, 8); // Drivers, payment processors, and technology partners...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy4Item2', translations, 9); // Regulatory Authorities:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy4Item2Desc', translations, 9); // FAAN, NITDA, and law enforcement...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy4Item3', translations, 10); // Business Transfers:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy4Item3Desc', translations, 10); // In the event of a merger...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy4Note', translations, 0); // We do NOT sell your personal data to third parties.
//     updateElementText('section#privacy-page h2.text-2xl', 'privacy5Title', translations, 4); // 5. Data Security
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy5Intro', translations, 1); // We implement industry-standard security measures:
//     updateElementText('section#privacy-page ul li', 'privacy5Item1', translations, 11); // Encryption: Data transmitted using SSL/TLS encryption
//     updateElementText('section#privacy-page ul li', 'privacy5Item2', translations, 12); // Access Controls: Limited access to authorized personnel only
//     updateElementText('section#privacy-page ul li', 'privacy5Item3', translations, 13); // Secure Storage: Data stored on secure servers...
//     updateElementText('section#privacy-page ul li', 'privacy5Item4', translations, 14); // Regular Audits: Periodic security assessments...
//     updateElementText('section#privacy-page ul li', 'privacy5Item5', translations, 15); // Staff Training: All employees trained...
//     updateElementText('section#privacy-page h2.text-2xl', 'privacy6Title', translations, 5); // 6. Your Rights Under NDPR
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Intro', translations, 2); // As a data subject in Nigeria...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right1', translations, 16); // Right to Access:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right1Desc', translations, 16); // Request a copy of the personal data...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right2', translations, 17); // Right to Rectification:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right2Desc', translations, 17); // Request correction of inaccurate...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right3', translations, 18); // Right to Erasure:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right3Desc', translations, 18); // Request deletion of your personal data
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right4', translations, 19); // Right to Data Portability:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right4Desc', translations, 19); // Receive your data in a structured...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right5', translations, 20); // Right to Object:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right5Desc', translations, 20); // Object to processing based on legitimate interests
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right6', translations, 21); // Right to Withdraw Consent:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right6Desc', translations, 21); // Withdraw consent at any time
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right7', translations, 22); // Right to Lodge a Complaint:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Right7Desc', translations, 22); // File a complaint if your rights have been violated
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6Contact', translations, 0); // To exercise your rights, contact us at:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy6ContactEmail', translations, 0); // privacy@achrams.com.ng
//     updateElementText('section#privacy-page h2.text-2xl', 'privacy7Title', translations, 6); // 7. Data Retention
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy7Item1', translations, 23); // Active Account Data:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy7Item1Desc', translations, 23); // Retained while your account is active
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy7Item2', translations, 24); // Booking Records:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy7Item2Desc', translations, 24); // Retained for 2 years for legal and accounting purposes
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy7Item3', translations, 25); // Payment Information:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy7Item3Desc', translations, 25); // Retained per financial regulations...
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy7Item4', translations, 26); // Communication Records:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy7Item4Desc', translations, 26); // Retained for 1 year for quality assurance
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy7Item5', translations, 27); // Marketing Consent:
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy7Item5Desc', translations, 27); // Until you withdraw consent...
//     updateElementText('section#privacy-page h2.text-2xl', 'privacy8Title', translations, 7); // 8. Contact Information
//     updateElementText('section#privacy-page h3.text-xl', 'privacy8DPOTitle', translations, 0); // Data Protection Officer
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy8DPOEmail', translations, 0); // Email: dpo@achrams.com.ng
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy8DPOPhone', translations, 0); // Phone: +234 800 ACHRAMS
//     updateElementText('section#privacy-page h3.text-xl', 'privacy8GeneralTitle', translations, 1); // General Privacy Inquiries
//     updateElementText('section#privacy-page p.text-gray-700', 'privacy8GeneralEmail', translations, 0); // Email: privacy@achrams.com.ng
//     updateElementText('section#privacy-page p.text-gray-700', 'privacyConsentText', translations, 0); // By using ACHRAMS services...
//     // Update Terms Page (Inside section#terms-page) - Assuming this structure exists as per previous files
//     updateElementText('section#terms-page h1.text-4xl', 'termsPageTitle', translations); // Terms and Conditions
//     updateElementText('section#terms-page p.text-gray-600', 'termsEffectiveDate', translations); // Effective Date: ...
//     updateElementText('section#terms-page h2.text-2xl', 'terms1Title', translations, 0); // 1. Introduction and Acceptance
//     updateElementText('section#terms-page p.text-gray-700', 'terms1Para1', translations, 0); // Welcome to ACHRAMS, the official FAAN-approved...
//     updateElementText('section#terms-page p.text-gray-700', 'terms1Para2', translations, 1); // By accessing or using our Services...
//     updateElementText('section#terms-page h3.text-xl', 'terms1NoteTitle', translations, 0); // Legal Capacity
//     updateElementText('section#terms-page p.text-gray-700', 'terms1NoteText', translations, 0); // You must be at least 18 years of age...
//     updateElementText('section#terms-page h2.text-2xl', 'terms2Title', translations, 1); // 2. Service Description
//     updateElementText('section#terms-page p.text-gray-700', 'terms2Text', translations, 0); // ACHRAMS operates as an intermediary platform...
//     updateElementText('section#terms-page h2.text-2xl', 'terms3Title', translations, 2); // 3. User Registration and Account
//     updateElementText('section#terms-page h3.text-xl', 'terms3Subtitle1', translations, 0); // Account Creation
//     updateElementText('section#terms-page p.text-gray-700', 'terms3Account1', translations, 0); // You may create an account or book as a guest...
//     updateElementText('section#terms-page p.text-gray-700', 'terms3Account2', translations, 1); // You must provide accurate, current, and complete information
//     updateElementText('section#terms-page p.text-gray-700', 'terms3Account3', translations, 2); // You are responsible for maintaining...
//     updateElementText('section#terms-page p.text-gray-700', 'terms3Account4', translations, 3); // You must notify us immediately...
//     updateElementText('section#terms-page h3.text-xl', 'terms3Subtitle2', translations, 1); // Account Responsibilities
//     updateElementText('section#terms-page p.text-gray-700', 'terms3Resp1', translations, 4); // You are solely responsible for all activities...
//     updateElementText('section#terms-page p.text-gray-700', 'terms3Resp2', translations, 5); // You must not share your account with others
//     updateElementText('section#terms-page p.text-gray-700', 'terms3Resp3', translations, 6); // You must not create multiple accounts...
//     updateElementText('section#terms-page h2.text-2xl', 'terms4Title', translations, 3); // 4. Booking and Payment
//     updateElementText('section#terms-page h3.text-xl', 'terms4Subtitle1', translations, 0); // Booking Process
//     updateElementText('section#terms-page p.text-gray-700', 'terms4Booking1', translations, 7); // Bookings can be made via QR codes...
//     updateElementText('section#terms-page p.text-gray-700', 'terms4Booking2', translations, 8); // You will receive upfront pricing...
//     updateElementText('section#terms-page p.text-gray-700', 'terms4Booking3', translations, 9); // All bookings are subject to driver availability
//     updateElementText('section#terms-page h3.text-xl', 'terms4Subtitle2', translations, 1); // Pricing
//     updateElementText('section#terms-page p.text-gray-700', 'terms4Pricing1', translations, 10); // All prices are displayed in Nigerian Naira...
//     updateElementText('section#terms-page p.text-gray-700', 'terms4Pricing2', translations, 11); // Prices are fixed and transparent...
//     updateElementText('section#terms-page p.text-gray-700', 'terms4Pricing3', translations, 12); // Additional charges may apply for waiting time...
//     updateElementText('section#terms-page h3.text-xl', 'terms4Subtitle3', translations, 2); // Payment Methods
//     updateElementText('section#terms-page p.text-gray-700', 'terms4PaymentIntro', translations, 0); // We accept:
//     updateElementText('section#terms-page p.text-gray-700', 'terms4Payment1', translations, 13); // Credit/Debit Cards (Visa, Mastercard, Verve)
//     updateElementText('section#terms-page p.text-gray-700', 'terms4Payment2', translations, 14); // Mobile Money (from approved Nigerian providers)
//     updateElementText('section#terms-page p.text-gray-700', 'terms4Payment3', translations, 15); // Bank Transfers
//     updateElementText('section#terms-page p.text-gray-700', 'terms4Payment4', translations, 16); // Cash (subject to driver availability)
//     updateElementText('section#terms-page h2.text-2xl', 'terms5Title', translations, 4); // 5. Cancellation and Refund Policy
//     updateElementText('section#terms-page h3.text-xl', 'terms5Subtitle1', translations, 0); // Passenger Cancellations
//     updateElementText('section#terms-page p.text-gray-700', 'terms5Cancel1', translations, 17); // Free Cancellation:
//     updateElementText('section#terms-page p.text-gray-700', 'terms5Cancel1Desc', translations, 17); // Up to 5 minutes after booking confirmation
//     updateElementText('section#terms-page p.text-gray-700', 'terms5Cancel2', translations, 18); // Cancellation Fee:
//     updateElementText('section#terms-page p.text-gray-700', 'terms5Cancel2Desc', translations, 18); // ₦500 if cancelled 5-15 minutes after booking
//     updateElementText('section#terms-page p.text-gray-700', 'terms5Cancel3', translations, 19); // Full Charge:
//     updateElementText('section#terms-page p.text-gray-700', 'terms5Cancel3Desc', translations, 19); // Cancellations after driver arrival...
//     updateElementText('section#terms-page p.text-gray-700', 'terms5Cancel4', translations, 20); // No-Show:
//     updateElementText('section#terms-page p.text-gray-700', 'terms5Cancel4Desc', translations, 20); // Full fare charged if passenger does not appear...
//     updateElementText('section#terms-page h3.text-xl', 'terms5Subtitle2', translations, 1); // Refund Processing
//     updateElementText('section#terms-page p.text-gray-700', 'terms5Refund', translations, 0); // Refunds are processed within 5-7 business days...
//     updateElementText('section#terms-page h2.text-2xl', 'terms6Title', translations, 5); // 6. User Conduct and Prohibited Activities
//     updateElementText('section#terms-page h3.text-xl', 'terms6Subtitle', translations, 0); // You Must Not:
//     updateElementText('section#terms-page p.text-gray-700', 'terms6Prohibited1', translations, 21); // Use the Services for illegal purposes
//     updateElementText('section#terms-page p.text-gray-700', 'terms6Prohibited2', translations, 22); // Harass, threaten, or abuse drivers
//     updateElementText('section#terms-page p.text-gray-700', 'terms6Prohibited3', translations, 23); // Transport illegal goods, weapons, or hazardous materials
//     updateElementText('section#terms-page p.text-gray-700', 'terms6Prohibited4', translations, 24); // Exceed vehicle passenger capacity
//     updateElementText('section#terms-page p.text-gray-700', 'terms6Prohibited5', translations, 25); // Smoke in vehicles (unless explicitly permitted)
//     updateElementText('section#terms-page p.text-gray-700', 'terms6Prohibited6', translations, 26); // Manipulate or abuse the booking system
//     updateElementText('section#terms-page p.text-gray-700', 'terms6Prohibited7', translations, 27); // Attempt to bypass payment systems
//     updateElementText('section#terms-page h3.text-xl', 'terms6ConsequencesTitle', translations, 0); // Consequences of Violations
//     updateElementText('section#terms-page p.text-gray-700', 'terms6ConsequencesText', translations, 0); // Violations may result in immediate trip termination...
//     updateElementText('section#terms-page h2.text-2xl', 'terms7Title', translations, 6); // 7. Safety and Security
//     updateElementText('section#terms-page p.text-gray-700', 'terms7Item1', translations, 28); // We partner only with FAAN-verified drivers
//     updateElementText('section#terms-page p.text-gray-700', 'terms7Item2', translations, 29); // All drivers undergo background checks
//     updateElementText('section#terms-page p.text-gray-700', 'terms7Item3', translations, 30); // Real-time tracking available for all trips
//     updateElementText('section#terms-page p.text-gray-700', 'terms7Item4', translations, 31); // Emergency support line: +234 800 ACHRAMS
//     updateElementText('section#terms-page h3.text-xl', 'terms7NoteTitle', translations, 0); // Report Safety Issues Immediately
//     updateElementText('section#terms-page p.text-gray-700', 'terms7NoteLine1', translations, 0); // Emergency Line: +234 800 ACHRAMS (Option 1)
//     updateElementText('section#terms-page p.text-gray-700', 'terms7NoteLine2', translations, 0); // Email: safety@achrams.com.ng
//     updateElementText('section#terms-page h2.text-2xl', 'terms8Title', translations, 7); // 8. Limitation of Liability
//     updateElementText('section#terms-page p.text-gray-700', 'terms8Intro', translations, 1); // ACHRAMS provides a platform connecting...
//     updateElementText('section#terms-page p.text-gray-700', 'terms8Item1', translations, 32); // A transportation carrier
//     updateElementText('section#terms-page p.text-gray-700', 'terms8Item2', translations, 33); // Responsible for driver actions or omissions
//     updateElementText('section#terms-page p.text-gray-700', 'terms8Item3', translations, 34); // Liable for accidents, injuries, or damages during trips
//     updateElementText('section#terms-page p.text-gray-700', 'terms8Item4', translations, 35); // Guaranteeing service availability at all times
//     updateElementText('section#terms-page p.text-gray-700', 'terms8Note', translations, 0); // Services are provided "AS IS" and "AS AVAILABLE"...
//     updateElementText('section#terms-page h2.text-2xl', 'terms9Title', translations, 8); // 9. Intellectual Property
//     updateElementText('section#terms-page p.text-gray-700', 'terms9Para1', translations, 0); // All intellectual property rights in the Platform...
//     updateElementText('section#terms-page p.text-gray-700', 'terms9Para2', translations, 1); // The ACHRAMS platform is developed and maintained...
//     updateElementText('section#terms-page h2.text-2xl', 'terms10Title', translations, 9); // 10. Dispute Resolution
//     updateElementText('section#terms-page p.text-gray-700', 'terms10Para1', translations, 0); // Before initiating formal proceedings...
//     updateElementText('section#terms-page p.text-gray-700', 'terms10Para2', translations, 1); // Any disputes not resolved informally shall be settled...
//     updateElementText('section#terms-page p.text-gray-700', 'terms10Para3', translations, 2); // These Terms are governed by the laws...
//     updateElementText('section#terms-page h2.text-2xl', 'terms11Title', translations, 10); // 11. Contact Information
//     updateElementText('section#terms-page p.text-gray-700', 'terms11CompanyName', translations, 0); // ACHRAMS Nigeria Limited
//     updateElementText('section#terms-page p.text-gray-700', 'terms11TechPartner', translations, 0); // Technology Partner: Excellian Technologies
//     updateElementText('section#terms-page h3.text-xl', 'terms11GeneralTitle', translations, 0); // General Inquiries:
//     updateElementText('section#terms-page p.text-gray-700', 'terms11GeneralEmail', translations, 0); // Email: support@achrams.com.ng
//     updateElementText('section#terms-page p.text-gray-700', 'terms11GeneralPhone', translations, 0); // Phone: +234 800 ACHRAMS
//     updateElementText('section#terms-page h3.text-xl', 'terms11LegalTitle', translations, 1); // Legal Department:
//     updateElementText('section#terms-page p.text-gray-700', 'terms11LegalEmail', translations, 0); // Email: legal@achrams.com.ng
//     updateElementText('section#terms-page h3.text-xl', 'terms11SafetyTitle', translations, 2); // Safety and Emergency:
//     updateElementText('section#terms-page p.text-gray-700', 'terms11SafetyHotline', translations, 0); // 24/7 Hotline: +234 800 ACHRAMS (Option 1)
//     updateElementText('section#terms-page p.text-gray-700', 'terms11SafetyEmail', translations, 0); // Email: safety@achrams.com.ng
//     updateElementText('section#terms-page p.text-gray-700', 'termsAcknowledgmentText', translations, 0); // BY CLICKING "I AGREE," SCANNING A QR CODE TO BOOK...
//     // Update Footer (Inside footer#contact)
//     updateElementText('footer#contact p.text-gray-600', 'footerDescription', translations, 0); // FAAN-approved car hire service. (first p.text-gray-600 in footer)
//     // Note: "Available in 5+ languages" is likely static or handled differently, not directly mapped here using the current key
//     updateElementText('footer#contact p.text-gray-600', 'footerLanguagesAvailable', translations, 1); // Available in 5+ languages (second p.text-gray-600 in footer, adjust if needed)
//     updateElementText('footer#contact h3.text-xl.font-bold.text-gradient', 'quickLinks', translations, 0); // Quick Links (if this element exists and needs translation)
//     updateElementText('footer#contact h3.text-xl.font-bold.text-gradient', 'contactUs', translations, 1); // Contact Us (if this element exists and needs translation)
//     updateElementText('footer#contact p.text-sm', 'copyright', translations); // Copyright text
//     updateElementText('footer#contact a span', 'privacyPolicy', translations, 0); // Privacy Policy link text (first span inside anchor)
//     updateElementText('footer#contact a span', 'termsOfService', translations, 1); // Terms of Service link text (second span inside anchor, adjust index)
//     // Update Accessibility Controls Labels (if needed in the future, specific selectors needed)
//     // updateElementText('.accessibility-controls span.text-xs', 'accessibilityTextSize', translations);
//     // updateElementText('.accessibility-controls .language-select', 'accessibilityLanguage', translations, -1); // Needs specific selector
// }
// // Enhanced changeLanguage function using the object approach
// function changeLanguage(lang) {
//     console.log('Changing language to: ' + lang);
//     // Update the global variable
//     currentLanguage = lang;
//     // Apply the new translations
//     applyTranslations(lang);
//     // Save the selected language to localStorage for persistence
//     localStorage.setItem('selectedLanguage', lang);
//     // Update the language attribute on the <html> tag for screen readers
//     document.documentElement.lang = lang;
// }


function changePage(page) {
            // Hide all pages
            document.getElementById('home-page').classList.add('hidden');
            document.getElementById('faq-page').classList.add('hidden');
            document.getElementById('privacy-page').classList.add('hidden');
            document.getElementById('terms-page').classList.add('hidden');
            
            // Update navigation
            document.querySelectorAll('nav button').forEach(btn => {
                btn.classList.remove('current-page');
            });
            
            // Show selected page
            if (page === 'home') {
                document.getElementById('home-page').classList.remove('hidden');
                document.querySelector('nav button[onclick="changePage(\'home\')"]').classList.add('current-page');
            } else if (page === 'faqs') {
                document.getElementById('faq-page').classList.remove('hidden');
                document.querySelector('nav button[onclick="changePage(\'faqs\')"]').classList.add('current-page');
            } else if (page === 'privacy') {
                document.getElementById('privacy-page').classList.remove('hidden');
            } else if (page === 'terms') {
                document.getElementById('terms-page').classList.remove('hidden');
            }
            
            currentPage = page;
        }


// - PRODUCTION: Accessibility Controls in Navigation -//

// Get DOM elements for the new navigation-based controls
const accessibilityNavToggle = document.getElementById('accessibilityNavToggle');
const accessibilityNavControls = document.getElementById('accessibilityNavControls');
const mobileAccessibilityToggle = document.getElementById('mobileAccessibilityToggle');
const mobileAccessibilityPanel = document.getElementById('mobileAccessibilityPanel');

// Function to show/hide the desktop accessibility dropdown
function toggleAccessibilityNavControls() {
    accessibilityNavControls.classList.toggle('hidden');
    accessibilityNavControls.classList.toggle('opacity-0');
    accessibilityNavControls.classList.toggle('scale-95');
    accessibilityNavControls.classList.toggle('opacity-100');
    accessibilityNavControls.classList.toggle('scale-100');
    accessibilityNavControls.classList.toggle('block');
}

// Function to show/hide the mobile accessibility panel
function toggleMobileAccessibilityPanel() {
    mobileAccessibilityPanel.classList.toggle('hidden');
}

// Event listeners for the new controls
accessibilityNavToggle?.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default button behavior if needed
    toggleAccessibilityNavControls();
});

// Optional: Close the desktop dropdown if clicked outside
document.addEventListener('click', (event) => {
    if (accessibilityNavControls && !accessibilityNavControls.contains(event.target) && !accessibilityNavToggle.contains(event.target)) {
        accessibilityNavControls.classList.add('hidden', 'opacity-0', 'scale-95');
        accessibilityNavControls.classList.remove('opacity-100', 'scale-100', 'block');
    }
});

// Event listener for mobile toggle
mobileAccessibilityToggle?.addEventListener('click', toggleMobileAccessibilityPanel);

// Function to change text size
function changeTextSize(size) {
    const sizes = {
        small: 'text-sm',
        medium: 'text-base', // Default
        large: 'text-lg',
        xlarge: 'text-xl'
    };

    // Remove existing size classes (those starting with 'text-' but keep 'text-base' if it's the default you want to remove sometimes)
    const filteredClasses = document.body.className.split(' ').filter(cls =>
        !cls.startsWith('text-') || cls === 'text-base' // Keep 'text-base' if it's the default you want to remove sometimes
    );
    document.body.className = filteredClasses.join(' ');

    // Add the new size class if it exists in the map
    if (sizes[size]) {
        document.body.classList.add(sizes[size]);
        textFontSize = size; // Update state variable
    }

    // Update active button state (assuming event is available through the calling context or passed)
    // This requires a slight modification to how the buttons are handled if you want active state
    // For now, just save the selection:
    localStorage.setItem('selectedTextSize', size);
}

// - PRODUCTION: Load Language and Text Size on Page Load -//
// Consolidated DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded fired, initializing app...");

    // Initialize Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    } else {
        console.warn("Mobile menu elements not found.");
    }
     // Set up mobile menu toggle
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

            // Toggle mobile menu
    function toggleMobileMenu() {
            mobileMenu.classList.toggle('active');
        }

    // Check if a language was previously selected
    // const savedLanguage = localStorage.getItem('selectedLanguage');
    // if (savedLanguage && LANGUAGES[savedLanguage]) {
    //     // If a saved language exists, apply it
    //     changeLanguage(savedLanguage);
    //     // Update the select dropdown to reflect the saved language (if select element exists)
    //     const langSelect = document.querySelector('.language-select');
    //     if (langSelect) {
    //         langSelect.value = savedLanguage;
    //     }
    // } else {
    //     // Otherwise, default to English and apply
    //     changeLanguage('en');
    // }

    // Check if a text size was previously selected
    const savedTextSize = localStorage.getItem('selectedTextSize');
    if (savedTextSize) {
        // If a saved size exists, apply it
        changeTextSize(savedTextSize);
         // Update active button state if needed (requires button tracking)
    }

    // Set up scroll listener
    window.addEventListener('scroll', handleScroll);

    // Set up hero image rotation
    setInterval(rotateHeroImages, 4000);
    // Set up testimonial rotation
    setInterval(rotateTestimonials, 5000); // Rotates every 5 seconds

    // Set initial testimonial display
    updateTestimonialDisplay();

    // Set initial hero image display
    updateHeroImageDisplay();

    // Set initial page display (usually home)
    changePage('home');

    console.log("App initialization complete.");
});



function toggleFAQ(button) {

            
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        }

// Change page function
// function changePage(page) {
//     // Hide all pages
//     document.querySelectorAll('section[id$="-page"]').forEach(pageEl => {
//         pageEl.classList.add('hidden');
//     });
//     // Remove current page class from all nav buttons
//     document.querySelectorAll('nav button').forEach(btn => {
//         btn.classList.remove('current-page');
//     });

//     // Show selected page and highlight nav button
//     const pageElement = document.getElementById(`${page}-page`);
//     if (pageElement) {
//         pageElement.classList.remove('hidden');
//         const navButton = document.querySelector(`nav button[onclick="changePage('${page}')"]`);
//         if (navButton) {
//             navButton.classList.add('current-page');
//         }
//     } else {
//         console.warn(`Page element with id '${page}-page' not found.`);
//         // Fallback: show home if requested page doesn't exist
//         if (document.getElementById('home-page')) {
//             document.getElementById('home-page').classList.remove('hidden');
//             const homeNavButton = document.querySelector('nav button[onclick="changePage(\'home\')"]');
//             if (homeNavButton) homeNavButton.classList.add('current-page');
//         }
//     }
//     currentPage = page;
// }



// Rotate testimonials
function rotateTestimonials() {
    currentTestimonial = (currentTestimonial + 1) % 3; // Assuming 3 testimonials
    updateTestimonialDisplay();
}

// Update testimonial display
function updateTestimonialDisplay() {
    const slides = document.querySelectorAll('.testimonial-slide');
    slides.forEach((slide, index) => {
        if (index === currentTestimonial) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    // Update indicators
    const indicators = document.querySelectorAll('.testimonial-indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentTestimonial) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Change testimonial manually
function changeTestimonial(index) {
    if (index >= 0 && index < 3) { // Assuming 3 testimonials
        currentTestimonial = index;
        updateTestimonialDisplay();
    }
}

// Rotate hero images
function rotateHeroImages() {
    activeHeroImage = (activeHeroImage + 1) % heroImages.length;
    updateHeroImageDisplay();
}

// Update hero image display
function updateHeroImageDisplay() {
    const heroImagesElements = document.querySelectorAll('.hero-image');
    heroImagesElements.forEach((img, index) => {
        if (index === activeHeroImage) {
            img.classList.add('active');
            // Apply enhanced image effects when active
            img.style.filter = 'brightness(1.15) contrast(1.15) saturate(1.15)';
        } else {
            img.classList.remove('active');
            img.style.filter = '';
        }
    });
}

// Handle scroll effects
function handleScroll() {
    const header = document.querySelector('header');
    if (!header) return; // Exit if header doesn't exist

    if (window.scrollY > 50) {
        if (!scrolled) {
            header.classList.add('scrolled');
            scrolled = true;
        }
    } else {
        if (scrolled) {
            header.classList.remove('scrolled');
            scrolled = false;
        }
    }
}