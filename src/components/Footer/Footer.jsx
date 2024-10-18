import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

function Footer() {
  return (
    <div className="w-full py-8 flex justify-center bg-card">
      <footer className="w-full max-w-5xl flex flex-col gap-4 items-center p-4 text-text_primary">
        <h1 className="font-semibold text-2xl text-primary">Manish Kumar</h1>
        
        <nav className="w-full max-w-3xl mt-2 flex flex-wrap gap-8 justify-center text-center text-lg">
          <a href="#about" className="text-text_primary hover:text-primary transition-colors duration-200">About</a>
          <a href="#skills" className="text-text_primary hover:text-primary transition-colors duration-200">Skills</a>
          <a href="#experience" className="text-text_primary hover:text-primary transition-colors duration-200">Experience</a>
          <a href="#projects" className="text-text_primary hover:text-primary transition-colors duration-200">Projects</a>
          <a href="#education" className="text-text_primary hover:text-primary transition-colors duration-200">Education</a>
        </nav>

        <div className="flex mt-4">
          <a href={Bio.facebook} target="display" className="mx-4 text-2xl text-text_primary hover:text-primary transition-colors duration-200">
            <FacebookIcon />
          </a>
          <a href={Bio.twitter} target="display" className="mx-4 text-2xl text-text_primary hover:text-primary transition-colors duration-200">
            <TwitterIcon />
          </a>
          <a href={Bio.linkedin} target="display" className="mx-4 text-2xl text-text_primary hover:text-primary transition-colors duration-200">
            <LinkedInIcon />
          </a>
          <a href={Bio.insta} target="display" className="mx-4 text-2xl text-text_primary hover:text-primary transition-colors duration-200">
            <InstagramIcon />
          </a>
        </div>

        <p className="mt-6 text-sm text-soft2 text-center">
          &copy; 2023 Manish Kumar. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
