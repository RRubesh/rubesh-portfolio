import sys

def create_resume_pdf():
    pdf_content = (
        "%PDF-1.4\n"
        "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"
        "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n"
        "3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>\nendobj\n"
        "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n"
        "5 0 obj\n<< /Length 1200 >>\nstream\n"
        "BT\n"
        "/F1 20 Tf\n50 750 Td (RUBESH R - Full-Stack Developer & Penetration Testing) Tj\n"
        "/F1 10 Tf\n0 -20 Td (Phone: +91 9042847832 | Email: rubeshr000@gmail.com) Tj\n"
        "0 -15 Td (GitHub: github.com/RRubesh | LinkedIn: linkedin.com/in/rubesh-r-) Tj\n"
        "0 -30 Td (--------------------------------------------------------------------------------------------------------) Tj\n"
        "/F1 12 Tf\n0 -25 Td (PROFESSIONAL SUMMARY) Tj\n"
        "/F1 9 Tf\n0 -15 Td (Motivated B.Tech Information Technology student with a strong foundation in Full Stack Development) Tj\n"
        "0 -12 Td (and Penetration Testing. Skilled in React.js, TypeScript, Tailwind CSS, FastAPI, Python, and Docker.) Tj\n"
        "0 -12 Td (Passionate about ethical hacking, secure coding practices, and AI automation.) Tj\n"
        "/F1 12 Tf\n0 -25 Td (TECHNICAL SKILLS) Tj\n"
        "/F1 9 Tf\n0 -15 Td (- Frontend: React.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS) Tj\n"
        "0 -12 Td (- Backend & Tools: FastAPI, Python, SQL, Docker, REST APIs, Git & GitHub) Tj\n"
        "0 -12 Td (- Penetration Testing: Vulnerability Assessment, Ethical Hacking, SAST Tools) Tj\n"
        "0 -12 Td (- Languages: English, Tamil, Telugu) Tj\n"
        "/F1 12 Tf\n0 -25 Td (PROJECTS) Tj\n"
        "/F1 10 Tf\n0 -15 Td (1. AI Bug Hunter - Full Stack Developer) Tj\n"
        "/F1 9 Tf\n0 -12 Td (   AI-powered SAST vulnerability scanner built with FastAPI, React, Ollama LLM, Docker, and SQLAlchemy.) Tj\n"
        "/F1 10 Tf\n0 -18 Td (2. QR-Based Smart Laboratory Asset Management System - Frontend Developer) Tj\n"
        "/F1 9 Tf\n0 -12 Td (   React + TypeScript asset tracking dashboard with QR scanning, maintenance logs, and responsive UI.) Tj\n"
        "/F1 12 Tf\n0 -25 Td (EDUCATION) Tj\n"
        "/F1 9 Tf\n0 -15 Td (- B.Tech Information Technology (3rd Year | 2024 - 2028) - Jeppiaar Institute of Technology) Tj\n"
        "0 -12 Td (- Higher Secondary Certificate (HSC) - Government High School) Tj\n"
        "0 -12 Td (- Secondary School Leaving Certificate (SSLC) - Government High School) Tj\n"
        "ET\n"
        "endstream\nendobj\n"
        "xref\n0 6\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000244 00000 n \n0000000315 00000 n \n"
        "trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n1570\n%%EOF\n"
    )

    with open("Rubesh_R_Resume.pdf", "wb") as f:
        f.write(pdf_content.encode('latin1'))

    print("Created Rubesh_R_Resume.pdf successfully!")

if __name__ == "__main__":
    create_resume_pdf()
