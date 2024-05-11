export const Main = ({ children }) => {
    return (
        <main>
            <section className="hero">
                <div className="container">
                    <div className="hero-inner">
                        {children}
                    </div>
                </div>
            </section>
        </main>
    )
}