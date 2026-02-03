# Individual Project: Microservices System Design

### 1. Project Overview
The objective of this project is to apply the architectural principles discussed in class to a real-world scenario. You are tasked with designing a distributed system for a high-growth startup. You must move away from a monolithic mindset and design a scalable, resilient collection of microservices.

---

### 2. Choose Your Domain (Pick one):
Choose **one** of the following scenarios to design. Each has unique challenges regarding data consistency, latency, and scaling.

1.  **Food Delivery Platform(Antonina)** (e.g., UberEats) – *Challenge: Real-time coordination between restaurants, couriers, and customers.*
2.  **Ride-Sharing Service(Nichita)** (e.g., Uber/Bolt) – *Challenge: High-frequency GPS updates and dynamic surge pricing.*
3.  **E-Learning System(Andrei)** (e.g., Udemy/Coursera) – *Challenge: Video streaming delivery and student progress tracking.*
4.  **FinTech / Digital Wallet** (e.g., Revolut) – *Challenge: Security, transaction integrity (ACID), and audit logs.*
5.  **Streaming Service(Ghenadie)** (e.g., Netflix/Spotify) – *Challenge: Mass-scale content distribution and recommendation engines.*
6.  **E-Commerce Marketplace(Adrian)** (e.g., Amazon) – *Challenge: Complex inventory management and diverse checkout flows.*
7.  **Smart Home / IoT Dashboard(Radion)** (e.g., Google Home) – *Challenge: Handling thousands of concurrent device signals and events.*
8.  **Healthcare Patient Management(Maxim)** (e.g., Zocdoc) – *Challenge: Balancing strict data privacy (GDPR) with instant record access.*
9.  **Social Media Platform(Eduard)** (e.g., Instagram/X) – *Challenge: Feed generation (Fan-out) and instant social notifications.*
10. **Online Betting / Gaming Platform** – *Challenge: Extreme low-latency for live odds and high-speed transactions.*

---

### 3. Project Requirements:

#### A. Service Decomposition
* Identify at least **5 core microservices**.
* For each service, define its **single responsibility** and the specific data it "owns."

#### B. Communication Design
* Create a **system architecture diagram** (use tools like Draw.io, Lucidchart, or Mermaid).
* Specify the protocol for each interaction: **Synchronous (REST/gRPC)** or **Asynchronous (Message Broker/Events)**.
* **Justification:** Explain why you chose a specific protocol for your most critical data flows.

#### C. Data Management
* Apply the **Database-per-Service** pattern.
* Choose between **SQL** and **NoSQL** for at least two different services and justify the choice (e.g., "SQL for the Payment Service for consistency, NoSQL for the Catalog Service for flexible schema").

#### D. Resilience & Error Handling
* Explain how the system behaves if one non-critical service fails.
* Propose a solution for **Data Consistency**: If Service A needs data owned by Service B, how do you handle it without creating a tight coupling?

#### E. The "Startup" Reflection
* Provide a short argument: If you had only 3 developers and 2 months to launch an MVP, would you start with this microservices architecture or a **Modular Monolith**? Explain your reasoning.

---

### 4. Evaluation Criteria (Grading Rubric):

| Criteria | Excellent (100%) | Satisfactory (70%) | Needs Improvement (50%) |
| :--- | :--- | :--- | :--- |
| **Decomposition** | Logical boundaries; no "Distributed Monolith" issues. | Services are mostly independent. | Services are too tightly coupled. |
| **Communication** | Correct use of Async vs Sync protocols. | Protocols used correctly but lacks depth. | Only one protocol used for everything. |
| **Data Strategy** | Clear justification for SQL/NoSQL choices. | Uses DB-per-service but lacks reasoning. | Single shared database used. |
| **Visual Diagram** | Professional, clean, and easy to follow. | Readable but missing some flows. | Hard to understand or messy. |
| **Critical Thinking** | Deep understanding of trade-offs. | Basic understanding of trade-offs. | Weak or missing justification. |

---

### 5. Delivery Instructions:
* **Format:** One PDF file containing the Diagram and the Technical Report.
* **Deadline:** [Insert Date]
* **Defense:** 5-minute Q&A session to explain your architectural choices.