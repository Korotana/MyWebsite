// src/ExperienceCards.js
import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./experience.css";

const experienceData = [
  {
    title: "Full Stack Developer Associate – Saskatchewan Blue Cross",
    date: "Aug 2023 – Aug 2024 | Saskatoon, SK",
    points: [
      "Developed Web components for insurance workflows.",
      "Automated AS/400 processes(CSV, PDF generation) with scalable logic, saving over $30K annually.",
      "Worked cross-functionally with Manitoba Blue Cross & SGEU in Agile sprints.",
      "Wrote unit & integration tests and documented solutions using UML & Confluence.",
    ],
    skills: "Skills: HTML, Css, JavaScript, React, Php, SQL, IBMAS400, .net, Git, Outsystems",
  },
  {
    title: "Application Developer – Canadian Light Source",
    date: "May 2022 – Aug 2022 | Saskatoon, SK",
    points: [
      "Built Django dashboards with Jinja templates and real-time charts.",
      "Optimized REST API algorithm from O(n²) to O(n).",
      "Contributed to GitLab CI/CD and Agile workflows.",
      "Delivered full-stack secure CRUD features.",
    ],
        skills: "Skills: Python, Django, JavaScript, HTML/CSS, jQuery, jinja, Git, and a little of MERN Stack.\n",
  },
  {
    title: "Support Analyst – University of Saskatchewan",
    date: "May 2021 – Apr 2023 | Saskatoon, SK",
    points: [
      "Resolved 1500+ support tickets using ITSM (ServiceNow, JIRA).",
      "Provided Tier 1 & 2 support for Office 365, MFA, Printing, and Windows/macOS.",
    ],
        skills: "Skills: JIRA, Confluence, Jabber, Zoom, ServiceNow, Powershell, Terminal, Lansweeper, COTS, MsOffice, Troubleshooting, Linux, Windows, Android. ",
  },
  {
    title: "Teaching Assistant – University of Saskatchewan",
    date: "Jan 2021 – Dec 2022 | Saskatoon, SK",
    points: [
      "TA for Python, Git, and Calculus; led labs and graded 200+ assignments per week.",
      "Guided students on conceptual understanding and problem solving.",
    ],
    skills: "Skills: Python, Git, Calculus, Interpersonal Communication, Grading, Constructive feedback",
  },
];

export default function ExperienceCards() {
  return (
    <section className="content-section" id="experience">
      <h2>Experience</h2>
      <div className="experience-cards">
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            date={exp.date}
            points={exp.points}
            skills={exp.skills}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
}
