export const countries = [
    {
        id: 'usa',
        name: 'USA',
        fullName: 'United States of America',
        flag: '🇺🇸',
        capital: 'Washington, D.C.',
        avgTuition: '₹25L - ₹50L',
        livingCost: '₹10L - ₹18L',
        safetyRating: 8.5,
        stars: 4.5,
        climate: 'Diverse (Temperate to Subtropical)',
        workRights: '20 hrs/week (Study), up to 3 years OPT',
        prFriendly: false,
        trending: 'Research & STEM',
        summary: 'The USA offers unparalleled academic excellence and world-class research opportunities.',
        whyStudy: [
            'Top-ranked universities globally',
            'Flexible education system',
            'Diverse cultural experience',
            'Strong post-study work opportunities (OPT)'
        ],
        educationSystem: {
            types: ['Research Universities', 'Liberal Arts Colleges', 'Community Colleges'],
            structure: '4 years UG, 1-2 years PG',
            publicVsPrivate: 'Public universities are state-funded and larger; Private are smaller with varied specialties.'
        },
        exams: [
            { name: 'IELTS', score: '6.5 - 7.5' },
            { name: 'TOEFL', score: '80 - 100' },
            { name: 'GRE', score: 'Required for many PG STEM' },
            { name: 'GMAT', score: 'Required for MBA' },
            { name: 'SAT', score: 'Required for UG' }
        ],
        costBreakdown: {
            tuition: { ug: '₹20L - ₹45L', pg: '₹25L - ₹55L' },
            living: { accommodation: '₹6L - ₹10L', food: '₹2L - ₹4L', transport: '₹1L - ₹2L', insurance: '₹1L - ₹2L' },
            visa: '₹15,000 + SEVIS Fee',
            insurance: '₹1.5L - ₹2.5L'
        },
        scholarships: [
            { name: 'Fullbright-Nehru', Type: 'Government', amount: 'Full funding' },
            { name: 'Hubert Humphrey', Type: 'Government', amount: 'Variable' },
            { name: 'University Merit', Type: 'University', amount: '5,000 - 20,000 USD' }
        ],
        visaProcess: [
            'Apply to SEVP-approved school',
            'Receive Form I-20',
            'Pay SEVIS Fee',
            'Complete DS-160',
            'Attend Visa Interview'
        ],
        documents: ['Passport', 'I-20 Form', 'Admission Letter', 'Financial Proof', 'Academic Transcripts', 'SOP', 'LORs'],
        jobOps: {
            duration: '12 months (up to 36 for STEM)',
            prOptions: 'H1-B followed by EB Green Card',
            topIndustries: ['Technology', 'Healthcare', 'Finance', 'Aerospace']
        },
        universities: [
            { name: 'MIT', city: 'Cambridge', ranking: 1, website: 'web.mit.edu' },
            { name: 'Stanford', city: 'Stanford', ranking: 2, website: 'stanford.edu' },
            { name: 'Harvard', city: 'Cambridge', ranking: 4, website: 'harvard.edu' }
        ]
    },
    {
        id: 'canada',
        name: 'Canada',
        fullName: 'Canada',
        flag: '🇨🇦',
        capital: 'Ottawa',
        avgTuition: '₹12L - ₹28L',
        livingCost: '₹8L - ₹14L',
        safetyRating: 9.2,
        stars: 4.8,
        climate: 'Continental (Cold winters, warm summers)',
        workRights: '20 hrs/week (Study), up to 3 years PGWP',
        prFriendly: true,
        trending: 'PR Pathways',
        summary: 'Canada is known for its high quality of life, welcoming culture, and clear immigration pathways.',
        whyStudy: [
            'Affordable education compared to USA/UK',
            'Post-Graduation Work Permit (PGWP)',
            'High standard of living',
            'Safe and inclusive society'
        ],
        educationSystem: {
            types: ['Public Universities', 'Colleges/Polytechnics', 'Career Colleges'],
            structure: '3-4 years UG, 1-2 years PG',
            publicVsPrivate: 'Public institutions are highly regulated and research-heavy.'
        },
        exams: [
            { name: 'IELTS', score: '6.5 (No band less than 6.0)' },
            { name: 'PTE', score: '60+' },
            { name: 'TOEFL', score: '85 - 95' }
        ],
        costBreakdown: {
            tuition: { ug: '₹12L - ₹25L', pg: '₹15L - ₹30L' },
            living: { accommodation: '₹5L - ₹8L', food: '₹2L - ₹3L', transport: '₹0.5L - ₹1L', insurance: '₹0.5L - ₹1L' },
            visa: '₹15,000 (Study Permit)',
            insurance: '₹40,000 - ₹60,000'
        },
        scholarships: [
            { name: 'Vanier Canada', Type: 'Government', amount: '50,000 USD/year' },
            { name: 'Lester B. Pearson', Type: 'University', amount: 'Full tuition' }
        ],
        visaProcess: [
            'Receive DLI Offer Letter',
            'GIC Payment (CAD 20,635+)',
            'Medical Exam',
            'Apply via SDS or Non-SDS',
            'Study Permit Approval'
        ],
        documents: ['Passport', 'LOA from DLI', 'GIC Certificate', 'IELTS Result', 'CAQ (for Quebec)', 'Financial Proof'],
        jobOps: {
            duration: 'Up to 3 years',
            prOptions: 'Express Entry (CEC), PNP',
            topIndustries: ['Tech', 'Engineering', 'Healthcare', 'Banking']
        },
        universities: [
            { name: 'University of Toronto', city: 'Toronto', ranking: 21, website: 'utoronto.ca' },
            { name: 'McGill University', city: 'Montreal', ranking: 30, website: 'mcgill.ca' },
            { name: 'UBC', city: 'Vancouver', ranking: 34, website: 'ubc.ca' }
        ]
    },
    {
        id: 'germany',
        name: 'Germany',
        fullName: 'Germany',
        flag: '🇩🇪',
        capital: 'Berlin',
        avgTuition: '₹0 (Public) - ₹20L (Private)',
        livingCost: '₹9L - ₹12L',
        safetyRating: 9.0,
        stars: 4.7,
        climate: 'Temperate (Mild summers, cold winters)',
        workRights: '20 hrs/week (Study), 18 months Job Seekers',
        prFriendly: true,
        trending: 'Free Public Education',
        summary: 'Germany is the engineering hub of the world, offering high-quality education mostly for free at public universities.',
        whyStudy: [
            'No tuition fees at public universities',
            'Strong focus on practical/applied sciences',
            'Excellent employment prospects in engineering',
            'Gateway to Europe'
        ],
        educationSystem: {
            types: ['TU9 (Technical)', 'University of Applied Sciences', 'Colleges of Arts/Music'],
            structure: '3 years UG, 2 years PG',
            publicVsPrivate: 'Public universities are free (semester fee only); Private charge tuition.'
        },
        exams: [
            { name: 'IELTS', score: '6.5+' },
            { name: 'TestDaF', score: 'Required for German-taught' },
            { name: 'GRE', score: 'Optional but recommended for STEM' }
        ],
        costBreakdown: {
            tuition: { ug: '₹0 - ₹2L', pg: '₹0 - ₹5L' },
            living: { accommodation: '₹4L - ₹6L', food: '₹2L - ₹3L', transport: 'Included in Semester Fee', insurance: '₹1L - ₹1.5L' },
            visa: '₹6,500',
            insurance: '₹1L (Statutory Public Health Insurance)'
        },
        scholarships: [
            { name: 'DAAD Scholarships', Type: 'Government', amount: 'Monthly stipend' },
            { name: 'Deutschlandstipendium', Type: 'University', amount: '300 Euro/month' }
        ],
        visaProcess: [
            'Open Blocked Account (11,904 Euro)',
            'Receive Admission Letter',
            'Health Insurance Coverage',
            'German Visa Interview',
            'Residence Permit after Arrival'
        ],
        documents: ['Passport', 'Admission Letter', 'Blocked Account Proof', 'APS Certificate (Mandatory for India)', 'Academic Records'],
        jobOps: {
            duration: '18 months post-study',
            prOptions: 'Blue Card (EU), PR after 2 years of work',
            topIndustries: ['Automotive', 'Mechanical Engineering', 'IT', 'Chemicals']
        },
        universities: [
            { name: 'TU Munich', city: 'Munich', ranking: 37, website: 'tum.de' },
            { name: 'LMU Munich', city: 'Munich', ranking: 59, website: 'uni-muenchen.de' },
            { name: 'Heidelberg University', city: 'Heidelberg', ranking: 87, website: 'uni-heidelberg.de' }
        ]
    },
    {
        id: 'uk',
        name: 'UK',
        fullName: 'United Kingdom',
        flag: '🇬🇧',
        capital: 'London',
        avgTuition: '₹15L - ₹35L',
        livingCost: '₹10L - ₹15L',
        safetyRating: 8.8,
        stars: 4.6,
        climate: 'Temperate Maritime',
        workRights: '20 hrs/week (Study), 2 years Graduate Route',
        prFriendly: false,
        trending: '1-Year Masters',
        summary: 'Home to historic universities and a globally recognized education system.',
        whyStudy: [
            '1-Year Master\'s programs saving time and money',
            'Historic reputation for excellence',
            'English language environment',
            '2-year post-study work visa'
        ],
        educationSystem: {
            types: ['Russell Group', 'Modern Universities', 'Specialist Institutions'],
            structure: '3 years UG, 1 year PG',
            publicVsPrivate: 'Most UK universities are public-funded.'
        },
        exams: [
            { name: 'IELTS', score: '6.5+' },
            { name: 'PTE', score: '58+' }
        ],
        costBreakdown: {
            tuition: { ug: '₹14L - ₹30L', pg: '₹16L - ₹40L' },
            living: { accommodation: '₹6L - ₹9L', food: '₹3L - ₹4L', transport: '₹1L - ₹2L', insurance: 'Included in IHS' },
            visa: '₹40,000 + IHS Fee (approx. ₹70k)',
            insurance: '₹70,000 (Immigration Health Surcharge)'
        },
        scholarships: [
            { name: 'Chevening', Type: 'Government', amount: 'Fully funded' },
            { name: 'GREAT Scholarships', Type: 'Government', amount: '10,000 GBP' }
        ],
        visaProcess: [
            'Unconditional Offer',
            'CAS Letter (Confirmation of Acceptance)',
            'Financial Evidence',
            'Apply for Student Visa (Tier 4)',
            'BRP Collection after Arrival'
        ],
        documents: ['Passport', 'CAS Number', 'Academic Certificates', 'ATAS (if required)', 'Financial Proof', 'TB Test Report'],
        jobOps: {
            duration: '2 years (Graduate Route)',
            prOptions: 'Skilled Worker Visa sponsorship',
            topIndustries: ['FinTech', 'Legal Services', 'Creative Arts', 'Healthcare']
        },
        universities: [
            { name: 'University of Oxford', city: 'Oxford', ranking: 3, website: 'ox.ac.uk' },
            { name: 'University of Cambridge', city: 'Cambridge', ranking: 2, website: 'cam.ac.uk' },
            { name: 'Imperial College London', city: 'London', ranking: 6, website: 'imperial.ac.uk' }
        ]
    },
    {
        id: 'australia',
        name: 'Australia',
        fullName: 'Australia',
        flag: '🇦🇺',
        capital: 'Canberra',
        avgTuition: '₹18L - ₹35L',
        livingCost: '₹12L - ₹16L',
        safetyRating: 9.3,
        stars: 4.7,
        climate: 'Mostly Arid to Tropical',
        workRights: '48 hrs/fortnight (Study), 2-4 years Post-Study',
        prFriendly: true,
        trending: 'Lifestyle & High Wages',
        summary: 'Australia offers world-class education balanced with an incredible lifestyle and strong job market.',
        whyStudy: [
            'High graduate salaries',
            'Group of Eight (Go8) universities',
            'Incredible nature and safety',
            'PR opportunities in regional areas'
        ],
        educationSystem: {
            types: ['Go8 Universities', 'TAFE (Vocational)', 'Private Colleges'],
            structure: '3-4 years UG, 1.5-2 years PG',
            publicVsPrivate: 'Universities are mostly public; TAFEs are state-run vocational hubs.'
        },
        exams: [
            { name: 'IELTS', score: '6.5+' },
            { name: 'PTE', score: '60+' },
            { name: 'TOEFL', score: '85+' }
        ],
        costBreakdown: {
            tuition: { ug: '₹18L - ₹32L', pg: '₹20L - ₹38L' },
            living: { accommodation: '₹7L - ₹10L', food: '₹3L - ₹4L', transport: '₹1L - ₹1.5L', insurance: '₹1L' },
            visa: '₹38,000 (Subclass 500)',
            insurance: '₹35,000 - ₹50,000 (OSHC)'
        },
        scholarships: [
            { name: 'Australia Awards', Type: 'Government', amount: 'Fully funded' },
            { name: 'Destination Australia', Type: 'Government', amount: '15,000 AUD/year' }
        ],
        visaProcess: [
            'Receive COE (Confirmation of Enrolment)',
            'GTE Statement (Genuine Temporary Entrant)',
            'Purchase OSHC (Health Insurance)',
            'Apply for Subclass 500 Visa',
            'Medical and Biometrics'
        ],
        documents: ['Passport', 'COE', 'GTE Statement', 'English Proficiency Result', 'Financial Documents', 'OSHC Card'],
        jobOps: {
            duration: '2-4 years (485 Visa)',
            prOptions: '189, 190, 491 visas based on points',
            topIndustries: ['Mining', 'Agri-tech', 'Healthcare', 'Nursing']
        },
        universities: [
            { name: 'University of Melbourne', city: 'Melbourne', ranking: 14, website: 'unimelb.edu.au' },
            { name: 'UNSW Sydney', city: 'Sydney', ranking: 19, website: 'unsw.edu.au' },
            { name: 'University of Sydney', city: 'Sydney', ranking: 19, website: 'sydney.edu.au' }
        ]
    },
    {
        id: 'singapore',
        name: 'Singapore',
        fullName: 'Singapore',
        flag: '🇸🇬',
        capital: 'Singapore',
        avgTuition: '₹15L - ₹30L',
        livingCost: '₹10L - ₹14L',
        safetyRating: 9.8,
        stars: 4.9,
        climate: 'Tropical (Hot and Humid)',
        workRights: '16 hrs/week (Study)',
        prFriendly: true,
        trending: 'Asian Hub',
        summary: 'A global financial hub offering world-class education and proximity to India.',
        whyStudy: [
            'Top-ranked Asian universities (NUS, NTU)',
            'Extremely safe and clean environment',
            'Strong links to global industry',
            'Proximal to India with high cultural comfort'
        ],
        educationSystem: {
            types: ['Public Universities', 'Polytechnics', 'Foreign University Branch Campuses'],
            structure: '3-4 years UG, 1-2 years PG',
            publicVsPrivate: 'Public Universities are highly competitive and prestigious.'
        },
        exams: [
            { name: 'IELTS', score: '6.5+' },
            { name: 'GMAT', score: 'Required for MBA' }
        ],
        costBreakdown: {
            tuition: { ug: '₹15L - ₹25L', pg: '₹18L - ₹35L' },
            living: { accommodation: '₹6L - ₹9L', food: '₹2L - ₹3L', transport: '₹0.5L - ₹1L', insurance: '₹0.5L' },
            visa: 'S$ 30 (Student Pass)',
            insurance: '₹30,000 - ₹50,000'
        },
        scholarships: [
            { name: 'Singapore Govt Scholarship', Type: 'Government', amount: 'Full tuition + Stipend' },
            { name: 'TUITION GRANT', Type: 'Government', amount: 'Substantial fee reduction' }
        ],
        visaProcess: [
            'Accept Offer',
            'Apply for SOLAR',
            'Submit eForm 16',
            'Receive IPA Letter',
            'Report to ICA'
        ],
        documents: ['Passport', 'Admission Letter', 'Solar Reference Number', 'Financial Statements', 'Academic Records'],
        jobOps: {
            duration: '1-3 years (Long Term Visit Pass)',
            prOptions: 'Easy for skilled professionals',
            topIndustries: ['Banking', 'Supply Chain', 'Biotechnology', 'Electronics']
        },
        universities: [
            { name: 'NUS', city: 'Singapore', ranking: 8, website: 'nus.edu.sg' },
            { name: 'NTU', city: 'Singapore', ranking: 15, website: 'ntu.edu.sg' },
            { name: 'SMU', city: 'Singapore', ranking: 541, website: 'smu.edu.sg' }
        ]
    },
    {
        id: 'ireland',
        name: 'Ireland',
        fullName: 'Republic of Ireland',
        flag: '🇮🇪',
        capital: 'Dublin',
        avgTuition: '₹10L - ₹22L',
        livingCost: '₹8L - ₹12L',
        safetyRating: 9.1,
        stars: 4.6,
        climate: 'Temperate Oceanic',
        workRights: '20 hrs/week (Study), 2 years Post-Study',
        prFriendly: true,
        trending: 'Tech Hub',
        summary: 'The "Silicon Docks" of Europe, Ireland is a major hub for global tech and pharma companies.',
        whyStudy: [
            'Fast-growing economy with low unemployment',
            'English speaking country in the EU',
            '2-year stay-back option for Masters',
            'Friendly and welcoming culture'
        ],
        educationSystem: {
            types: ['Universities', 'Institutes of Technology', 'Private Colleges'],
            structure: '3-4 years UG, 1 year PG',
            publicVsPrivate: 'Most universities are public-funded and high ranking.'
        },
        exams: [
            { name: 'IELTS', score: '6.5 (No band < 6.0)' },
            { name: 'PTE', score: '60+' }
        ],
        costBreakdown: {
            tuition: { ug: '₹10L - ₹20L', pg: '₹12L - ₹25L' },
            living: { accommodation: '₹5L - ₹8L', food: '₹2L - ₹3L', transport: '₹0.5L - ₹1L', insurance: '₹0.5L' },
            visa: '₹5,000',
            insurance: '₹15,000 - ₹30,000'
        },
        scholarships: [
            { name: 'GOI-IES', Type: 'Government', amount: '10,000 Euro + Tuition Waiver' },
            { name: 'University Merit', Type: 'University', amount: '2,000 - 5,000 Euro' }
        ],
        visaProcess: ['Receive Unconditional Offer', 'Pay Tuition (Min 6000 Euro)', 'Medical Insurance', 'Submit Visa Application', 'Register with GNIB/IRP'],
        documents: ['Passport', 'Offer Letter', 'Proof of Funds', 'Fee Payment Evidence', 'English Proficiency'],
        jobOps: {
            duration: '2 years (Third Level Scheme)',
            prOptions: 'Critical Skills Employment Permit',
            topIndustries: ['Software', 'Pharma', 'Medical Devices', 'Finance']
        },
        universities: [
            { name: 'Trinity College Dublin', city: 'Dublin', ranking: 81, website: 'tcd.ie' },
            { name: 'UCD', city: 'Dublin', ranking: 171, website: 'ucd.ie' },
            { name: 'University of Galway', city: 'Galway', ranking: 289, website: 'universityofgalway.ie' }
        ]
    },
    {
        id: 'france',
        name: 'France',
        fullName: 'Republic of France',
        flag: '🇫🇷',
        capital: 'Paris',
        avgTuition: '₹0 (Public) - ₹25L (Private/Business)',
        livingCost: '₹8L - ₹11L',
        safetyRating: 8.7,
        stars: 4.5,
        climate: 'Mostly Temperate',
        workRights: '20 hrs/week (Study), 2 years for Masters',
        prFriendly: true,
        trending: 'Arts & Management',
        summary: 'Excellence in luxury management, engineering, and arts with significant government subsidies.',
        whyStudy: [
            'Highly subsidized public education',
            'Top-ranked Business Schools (CGE)',
            'Rich cultural and culinary heritage',
            '5-year post-study visa for Indian Masters students'
        ],
        educationSystem: {
            types: ['Public Universities', 'Grandes Écoles', 'Art Schools'],
            structure: '3 years UG, 2 years PG',
            publicVsPrivate: 'Public universities are nearly free; Grandes Écoles are elite and selective.'
        },
        exams: [
            { name: 'IELTS', score: '6.5+' },
            { name: 'TEF/DELF', score: 'Optional but recommended' }
        ],
        costBreakdown: {
            tuition: { ug: '₹0 - ₹2L', pg: '₹0 - ₹15L' },
            living: { accommodation: '₹4L - ₹6L', food: '₹2L - ₹3L', transport: '₹0.5L', insurance: 'Social Security (Free)' },
            visa: '₹5,000 + Campus France Fee',
            insurance: 'Free (Social Security Registration)'
        },
        scholarships: [
            { name: 'Charpak', Type: 'Government', amount: 'Monthly allowance + Tuition' },
            { name: 'Eiffel Excellence', Type: 'Government', amount: '1,181 Euro/month' }
        ],
        visaProcess: ['Campus France Interview', 'Study Visa Application', 'OFII Validation on Arrival', 'Residence Permit Renewals'],
        documents: ['Passport', 'Admission Letter', 'Campus France ID', 'Financial Proof', 'Accommodation Proof'],
        jobOps: {
            duration: '2 years (APS/RECE)',
            prOptions: 'Talent Passport',
            topIndustries: ['Luxury Goods', 'Aerospace', 'Gastronomy', 'Fashion']
        },
        universities: [
            { name: 'Université PSL', city: 'Paris', ranking: 24, website: 'psl.eu' },
            { name: 'Polytechnique', city: 'Palaiseau', ranking: 38, website: 'polytechnique.edu' },
            { name: 'HEC Paris', city: 'Jouy-en-Josas', ranking: 1, website: 'hec.edu' }
        ]
    },
    {
        id: 'uae',
        name: 'UAE',
        fullName: 'United Arab Emirates',
        flag: '🇦🇪',
        capital: 'Abu Dhabi',
        avgTuition: '₹8L - ₹15L',
        livingCost: '₹6L - ₹10L',
        safetyRating: 9.7,
        stars: 4.8,
        climate: 'Desert (Hot and Sunny)',
        workRights: '20 hrs/week (Study)',
        prFriendly: false,
        trending: 'Proximity & Business',
        summary: 'A fast-growing educational hub with world-class satellite campuses and high safety.',
        whyStudy: [
            'Safe and tax-free environment',
            'Global exposure with satellite campuses',
            'Proximal to India (3-hour flight)',
            'Excellent infrastructure and lifestyle'
        ],
        educationSystem: {
            types: ['Federal Universities', 'Private Universities', 'International Branch Campuses'],
            structure: '3-4 years UG, 1-2 years PG',
            publicVsPrivate: 'Federal universities are for Emiratis; International campuses are popular for expats.'
        },
        exams: [
            { name: 'IELTS', score: '6.0+' },
            { name: 'TOEFL', score: '79+' }
        ],
        costBreakdown: {
            tuition: { ug: '₹8L - ₹14L', pg: '₹10L - ₹18L' },
            living: { accommodation: '₹4L - ₹6L', food: '₹1.5L - ₹2.5L', transport: '₹0.5L', insurance: '₹0.5L' },
            visa: '₹25,000',
            insurance: '₹20,000 - ₹40,000'
        },
        scholarships: [
            { name: 'Maktoum Foundation', Type: 'Government', amount: 'Full/Partial Tuition' },
            { name: 'University Merit', Type: 'University', amount: '20% - 50% Tuition' }
        ],
        visaProcess: ['Receive Offer Letter', 'Pay Tuition Deposit', 'University Sponsored Visa Application', 'Entry Permit', 'Medical Check & Emirates ID'],
        documents: ['Passport', 'Admission Letter', 'Attested Certificates', 'Photos', 'Financial Evidence'],
        jobOps: {
            duration: '1-5 years (Green Visa)',
            prOptions: 'Golden Visa for top talent',
            topIndustries: ['Tourism', 'Finance', 'Logistics', 'Real Estate']
        },
        universities: [
            { name: 'NYU Abu Dhabi', city: 'Abu Dhabi', ranking: 40, website: 'nyuad.nyu.edu' },
            { name: 'Khalifa University', city: 'Abu Dhabi', ranking: 181, website: 'ku.ac.ae' },
            { name: 'American University in Dubai', city: 'Dubai', ranking: 601, website: 'aud.edu' }
        ]
    },
    {
        id: 'new-zealand',
        name: 'New Zealand',
        fullName: 'New Zealand',
        flag: '🇳🇿',
        capital: 'Wellington',
        avgTuition: '₹12L - ₹25L',
        livingCost: '₹8L - ₹12L',
        safetyRating: 9.6,
        stars: 4.8,
        climate: 'Temperate (Mild)',
        workRights: '20 hrs/week (Study), up to 3 years Post-Study',
        prFriendly: true,
        trending: 'Safety & Quality',
        summary: 'Famous for its high education quality, stunning landscapes, and friendly people.',
        whyStudy: [
            'Globally recognized qualifications',
            'Safe and peaceful nation',
            'Excellent work-life balance',
            'Strong student support services'
        ],
        educationSystem: {
            types: ['Public Universities', 'ITPs (Polytechnics)', 'Private Training Establishments'],
            structure: '3 years UG, 1.5-2 years PG',
            publicVsPrivate: 'All 8 universities are public and ranked in the top 3% globally.'
        },
        exams: [
            { name: 'IELTS', score: '6.5 (No band < 6.0)' },
            { name: 'PTE', score: '58+' }
        ],
        costBreakdown: {
            tuition: { ug: '₹12L - ₹20L', pg: '₹15L - ₹28L' },
            living: { accommodation: '₹5L - ₹8L', food: '₹2L - ₹3L', transport: '₹0.5L', insurance: '₹0.5L' },
            visa: '₹20,000',
            insurance: '₹30,000 - ₹50,000'
        },
        scholarships: [
            { name: 'Manaaki NZ', Type: 'Government', amount: 'Full funding' },
            { name: 'University Merit', Type: 'University', amount: '5,000 - 10,000 NZD' }
        ],
        visaProcess: ['Offer from Education Provider', 'Pay Tuition Fees', 'Receive Receipt', 'Submit Student Visa Application', 'Approval in Principle'],
        documents: ['Passport', 'Offer Letter', 'Financial Undertaking', 'Health Clearance', 'Police Certificate'],
        jobOps: {
            duration: 'Up to 3 years',
            prOptions: 'Skilled Migrant Category',
            topIndustries: ['Agri-science', 'Construction', 'Healthcare', 'Creatives']
        },
        universities: [
            { name: 'University of Auckland', city: 'Auckland', ranking: 68, website: 'auckland.ac.nz' },
            { name: 'University of Otago', city: 'Dunedin', ranking: 206, website: 'otago.ac.nz' },
            { name: 'Victoria University of Wellington', city: 'Wellington', ranking: 241, website: 'wgtn.ac.nz' }
        ]
    }
];

export const globalStats = {
    totalStudents: '1.33 Million',
    topDestination: 'USA',
    growthRate: '15% YoY',
    avgTuitionRange: '₹12L - ₹45L',
    visaSuccessRate: '88%',
    totalExpenditure: '$70 Billion (2026 Proj.)'
};
