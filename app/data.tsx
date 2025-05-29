import {Calendar, Camera, Code, DollarSign, Users, Wrench} from "lucide-react";
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
    {
        id: 1,
        title: "Data Structure Workshop",
        image: "/images/event-placeholder.jpg",
        slug: "ds-workshop-2025",
        date: "2025-06-14",
        time: "2:00 PM - 5:00 PM",
        location: "Faculty of Computer Science, UM",
        attendees: 120,
        category: "Workshop",
        description:
            "Join us for an intensive workshop on AI and Machine Learning fundamentals. Learn about neural networks, deep learning, and practical applications in modern technology. This hands-on session will cover Python programming for AI, TensorFlow basics, and real-world case studies.",
        isUpcoming: true,
    },
    {
        id: 2,
        title: "AMD Site Visit",
        image: "/images/event-placeholder.jpg",
        slug: "amd-site-visit-2025",
        date: "2024-05-20",
        time: "7:00 PM - 11:00 PM",
        location: "Grand Ballroom, Kuala Lumpur",
        attendees: 200,
        category: "Social",
        description:
            "Celebrate another successful year with the IEEE Computer Society UM Student Branch. Join fellow members, faculty, and industry professionals for an evening of networking, awards ceremony, and entertainment.",
        isUpcoming: true,
    },
    {
        id: 3,
        title: "Blackberry Site Visit",
        image: "/images/event-placeholder.jpg",
        slug: "cybersecurity-seminar-2024",
        date: "2024-02-10",
        time: "10:00 AM - 12:00 PM",
        location: "Lecture Hall 1, UM",
        attendees: 85,
        category: "Seminar",
        description:
            "Learn about the latest cybersecurity threats and protection strategies. Industry experts shared insights on data protection, network security, and best practices for personal and organizational cybersecurity.",
    },
    {
        id: 4,
        title: "IEEE Extreme Programming Challenge",
        image: "/images/event-placeholder.jpg",
        slug: "programming-competition-2024",
        date: "2024-01-25",
        time: "9:00 AM - 6:00 PM",
        location: "Computer Lab, UM",
        attendees: 60,
        category: "Competition",
        description:
            "Annual programming competition featuring algorithmic challenges and problem-solving tasks. Participants competed in teams to solve complex programming problems within time constraints.",
    },
    {
        id: 5,
        title: "IEEE Hack Track",
        image: "/images/event-placeholder.jpg",
        slug: "industry-talk-2024",
        date: "2024-03-08",
        time: "3:00 PM - 5:00 PM",
        location: "Auditorium, UM",
        attendees: 150,
        category: "Talk",
        description:
            "Leading industry professionals discussed emerging technologies, career opportunities, and the future landscape of the tech industry. Q&A session included insights on job market trends and skill development.",
    },
    {
        id: 6,
        title: "IEEEncode++",
        image: "/images/event-placeholder.jpg",
        slug: "ieeencode-2025",
        date: "2024-03-08",
        time: "3:00 PM - 5:00 PM",
        location: "Auditorium, UM",
        attendees: 150,
        category: "Talk",
        description:
            "Leading industry professionals discussed emerging technologies, career opportunities, and the future landscape of the tech industry. Q&A session included insights on job market trends and skill development.",
    },
]

// HICOM Members
export const hicomMembers: Member[] = [
    { id: 1, name: "Faris Ikhwan", position: "President", image: "/images/member-placeholder.jpg" },
    { id: 2, name: "Ade Aiman", position: "Vice President", image: "/images/member-placeholder.jpg" },
    { id: 3, name: "Haiqal", position: "Secretary", image: "/images/member-placeholder.jpg" },
    { id: 4, name: "Alia Amirah", position: "Vice Secretary", image: "/images/member-placeholder.jpg" },
    { id: 5, name: "Andrian Nazriel", position: "Treasurer", image: "/images/member-placeholder.jpg" },
    { id: 6, name: "Laila Nahwah", position: "Vice Treasurer", image: "/images/member-placeholder.jpg" },
]

