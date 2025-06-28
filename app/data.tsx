import { Calendar, Camera, Code, DollarSign, Users, Wrench } from "lucide-react";
import type React from "react";

export interface Event {
    id: number
    title: string
    image: string
    slug: string
    date: string
    time: string
    location: string
    attendees: number
    description: string
    isUpcoming?: boolean
    category: string
}

export interface Member {
    id: number
    name: string
    position: string
    image: string
}

export interface Department {
    id: number
    name: string
    icon: React.ReactNode
    description: string
    hod: Member
    members: Member[]
}

export const events: Event[] = [
    // {
    //     id: 1,
    //     title: "Data Structure Workshop",
    //     image: "/images/event-placeholder.jpg",
    //     slug: "ds-workshop-2025",
    //     date: "2025-06-14",
    //     time: "2:00 PM - 5:00 PM",
    //     location: "Faculty of Computer Science, UM",
    //     attendees: 0,
    //     category: "Workshop",
    //     description:
    //         "",
    //     isUpcoming: true,
    // },
    // {
    //     id: 2,
    //     title: "AMD Site Visit",
    //     image: "/images/event-placeholder.jpg",
    //     slug: "amd-site-visit-2025",
    //     date: "2025-06-14",
    //     time: "",
    //     location: "",
    //     attendees: 0,
    //     category: "Industrial Visit",
    //     description:
    //         "",
    //     isUpcoming: true,
    // },
    // {
    //     id: 3,
    //     title: "Blackberry Site Visit",
    //     image: "/images/event-placeholder.jpg",
    //     slug: "blackberry-site-visit-2025",
    //     date: "2025-06-14",
    //     time: "",
    //     location: "",
    //     attendees: 0,
    //     category: "Industrial Visit",
    //     description:
    //         "",
    //     isUpcoming: true,
    // },
    // {
    //     id: 4,
    //     title: "IEEE Extreme Programming Challenge",
    //     image: "/images/event-placeholder.jpg",
    //     slug: "programming-competition-2024",
    //     date: "2025-06-14",
    //     time: "",
    //     location: "",
    //     attendees: 0,
    //     category: "Competition",
    //     description:
    //         "Annual programming competition featuring algorithmic challenges and problem-solving tasks. Participants competed in teams to solve complex programming problems within time constraints.",
    //     isUpcoming: true,
    // },
    // {
    //     id: 5,
    //     title: "IEEE Hack Track",
    //     image: "/images/event-placeholder.jpg",
    //     slug: "hack-track-2025",
    //     date: "2025-08-09",
    //     time: "9:00 AM - 5:00 PM",
    //     location: "Online Platform (CTFd.io)",
    //     attendees: 80,
    //     category: "Competition",
    //     description:
    //         "",
    //     isUpcoming: true,
    // },
    // {
    //     id: 6,
    //     title: "IEEEncode++",
    //     image: "/images/event-placeholder.jpg",
    //     slug: "encode++-2025",
    //     date: "2025-06-14",
    //     time: "",
    //     location: "",
    //     attendees: 0,
    //     category: "Competition",
    //     description:
    //         "",
    //     isUpcoming: true,
    // },
]

// HICOM Members
export const hicomMembers: Member[] = [
    { id: 1, name: "Faris Ikhwan", position: "President", image: "/images/member-placeholder.jpg" },
    { id: 2, name: "Ade Aiman Arief", position: "Vice President", image: "/images/member-placeholder.jpg" },
    { id: 3, name: "Haiqal", position: "Secretary", image: "/images/Committee Profile Photos/High Com/IMG_6322.PNG" },
    { id: 4, name: "Alia Amirah", position: "Vice Secretary", image: "/images/member-placeholder.jpg" },
    { id: 5, name: "Andrian Nazriel", position: "Treasurer", image: "/images/Committee Profile Photos/High Com/andrian.jpg" },
    { id: 6, name: "Laila Nahwah", position: "Vice Treasurer", image: "/images/Committee Profile Photos/High Com/Laila.jpg" },
]

