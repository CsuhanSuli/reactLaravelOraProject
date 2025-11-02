const Layout = ({children}) =>
    {
        return(
            <>
            <header>
                <h1>könyvesbolt</h1>
            </header>
            <main>
                <section>
                    {children}
                </section>
            </main>
            <footer>készitette: Csuhán Péter</footer>
            </>
        );
    }
export default Layout;