const courses = [
    { img: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/b326a2ef-1eae-4ff3-5268-3914568bcc00/public", text: "Algorithms & Data Structures for Beginners" },
    { img: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/ec8b8596-9d83-46e5-29b5-b7a16a3ff500/public", text: "Advanced Algorithms" },
    { img: "https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/9d918b33-fc1a-44e9-a215-c9cb93edca00/public", text: "System Design for Beginners" },
]

export default function Page() {
    return (
        <div>
            <section className="flex-col">
                <h3 className="font-semibold text-2xl">Courses</h3>
                <div className="flex gap-5">
                    {courses.map(course => (
                        <a key={course.text} className="course-link">
                            <img src={course.img} alt={course.text} width={105} className="rounded" />
                            <p className="py-2">{course.text}</p>
                        </a>
                    ))}
                </div>
            </section>
            <section className="flex">
                <a href="">📚 Core Skills</a>
                <a href="">🧠 Blind 75</a>
                <a href="">🚀 NeetCode 150</a>
                <a href="">🔮 NeetCode All</a>
            </section>
        </div>
    );
}