// Departments
export const departments: Department[] = [
    {
        id: 1,
        name: "Event Management",
        icon: <Calendar className="w-12 h-12" />,
        description: "Organizes and coordinates all IEEE events, workshops, and activities throughout the year.",
        hod: { id: 1, name: "Irfan Adlan", position: "HOD", image: "/images/Committee Profile Photos/Event Management/Committee_s Pictures/Muhammad Irfan Adlan.jpg" },
        members: [
            { id: 2, name: "Batrisyia Adreena", position: "", image: "/images/Committee Profile Photos/Event Management/Committee_s Pictures/Batrisyia Adreena binti Norshahzan.jpg" },
            { id: 3, name: "Puteri Qistina", position: "", image: "/images/Committee Profile Photos/Event Management/Committee_s Pictures/Puteri Qistina Binti Adnan.png" },
            { id: 4, name: "Hana", position: "", image: "/images/Committee Profile Photos/Event Management/Committee_s Pictures/Hana binti Badrul Hisham.png" },
            { id: 5, name: "Shameer", position: "", image: "/images/Committee Profile Photos/Event Management/Committee_s Pictures/Muhammad Shameer bin Mohamad.png" },
            { id: 6, name: "Gaayathry", position: "", image: "/images/Committee Profile Photos/Event Management/Committee_s Pictures/Gaayathry a_p Saravanan_.jpg" },
        ],
    },
    {
        id: 2,
        name: "Sponsorship and Partnerships",
        icon: <DollarSign className="w-12 h-12" />,
        description:
            "Manages corporate relationships, sponsorship deals, and strategic partnerships for the organization.",
        hod: { id: 1, name: "Zharif Anas", position: "HOD", image: "/images/Committee Profile Photos/Sponsorship/Profile Photo/ZHARIF ANAS.jpg" },
        members: [
            { id: 2, name: "Aliff Huzaiman", position: "", image: "/images/member-placeholder.jpg" },
            { id: 3, name: "Fasihah", position: "", image: "/images/Committee Profile Photos/Sponsorship/Profile Photo/NUR FASIHAH.png" },
            { id: 4, name: "Maryam", position: "", image: "/images/Committee Profile Photos/Sponsorship/Profile Photo/MARYAM BINTI AHMAD IKRAM.jpg" },
            { id: 5, name: "Syamil Hafizuddin", position: "", image: "/images/member-placeholder.jpg" },
            { id: 6, name: "Aryssa Natasya", position: "", image: "/images/Committee Profile Photos/Sponsorship/Profile Photo/NUR ARYSSA NATASYA.jpeg" },
        ],
    },
    {
        id: 3,
        name: "Content Creation and Social Media",
        icon: <Camera className="w-12 h-12" />,
        description: "Creates engaging content, manages social media presence, and handles all multimedia requirements.",
        hod: { id: 1, name: "Aniq Aizuddin Tai", position: "HOD", image: "/images/Committee Profile Photos/Content Creation/Aniq_Aizuddin.jpg" },
        members: [
            { id: 2, name: "Danish Iman", position: "", image: "/images/Committee Profile Photos/Content Creation/Danish_iman.jpeg" },
            { id: 3, name: "Ikhmal Fakhri", position: "", image: "/images/Committee Profile Photos/Content Creation/Ikhmal.jpg" },
            { id: 4, name: "Adam", position: "", image: "/images/Committee Profile Photos/Content Creation/AdamRazali.jpg" },
            { id: 5, name: "Haziq Amsyar", position: "", image: "/images/Committee Profile Photos/Content Creation/Haziq.png" },
            { id: 6, name: "Madeline Puah Yee Mun", position: "", image: "/images/member-placeholder.jpg" },
            { id: 7, name: "Guo Bohan", position: "", image: "/images/Committee Profile Photos/Content Creation/Guo Bohan.jpg" },
        ],
    },
    {
        id: 4,
        name: "Logistics",
        icon: <Wrench className="w-12 h-12" />,
        description:
            "Handles venue management, equipment setup, and ensures smooth execution of all physical arrangements.",
        hod: { id: 1, name: "Abdul Rahman", position: "HOD", image: "/images/Committee Profile Photos/Logistics/ABDUL RAHMAN BIN SHAMSUDIN.png" },
        members: [
            { id: 2, name: "Habib", position: "", image: "/images/Committee Profile Photos/Logistics/HABIB BIN KHADZROMI.jpeg" },
            { id: 3, name: "Syahir", position: "", image: "/images/Committee Profile Photos/Logistics/MUHAMMAD SYAHIR BIN SAHARIL.png" },
            { id: 4, name: "Haziq", position: "", image: "/images/Committee Profile Photos/Logistics/MUHAMMAD HAZIQ BIN MOHD LATIB.png" },
            { id: 5, name: "Amirul Hisyam", position: "", image: "/images/Committee Profile Photos/Logistics/AMIRUL HISYAM BIN AMIR RUDDIN.png" },
            { id: 6, name: "Nafis Syahmi", position: "", image: "/images/Committee Profile Photos/Logistics/MUHAMMAD_NAFIS SYAHMI_BIN MOHD_GHAZALI.jpg" },
            { id: 7, name: "Iqbal Danial", position: "", image: "/images/Committee Profile Photos/Logistics/MUHAMMAD IQBAL DANIAL BIN FIRDAUS.png" },
            { id: 8, name: "Airisa Hani", position: "", image: "/images/Committee Profile Photos/Logistics/AIRISA HANI BINTI MOHD ENDAN.jpg" },
        ],
    },
    {
        id: 5,
        name: "Education and Technical Workshops",
        icon: <Users className="w-12 h-12" />,
        description: "Develops educational programs, technical workshops, and skill development initiatives for members.",
        hod: { id: 1, name: "Afiq", position: "HOD", image: "/images/Committee Profile Photos/Education & Workshops/MuhammadAfiq.jpg" },
        members: [
            { id: 2, name: "Azfarul Iman", position: "", image: "/images/Committee Profile Photos/Education & Workshops/MuhammadAzfarulImanYusri.png" },
            { id: 3, name: "Zahirudin", position: "", image: "/images/Committee Profile Photos/Education & Workshops/MuhammadZahirudinShahrudin.png" },
            { id: 4, name: "Hazim", position: "", image: "/images/Committee Profile Photos/Education & Workshops/MuhammadHazimNidzam.png" },
            { id: 5, name: "Ivan Khirusman", position: "", image: "/images/Committee Profile Photos/Education & Workshops/IvanKhirusman.png" },
            { id: 6, name: "Airina Hani", position: "", image: "/images/Committee Profile Photos/Education & Workshops/AirinaHaniMohdEndan.PNG" },
        ],
    },
    {
        id: 6,
        name: "IT and Digital Infrastructure",
        icon: <Code className="w-12 h-12" />,
        description:
            "Maintains digital systems, website development, and provides technical support for all digital initiatives.",
        hod: { id: 1, name: "Nabeel Aqeel", position: "HOD", image: "/images/Committee Profile Photos/IT & Digital Infrastructure/aqeel.jpg" },
        members: [
            { id: 2, name: "Ahmad Taufiq", position: "", image: "/images/Committee Profile Photos/IT & Digital Infrastructure/taufiq.jpeg" },
            { id: 3, name: "Sharvasini", position: "", image: "/images/Committee Profile Photos/IT & Digital Infrastructure/sha.jpg" },
            { id: 4, name: "Lo Jia Keng", position: "", image: "/images/Committee Profile Photos/IT & Digital Infrastructure/Lo.jpg" },
            { id: 5, name: "Akram Hilmi", position: "", image: "/images/Committee Profile Photos/IT & Digital Infrastructure/Akram.png" },
            { id: 6, name: "Ubayd", position: "", image: "/images/Committee Profile Photos/IT & Digital Infrastructure/Ubayd.jpg" },
        ],
    },
]