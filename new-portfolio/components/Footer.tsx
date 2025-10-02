import { SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="py-10 px-6 border-t" style={{ backgroundColor: 'hsl(0 0% 19%)', borderColor: 'hsl(0 0% 24%)' }}>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-muted-foreground">
                            © {new Date().getFullYear()} Muhammad Haseeb. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors capitalize"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
