# CodeVolley

# 🎓 Design Patterns for Building the Educational App

This document outlines the **design patterns you should implement** to build a clean, scalable, and maintainable educational app for teaching undergraduate students about **refactoring**, **code smells**, and **software design patterns**.

---

## 🧱 Project Architecture Overview

- **Frontend**: Angular (MVC / MVVM structure with services and components)
- **Backend**: Spring Boot (Java-based MVC + layered architecture)
- **Goal**: Modular, pattern-rich architecture that mirrors the lessons taught inside the app

---

## ✅ Essential Design Patterns to Implement

| Pattern              | Purpose                                                                  | Where to Use                          |
|----------------------|--------------------------------------------------------------------------|----------------------------------------|
| **Factory Method**    | Dynamically generate `Lesson`, `Quiz`, or `CodeExample` objects         | Spring Boot – Service Layer            |
| **Abstract Factory**  | Support multiple languages (e.g., Java, Python, JavaScript)             | Spring Boot – LessonFactory Service    |
| **Strategy**          | Plug-and-play logic for grading, refactoring techniques                 | Spring Boot – Service Layer; Angular – services |
| **Builder**           | Assemble complex `Lesson` or `Quiz` step-by-step                        | Spring Boot – Model / Service Layer    |
| **Observer**          | Track lesson progress and reactively update UI                         | Angular – RxJS Observables / BehaviorSubjects |
| **Command**           | Implement undo/redo for refactoring actions or quiz answers             | Angular – UI Command Pattern           |
| **Template Method**   | Define standard lesson flow (load → present → test → review)            | Spring Boot – Abstract lesson service  |
| **Decorator**         | Add hints, difficulty metadata, or analytics tracking                   | Angular – Wrapping lesson display components |
| **Composite**         | Group lessons into modules, quizzes into sections                      | Spring Boot – Model Layer              |
| **Singleton**         | Manage global services like config, auth, user state                    | Angular – Singleton Services; Spring Boot – Beans |

---

## 🧰 Bonus/Advanced Patterns

| Pattern              | Purpose                                                                  | Where to Use                        |
|----------------------|--------------------------------------------------------------------------|--------------------------------------|
| **Adapter**           | Integrate 3rd-party code editors or grading APIs                        | Angular or Spring Boot integration layer |
| **Proxy**             | Lazy-load heavy resources like code walkthroughs                        | Spring Boot – Content/Video Proxy Controllers |
| **Chain of Responsibility** | Handle sequences of logic in refactoring pipelines                | Spring Boot – Service chaining logic |
| **Service Locator**   | Centralized access to services if needed (less relevant in Spring w/ DI) | Spring Boot Core Layer               |

---

## 🗂 MVC Layer Usage

### Spring Boot (Backend – MVC + Layered)

| Layer       | Design Patterns                                   |
|-------------|---------------------------------------------------|
| Model       | Builder, Composite, Singleton                     |
| Controller  | Factory, Strategy, Template Method                |
| Service     | Factory, Abstract Factory, Strategy, Template     |
| Repository  | (Typically uses Spring Data JPA)                  |

---

### Angular (Frontend – MVC/MVVM)

| Layer       | Design Patterns                                   |
|-------------|---------------------------------------------------|
| Component (View + Controller) | Command, Observer, Strategy             |
| Service     | Singleton, Strategy, Observer (RxJS), Adapter     |
| Model       | Decorator, Composite                              |

---

## 🧭 Example App Flow

1. **User selects a lesson** (e.g., Long Method in Python)
2. **Angular component** sends request: `GET /api/lessons?type=LongMethod&lang=Python`
3. **Spring Boot Controller** receives request:
    - Calls `LessonFactoryProvider`
    - Factory uses `Builder` to construct full lesson
    - Strategy determines applicable refactoring logic
4. **Spring Boot** returns structured lesson JSON:
    ```json
    {
      "codeExample": "...",
      "explanation": "...",
      "quiz": {...}
    }
    ```
5. **Angular service** stores lesson (e.g., via `BehaviorSubject`)
6. **Angular component** renders lesson view
7. **User interacts with quiz**, refactors code, or uses hints
    - Command pattern tracks actions (for undo)
    - Decorator dynamically adds hint overlays
    - Observer pattern updates progress in real-time

---

## 🔄 Recap: Must-Implement Patterns

✅ Factory Method  
✅ Abstract Factory  
✅ Strategy  
✅ Builder  
✅ Observer  
✅ Command  
✅ Template Method  
✅ Decorator  
✅ Composite  
✅ Singleton  

---

## 📌 Notes

- These patterns **complement** your Angular + Spring Boot MVC structure.
- Apply them **within the layers**, not in place of MVC.
- Use them to demonstrate best practices while building real-world architecture.
- Your app’s structure should reflect the patterns and principles you teach.

---

