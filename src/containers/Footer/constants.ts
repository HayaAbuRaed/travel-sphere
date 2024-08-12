import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneNumberIcon from "@mui/icons-material/Phone";
import { Contact } from "./types";

export const contactList: Contact[] = [
  {
    name: "github",
    Icon: GitHubIcon,
    link: "https://github.com/HayaAbuRaed",
    label: "HayaAbuRaed",
  },
  {
    name: "email",
    Icon: EmailIcon,
    link: "mailto:hayaa.aburaed@gmail.com",
    label: "hayaa.aburaed@gmail.com",
  },
  {
    name: "phoneNumber",
    Icon: PhoneNumberIcon,
    link: "tel:+970599435933",
    label: "+970599435933",
  },
];
