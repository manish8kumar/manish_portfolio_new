import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Contact = () => {
  // Hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_m8due5p', 'template_pkyepni', form.current, '7iequZm14qJgrTtAw')
      .then((result) => {
        setOpen(true);
        form.current.reset();
        console.log("hi");
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="flex flex-col justify-center items-center relative ">
      <div className="relative flex flex-col justify-between items-center w-full max-w-[1350px] px-0 pb-20 gap-3">
        <div className="text-4xl text-center font-semibold mt-5 text-theme-text_primary md:text-3xl md:mt-3">
          Contact
        </div>
        <div className="text-lg text-center max-w-[600px] text-theme-text_secondary md:text-base md:mt-3">
          Feel free to reach out to me for any questions or opportunities!
        </div>
        <form ref={form} onSubmit={handleSubmit} className="w-11/12 max-w-[600px] flex flex-col p-8 rounded-lg border-primary mt-7 gap-3 bg-card shadow-[rgba(23,92,230,0.15)_0px_4px_24px]">
          <div className="text-2xl mb-1 font-semibold text-theme-text_primary">
            Email Me 🚀
          </div>
          <input type="text" name="from_email" placeholder="Your Email" className="flex-1 bg-transparent border border-theme-text_secondary outline-none text-lg text-theme-text_primary rounded-lg p-3" />
          <input type="text" name="from_name" placeholder="Your Name" className="flex-1 bg-transparent border border-theme-text_secondary outline-none text-lg text-theme-text_primary rounded-lg p-3" />
          <input type="text" name="subject" placeholder="Subject" className="flex-1 bg-transparent border border-theme-text_secondary outline-none text-lg text-theme-text_primary rounded-lg p-3" />
          <textarea name="message" placeholder="Message" rows="4" className="flex-1 bg-transparent border border-theme-text_secondary outline-none text-lg text-theme-text_primary rounded-lg p-3"></textarea>
          <input type="submit" value="Send" className="cursor-pointer w-full bg-gradient-to-r from-purple-500 to-purple-700 text-theme-text_primary rounded-lg p-3 font-semibold text-lg" />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
}

export default Contact;
