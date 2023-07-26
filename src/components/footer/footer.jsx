import text from '@/config/text';

export default function Footer() {
    return (
        <footer className="py-3">
            <div className="container">
                <p className="m-0">&copy;{new Date().getFullYear()} {text.footer.copyright}</p>
            </div>
        </footer>
    )
}