// Departments
export const departments: Department[] = [
    {
        id: 1,
        name: "Event Management",
        icon: <Calendar className="w-12 h-12" />,
        description: "Organizes and coordinates all IEEE events, workshops, and activities throughout the year.",
        hod: { id: 1, name: "Muhammad Irfan Adlan", position: "HOD", image: "/images/member-placeholder.jpg" },
        members: [
            { id: 2, name: "Batrisyia Adreena", position: "Assistant Manager", image: "/images/member-placeholder.jpg" },
            { id: 3, name: "Puteri Qistina", position: "Event Coordinator", image: "/images/member-placeholder.jpg" },
            { id: 4, name: "Hana", position: "Logistics Lead", image: "/images/member-placeholder.jpg" },
            { id: 5, name: "Muhammad Shameer", position: "Volunteer Manager", image: "/images/member-placeholder.jpg" },
            { id: 6, name: "Gaayathry", position: "Event Assistant", image: "/images/member-placeholder.jpg" },
        ],
    },
    {
        id: 2,
        name: "Sponsorship and Partnerships",
        icon: <DollarSign className="w-12 h-12" />,
        description:
            "Manages corporate relationships, sponsorship deals, and strategic partnerships for the organization.",
        hod: { id: 1, name: "Muhammad Zharif Anas", position: "HOD", image: "/images/member-placeholder.jpg" },
        members: [
            { id: 2, name: "Muhammad Aliff Huzaiman", position: "Partnership Manager", image: "/images/member-placeholder.jpg" },
            { id: 3, name: "Nur Fasihah", position: "Sponsor Relations", image: "/images/member-placeholder.jpg" },
            { id: 4, name: "Maryam", position: "Business Development", image: "/images/member-placeholder.jpg" },
            { id: 5, name: "Muhammad Syamil Hafizuddin", position: "Account Manager", image: "/images/member-placeholder.jpg" },
            { id: 6, name: "Nur Aryssa Natasya", position: "Partnership Assistant", image: "/images/member-placeholder.jpg" },
        ],
    },
    {
        id: 3,
        name: "Content Creation and Social Media",
        icon: <Camera className="w-12 h-12" />,
        description: "Creates engaging content, manages social media presence, and handles all multimedia requirements.",
        hod: { id: 1, name: "Muhammad Aniq Aizuddin Tai", position: "HOD", image: "/images/member-placeholder.jpg" },
        members: [
            { id: 2, name: "Muhammad Danish Iman", position: "Content Manager", image: "/images/member-placeholder.jpg" },
            { id: 3, name: "Muhammad Ikhmal Fakhri", position: "Social Media Lead", image: "/images/member-placeholder.jpg" },
            { id: 4, name: "Adam", position: "Graphic Designer", image: "/images/member-placeholder.jpg" },
            { id: 5, name: "Muhammad Haziq Amsyar", position: "Video Editor", image: "/images/member-placeholder.jpg" },
            { id: 6, name: "Madeline Puah Yee Mun", position: "Photographer", image: "/images/member-placeholder.jpg" },
            { id: 7, name: "Gue Bohan", position: "Content Writer", image: "/images/member-placeholder.jpg" },
        ],
    },
    {
        id: 4,
        name: "Logistics",
        icon: <Wrench className="w-12 h-12" />,
        description:
            "Handles venue management, equipment setup, and ensures smooth execution of all physical arrangements.",
        hod: { id: 1, name: "Abdul Rahman", position: "HOD", image: "/images/member-placeholder.jpg" },
        members: [
            { id: 2, name: "Habib", position: "Logistics Manager", image: "/images/member-placeholder.jpg" },
            { id: 3, name: "Muhammad Syahir", position: "Equipment Lead", image: "/images/member-placeholder.jpg" },
            { id: 4, name: "Muhammad Haziq", position: "Venue Coordinator", image: "/images/member-placeholder.jpg" },
            { id: 5, name: "Amirul Hisyam", position: "Setup Assistant", image: "/images/member-placeholder.jpg" },
            { id: 6, name: "Muhammad Nafis Syahmi", position: "Transport Manager", image: "/images/member-placeholder.jpg" },
            { id: 7, name: "Muhammad Iqbal Danial", position: "Transport Manager", image: "/images/member-placeholder.jpg" },
            { id: 8, name: "Airisa Hani", position: "Transport Manager", image: "/images/member-placeholder.jpg" },
        ],
    },
    {
        id: 5,
        name: "Education and Technical Workshops",
        icon: <Users className="w-12 h-12" />,
        description: "Develops educational programs, technical workshops, and skill development initiatives for members.",
        hod: { id: 1, name: "Muhammad Afiq", position: "HOD", image: "/images/member-placeholder.jpg" },
        members: [
            { id: 2, name: "Muhammad Azfarul Iman", position: "Workshop Manager", image: "/images/member-placeholder.jpg" },
            { id: 3, name: "Muhammad Zahirudin", position: "Curriculum Lead", image: "/images/member-placeholder.jpg" },
            { id: 4, name: "Muhammad Hazim", position: "Technical Trainer", image: "/images/member-placeholder.jpg" },
            { id: 5, name: "Ivan Khirusman", position: "Education Assistant", image: "/images/member-placeholder.jpg" },
            { id: 6, name: "Airina Hani", position: "Workshop Assistant", image: "/images/member-placeholder.jpg" },
        ],
    },
    {
        id: 6,
        name: "IT and Digital Infrastructure",
        icon: <Code className="w-12 h-12" />,
        description:
            "Maintains digital systems, website development, and provides technical support for all digital initiatives.",
        hod: { id: 1, name: "Muhammad Nabeel Aqeel", position: "HOD", image: "/images/member-placeholder.jpg" },
        members: [
            { id: 2, name: "Ahmad Taufiq", position: "Lead Developer", image: "/images/member-placeholder.jpg" },
            { id: 3, name: "Sharvasini", position: "System Admin", image: "/images/member-placeholder.jpg" },
            { id: 4, name: "Lo Jia Keng", position: "Web Developer", image: "/images/member-placeholder.jpg" },
            { id: 5, name: "Akram Hilmi", position: "Database Manager", image: "/images/member-placeholder.jpg" },
            { id: 6, name: "Ubayd", position: "IT Support", image: "/images/member-placeholder.jpg" },
        ],
    },
]