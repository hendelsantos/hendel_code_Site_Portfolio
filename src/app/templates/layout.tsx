export default function TemplatesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ position: "relative", zIndex: 1 }}>
            {/* Templates get their own context, or inherit root. 
            We add a 'Back to Reality' button here generally? 
            Or let each template handle it? 
            Let's add a fixed 'Exit' button for usability. */}
            <a href="/" style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                zIndex: 9999,
                color: "#fff",
                textDecoration: "none",
                background: "rgba(0,0,0,0.5)",
                padding: "10px 20px",
                borderRadius: "30px",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "1px"
            }}>
                Exit Simulation
            </a>
            {children}
        </div>
    );
}
